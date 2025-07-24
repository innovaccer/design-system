# Accessibility Audit: MetricInput

## Summary
The `MetricInput` component is a specialized number input with increment/decrement buttons, prefix, and suffix. It uses the native `<input type="number">`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The prefix and suffix are not programmatically associated with the input. They should be part of the label or use `aria-labelledby`.
    - If there's an error, it should be linked via `aria-describedby`.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The increment/decrement buttons have `aria-label`, which is good.
    - If `error` is true, the input should have `aria-invalid="true"`.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - The `subtle` appearance for prefix/suffix and icons must meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **Aria Invalid**: Add `aria-invalid={error}` to the input element.
- [ ] **Aria Labeling**: Use `aria-labelledby` to include the prefix and suffix in the input's accessible name.
- [ ] **Aria Describedby**: Link any external `HelpText` or error messages to the input.
- [ ] **Contrast Verification**: Audit the `subtle` appearance contrast.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

