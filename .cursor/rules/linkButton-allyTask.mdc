# Accessibility Audit: LinkButton

## Summary
The `LinkButton` component is a button that visually resembles a link. It uses the native `<button>` element.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - While it uses a native button, its visual appearance as a link might be confusing. Ensure it behaves like a button (e.g., handles `Space` and `Enter`).
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - The `subtle` appearance must meet the 4.5:1 contrast ratio.
- **Success Criterion 2.4.7: Focus Visible (Level AA)**:
    - Ensure the focus state is clearly visible, even if it looks like a link.

## Actionable Changes
- [ ] **Contrast Verification**: Audit the `subtle` appearance contrast.
- [ ] **Focus Ring**: Ensure a clear focus ring is visible when focused via keyboard.
- [ ] **Aria Label**: If the button contains only an icon (though `children` is required in props), ensure an `aria-label` is used.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
