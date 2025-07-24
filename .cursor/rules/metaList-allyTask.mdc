# Accessibility Audit: MetaList

## Summary
The `MetaList` component displays a list of metadata items (icon + label) separated by dots. It's rendered as a `<div>` with `<span>` items.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The list of metadata items should be programmatically identified as a list, e.g., using `<ul>` and `<li>` or `role="list"` and `role="listitem"`.
    - The separators (dots) are currently rendered as `Icon` components but should be hidden from screen readers using `aria-hidden="true"`.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - The default `subtle` and `disabled` appearances for labels and separators must meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **List Structure**: Use `<ul>` and `<li>` elements or appropriate ARIA roles to define the list structure.
- [ ] **Hide Separators**: Add `aria-hidden="true"` to the separator icons.
- [ ] **Contrast Verification**: Audit the contrast of `subtle` and `disabled` appearances.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

