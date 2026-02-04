# Accessibility Audit: Avatar

## Summary
The `Avatar` component displays user images or initials. It's often used for identification. The main accessibility concerns are around its role and the information it provides to screen readers.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.1.1: Non-text Content (Level A)**:
    - If the avatar is purely decorative, it should have `aria-hidden="true"`.
    - If it's used to identify a person, it needs a proper text alternative (e.g., the person's name).
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `role="presentation"` is used by default, which might be incorrect if the avatar is the only indicator of a user.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Initials against the background color must meet contrast requirements.

## Actionable Changes
- [ ] **Dynamic `aria-label`**: If `firstName` and `lastName` are provided, use them as an `aria-label` on the avatar.
- [ ] **Presence/Status Announcement**: If `presence` or `status` is used, ensure this information is available to screen readers (e.g., "John Doe - Active").
- [ ] **Role Review**: Allow the `role` to be more easily overridden or default to `img` if it's representing a person.

## WCAG 2.2 AA Success Criteria References
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

