# Accessibility Audit: Caption

## Summary
The `Caption` component is used to provide additional information or error messages, typically below an input. It uses `Text` and optionally an `Icon`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - If used as an error message, it should be programmatically associated with the input using `aria-describedby`.
    - The error icon should be hidden from screen readers if the text already communicates the error.
- **Success Criterion 3.3.1: Error Identification (Level A)**:
    - When `error` is true, the message should be clearly identified. Adding `role="alert"` can ensure it's announced by screen readers.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - The `subtle` appearance must meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **Aria Role**: Add `role="alert"` when `error` is true.
- [ ] **Aria Describedby**: Ensure parent components link the `Caption` to the relevant input.
- [ ] **Hide Redundant Icon**: Add `aria-hidden="true"` to the error icon.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
