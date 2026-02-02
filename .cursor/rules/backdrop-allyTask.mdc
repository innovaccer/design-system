# Accessibility Audit: Backdrop

## Summary
The `Backdrop` component creates a dimmed layer over the application, usually to emphasize a modal or loader. It manages body overflow to prevent scrolling.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The backdrop is often purely decorative or a functional overlay. If it's purely decorative, it should have `aria-hidden="true"`.
- **Success Criterion 2.4.3: Focus Order (Level A)**:
    - When a backdrop is open (especially for modals), focus should be trapped within the content above the backdrop. The backdrop itself should not be focusable.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The backdrop lacks a role. If it's part of a modal, it should be associated with the modal's container.

## Actionable Changes
- [ ] **Aria Hidden**: Add `aria-hidden="true"` to the backdrop element as it's usually decorative and shouldn't be interacted with by screen readers directly.
- [ ] **Focus Management**: Ensure that when the backdrop is active, focus is moved to the relevant content (this is usually handled by the parent component like Modal, but Backdrop should support it).
- [ ] **Inert Attribute**: Consider using the `inert` attribute on the rest of the page when the backdrop is active to prevent interaction with background elements.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
