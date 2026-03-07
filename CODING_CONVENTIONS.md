# Masala Design System — Coding Conventions

These conventions apply to any project that **consumes** `@innovaccer/design-system`.
Follow them to keep UIs consistent, accessible, and maintainable.

---

## 1. Use Design System Components — No Custom Replacements

- **Always** use components from `@innovaccer/design-system` for UI elements.
- **Never** create custom versions of components that already exist in the design system (buttons, inputs, modals, cards, dropdowns, etc.).
- If a component doesn't cover your use case, open a request — don't fork or wrap it with custom styling.

```tsx
// WRONG — custom button
const MyButton = ({ children, ...props }) => (
  <button className="my-btn" {...props}>{children}</button>
);

// CORRECT
import { Button } from '@innovaccer/design-system';
<Button appearance="primary">Submit</Button>
```

---

## 2. No Direct Styling — Use Tokens and Helper Classes

### Do not use inline styles or hardcoded values

- **No** `style={{ }}` props for layout, colors, spacing, or typography.
- **No** hardcoded hex colors (`#ff0000`), rgb values, or pixel sizes in CSS/JSX.
- **No** custom CSS for spacing, colors, borders, shadows, or typography — use design tokens.

```tsx
// WRONG
<div style={{ padding: '16px', color: '#0070dd', marginTop: '8px' }}>

// CORRECT
<div className="p-5 mt-3" style={{ color: 'var(--primary)' }}>
```

### Use CSS token variables

All colors, spacing, borders, shadows, radii, and typography values must come from design tokens:

```css
/* WRONG */
.card { padding: 16px; border: 1px solid #ccc; border-radius: 4px; }

/* CORRECT */
.card {
  padding: var(--spacing-40);
  border: var(--border-thin) solid var(--secondary-light);
  border-radius: var(--border-radius-10);
}
```

### Use helper classes for common patterns

The design system provides utility CSS classes. Use them instead of writing custom CSS:

- **Spacing**: `p-{n}`, `m-{n}`, `px-{n}`, `py-{n}`, `mt-{n}`, `mb-{n}`, etc.
- **Flex**: `d-flex`, `flex-row`, `flex-column`, `justify-content-center`, `align-items-center`
- **Display**: `d-block`, `d-inline`, `d-none`, `d-flex`, `d-grid`
- **Text**: `text-align-center`, `font-weight-bold`, `ellipsis--noWrap`
- **Position**: `position-relative`, `position-absolute`, `position-fixed`
- **Sizing**: `w-100`, `h-100`
- **Background**: `bg-primary`, `bg-secondary`, `bg-success`, `bg-alert`, `bg-warning`
- **Border**: `border`, `border-top`, `border-bottom`, `rounded`
- **Overflow**: `overflow-hidden`, `overflow-auto`
- **Cursor**: `cursor-pointer`

```tsx
// WRONG — custom CSS for simple layout
<div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>

// CORRECT — helper classes
<div className="d-flex justify-content-center p-5">
```

---

## 3. No Third-Party UI Libraries

- **Do not** import from `@mui`, `@chakra-ui`, `antd`, `react-bootstrap`, `@radix-ui`, `@headlessui`, `semantic-ui-react`, `@blueprintjs`, or `@mantine`.
- Use `ds_search_components` to find the equivalent design system component.

---

## 4. Import Conventions

```tsx
// Components — always from the package root
import { Button, Input, Modal, Card } from '@innovaccer/design-system';

// WRONG — deep imports
import Button from '@innovaccer/design-system/core/components/atoms/button';
```

---

## 5. Component Usage Guidelines

### Props over custom styling

Use component props and variants to customize appearance — don't override with CSS:

```tsx
// WRONG — CSS override
<Button className="my-large-red-btn">Click</Button>

// CORRECT — use props
<Button appearance="alert" size="large">Click</Button>
```

### Composition over custom components

Use sub-components and composition patterns provided by the design system:

```tsx
// CORRECT — composition with DS components
<Card>
  <CardHeader>
    <Heading size="s">Title</Heading>
  </CardHeader>
  <CardBody>
    <Text>Content here</Text>
  </CardBody>
</Card>
```

### Accessibility

- Use the `aria-label`, `role`, and `tabIndex` props provided by DS components.
- Do not remove or override ARIA attributes set by the design system.
- Test keyboard navigation when composing layouts.

---

## 6. When Custom CSS Is Acceptable

Custom CSS is appropriate **only** for:

- Application-specific layout (page grids, route containers)
- Animations or transitions not covered by the design system
- Third-party integrations (maps, charts, embeds)

Even in these cases, use design tokens for all values (colors, spacing, radii, shadows).

---

## Summary

| Do | Don't |
|----|-------|
| Import from `@innovaccer/design-system` | Create custom UI components |
| Use `var(--token)` for all values | Hardcode hex, rgb, px, or rem |
| Use helper classes (`d-flex`, `p-5`, etc.) | Write custom CSS for common patterns |
| Use component props for variants | Override styles with className/style |
| Compose with DS sub-components | Wrap DS components with custom styling |
| Use DS spacing tokens | Use arbitrary spacing values |
