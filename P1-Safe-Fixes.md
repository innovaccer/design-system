# P1 Issues — Safe Fixes (No Focus Order / Keyboard Impact)

These issues involve ARIA states, naming, labeling, semantic roles, and structural fixes that **will not break focus order or keyboard navigation**. They are safe to tackle independently of keyboard/focus refactors.

---

## Input

- [ ] **1.3** — `<Input error />` without `aria-invalid`: Set `aria-invalid={true}` when `error`; wire `aria-describedby` to error copy.
- [ ] **1.4** — `inlineLabel` only, no `id`/label association: Add `aria-labelledby` or `<label htmlFor>` / generated ids.

## Button

- [x] **2.1** — `selected={true}` without `aria-pressed`: Map `selected` to `aria-pressed` when semantically toggle.
- [x] **2.2** — `<Button loading>` hides visible text, spinner names control: Preserve label in accname (sr-only / `aria-label` / `aria-hidden` spinner).
- [x] **2.3** — Icon-only button without `tooltip` / `aria-label` / children: Dev warn or narrow types; document requirement.

## Icon + useAccessibilityProps

- [x] **3.2** — Icon-only `onClick` without `aria-label`: Require name or lint.

## Utils (Divider, Backdrop, OutsideClick, PopperWrapper)

- [x] **4.3** — Cannot pass `aria-hidden`/`role="none"` for decorative `<hr>`: Add `BaseHtmlProps` on `<hr>`.

## Popover

- [ ] **5.1** — Click trigger with no `aria-expanded` / `aria-controls`; no surface `id`: Add stable id on surface; merge `aria-expanded` / `aria-controls` onto trigger.

## Dropdown

- [ ] **6.1** — Default trigger has no `aria-expanded` / `aria-haspopup` / `aria-controls`: Wire to stable list/menu `id`.
- [ ] **6.5** — Checkbox ids from `Date.getTime()` on render: Use `useId` or stable per-instance ids.

## EditableDropdown

- [ ] **7.2** — Stock trigger has no `aria-expanded` (Dropdown): Fix Dropdown trigger wiring.
- [ ] **7.3** — Outer `<label htmlFor>` without id on focusable `role="option"` control: Remove misuse; use APG listbox naming.

## Listbox

- [ ] **8.1** — `type="option"` with `selected`/`disabled` missing `aria-selected` / `aria-disabled`: Map state on focused or `option` node per APG.
- [ ] **8.2** — `nestedBody` with `expanded` toggling but no `aria-expanded` / `aria-controls`: Add ARIA and region `id` linkage.

## Select

- [ ] **9.1** — `role="listbox"` wraps `ul` then `option` children (invalid nesting): Flatten container roles; direct option children.
- [ ] **9.2** — Outer Select `div` and trigger `button` both set `aria-haspopup` / `aria-expanded`: Keep popup state only on focused trigger.
- [ ] **9.3** — Custom `trigger` only gets `ref` merged, no ARIA wiring: Merge listbox wiring or document mandatory consumer props.
- [ ] **9.4** — `SelectEmptyTemplate` uses `id={title}`, `aria-labelledby={title}` (text, not id): Use stable generated ids; correct references.

## Combobox

- [ ] **10.1** — Focused list node is `tablist` inside `option` (wrong role): Align focus + role with APG listbox/combobox.
- [ ] **10.2** — No `aria-selected` on options; selection CSS-only: Set on accessible option node.
- [ ] **10.3** — Selection ignores `chipInputValue`: Derive from `chipInputValue` when multiselect.

## Menu

- [ ] **11.2** — `aria-controls` references `menuID` but Popover surface has no matching `id`: Set `id={menuID}` on visible menu panel.
- [ ] **11.3** — `aria-expanded` derived from ref presence, not open state: Bind to Popover `open`.
- [ ] **11.5** — No `aria-label` / `aria-labelledby` on `Menu`: Document requirement; optional dev warn or default from trigger.

## ChoiceList

- [ ] **12.1** — No `title`, `aria-label`, or `aria-labelledby`: Require group name in API or docs.
- [ ] **12.2** — Visible `title` via `Label` is orphan label, not `<legend>` / `aria-labelledby`: Use `<legend>` or title `id` + `fieldset aria-labelledby`.
- [ ] **12.4** — Choice without `label` / help / `aria-label`: Type or document requirement.

## Radio

- [ ] **13.1** — `helpText` not in `aria-describedby`: Mirror Checkbox pattern.
- [ ] **13.2** — `error` without `aria-invalid`: Set `aria-invalid` when `error`.
- [ ] **13.3** — `{...rest}` `id` overwrites input id vs `label htmlFor`: Destructure `id`; single source for input + label.

## Pagination

- [ ] **14.1** — Jump `MetricInput` unnamed; suffix text not associated: Add `aria-label` or `aria-labelledby`.
- [ ] **14.2** — `basic` type hides current page structurally: Add visible current page and/or `aria-current`.

## Breadcrumbs

- [ ] **15.1** — Root `<div>`, not `<nav>`: Use `<nav aria-label="Breadcrumb">`.
- [ ] **15.2** — `BaseProps` only; cannot set root `aria-*`/`id`: Extend root HTML props.

## VerticalNav

- [ ] **16.2** — Tooltip inserts wrapper between `tree` and `treeitem`: Tooltip without wrapper or drop `role="tree"`.
- [ ] **16.3** — Root `aria-label`/`aria-labelledby` not forwardable: Extend API.

## Navigation

- [ ] **17.1** — Vertical ignores `menu.link` / no `href`: Render `Link`/`<a>` when `link` set.
- [ ] **17.2** — Submenu parents lack `aria-expanded`/`aria-controls`: Disclosure wiring + submenu `id`.
- [ ] **17.3** — No `aria-current` on active vertical item: Add `aria-current`.

## Tabs

- [ ] **18.3** — `TabsWrapper` headers `role="button"` only, no tab semantics/selected state: Align with APG tabs or document as non-tab switcher.
- [ ] **18.4** — Non-string `label` results in missing `aria-label`: Forward ARIA or tighten types.

## Modal

- [ ] **19.1** — `headerOptions.backButton` without extra labelling: Fix in shared `OverlayHeader`.
- [ ] **19.2** — Custom header or empty heading without `aria-labelledby` / `headingId` wiring: Require name, dev validation, or auto-wire heading id.

## Dialog

- [ ] **20.1** — Custom Modal usage / falsy `heading` without `aria-labelledby`: Type/runtime guard or `aria-label` fallback.

## Sidesheet

- [ ] **21.1** — Close animation `onAnimationEnd={() => this.handleAnimationEnd}` does not invoke handler: Call `handleAnimationEnd` (bound or `()` wrapper).
- [ ] **21.2** — Custom header / no heading without `aria-labelledby`: Document; optional dev warn.
- [ ] **21.3** — `backButton` / `backIcon` unnamed `OverlayHeader` button: Shared `OverlayHeader` fix.

## FullscreenModal

- [ ] **22.4** — Custom `header` without `aria-labelledby` / `aria-label` / string heading: Document; dev warn when open without name sources.
- [ ] **22.5** — `headerOptions.backButton` same `OverlayHeader` pattern: Shared `OverlayHeader` fix.

## DatePicker

- [ ] **23.1** — Trigger vs popover: no `aria-expanded`/`aria-haspopup`/`aria-controls`; popover not `dialog`: APG datepicker / disclosure wiring.
- [ ] **23.2** — `id="parent-DatePicker"` stripped on inner input: Use real unique `id` + documented labeling.
- [ ] **23.3** — Calendar unnamed if props omitted: Default `aria-label`.

## DateRangePicker

- [ ] **24.1** — Popover/trigger relationship missing: Central popover ARIA.
- [ ] **24.2** — Dual input: root `aria-label` not merged into start/end `aria-label`: Merge or document.
- [ ] **24.3** — Visible `Label` without `htmlFor`/ids by default: Generated ids + `htmlFor`.

## Calendar

- [ ] **25.1** — No `aria-selected`/`aria-current`/`aria-disabled` on cells; disabled via CSS only: Map visual state to ARIA.

## Table

- [ ] **26.1** — Data surface is a div grid without `table`/`grid` roles or header-cell relationships: Use native `<table>` or full ARIA grid pattern.
- [ ] **26.2** — Sort controls do not expose `aria-sort`, pressed state, or direction: Expose sort state in name and/or `aria-sort`.
- [ ] **26.3** — Nested row expand Icon has no name and no `aria-expanded`: Provide name and bind `aria-expanded`.
- [ ] **26.4** — Outer `aria-label` on Table not forwarded to Grid root: Forward label to Grid or collapse to single named wrapper.
- [ ] **26.5** — Column resize grip labels use internal column key instead of `displayName`: Use readable names.

## List

- [ ] **27.1** — No header row; column relationships weaker than proper grid/table: Expose ARIA column headers.
- [ ] **27.2** — Uses same div-based grid as Table (inherited): Remediate with same track as Table/Grid.
- [ ] **27.3** — Table-to-Grid `aria-label` forwarding gap applies to List: Forward outer `aria-label` to Grid.

## Layout (Flex, Row, Column, MdsGrid, Grid organism)

- [ ] **28.1** — Grid uses div scaffold without table/grid roles; sort and nested expand lack proper exposure: Consolidate with Table audit.

## Chip / ChipGroup

- [ ] **29.2** — `disabled` without `aria-disabled`: Add `aria-disabled` + guards.
- [ ] **29.3** — `outline: none` on disabled chip CSS: Avoid removing focus indicator; non-focusable disabled.
- [ ] **29.4** — ChipGroup does not forward per-chip `aria-label`/`aria-labelledby`: Forward from `list` items.

## ChipInput

- [ ] **30.1** — Duplicate `aria-labelledby` on wrapper + input: Name primary `<input>` only; non-button wrapper.
- [ ] **30.3** — `error` without `aria-invalid`: Map `error` on input.

## Card

- [ ] **31.1** — CardHeader, CardBody, CardFooter only get `extractBaseProps`, no `id` or `aria-*`: Add `BaseHtmlProps` on those roots.
- [ ] **31.2** — ActionCard uses `role="link"` with `onClick` but no `href`: Use real `<a href>` when navigating; otherwise `role="button"`.
- [ ] **31.4** — ActionCard and SelectionCard `disabled` without `aria-disabled`: Set `aria-disabled="true"` when disabled.

## PageHeader

- [ ] **32.1** — Title Heading defaults to `h4` for primary page title: Default `h1` or `titleAs` API.

## Collapsible

- [ ] **33.1** — Footer trigger missing `aria-expanded`: Add `aria-expanded={expanded}`.
- [ ] **33.2** — Trigger name is Icon glyph only: Default `aria-label` + `aria-hidden` on icon.

## InputMask

- [ ] **34.2** — `caption`/`helpText` siblings not in `aria-describedby`: Generate ids + merge `aria-describedby`.
- [ ] **34.3** — Inherits Input gaps for `aria-invalid`, clear control naming, info affordance: Fix Input first.

## VerificationCodeInput

- [ ] **35.1** — One shared `id` applied to every OTP cell: Use per-cell ids or `baseId` pattern.
- [ ] **35.2** — `error` set but `aria-invalid` not applied (inherits Input): Fix Input.

## EditableInput

- [ ] **36.2** — Empty value + empty placeholder leaves unnamed trigger: Require placeholder or `aria-label`.
- [ ] **36.3** — Error only in hover Popover; no `aria-describedby`/`aria-invalid`: Inline errors + ARIA wiring.

## FileUploader

- [ ] **38.2** — File input not associated with title/format copy: `aria-labelledby` / `aria-describedby` with stable ids.
- [ ] **38.3** — Dynamic error/progress without progressbar/live semantics: `role="alert"` / `aria-live`; ProgressRing `role="progressbar"`.

## MultiSlider / Slider / RangeSlider

- [ ] **39.1** — Visible Label not associated with thumb(s): Ids + `aria-labelledby`.
- [ ] **39.2** — Two thumbs not distinguishable by name: "Start"/"End" or consumer API.

## Spinner bundle (Spinner, ProgressBar, ProgressRing, Meter)

- [ ] **40.1** — Spinner: No `aria-label`/`aria-labelledby` API: Add naming props; indeterminate named.
- [ ] **40.2** — ProgressBar: Optional `ariaLabel`; visible label not `aria-labelledby` when `showLabel`: Wire label id.

## Tooltip

- [ ] **41.1** — Portaled content has no `role="tooltip"`: Add `role="tooltip"` on tooltip root.
- [ ] **41.2** — No tooltip `id`; trigger lacks `aria-describedby` when open: Use `useId`; merge/remove `aria-describedby` with open state.

## Typography (Text, Heading, Subheading, Paragraph, Caption)

- [ ] **42.1** — Caption has no `BaseHtmlProps`, so callers cannot set `id` for `aria-describedby`: Extend props and forward to root.
- [ ] **42.2** — Caption stringifies children, so rich ReactNode children break: Render `children` normally.

## StatusHint bundle (StatusHint, EmptyState, Placeholder)

- [ ] **43.1** — `onClick` + non-text children: `div` `role="button"` may lack name; no ARIA pass-through: Use `<button>` or required `aria-label`.
- [ ] **43.2** — EmptyState Image without required `alt` when `src` set: Require `alt` or decorative contract.
- [ ] **43.3** — EmptyState `compressed`/`tight` title uses Text not heading: Keep heading styled via CSS.
- [ ] **43.4** — Placeholder: No `aria-busy`/`aria-hidden` on skeleton: Hide from AT + document parent `aria-busy`.

## Message / InlineMessage / Toast

- [ ] **44.1** — Toast ActionButton renders `<button>` without `type` inside a `<form>`: Use `type="button"` on non-submit actions.

## Avatar / AvatarGroup

- [ ] **45.3** — Outer `role="img"` wraps inner `<img>`, doubling image semantics; alt from first name only: Use one naming source; set alt to full display name.

## Chat

- [ ] **46.1** — ChatInput no label association: Label API or required `aria-label`.

## Checkbox

- [ ] **47.1** — Whitespace-only `label` or no label/`aria-*` results in unnamed control: Trim whitespace; require name.

## Textarea

- [ ] **48.1** — `readOnly` prop not forwarded to native `readonly` attribute: Forward `readOnly` to underlying `<textarea>`.

## SwitchInput

- [ ] **49.1** — Unlabeled switch without `aria-label`/`Label` pairing: Docs / dev warning.

## Link

- [ ] **50.1** — `<Link onClick>` without `href`: Require `href` or render `button` for actions.

## LinkButton

- [ ] **51.1** — `icon` with empty/whitespace `children` and no `aria-label`: Enforce name when icon-only.

## Stepper

- [ ] **52.1** — Empty `label` leaves weak step name (icon noise): Require labels or synthesize names.

## Dropzone

- [ ] **53.1** — Hidden file input unnamed / not tied to instructions: `aria-label` or `aria-labelledby`/`describedby`.

## List — KeyValuePair / MetaList

- [ ] **54.1** — MetaList separator Icon not `aria-hidden`, announced between items: Mark separator icons `aria-hidden="true"`.

---

## Summary

| Category | Count |
| --- | --: |
| ARIA states (`aria-invalid`, `aria-expanded`, `aria-selected`, `aria-disabled`, etc.) | 30 |
| Naming & labeling (`aria-label`, `aria-labelledby`, `alt`, `htmlFor`, etc.) | 35 |
| ARIA structure & roles (wrong/invalid nesting, missing roles) | 12 |
| ID & association issues (duplicate/broken ids, missing `aria-describedby`) | 10 |
| Semantic HTML (`<nav>`, `<legend>`, heading level, `type="button"`, etc.) | 8 |
| Props/API gaps (`BaseHtmlProps`, forwarding) | 6 |
| Other (animation bug, rendering bug, live regions) | 4 |
| **Total safe fixes** | **105** |

**Excluded (39 issues):** These involve focus order changes, keyboard handler additions, nested interactive restructuring, tab trapping, or Escape key handling — they carry risk of breaking existing keyboard/focus behavior and should be tackled separately with focused testing.
