# Accessibility Audit: SelectionCard

## Summary
The `SelectionCard` component is a clickable card that can be selected. It uses `role="checkbox"` and `aria-checked`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - While it handles `Enter`, it should also handle the `Space` key for toggling selection, as expected for a checkbox role.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The card needs an accessible name. If the children don't provide a clear name, `aria-label` or `aria-labelledby` should be used.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - If used in a group where only one can be selected, `role="radio"` and `aria-checked` should be used instead of `checkbox`.

## Actionable Changes
- [ ] **Keyboard Support**: Add `Space` key support in `onKeyDownHandler`.
- [ ] **Role Flexibility**: Allow the user to specify `role` (defaulting to `checkbox`, but supporting `radio`).
- [ ] **Accessible Name**: Ensure the card has an accessible name.

## WCAG 2.2 AA Success Criteria References
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

