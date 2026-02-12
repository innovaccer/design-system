# Accessibility Audit: ProgressBar

## Summary
The `ProgressBar` component indicates the completion status of a task. It supports both determinate and indeterminate states.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The component lacks the `role="progressbar"`.
    - It should have `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` (for determinate state).
    - It should have an accessible name via `aria-label` or `aria-labelledby`.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The progress information is only visual. Screen readers won't know this is a progress bar or what its value is.

## Actionable Changes
- [ ] **Aria Role**: Add `role="progressbar"` to the root element.
- [ ] **Aria Value Attributes**: Add `aria-valuemin="0"`, `aria-valuemax={max}`, and `aria-valuenow={value}` (if state is not indeterminate).
- [ ] **Accessible Name**: Add an `aria-label` prop to describe what the progress bar is for.
- [ ] **Indeterminate State**: For `state="indeterminate"`, ensure `aria-valuenow` is omitted or set appropriately (some recommend omitting it).

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
