# Accessibility Audit: HelpText

## Summary
The `HelpText` component provides additional information or error messages for form fields. It uses `InlineMessage` for errors and `Text` for standard help messages.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The `HelpText` should be programmatically associated with the input it describes using `aria-describedby` on the input.
- **Success Criterion 3.3.1: Error Identification (Level A)**:
    - If `error` is true, the message should be clearly identified as an error. `InlineMessage` with `appearance="alert"` helps, but ensure the container has `role="alert"` if it's meant to be announced immediately.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - The `subtle` appearance for `Text` must meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **Association**: Ensure the parent component (like `Input` or `Checkbox`) correctly links the `HelpText` using `aria-describedby`.
- [ ] **Aria Role**: For error messages, consider adding `role="alert"` to ensure they are announced by screen readers when they appear.
- [ ] **Contrast Verification**: Check the contrast of the `subtle` text color.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
