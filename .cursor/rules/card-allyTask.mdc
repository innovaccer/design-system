# Accessibility Audit: Card

## Summary
The `Card` component is a container for content. It's rendered as a `<div>` and supports different shadow levels.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - As a layout component, `Card` itself doesn't have semantic meaning. However, if it's used to group related items, it might need a role like `region` or `article`.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - If the card has a title, it should be associated with the card's container using `aria-labelledby`.

## Actionable Changes
- [ ] **Semantic Role**: Allow passing a `role` prop (e.g., `role="region"` or `role="article"`).
- [ ] **Aria Labeling**: Support `aria-labelledby` to link the card to its header/title.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
