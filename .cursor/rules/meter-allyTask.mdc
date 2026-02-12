# Accessibility Audit: Meter

## Summary
The `Meter` component represents a scalar measurement within a known range. It uses `role="meter"` and appropriate `aria-value*` attributes.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `Meter` should have an accessible name via `aria-label` or `aria-labelledby`. The `ariaLabel` prop is provided but should be encouraged.
    - If the value is not a simple number (e.g., "3 out of 5 steps"), `aria-valuetext` should be used to provide a human-readable version of the value.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the `fillColor` and `emptyColor` have sufficient contrast against the background and each other to be distinguishable.
- **Success Criterion 1.4.1: Use of Color (Level A)**:
    - The status or value should not be conveyed by color alone. The `showLabel` prop helps by providing a text representation.

## Actionable Changes
- [ ] **Aria Value Text**: Add an `aria-valuetext` prop to allow providing a human-readable description of the current value.
- [ ] **Accessible Name**: Ensure the `Meter` always has an accessible name, either through `aria-label` or by linking it to a label element.
- [ ] **Contrast Verification**: Audit the default `fillColor` and `emptyColor` for contrast compliance.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
