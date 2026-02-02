# Accessibility Audit: MdsGrid

## Summary
The `MdsGrid` component is a layout utility that provides a CSS grid container. It's rendered as a `<div>`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - As a layout component, `MdsGrid` itself doesn't have semantic meaning. However, if it's used to group related items, it might need a role like `group` or `list`.
    - Ensure that the order of items in the grid matches the logical reading order.
- **Success Criterion 1.4.10: Reflow (Level AA)**:
    - Ensure that the grid system supports reflow and doesn't require two-dimensional scrolling at 400% zoom.

## Actionable Changes
- [ ] **Semantic Role**: Allow passing a `role` prop.
- [ ] **Reading Order Warning**: Add documentation to warn developers about potential reading order issues when using complex grid placements.
- [ ] **Polymorphic Component**: Consider allowing the `MdsGrid` component to be rendered as different HTML elements (e.g., `section`, `nav`, `ul`) using an `as` prop.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

