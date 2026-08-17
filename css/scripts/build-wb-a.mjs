/**
 * Builds css/dist/wb-a.css — a source-authored @scope (wb-a) stylesheet.
 *
 * Composition (not a general selector rewriter):
 * 1. Concatenate the same design-system CSS sources as the default build
 * 2. Hoist @keyframes / @font-face (globally named constructs) above @scope
 * 3. Remap :root and body → :scope so tokens/root styles attach to <wb-a>
 * 4. Wrap the remaining rules in @scope (wb-a) { ... }
 * 5. Append wb-a host defaults (display/token on :scope)
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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cssRoot = path.resolve(__dirname, '..');

const typographyCssPath = [
  'src/components/text.module.css',
  'src/components/heading.module.css',
  'src/components/label.module.css',
  'src/components/caption.module.css',
  'src/components/subheading.module.css',
];

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

const sourcePatterns = [
  'src/tokens/*.css',
  'src/variables/*.css',
  'material-design-icons/iconfont/material-icons.css',
  'src/core/*.css',
  ...typographyCssPath,
  'src/components/*.css',
  'src/ai-components/*.css',
  'src/utils/*.css',
  'src/wb-a/host.css',
];

function hoistGlobalAtRules(cssText) {
  const root = postcss.parse(cssText);
  const hoisted = [];
  root.each((node) => {
    if (
      node.type === 'atrule' &&
      (node.name === 'keyframes' ||
        node.name === 'font-face' ||
        node.name === 'property' ||
        node.name === 'counter-style')
    ) {
      hoisted.push(node);
      node.remove();
    }
  });
  return { remaining: root, hoisted };
}

function remapRootSelectors(root) {
  root.walkRules((rule) => {
    const parts = rule.selector.split(',').map((s) => s.trim());
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

async function build() {
  const files = expandGlobs(sourcePatterns).filter((f) => fs.existsSync(f));
  const seen = new Set();
  const unique = files.filter((f) => (seen.has(f) ? false : (seen.add(f), true)));

  const concatenated = unique
    .map((f) => `/* Source: ${path.relative(cssRoot, f)} */\n${fs.readFileSync(f, 'utf8')}`)
    .join('\n\n');

  const processed = await postcss([postcssColorMod(), autoprefixer()]).process(concatenated, {
    from: undefined,
  });

  const { remaining, hoisted } = hoistGlobalAtRules(processed.css);
  remapRootSelectors(remaining);

  const scoped = postcss.parse('@scope (wb-a) {\n' + remaining.toString() + '\n}');
  const outRoot = postcss.root();
  for (const node of hoisted) outRoot.append(node.clone());
  outRoot.append(scoped);

  const outDir = path.join(cssRoot, 'dist');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'wb-a.css');
  fs.writeFileSync(outPath, outRoot.toString());
  console.log(
    'Wrote ' + path.relative(cssRoot, outPath) + ' (' + fs.statSync(outPath).size + ' bytes) from ' + unique.length + ' sources'
  );
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
