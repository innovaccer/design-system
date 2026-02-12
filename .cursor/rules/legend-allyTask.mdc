# Accessibility Audit: Legend

## Summary
The `Legend` component is used to describe items in a chart or list, typically with a colored icon and text.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - If the `Legend` is clickable (`onClick`), it lacks a `role="button"` and `tabIndex`.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - If clickable, it's not accessible via keyboard.
- **Success Criterion 1.4.1: Use of Color (Level A)**:
    - The meaning of the legend icon is conveyed only by color. Ensure the text description is sufficient.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the legend icon color has sufficient contrast against the background.

## Actionable Changes
- [ ] **Keyboard Accessibility**: If `onClick` is provided, add `tabIndex={0}` and an `onKeyDown` handler for `Enter` and `Space`.
- [ ] **Aria Role**: Add `role="button"` if clickable.
- [ ] **Decorative Icon**: Add `aria-hidden="true"` to the icon span as it's purely decorative (the text provides the meaning).

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
