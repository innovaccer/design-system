# Accessibility Audit: Breadcrumbs

## Summary
The `Breadcrumbs` component provides a navigation trail. It uses a list of links and may include a dropdown for long paths.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The breadcrumbs should be wrapped in a `<nav>` element to identify it as a navigation landmark.
    - The separators (`/`) are currently rendered as `<span>` but should be hidden from screen readers using `aria-hidden="true"`.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `<nav>` element should have an `aria-label="Breadcrumb"` to distinguish it from other navigation landmarks.
    - The last item in the breadcrumb trail (the current page) should have `aria-current="page"`.
- **Success Criterion 2.4.4: Link Purpose (In Context) (Level A)**:
    - Ensure that the links have descriptive labels (already handled by `item.label`).

## Actionable Changes
- [ ] **Landmark Role**: Wrap the root element in a `<nav aria-label="Breadcrumb">`.
- [ ] **Current Page Indicator**: Add `aria-current="page"` to the last link in the breadcrumb list.
- [ ] **Hide Separators**: Add `aria-hidden="true"` to the `<span>` elements used for separators.
- [ ] **List Structure**: Consider using an ordered list (`<ol>` and `<li>`) for the breadcrumb items to provide better structure for screen readers.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
