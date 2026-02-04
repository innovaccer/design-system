# Accessibility Audit: Divider

## Summary
The `Divider` component provides a visual separation between content. It uses the `<hr>` element.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - If the divider is purely decorative, it should have `role="presentation"` or `aria-hidden="true"` to prevent it from being announced by screen readers.
    - If it's used to separate groups of items in a list or menu, it should have `role="separator"`.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - For vertical dividers, the default `<hr>` might not be appropriate as it's semantically a horizontal rule. `role="separator"` with `aria-orientation="vertical"` should be used.

## Actionable Changes
- [ ] **Role and Orientation**: Add `role="separator"` and `aria-orientation={vertical ? 'vertical' : 'horizontal'}`.
- [ ] **Decorative Dividers**: If the divider is purely for visual styling and doesn't separate semantic sections, add `aria-hidden="true"`.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
