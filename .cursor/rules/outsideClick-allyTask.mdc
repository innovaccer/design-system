# Accessibility Audit: OutsideClick

## Summary
The `OutsideClick` component detects clicks outside of its children and triggers a callback. It's often used for closing popovers, modals, or dropdowns.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - Detecting only "clicks" outside might not be sufficient for keyboard users. If a user tabs out of a component, it should also potentially trigger the same "close" logic.
- **Success Criterion 2.4.3: Focus Order (Level A)**:
    - When an element is closed via an outside click, focus should be managed correctly (e.g., returning focus to the trigger).

## Actionable Changes
- [ ] **Escape Key Support**: Ensure that components using `OutsideClick` also handle the `Escape` key to close.
- [ ] **Blur/Focusout Support**: Consider adding a listener for `focusout` to detect when focus moves outside the component, which is the keyboard equivalent of an outside click.

## WCAG 2.2 AA Success Criteria References
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
