# Accessibility Audit: ActionCard

## Summary
The `ActionCard` is a clickable container that behaves like a link or button. It wraps content and provides a click handler. The current implementation uses `role="link"` and `tabIndex`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - While it handles `Enter` key, it does not handle `Space` key which is expected for button-like elements.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `role="link"` might be inappropriate if it performs an action rather than navigation. If it's a link, it should have an `href`. If it's an action, `role="button"` is better.
    - It lacks an `aria-label` or `aria-labelledby` if the children don't provide a clear accessible name.
- **Success Criterion 1.4.1: Use of Color (Level A)**:
    - The disabled state is indicated by an overlay, but it should also use `aria-disabled="true"`.
- **Success Criterion 2.4.7: Focus Visible (Level AA)**:
    - Ensure the focus ring is clearly visible when the card is focused via keyboard.

## Actionable Changes
- [ ] **Role Management**: Allow the user to specify `role` (defaulting to `button` if `onClick` is present).
- [ ] **Keyboard Support**: Add `Space` key support in `onKeyDownHandler`.
- [ ] **ARIA Attributes**: Add `aria-disabled={disabled}` to the root element.
- [ ] **Accessible Name**: Ensure the card has an accessible name, possibly by encouraging `aria-label` when children are complex.

## WCAG 2.2 AA Success Criteria References
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

