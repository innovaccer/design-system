# Accessibility Audit: AvatarGroup

## Summary
The `AvatarGroup` component displays a group of avatars, often with a "+x" count that opens a popover for additional users.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The group of avatars should be identified as a group, possibly using `role="group"` and an `aria-label`.
    - The "+x" count trigger should clearly communicate that it opens a list of additional users.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `Popover` trigger (the `AvatarCount`) needs `aria-haspopup="true"` and `aria-expanded` state.
    - The list of users in the popover should be correctly structured (e.g., using a list role).
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - Ensure the popover trigger is keyboard accessible (it uses `Popover` which generally handles this, but the trigger itself must be focusable).

## Actionable Changes
- [ ] **Group Labeling**: Add `role="group"` and `aria-label="User group"` to the root element.
- [ ] **Popover Trigger**: Ensure the `AvatarCount` component is focusable and has appropriate ARIA attributes for a popover trigger.
- [ ] **Search Accessibility**: If `withSearch` is enabled in the popover, ensure the search input is correctly labeled and focus is managed.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
