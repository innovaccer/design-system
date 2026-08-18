/**
 * Builds css/dist/mds-scoped.css — the design-system stylesheet wrapped in
 * `@scope ([data-mds-root])`, so it only styles subtrees the consumer opts into
 * by adding `data-mds-root` to a container element.
 *
 * Composition (not a general selector rewriter):
 * 1. Concatenate the same sources, in the same order, as the default build
 * 2. Hoist globally-named constructs (@keyframes / @font-face / @property /
 *    @counter-style) above @scope — they are not scopable and would be dropped
 * 3. Remap :root / html / body / :host -> :scope so tokens and base styles
 *    attach to the scope root instead of the document
 * 4. Add a root-anchored variant of every selector, so a rule can also match the
 *    scope root itself and not just its descendants (see below)
 * 5. Wrap the remaining rules in @scope (<selector>)
 *
 * This is a CSS-only feature: it requires no changes in `core/`, so the stylesheet can
 * be updated independently of the library version and works with releases already in
 * the wild. Everything it needs to hook onto is markup the components already render
 * (see PORTAL_ROOT_SELECTORS).
 *
 * Nothing is added to the scope root itself. A `[data-mds-root]` element is consumer
 * markup, so anything declared on it would compete with the consumer's own layout —
 * notably, a custom-element scope root (`<ui-shell-app data-mds-root>`) needs its own
 * `display`, which is the consumer's call, not this build's.
 *
 * The scope selector is overridable, e.g. to also scope on web-component hosts:
 *   MDS_SCOPE_SELECTOR='[data-mds-root], ui-shell-app' npm run build-css-scoped
 * CSS has no tag-name wildcard, so patterned hosts must either be enumerated
 * here or carry the `data-mds-root` attribute.
 *
 * The default css/dist/index.css build is unchanged.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import postcss from 'postcss';

const require = createRequire(import.meta.url);
const postcssColorMod = require('postcss-color-mod-function');
const autoprefixer = require('autoprefixer');
const { sources } = require('./css-sources.cjs');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cssRoot = path.resolve(__dirname, '..');

const SCOPE_SELECTOR = process.env.MDS_SCOPE_SELECTOR || '[data-mds-root]';
const OUTPUT_FILE = process.env.MDS_SCOPE_OUTPUT || 'mds-scoped.css';

/** At-rules whose names live in a global namespace and therefore cannot be scoped. */
const GLOBAL_AT_RULES = ['keyframes', 'font-face', 'property', 'counter-style'];

/**
 * Scope roots for MDS's own portaled overlays — see `portal-roots.cjs` for why each
 * selector looks the way it does. Shared with the test that guards them.
 */
const { PORTAL_ROOT_SELECTORS } = require('./portal-roots.cjs');

function expandGlobs(patterns) {
  const results = [];
  for (const pattern of patterns) {
    if (pattern.includes('*')) {
      const dir = path.join(cssRoot, path.dirname(pattern));
      const fileGlob = path.basename(pattern);
      if (!fs.existsSync(dir)) continue;
      for (const name of fs.readdirSync(dir).sort()) {
        const full = path.join(dir, name);
        if (!fs.statSync(full).isFile()) continue;
        if (fileGlob === '*.css' && name.endsWith('.css')) results.push(full);
      }
    } else {
      results.push(path.join(cssRoot, pattern));
    }
  }
  return results;
}

/**
 * Splits a selector list on top-level commas.
 *
 * A naive `split(',')` corrupts escaped identifiers — MDS ships class names such as
 * `.MdsGrid-templateColumns--repeat\(1\,\ 1fr\)`, where the comma and space are part
 * of the class name. Backslash escapes, quoted strings, and `()` / `[]` nesting
 * (`:not(a, b)`, `[data-x="a,b"]`) all have to be honoured.
 */
function splitSelectorList(selector) {
  const parts = [];
  let current = '';
  let depth = 0;
  let quote = null;

  for (let i = 0; i < selector.length; i++) {
    const ch = selector[i];

    if (ch === '\\') {
      current += ch + (selector[i + 1] ?? '');
      i++;
      continue;
    }
    if (quote) {
      current += ch;
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      current += ch;
      continue;
    }
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    else if (ch === ',' && depth === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  parts.push(current.trim());

  return parts.filter((part) => part !== '');
}

/**
 * Index at which the first compound selector ends, i.e. the first top-level
 * combinator. Escape- and nesting-aware for the same reasons as
 * {@link splitSelectorList} — `~` in `[attr~=x]` and `+` in `:nth-child(2n+1)`
 * are not combinators, and `\ ` is an escaped space inside an identifier.
 */
function firstCompoundEnd(selector) {
  let depth = 0;
  let quote = null;

  for (let i = 0; i < selector.length; i++) {
    const ch = selector[i];

    if (ch === '\\') {
      i++;
      continue;
    }
    if (quote) {
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      continue;
    }
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    else if (depth === 0 && (ch === ' ' || ch === '\t' || ch === '\n' || ch === '>' || ch === '+' || ch === '~')) {
      return i;
    }
  }
  return selector.length;
}

/**
 * Returns a variant of `selector` anchored to the scope root, or `null` when the
 * selector is already root-anchored.
 *
 * Inside `@scope`, a rule is implicitly relative to the scope root — `.Backdrop`
 * behaves as `:scope .Backdrop` and so matches *descendants only*. Overlays that
 * portal to `document.body` carry `data-mds-root` on the portaled element itself,
 * making that element the scope root; without this variant its own rules would
 * never apply. Fusing `:scope` onto the first compound (`:scope.Backdrop`) covers
 * that case, while the original selector keeps covering descendants.
 *
 * Every rule gets a variant, so all rules matching a given scope root are bumped
 * by the same `:scope` (0,1,0) — relative specificity, and therefore the cascade
 * between MDS rules, is preserved.
 */
function rootAnchoredVariant(selector) {
  const end = firstCompoundEnd(selector);
  const head = selector.slice(0, end);
  const tail = selector.slice(end);

  if (!head) return null;
  // `:root` is already remapped to `:scope` by this point.
  if (head.includes(':scope')) return null;

  // A type selector must remain first in its compound: `div:scope`, not `:scope div`.
  const type = head.match(/^(\*|[a-zA-Z][\w-]*)/);
  if (type) return `${type[0]}:scope${head.slice(type[0].length)}${tail}`;

  return `:scope${head}${tail}`;
}

function isInsideKeyframes(node) {
  for (let parent = node.parent; parent; parent = parent.parent) {
    if (parent.type === 'atrule' && /keyframes$/.test(parent.name)) return true;
  }
  return false;
}

function addRootAnchoredVariants(root) {
  root.walkRules((rule) => {
    if (isInsideKeyframes(rule)) return;

    const parts = splitSelectorList(rule.selector);
    const variants = parts.map(rootAnchoredVariant).filter(Boolean);
    if (variants.length) rule.selector = [...parts, ...variants].join(', ');
  });
}

function hoistGlobalAtRules(cssText) {
  const root = postcss.parse(cssText);
  const hoisted = [];
  root.each((node) => {
    if (node.type === 'atrule' && GLOBAL_AT_RULES.includes(node.name)) {
      hoisted.push(node);
      node.remove();
    }
  });
  return { remaining: root, hoisted };
}

/**
 * Document-level selectors have no meaning inside `@scope`: the scope root is the
 * closest thing to a document root, so tokens declared on `:root` are remapped to
 * `:scope`. Without this, every custom-property reference in the bundle would
 * resolve to nothing.
 */
function remapRootSelectors(root) {
  root.walkRules((rule) => {
    const parts = splitSelectorList(rule.selector);
    let changed = false;

    const next = parts.map((sel) => {
      if (sel === ':root' || sel === 'html' || sel === 'body' || sel === ':host') {
        changed = true;
        return ':scope';
      }
      if (/^(body|html)([.#[:\s].*)?$/.test(sel)) {
        changed = true;
        return sel.replace(/^(body|html)/, ':scope');
      }
      return sel;
    });

    if (changed) rule.selector = next.join(', ');
  });
}

/**
 * A global-namespace at-rule nested inside e.g. `@media` is not reachable by the
 * top-level hoist and would be silently dropped by the browser once scoped.
 * Fail loudly instead of shipping a bundle with dead animations.
 */
function assertNoGlobalAtRulesRemain(root) {
  const stranded = [];
  root.walkAtRules((atRule) => {
    if (GLOBAL_AT_RULES.includes(atRule.name)) {
      stranded.push(`@${atRule.name} ${atRule.params}`.trim());
    }
  });
  if (stranded.length) {
    throw new Error(
      `Cannot scope ${stranded.length} global at-rule(s) nested inside another at-rule; ` +
        `move them to the top level of their source file:\n  ${stranded.join('\n  ')}`
    );
  }
}

/**
 * Returns the `@scope` prelude: the consumer's opt-in selector plus MDS's own portal
 * roots.
 *
 * The portal roots are unconditional. They target MDS-owned markup rather than anything
 * the consumer controls, so no consumer selector can subsume them — and omitting them
 * would leave every modal, popper and backdrop outside all scopes, rendering unstyled.
 */
function buildScopePrelude(consumerSelector) {
  return [...splitSelectorList(consumerSelector), ...PORTAL_ROOT_SELECTORS].join(', ');
}

async function build() {
  const files = expandGlobs(sources).filter((f) => fs.existsSync(f));
  const seen = new Set();
  const unique = files.filter((f) => (seen.has(f) ? false : (seen.add(f), true)));

  const concatenated = unique
    .map((f) => `/* Source: ${path.relative(cssRoot, f)} */\n${fs.readFileSync(f, 'utf8')}`)
    .join('\n\n');

  const processed = await postcss([postcssColorMod(), autoprefixer()]).process(concatenated, {
    from: undefined,
  });

  const { remaining, hoisted } = hoistGlobalAtRules(processed.css);
  assertNoGlobalAtRulesRemain(remaining);
  remapRootSelectors(remaining);
  addRootAnchoredVariants(remaining);

  const prelude = buildScopePrelude(SCOPE_SELECTOR);
  const outRoot = postcss.root();
  for (const node of hoisted) outRoot.append(node.clone());
  outRoot.append(postcss.parse(`@scope (${prelude}) {\n${remaining.toString()}\n}`));

  const outDir = path.join(cssRoot, 'dist');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, OUTPUT_FILE);
  fs.writeFileSync(outPath, outRoot.toString());
  console.log(
    `Wrote ${path.relative(cssRoot, outPath)} (${fs.statSync(outPath).size} bytes) ` +
      `from ${unique.length} sources, scoped to \`${prelude}\``
  );
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
