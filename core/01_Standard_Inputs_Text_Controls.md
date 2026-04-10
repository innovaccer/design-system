# Standard Inputs Text Controls

This document contains the P0 (Critical) and P1 (High) ARIA audit issues for Standard Inputs Text Controls.

**Total P0/P1 issues in this group:** 24

| Component        | P0/P1 issues |
| ---------------- | ------------ |
| SegmentedControl | 3            |
| Radio            | 3            |
| Select           | 4            |
| TextField        | 3            |
| Combobox         | 3            |
| Listbox          | 3            |
| ChoiceList       | 1            |
| SelectionCard    | 1            |
| Input            | 1            |
| InputMask        | 1            |
| Textarea         | 1            |

---

## 1. SegmentedControl, Fixed in PR 3004

### 1. P1 - Selection state not exposed in the accessibility tree

- **Repro:** Add `aria-selected`, and `role="radio"` + `aria-checked`.
- **Issue + impact:** Assistive technologies announce each segment as a generic **button** with no “selected/checked/pressed” state. Users cannot tell which option is active except by inferring from visible styling or reading all labels without state semantics.
- **Suggestion:** Choose one pattern and wire state: e.g. container `role="radiogroup"` with `aria-labelledby` / `aria-label`, items `role="radio"` + `aria-checked={isSelected}` (and `tabIndex` per APG radio group), or keep `<button>` and set `aria-pressed={isSelected}` if you treat them as toggle buttons in a group (document the pattern).

---

### 2. NOT NECESSARY BUT FIX WITH ABOVE - P1 - Selected segment is removed from sequential focus (`tabIndex`)

- **Repro:** Render documented label-only control (e.g. Day / Week / Month) with index 0 selected — inspect first `<button>`: `tabindex="-1"` while unselected segments use `tabindex="0"`. Tab never moves focus onto the currently selected segment.
- **Issue + impact:** Users relying on Tab (and many screen-reader focus modes) cannot focus the active option. That diverges from APG **radio group** / roving `tabindex` patterns (one tab stop into the group, then arrows; or at minimum focusable selected item). It also makes keyboard re-activation of the selected choice impossible without clicking or focusing another segment first.
- **Suggestion:** Align with a documented pattern: e.g. **roving** `tabindex` (one `tabIndex={0}` on the selected item or on the group container, others `-1`) plus **ArrowLeft/ArrowRight/Home/End** to move selection/focus; or keep all segments `tabIndex={0}` if the product accepts multiple tab stops (still expose selection state — see finding 1).

---

### 3. P1 - No group role or group accessible name on the control root

- **Repro:** Use `SegmentedControl` as in docs/stories without an external wrapping `fieldset`/`role="group"` — the control has no programmatic “group” semantics for the set of segments.
- **Issue + impact:** Screen reader users hear a flat list of buttons with no indication they are **one control** choosing among related options. External copy/layout may supply a visible heading, but the component does not wire `aria-labelledby` to it or accept a dedicated `aria-label` on the group.
- **Suggestion:** Add optional props such as `aria-label` / `aria-labelledby` (and optionally `id`) on the root, and set `role="radiogroup"` (or `role="group"` with visible label association) per the chosen pattern. Forward those attributes on the outer element.

---

## 2. Radio

### 1. P1 - Consumer `id` via `{...rest}` overrides input `id` but `<label htmlFor>` stays on the internal id

- **Repro:** Render `<Radio id="my-radio" label="Option" name="g" value="a" />`; DOM input gets `id="my-radio"` while `label` keeps `htmlFor` equal to the internally generated id string — label no longer targets the focused control.
- **Issue + impact:** Clicking the visible label may not toggle the radio; screen readers may not associate the visible label with the input’s accessible name as intended.
- **Suggestion:** Apply `id={resolvedId}` **after** `{...rest}`, or omit `id` from the spread onto the input and map consumer `id` into a single `resolvedId` used for both input and `htmlFor` (same pattern as the Checkbox implementation’s ordering).

---

### 2. P1 - `error={true}` is visual-only — no `aria-invalid` (or error relationship)

- **Repro:** Use `<Radio error={true} label="x" name="n" value="v" />` as in unit tests — input has no `aria-invalid` from the component.
- **Issue + impact:** Users of assistive technologies are not informed that the control is in an error state; only sighted users see border styling.
- **Suggestion:** When `error` is true, set `aria-invalid={true}` on the input; optionally accept error message text or an error element id and set `aria-errormessage` when that content exists.

---

### 3. P1 - `helpText` is not programmatically associated with the input

- **Repro:** Render `Radio` with `label`, `helpText`, and focus the input — help text is not included via `aria-describedby` unless the author duplicates wiring manually with external ids.
- **Issue + impact:** On focus, many screen readers announce only the name/state of the radio, not the descriptive paragraph shown next to it; users must discover help text by linear reading.
- **Suggestion:** Assign a stable id to the help text node (e.g. `${resolvedId}-helptext`) and set / merge `aria-describedby` on the input (merge with any consumer `aria-describedby` from props).

---

## 3. Select

### 1. P1 - Nested interactive: `<button>` inside `<button>` on default trigger

- **Repro:** Use `Select` with default trigger, select any value, then inspect DOM: outer `data-test="DesignSystem-Select-trigger"` wraps inner `data-test="DesignSystem-Select--closeIcon"` button.
- **Issue + impact:** HTML forbids nested `button` elements. Assistive technologies and focus management may not expose the clear action reliably; validation/HTML parsers may report errors.
- **Suggestion:** Make the clear control a non-button interactive (e.g. `type="button"` adjacent sibling) or use a single `button` + internal `span` with `role` only if spec-compliant; prefer pattern used by APG combobox clear affordances (separate focusable or in-toolbar control outside the primary button).

---

### 2. P1 - `aria-invalid` never applied on default `SelectTrigger` (prop dropped)

- **Repro:** Pass `triggerOptions={{ 'aria-invalid': true }}` or rely on docs claiming context `error` maps to `aria-invalid` — the attribute is absent on the trigger button.
- **Issue + impact:** `SelectTrigger` destructures `'aria-invalid': ariaInvalid` but does not spread it onto the `<button>`, so invalid state is not announced. Visual error styling still uses `error` from context (`Select-trigger--error`), so sighted users and AT diverge.
- **Suggestion:** Forward `aria-invalid={ariaInvalid ?? (error ? true : undefined)}` (or equivalent) on the trigger `<button>` and align docs with behavior.

---

### 3. P1 - Default trigger `aria-label` overrides visible label / placeholder text

- **Repro:** `Select` with `triggerOptions={{ inlineLabel: 'Country', placeholder: 'Choose' }}` and no `aria-label` — screen readers typically announce **“Select trigger”** (default), not “Country”.
- **Issue + impact:** `aria-label` wins over subtree text in accessible name calculation, so the visible field label does not describe the control for assistive technology users.
- **Suggestion:** Remove the unconditional default `aria-label`, or default to `undefined` and require an explicit label for icon-only cases; or generate `aria-labelledby` from visible label + value elements when present.

---

### 4. P1 - Default `aria-label` on each option overrides option content

- **Repro:** Options with text children (e.g. “Canada”) — exposed name is often **“option item”** because `aria-label={props['aria-label'] || 'option item'}` on `Listbox.Item`.
- **Issue + impact:** All options sound identical or generic in SR rotor / list navigation, hiding real option text.
- **Suggestion:** Default `aria-label` to `undefined` and let name come from children; set `aria-label` only when there is no visible text or for rare string-only option data.

---

## 4. TextField

### 1. P0 - Visible `label` prop is not programmatically associated with the control

- **Repro:** Use `<TextField label="Email" />` (or with textarea): the `<label>` from `Label` is **not** wrapping the `<input>` / `<textarea>`, and `TextField` does not set `htmlFor` on `Label` or a stable `id` on the control, so there is no programmatic label–control relationship.
- **Issue + impact:** Clicking the label may not focus the field; screen readers may not treat the visible string as the accessible name of the textbox, so users can miss the purpose of the field or struggle with forms.
- **Suggestion:** In the field wrapper, generate a unique `id` (e.g. `uidGenerator`), pass it to `Input` / `Textarea` as `id`, and pass the same token to `Label` as `htmlFor`. Allow consumer override via props while keeping defaults correct.

```tsx
  return (
    <div>
      {label && (
        <Label required={required} withInput={true} size={labelSize}>
          {label}
        </Label>
      )}
      <Input {...props} error={inputError} onChange={onChangeHandler} />
```

```tsx
    <div>
      {label && (
        <Label required={required} withInput={true} size={size}>
          {label}
        </Label>
      )}
      <Textarea
        {...props}
        resize={resize}
        rows={rows}
        onChange={onChangeHandler}
        error={inputError}
        ref={textareaRef}
      />
```

---

### 2. P1 - Help and error copy from `HelpText` is not linked to the control

- **Repro:** `<TextField label="Notes" helpText="Max 50 characters" />` — `HelpText` assigns an `id` to the message container (`HelpText.tsx`), but `TextField` never sets `aria-describedby` (or `aria-errormessage` when in error) on the `<input>` / `<textarea>` to that `id`.
- **Issue + impact:** Assistive technologies may not expose hint or error text in the same “field” object as the control; users may not hear constraints or validation messaging when exploring or correcting input.
- **Suggestion:** Resolve a single `helpId` from `HelpText` (callback ref, render prop, or lift `id` generation into `TextField` and pass `id` into `HelpText` + `aria-describedby` on the control). For error state, prefer `aria-errormessage` pointing at the `InlineMessage` `id` where supported, in addition to or instead of mixing into `aria-describedby`, per project convention.

```tsx
export const RenderHelpText: React.FC<RenderHelpTextProps> = ({ helpText, error }) => (
  <HelpText
    className="d-flex"
    message={helpText.trim().length > 0 ? helpText : ' '}
    error={error ? error : undefined}
  />
);
```

---

### 3. P1 - `Label` does not accept `htmlFor` / `id` from `TextField` API

- **Repro:** Consumer sets `id="foo"` on `TextField` (forwarded to `Input` via `{...props}`) but cannot pass `htmlFor="foo"` to the internal `Label` because `TextField` only forwards `required`, `withInput`, and `size`.
- **Issue + impact:** Even knowledgeable consumers cannot complete `htmlFor` + `id` pairing through the documented `TextField` props surface.
- **Suggestion:** Expose optional `labelProps` / `inputProps` split (or `id` + auto `htmlFor`) so association and overrides are first-class.

---

## 5. Combobox

### 1. P1 - Multiselect options: `aria-selected` does not reflect chosen chips

- **Repro:** Use `Combobox` with `multiSelect`, `Combobox.List` + `Combobox.Option`, select one or more values; inspect option nodes’ `aria-selected` vs. chips.
- **Issue + impact:** `ComboboxOption` forces `selected={option.label === inputValue?.label}` and ignores multiselect membership (`chipInputValue`) and the optional `selected` prop (spread `...rest` is overridden). Assistive technologies announce incorrect selection state in the listbox; users cannot rely on the list to match the value shown in chips.
- **Suggestion:** Derive `selected` from `multiSelect ? chipInputValue?.some(...) : match inputValue` (and/or honor an explicit `selected` prop when provided). Thread `chipInputValue` from context into `ComboboxOption`.

---

### 2. P1 - Multiselect trigger: `role="button"` wrapper around `role="combobox"` input

- **Repro:** Inspect `MultiSelectTrigger` DOM: outer `div` has `role="button"` and `tabIndex={-1}` (from `ChipInputBox`), inner `input` has `role="combobox"` and associated `aria-`* (`ChipInputBox.tsx` → `MultiselectTrigger.tsx`).
- **Issue + impact:** Nested/interactive structure: a “button” contains an editable combobox. Screen readers and voice control may expose two overlapping roles for one field; the outer `role="button"` + click-to-focus is redundant with the real combobox and increases ambiguity.
- **Suggestion:** Use a non-interactive wrapper (`role="group"` or `role="presentation"`) with an accessible name via `aria-labelledby` / `aria-label` on the group or combobox input only; avoid `role="button"` on the container that wraps the combobox input.

---

### 3. P1 - `readOnly` single-select: input removed from tab order

- **Repro:** Pass `readOnly` to the combobox input path; `Input` sets `tabIndex={-1}` when `readOnly` is true.
- **Issue + impact:** Combobox cannot be focused via Tab; keyboard users cannot operate the control as documented for combobox.
- **Suggestion:** For combobox usage, do not force `tabIndex={-1}` on the combobox input when `readOnly`, or document that `readOnly` is unsupported / use `disabled` + alternative UX.

---

## 6. Listbox

### 1. P1 - Orphan `role="option"` when container is not a listbox (`description`, custom focus, draggable)

- **Repro:** Render `<Listbox type="description">` or `<Listbox draggable>` with default props; inspect DOM: root has no `role="listbox"` while item rows still use `role="option"` (`Listbox.tsx` `listRole` vs. `ListBody` default `role`).
- **Issue + impact:** In ARIA, options must be owned by / contained in a `listbox` (or compatible composite). A root with no `listbox` role but descendant `option` roles is structurally invalid; assistive technologies may not associate rows with a list, breaking list semantics and selection announcements.
- **Suggestion:** When the root intentionally is not a listbox (e.g. static description lists), default item `role` to something neutral (`role="presentation"` / `group` / no option) or require an explicit `role` on items; for draggable mode, default the list container to `role="listbox"` (or document that consumers must set it) and keep option semantics consistent.

---

### 2. P1 - Documented nested-panel props are not applied; no expansion semantics

- **Repro:** Use `Listbox.Item` with `nestedBody`, `nestedListId`, `nestedListAriaLabel`, and `expanded`; inspect `NestedList` output (`NestedList.tsx`)—wrapper is a plain `div` with no `id`, no accessible name, no landmark role.
- **Issue + impact:** Authors expect `nestedListId` and `nestedListAriaLabel` to wire `aria-controls` / named regions per JSDoc on `ListboxItem.tsx`, but `NestedList` only destructures `nestedBody` and `expanded`, so those props have no effect. There is no `aria-expanded` (or separate expand control) tying the row to the panel, so screen reader users do not get a correct expandable pattern.
- **Suggestion:** Extend `NestedList` to render e.g. `role="region"` with `id={nestedListId}`, `aria-label` or `aria-labelledby` from `nestedListAriaLabel` (or split label vs. labelledby if needed), and set `aria-expanded` / `aria-controls` on the visible expand trigger or on the option row per APG; align implementation with the documented props.

---

### 3. P1 - Draggable list: default container lacks `listbox`; reorder keyboard model is not APG listbox

- **Repro:** `DraggableList` merges `...rest` onto `<Tag>` but does not set `role="listbox"` by default (`DraggableList.tsx`); options still expose `role="option"` from `ListBody`.
- **Issue + impact:** Same structural orphan-option concern as finding 1. Additionally, `Draggable.tsx` implements Space + arrows for reorder selection/move, which is not the standard listbox key map (Enter/Space to select, arrows to move focus only)—authors and users may get inconsistent behavior vs. a plain listbox.
- **Suggestion:** Default `role="listbox"` on the draggable root when options keep `role="option"`, **or** drop `option`/`listbox` roles in draggable mode and document a dedicated “reorder list” pattern with explicit roles (`application` / `button` handles, etc.) per APG guidance—avoid mixing roles.

---

## 7. ChoiceList

### 1. P1 - `title` does not programmatically name the `<fieldset>`

- **Repro:** `<ChoiceList title="Gender" choices={[...]} onChange={...} />` with no `aria-label` or `aria-labelledby` — matches common prop docs; `fieldset` has no computed accessible name from the visible title.
- **Issue + impact:** Screen readers may not announce a stable **group** name in forms mode / group navigation; users hear options without a clear grouping context even when a visual heading is present.
- **Suggestion:** Render `title` as a `<legend>` (styled to match `Label`), or give the title wrapper a stable `id` and set `aria-labelledby` on the `fieldset` to that id (prefer over duplicating text in `aria-label`). Ensure the visible group label and programmatic name stay in sync.

---

## 8. SelectionCard

### 1. P1 - Single-select pattern exposes each card as `checkbox`, not `radio` in a `radiogroup`

- **Repro:** Open the documented SingleSelect story / render two `SelectionCard`s with `useSingleSelect`; assistive technologies treat them as separate checkboxes, not as a single mutually exclusive set.
- **Issue + impact:** Users may believe **multiple cards can be selected at once** (checkbox mental model) while the app enforces a single selection, causing confusion and interaction errors.
- **Suggestion:** For exclusive selection, expose `role="radio"` (or a native `<input type="radio">` pattern) inside a `role="radiogroup"` with a visible or `aria-labelledby` group name, **or** document that authors must supply group semantics externally and accept checkbox-only behavior as a known limitation. Consider a prop such as `selectionMode="single" | "multiple"` to drive role and optional group wiring.

---

## 9. Input

### 1. P1 - `inlineLabel` wired with `aria-describedby` instead of labeling

- **Repro:** Use `<Input inlineLabel="USD" name="amount" />` without `aria-label` / external `<label htmlFor>`; assistive technologies typically treat `aria-describedby` as **supplementary description**, not the **accessible name**, so the field name may be wrong or missing while “USD” is only announced as extra description.
- **Issue + impact:** Visible prefix text that functions as the primary label should be referenced with `aria-labelledby` (or a native `<label>` + `htmlFor`). Using only `aria-describedby` misrepresents the relationship and can yield incorrect or confusing announcements in the name vs description order.
- **Suggestion:** Reference the inline label element with `aria-labelledby` (and keep `aria-describedby` only for true hints/errors/help). If both an external label and `inlineLabel` exist, merge IDs appropriately. Update unit tests that currently assert `aria-describedby` for this case.

```tsx
        aria-describedby={
          [rest['aria-describedby'], inlineLabel ? inlineLabelId : undefined].filter(Boolean).join(' ') || undefined
        }
```

---

## 10. InputMask

### 1. P1 - `helpText` and `caption` are not programmatically associated with the textbox

- **Repro:** Render `<InputMask id="primary_phone_1" helpText="Enter your phone number" … />` as documented; the help line gets a generated `HelpText-*` id, but the `<input>` has no `aria-describedby` referencing it.
- **Issue + impact:** Screen reader users may not hear instructions or error copy **in the same object as the field** when navigating by form control or relying on `aria-describedby` / `aria-errormessage` mapping. `caption` is documented as error-related but is only shown via `HelpText` with no link to `aria-invalid` beyond `error` → `Input`’s `aria-invalid`.
- **Suggestion:** Generate or accept a stable id for the help/error region (reuse `HelpText`’s `id` prop), pass `aria-describedby` (and when `error`, prefer `aria-errormessage` + existing `aria-invalid` from `Input`) on the `Input` so it references that id. Merge with any consumer-provided `aria-describedby` from `…rest`.

---

## 11. Textarea

### 1. P1 - Size story: `htmlFor` / `id` mismatch and invalid `aria-labelledby` tokens

- **Repro:** Open Storybook **Components/Input/Textarea/Size**: `<Label htmlFor="regular">` / `htmlFor="small"` while `<Textarea>` has **no** `id="regular"` or `id="small"`; `aria-labelledby="Regular"` and `aria-labelledby="Small"` reference tokens that are **not** IDs of existing elements (they match visible label text, not `id` attributes).
- **Issue + impact:** Programmatic label association fails: clicking the label may not focus the field; assistive technologies may not resolve a correct **accessible name** from `aria-labelledby`. Users who mirror this pattern get broken naming and labeling behavior.
- **Suggestion:** Align with `Error.story.jsx`: set `id` on `Textarea` to match `Label`’s `htmlFor`, and set `aria-labelledby` to the **actual `id`** of the labeling element(s) (e.g. the label’s `id`), or drop redundant `aria-labelledby` when a native `<label>` is correctly associated. Remove placeholder-only naming assumptions from the example.

```tsx
      <Label withInput={true} htmlFor="regular">
        Regular
      </Label>
      <Textarea name="regular" size="regular" aria-labelledby="Regular" placeholder="Enter your comments here" />
    </div>
    <div className="w-50">
      <Label withInput={true} size="small" htmlFor="small">
        Small
      </Label>
      <Textarea name="small" size="small" aria-labelledby="Small" placeholder="Enter your comments here" />
```

---