# Accessibility Audit: SegmentedControl

## Summary
The `SegmentedControl` component is a linear set of two or more segments, each of which functions as a mutually exclusive button.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The component should follow the `tablist` pattern. The container should have `role="tablist"`, and each segment should have `role="tab"`.
    - Selected segment should have `aria-selected="true"`.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - Keyboard navigation should follow the `tablist` pattern (Left/Right arrows to move focus, Space/Enter to select). Currently, it uses standard button tab order.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The relationship between segments in the control should be programmatically defined.

## Actionable Changes
- [ ] **Aria Roles**: Add `role="tablist"` to the container and `role="tab"` to each `SegmentedControlItem`.
- [ ] **Selection State**: Ensure `aria-selected` is correctly applied to the active segment.
- [ ] **Keyboard Navigation**: Implement Arrow key navigation within the `tablist` to move focus between segments.
- [ ] **Accessible Name**: Ensure the `tablist` has an `aria-label` or `aria-labelledby`.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

