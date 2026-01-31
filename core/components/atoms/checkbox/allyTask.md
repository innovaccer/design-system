# Accessibility Audit: Checkbox

## Summary
The `Checkbox` component is a standard form element. It uses a hidden native input and a custom styled span for the checkbox icon.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The help text is not programmatically associated with the input. It should use `aria-describedby`.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `indeterminate` state is set on the native input, which is correct, but ensure it's communicated correctly to screen readers.
- **Success Criterion 3.3.2: Labels or Instructions (Level A)**:
    - The label is correctly associated using `htmlFor` and `id`.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the checkbox border and checkmark have sufficient contrast against the background.

## Actionable Changes
- [ ] **Aria Describedby**: Link the `helpText` to the input using `aria-describedby`.
- [ ] **Error State**: Use `aria-invalid="true"` when the `error` prop is true.
- [ ] **Focus Management**: Ensure the focus ring on the custom checkbox icon is clearly visible when the hidden native input is focused.
- [ ] **Indeterminate State**: Ensure screen readers announce the indeterminate state (most do this automatically for native inputs with `indeterminate` property).

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
