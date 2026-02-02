# Accessibility Audit: Editable

## Summary
The `Editable` component provides a wrapper to make content editable. It handles click and hover events to trigger edit mode.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The clickable wrapper lacks a `role="button"` and `tabIndex`.
    - It lacks an accessible name.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - The component is currently not keyboard accessible. There's no way to trigger "edit" mode using the keyboard.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The relationship between the static content and the editable state is not communicated to screen readers.

## Actionable Changes
- [ ] **Keyboard Accessibility**: Add `tabIndex={0}` and an `onKeyDown` handler to support `Enter` and `Space` keys for triggering edit mode.
- [ ] **Aria Role**: Add `role="button"` to the clickable wrapper.
- [ ] **Accessible Name**: Add an `aria-label` (e.g., "Edit [content]") to the wrapper.
- [ ] **State Communication**: Use `aria-live` or other mechanisms to announce when the component enters or leaves edit mode.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
