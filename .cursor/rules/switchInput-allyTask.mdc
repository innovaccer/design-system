# Accessibility Audit: Switch

## Summary
The `Switch` component is a toggle switch. It uses a hidden native checkbox input and a custom styled span.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - While it uses a native checkbox, a switch should ideally have `role="switch"` to communicate its behavior better to screen readers.
    - It lacks an accessible name if not wrapped in a label.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - Ensure the switch is programmatically associated with a label.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the switch background (both on and off states) and the handle have sufficient contrast.

## Actionable Changes
- [ ] **Aria Role**: Add `role="switch"` to the input element.
- [ ] **Accessible Name**: Ensure the switch has an `aria-label` or is linked to a `Label` component.
- [ ] **Focus Management**: Ensure the focus ring on the custom switch wrapper is clearly visible when the hidden native input is focused.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
