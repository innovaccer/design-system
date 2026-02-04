# Accessibility Audit: Heading

## Summary
The `Heading` component renders heading elements (`h1` to `h5`) based on the `size` prop. It uses a `GenericText` component for rendering.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The mapping between `size` and heading level (`s` -> `h5`, `xxl` -> `h1`) is fixed. This can lead to skipped heading levels if not used carefully, which violates the principle of a logical heading hierarchy.
- **Success Criterion 2.4.6: Headings and Labels (Level AA)**:
    - Ensure that the heading text is descriptive.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure all `HeadingAppearance` and `color` combinations meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **Flexible Heading Levels**: Allow the user to specify the heading level (e.g., `h1`, `h2`, etc.) independently of the visual size. This ensures a proper document outline.
- [ ] **Contrast Audit**: Verify that the default colors and appearances meet WCAG AA contrast requirements.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
