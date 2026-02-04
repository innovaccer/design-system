# Accessibility Audit: Label

## Summary
The `Label` component provides a label for form elements. It supports required indicators, optional text, and info tooltips.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The required indicator is a `<span>` with a background color but no text content or `aria-label`. Screen readers won't announce that the field is required.
    - The `info` tooltip icon should have an `aria-label` like "More information".
- **Success Criterion 3.3.2: Labels or Instructions (Level A)**:
    - Ensure the `Label` is correctly associated with an input using the `htmlFor` prop (passed via `...rest` to the native `label` element).
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - The `subtle` appearance for optional text and the info icon must meet contrast requirements.

## Actionable Changes
- [ ] **Required Indicator Label**: Add `aria-label="required"` or `aria-hidden="true"` (if `aria-required` is used on the input) to the required indicator. A better approach is to use a visible asterisk `*` with `aria-hidden="true"` and ensure the input has `aria-required="true"`.
- [ ] **Info Icon Label**: Add `aria-label="More information"` to the info icon.
- [ ] **Optional Text Contrast**: Verify the contrast ratio for the "(optional)" text.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
