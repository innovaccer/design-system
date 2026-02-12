# Accessibility Audit: ProgressRing

## Summary
The `ProgressRing` component is a circular progress indicator. It's rendered as an SVG.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The component lacks `role="progressbar"`.
    - It should have `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.
    - It lacks an accessible name.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The progress information is only visual.

## Actionable Changes
- [ ] **Aria Role**: Add `role="progressbar"` to the SVG element.
- [ ] **Aria Value Attributes**: Add `aria-valuemin="0"`, `aria-valuemax={max}`, and `aria-valuenow={value}`.
- [ ] **Accessible Name**: Add an `aria-label` to describe the progress (e.g., "Uploading file...").

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
