# Accessibility Audit: Column

## Summary
The `Column` component is a layout utility used within a grid system. It's rendered as a `<div>`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - As a layout component, `Column` itself doesn't have semantic meaning. However, if it's used to group related items, it might need a role like `group` or `listitem`.
- **Success Criterion 1.4.10: Reflow (Level AA)**:
    - Ensure that the grid system (including `Column`) supports reflow and doesn't require two-dimensional scrolling at 400% zoom.

## Actionable Changes
- [ ] **Semantic Role**: Allow passing a `role` prop.
- [ ] **Polymorphic Component**: Consider allowing the `Column` component to be rendered as different HTML elements (e.g., `li`, `section`) using an `as` prop.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
