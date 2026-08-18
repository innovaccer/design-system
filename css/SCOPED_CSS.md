# Scoped stylesheet

An additional consumer entry built alongside the default `dist/index.css`. Identical rules,
wrapped in `@scope ([data-mds-root])`, so MDS styles only apply inside containers the host
app opts in to — useful when MDS runs next to another stylesheet (Tailwind, a legacy global
sheet, another design system) in the same document.

- Output: `css/dist/mds-scoped.css`
- Import: `@innovaccer/design-system/css/scoped` or `…/css/dist/mds-scoped.css`
- Build: `npm run build-css` (gulp, builds both bundles) or `npm run build-css-scoped`

The default `dist/index.css` bundle is unchanged — this is purely additive.

## Usage

```html
<div data-mds-root>
  <!-- MDS components -->
</div>
```

Everything outside `[data-mds-root]` is untouched by MDS, and MDS components inside it are
unaffected by the host app's global styles that would otherwise reach them.

The scope root is yours to style — MDS declares nothing on it. If you put `data-mds-root` on a
custom element, remember that custom elements default to `display: inline`, so give it a
`display` of its own:

```css
ui-shell-app {
  display: block;
}
```

## How the build composes it

`scripts/build-scoped.mjs` reads the same sources, in the same order, as the default build
(both import the list from `scripts/css-sources.cjs`, so they cannot drift), then:

1. **Hoists global-namespace at-rules** — `@keyframes`, `@font-face`, `@property` and
   `@counter-style` above the `@scope` block. Their names are document-global and are not
   scopable; leaving them inside would silently drop them. The build throws if one is nested
   inside another at-rule, where the hoist cannot reach it.
2. **Remaps `:root` / `html` / `body` / `:host` to `:scope`** so design tokens attach to the
   scope root. Without this, every custom-property reference in the bundle resolves to nothing.
3. **Adds a root-anchored variant of every selector** — `.Backdrop` becomes
   `.Backdrop, :scope.Backdrop`. See *Overlays* below.
4. **Wraps the result** in `@scope ([data-mds-root]) { … }`.

Step 3 costs about +28% in raw bytes (~80 KB, considerably less gzipped).

Nothing is declared on the scope root itself. A `[data-mds-root]` element is consumer
markup, so any default MDS set there would compete with the consumer's own layout.

## Overlays

Modal, Sidesheet, FullscreenModal, Backdrop, Popover, Tooltip, Dropdown, Menu and the
Listbox drag ghost all render through `ReactDOM.createPortal` into `document.body` — outside
the consumer's `[data-mds-root]`. Without special handling they would receive neither
component rules nor tokens, and render completely unstyled.

Inside `@scope`, a rule like `.Backdrop` is implicitly `:scope .Backdrop`, so it matches
**descendants of a scope root only** — marking the portaled element itself is not enough on
its own. Two things make it work, with no extra wrapper elements and no DOM changes:

- **Modal / Sidesheet / FullscreenModal** already portal into the shared `.Overlay-wrapper`
  container. `getWrapperElement()` marks that existing element, and their roots are
  descendants of it.
- **Backdrop / poppers / drag ghost** portal straight to `document.body` with no MDS ancestor.
  They spread `MDS_PORTAL_ROOT_PROPS` (`data-mds-root="portal"`) onto their own root element,
  and the build's root-anchored selector variants (`:scope.Backdrop`) let those rules match
  the scope root itself.

Because *every* rule gets a variant, all rules matching a given scope root are bumped by the
same `:scope` (0,1,0). Relative specificity — and therefore the cascade between MDS rules —
is preserved.

The `"portal"` value is what lets the build guarantee overlays are always scoped: because
these roots are created by MDS rather than by you, `[data-mds-root='portal']` is appended to
the `@scope` prelude automatically whenever your own selector would not already match it. A
custom `MDS_SCOPE_SELECTOR` such as `ui-shell-app` would otherwise leave every modal, popper
and backdrop outside all scopes, and therefore unstyled. It also makes it obvious in DevTools
which scope roots MDS created and which you did.

All of this is inert in the default unscoped bundle: the attribute matches nothing.

## Custom scope selectors

`@scope`'s prelude is a forgiving selector list, so attribute and class patterns work:

```bash
MDS_SCOPE_SELECTOR='[data-mds-root], [class^="ui-"][class$="-app"]' npm run build-css-scoped
MDS_SCOPE_OUTPUT='ui-apps.css' MDS_SCOPE_SELECTOR='ui-shell-app, ui-admin-app' npm run build-css-scoped
```

One selector list in a single `@scope` block covers many hosts — you do not need a stylesheet
per app.

`[data-mds-root='portal']` is appended to the prelude automatically unless your selector list
already contains a bare `[data-mds-root]`, so MDS's portaled overlays stay scoped whatever you
scope on. The build logs the final prelude it used.

CSS has **no tag-name wildcard**, so a pattern like `ui-*-app` cannot be expressed as a
selector: `^=` / `$=` / `*=` match attribute *values*, and a tag name is not an attribute.
For custom elements following a naming convention, either enumerate the tags in
`MDS_SCOPE_SELECTOR`, or have the host stamp `data-mds-root` onto matching elements at
runtime (a `MutationObserver` plus `/^ui-.*-app$/.test(el.tagName.toLowerCase())`).

## Caveats

- **Browser support**: `@scope` requires Chrome/Edge 118+, Safari 17.4+, Firefox 128+. There
  is no fallback — an older browser drops the whole stylesheet as an unknown at-rule and
  renders MDS unstyled. Serve `dist/index.css` to browsers you still support.
- **`@keyframes` names stay global.** They are hoisted out of `@scope`, so animation names
  still collide with the host app's. `Spinner`'s were renamed to `mds-spin` / `mds-rotate`;
  generic ones such as `fadeIn`, `fadeOut` and `shimmer` remain exposed.
- **Portaled overlays get base tokens**, not per-root token overrides: a themed
  `[data-mds-root]` does not affect overlays, which are scope roots of their own under
  `<body>`. They are deliberately not re-parented into the app's scope root, because a
  `transform` / `filter` / `contain` on an ancestor there would become the containing block
  and break `position: fixed` overlays.
