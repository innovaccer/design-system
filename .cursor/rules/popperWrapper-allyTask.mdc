# Accessibility Audit: PopperWrapper

## Summary
The `PopperWrapper` component is a low-level utility that manages the positioning and visibility of popovers using `react-popper`. It handles triggers, portals, and outside clicks.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The trigger element needs appropriate ARIA attributes (`aria-haspopup`, `aria-expanded`, `aria-controls`) to communicate the state of the popover.
    - The popover content itself needs a role (e.g., `dialog`, `menu`, `tooltip`) depending on its purpose.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - Keyboard navigation between the trigger and the popover content must be managed.
    - The `Escape` key should close the popover.
- **Success Criterion 2.4.3: Focus Order (Level A)**:
    - Focus should be managed when the popover opens (e.g., moving focus to the first interactive element in a dialog) and closes (returning focus to the trigger).

## Actionable Changes
- [ ] **Aria Attributes**: Ensure the trigger has `aria-haspopup`, `aria-expanded`, and `aria-controls`.
- [ ] **Escape Key Support**: Implement `Escape` key handling to close the popover.
- [ ] **Focus Management**: Implement focus trapping for dialog-like popovers and ensure focus is returned to the trigger upon closing.
- [ ] **Aria Role**: Allow specifying the role of the popover content.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

