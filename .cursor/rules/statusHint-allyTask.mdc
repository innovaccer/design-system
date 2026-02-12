# Accessibility Audit: StatusHint

## Summary
The `StatusHint` component displays a status indicator (colored dot) and a label. It's rendered as a `<div>`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.4.1: Use of Color (Level A)**:
    - The status is conveyed only by the color of the dot. Ensure the text label explicitly states the status (e.g., "Active", "Inactive").
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - If clickable, it lacks a `role="button"` and `tabIndex`.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - If clickable, it's not accessible via keyboard.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the status dot color has sufficient contrast against the background.

## Actionable Changes
- [ ] **Keyboard Accessibility**: If `onClick` is provided, add `tabIndex={0}` and an `onKeyDown` handler for `Enter` and `Space`.
- [ ] **Aria Role**: Add `role="button"` if clickable.
- [ ] **Decorative Icon**: Add `aria-hidden="true"` to the status dot span.
- [ ] **Aria Label**: If the text label is not descriptive enough, allow an `aria-label` to provide more context.

## WCAG 2.2 AA Success Criteria References
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

