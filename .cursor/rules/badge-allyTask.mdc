# Accessibility Audit: Badge

## Summary
The `Badge` component is used to highlight a status or a count. It's rendered as a `<span>`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Depending on the `appearance` and `subtle` props, the text color against the background color must meet the 4.5:1 contrast ratio.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - If the badge conveys status (e.g., "Error", "Success"), this information should be available to screen readers, possibly via an `aria-label` or by ensuring the text content is descriptive.
- **Success Criterion 1.4.1: Use of Color (Level A)**:
    - Status should not be conveyed by color alone. The text content should also reflect the status.

## Actionable Changes
- [ ] **Contrast Verification**: Audit all `appearance` and `subtle` combinations in `badge.module.css` to ensure they meet WCAG AA contrast requirements.
- [ ] **Aria Label Support**: Allow passing an `aria-label` to provide more context to screen readers (e.g., "Status: New" instead of just "New").
- [ ] **Role**: Consider if `role="status"` or `role="img"` (with label) is appropriate depending on usage.

## WCAG 2.2 AA Success Criteria References
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
