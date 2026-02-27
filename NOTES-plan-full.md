# Personal notes (remove this file on final PR merge)

# Keyboard a11y plan (full) — WCAG 2.2 AA

**Goal:** Fix keyboard/focus across the design system in a scalable way. Build foundation first, then fix components; each section can become its own sub-plan.

---

## A. Foundation (do first)

- **A1:** Fix `isSpaceKey` (`e.key === ' ' || e.key === 'Spacebar'`). Add key constants (string) and activation-key helper (button = Enter+Space, checkbox = Space only). Location: `core/accessibility/utils/`.
- **A2:** Reusable primitives — useFocusTrap (modals, popovers), useRovingTabIndex (lists/tabs/chips), useDisclosure (expand/collapse), createListboxKeyHandler (Select, Combobox, Listbox, Menu).
- **A3:** Single "Keyboard and focus" reference doc; unit tests for foundation.

---

## B. Atoms (13)

Switch, Chip, ChipGroup, Slider family, MetricInput, Collapsible, Editable, SegmentedControl, SelectionCard, Toast, Input, AvatarSelection, ActionCard. Dropdown skipped (deprecated). Each: use A1/A2 as noted; button-like = Enter+Space, checkbox-like = Space only; overlays = Escape + focus.

---

## C. Molecules (10)

Modal family (4), Tabs, Popover, Tooltip, ChipInput, Editable wrappers (3), Stepper, FileUploader, Dropzone, Pagination. Modals: focus trap, Escape default, role="dialog", aria-modal, initial/return focus. Tabs/Popover: same patterns.

---

## D. Organisms (12)

Select, Combobox, Listbox, Menu, Calendar, DatePicker, DateRangePicker, TimePicker, Grid, List, HorizontalNav, VerticalNav, VerificationCodeInput. List-like: listbox key handler + roving tabindex. Calendar/Grid: grid keyboard + ARIA.

---

## E. Order

1. Foundation → 2. Overlays → 3. Disclosure + button/checkbox atoms → 4. List-like atoms → 5. Select/Combobox/Listbox/Menu → 6. Tabs + segmented → 7. VerticalNav → 8. Editable family → 9. Sliders → 10. Calendar/date → 11. Grid/List → 12. Rest.

---

## F. Guardrails

New overlay → focus trap + Escape. New custom button/checkbox → activation helper. New list-like → roving tabindex + listbox handler. New disclosure → useDisclosure. Update interactions.mdx per component.
