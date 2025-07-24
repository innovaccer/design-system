# Accessibility Audit: AvatarSelection

## Summary
The `AvatarSelection` component allows users to select one or more avatars from a group. It uses a popover to show additional avatars and supports search.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The selection state of each avatar should be clearly communicated to screen readers using `aria-selected` or `aria-checked`.
    - The group of avatars should have a `role="listbox"` or `role="group"` depending on how the selection is handled.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The trigger for the popover needs appropriate ARIA attributes (`aria-haspopup`, `aria-expanded`).
    - The search input inside the popover should be correctly labeled.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - Keyboard navigation within the popover list (Up/Down arrows) must be robust.
    - Focus should be managed correctly when the popover opens and closes.

## Actionable Changes
- [ ] **Selection State**: Ensure `aria-selected="true"` is applied to selected avatars.
- [ ] **Aria Roles**: Use `role="listbox"` for the list of avatars and `role="option"` for each avatar item.
- [ ] **Focus Management**: Ensure focus returns to the trigger when the popover is closed.
- [ ] **Keyboard Support**: Verify that `Space` and `Enter` keys work for selection.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
