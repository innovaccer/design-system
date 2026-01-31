# Accessibility Audit: RangeSlider

## Summary
The `RangeSlider` component allows selecting a range of values using two handles. It wraps the `MultiSlider` component.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The handles should have `role="slider"`.
    - Each handle should have `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext`.
    - Handles should have accessible names (e.g., "Start value", "End value").
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - Keyboard navigation (Arrow keys) is partially implemented in `Handle.tsx` but needs to be robust and include `ArrowUp`/`ArrowDown`.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The slider track and labels should be correctly associated.

## Actionable Changes
- [ ] **Aria Roles & Attributes**: Add `role="slider"` and appropriate `aria-value*` attributes to each handle.
- [ ] **Accessible Names**: Provide `aria-label` for each handle to distinguish between start and end.
- [ ] **Keyboard Support**: Update `handleKeyDown` in `Handle.tsx` to include `ArrowUp` and `ArrowDown` keys.
- [ ] **Aria Valuetext**: Use `aria-valuetext` to provide a human-readable version of the value if necessary.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
