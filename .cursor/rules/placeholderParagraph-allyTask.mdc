# Accessibility Audit: PlaceholderParagraph

## Summary
The `PlaceholderParagraph` component is a skeleton loader for text blocks. It's rendered as a `<div>` with an animated `<span>`.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.1.1: Non-text Content (Level A)**:
    - Like `PlaceholderImage`, skeleton loaders for text should be hidden from screen readers to avoid announcing empty or meaningless elements.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - It should have `aria-hidden="true"`.

## Actionable Changes
- [ ] **Aria Hidden**: Add `aria-hidden="true"` to the root element.
- [ ] **Loading State**: Ensure the parent container communicates the loading state (e.g., `aria-busy="true"`).

## WCAG 2.2 AA Success Criteria References
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
