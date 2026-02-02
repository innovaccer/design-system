# Accessibility Audit: Flex

## Summary
The `Flex` component is a layout utility that provides a flexbox container. It's rendered as a `<div>`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - As a layout component, `Flex` itself doesn't have semantic meaning. However, if it's used to group related items, it might need a role like `group` or `list`.
    - Ensure that the order of items in the flex container matches the logical reading order, especially when using `row-reverse` or `column-reverse`.
- **Success Criterion 2.4.3: Focus Order (Level A)**:
    - If `flex-direction: row-reverse` or `column-reverse` is used, the visual order might differ from the DOM order, which can confuse keyboard users.

## Actionable Changes
- [ ] **Semantic Role**: Allow passing a `role` prop to the `Flex` component (e.g., `role="list"` if it contains list items).
- [ ] **Reading Order Warning**: Add documentation or a lint rule to warn developers about potential reading order issues when using `reverse` directions.
- [ ] **Polymorphic Component**: Consider allowing the `Flex` component to be rendered as different HTML elements (e.g., `section`, `nav`, `ul`) using an `as` prop to improve semantics.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
