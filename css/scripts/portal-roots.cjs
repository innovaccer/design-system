/**
 * Scope roots for MDS's own portaled overlays, always added to the scoped bundle's
 * `@scope` prelude by `build-scoped.mjs`.
 *
 * Every overlay listed here is portaled to `document.body` by `ReactDOM.createPortal`,
 * escaping the consumer's `[data-mds-root]` container. Inside `@scope`, a rule like
 * `.Backdrop` is implicitly `:scope .Backdrop` and so matches descendants only, so these
 * elements have to be scope roots in their own right — and there is no MDS-owned ancestor
 * to hang that on. Their own rules then match via the root-anchored selector variants the
 * build adds (`.Backdrop, :scope.Backdrop`).
 *
 * Each selector targets markup the components *already* render. That is what keeps the
 * scoped stylesheet a CSS-only feature: nothing in `core/` changes, so the CSS can be
 * updated independently of the library version and works with releases already shipped.
 *
 * Each is also qualified so it cannot collide with a host app's own class names:
 *
 * - `body >` — every one of these lands as a direct child of `<body>`, so a colliding
 *   host class would have to be at body level too.
 * - `:has([data-layer])` — `data-layer` is an MDS-only attribute, present on all five
 *   portal roots. `.Overlay-wrapper` is a generic enough name that a host app could
 *   plausibly reuse it, so the class alone is not sufficient. The `:has()` matches a
 *   descendant rather than a child because Modal wraps its container in `OutsideClick`
 *   when `backdropClose` is set.
 * - `data-test='DesignSystem-*'` — already namespaced, so `body >` is enough.
 *
 * This file is the single source of truth, shared with
 * `core/utils/__tests__/scopedPortalRoots.test.tsx`, which renders each overlay and
 * asserts these selectors still match — so the coupling to component markup cannot rot
 * silently.
 */
const PORTAL_ROOT_SELECTORS = [
  /** Modal, Sidesheet and FullscreenModal all portal into this shared container. */
  'body > .Overlay-wrapper:has([data-layer])',
  /** Popover and everything built on it: Tooltip, Dropdown, Menu, DateRangePicker, … */
  "body > [data-test='DesignSystem-Popover']",
  /** Backdrop, including the one Modal/Sidesheet render. */
  "body > [data-test='DesignSystem-Backdrop']",
  /**
   * Listbox drag ghost. No `data-test` exists on it, so `body >` is the only qualifier
   * available; the BEM class name is at least MDS-specific. Worth tightening with a
   * `data-test` the next time component changes ship.
   */
  'body > .Listbox-item--draggable',
];

module.exports = { PORTAL_ROOT_SELECTORS };
