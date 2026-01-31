# Accessibility Audit: Radio

## Summary
The `Radio` component is a standard radio button. It uses a hidden native input and a custom styled span for the radio icon.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The `helpText` is not programmatically associated with the input. It should use `aria-describedby`.
    - Radio buttons should be grouped using a `<fieldset>` and `<legend>` for proper context, especially when multiple radio buttons belong to the same group.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - If `error` is true, the input should have `aria-invalid="true"`.
- **Success Criterion 3.3.2: Labels or Instructions (Level A)**:
    - The label is correctly associated using `htmlFor` and `id`.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the radio button border and selection indicator have sufficient contrast.

## Actionable Changes
- [ ] **Aria Describedby**: Link the `helpText` to the input using `aria-describedby`.
- [ ] **Aria Invalid**: Add `aria-invalid={error}` to the input element.
- [ ] **Focus Management**: Ensure the focus ring on the custom radio icon is clearly visible when the hidden native input is focused.
- [ ] **Grouping**: Ensure that when used in a group, the radio buttons are wrapped in a `RadioGroup` component that uses `<fieldset>` and `<legend>`.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
