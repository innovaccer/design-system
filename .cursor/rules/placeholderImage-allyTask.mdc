# Accessibility Audit: PlaceholderImage

## Summary
The `PlaceholderImage` component is a skeleton loader for images. It's rendered as a `<span>` with an animation.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.1.1: Non-text Content (Level A)**:
    - Skeleton loaders should be hidden from screen readers to avoid noise, or they should communicate that content is loading.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - It should have `aria-hidden="true"` if it's purely decorative during loading.
- **Success Criterion 2.2.2: Pause, Stop, Hide (Level A)**:
    - The loading animation should not be distracting.

## Actionable Changes
- [ ] **Aria Hidden**: Add `aria-hidden="true"` to the placeholder as it's a temporary visual state and doesn't provide semantic content.
- [ ] **Loading Announcement**: Ensure the parent container has `aria-busy="true"` while placeholders are visible.

## WCAG 2.2 AA Success Criteria References
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
