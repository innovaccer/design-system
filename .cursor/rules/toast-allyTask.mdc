# Accessibility Audit: Toast

## Summary
The `Toast` component provides brief feedback about an operation. It's usually displayed temporarily and should be accessible to screen readers.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The `Toast` container lacks a role. It should have `role="status"` or `role="alert"` depending on the severity.
    - The icons should be hidden from screen readers if they are redundant.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The close icon should have an `aria-label="Close"`.
- **Success Criterion 2.2.3: No Timing (Level AAA)**:
    - While Level AAA, Level AA requires that users have enough time to read the content. Toasts that disappear automatically can be problematic. Ensure there's a way to pause or extend the time, or that the information is available elsewhere.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the text and background colors for all appearances meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **Aria Role**: Add `role="status"` and `aria-live="polite"` for most toasts, or `role="alert"` and `aria-live="assertive"` for critical alerts.
- [ ] **Close Button Label**: Add `aria-label="Close"` to the close icon.
- [ ] **Hide Redundant Icons**: Add `aria-hidden="true"` to the status icon.
- [ ] **Persistence**: Ensure toasts containing important information or actions do not disappear too quickly, or provide a way to access them later.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
