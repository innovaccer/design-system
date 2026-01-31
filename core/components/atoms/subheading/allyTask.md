# Accessibility Audit: Subheading

## Summary
The `Subheading` component renders an `h4` element. It supports various appearances and colors.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The component is hardcoded to use `h4`. This can lead to skipped heading levels if not used correctly in the document hierarchy.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure all appearance and color combinations meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **Flexible Heading Level**: Allow users to specify the heading level (e.g., `h2`, `h3`, `h4`) to maintain a proper document outline.
- [ ] **Contrast Verification**: Audit default colors for contrast compliance.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

