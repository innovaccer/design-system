---
name: build-ui
description: Build UI components for this DataShop module using the Masala Design System. Use when creating or modifying React components, layouts, tables, forms, or empty/error states. Covers component lookup, CSS helper classes, design tokens, and code validation.
---

Build UI components for this DataShop module using `@innovaccer/design-system`. Follow this workflow:

## Workflow

1. **Find the right component** — use the masala-design-system MCP before writing any UI:
   - `ds_list_components` — browse all components by category
   - `ds_search_components("keyword")` — find by keyword
   - `ds_get_component("ComponentName")` — get props, variants, import path
   - `ds_search_examples("table")` / `ds_get_example(id)` — find usage examples

2. **Find layout patterns** — `ds_list_patterns` / `ds_get_pattern(id)`

3. **Write the component** following the rules below

4. **Validate** — `ds_validate_code(code)` — catches raw HTML, hardcoded values, non-token usage

## Rules

**Never use inline `style` for layout/spacing/alignment** — use CSS helper classes:
```tsx
// Wrong
<div style={{ display: 'flex', marginTop: '16px', padding: '24px' }}>

// Correct
<div className="d-flex mt-4 p-6">
```

**Never hardcode colors, font sizes, or pixel values** — use design tokens:
```tsx
// Wrong
<div style={{ borderRight: '1px solid #e5e5e5', color: '#333' }}>

// Correct (only when no helper class exists)
<div style={{ borderRight: 'var(--border)', color: 'var(--inverse-lighter)' }}>
```

**Never write custom CSS** when a helper class or design token exists.

## Common CSS Helper Classes

| Class | Purpose |
|-------|---------|
| `d-flex`, `d-block`, `d-none` | Display |
| `flex-column`, `flex-row`, `flex-wrap` | Flex direction |
| `justify-content-{start,center,end,between}` | Justify |
| `align-items-{start,center,end,stretch}` | Align |
| `mt-4`, `px-6`, `mb-2`, `p-5` | Margin/padding (scale: 4=16px, 5=20px, 6=24px, 7=32px) |
| `w-100`, `h-100`, `w-50` | Sizing |
| `overflow-hidden`, `overflow-auto` | Overflow |
| `cursor-pointer` | Cursor |

## Key Component Patterns

### Loading state
```tsx
<Placeholder withImage={false}>
  <PlaceholderParagraph length="large" />
  <PlaceholderParagraph length="medium" />
</Placeholder>
```

### Error state
```tsx
<Message appearance="alert" description={error} />
```

### Empty/error state (full)
```tsx
import errorImage from '@innovaccer/mds-images/ui-states/something-went-wrong.svg';
<EmptyState>
  <EmptyState.Image><img src={errorImage} alt="error" /></EmptyState.Image>
  <EmptyState.Title>Something went wrong</EmptyState.Title>
  <EmptyState.Description>An unexpected error occurred.</EmptyState.Description>
  <EmptyState.Actions>
    <Button styleType="outlined" onClick={handleRetry}>Try Again</Button>
  </EmptyState.Actions>
</EmptyState>
```

### Table
```tsx
<Table
  type="resource"
  fetchData={fetchData}
  loaderSchema={schema}
  withHeader
  withPagination
  pageSize={10}
  headerOptions={{ withSearch: true }}
  errorTemplate={errorTemplate}
/>
```

### Layout (sidebar + content)
```tsx
<div className="d-flex h-100 overflow-auto">
  <div style={{ width: '256px', borderRight: 'var(--border)' }}>
    <VerticalNav menus={menus} active={active} onClick={handleNav} />
  </div>
  <div className="flex-grow-1 overflow-auto">
    <Outlet />
  </div>
</div>
```

## Providers & Hooks

- Use `useAuth()` from `ui/providers` for user-specific UI (e.g. showing the current user's name, checking permissions).
- Use `useAlertService()` from `ui/providers` for toast notifications (`alertService?.add({ title, message, appearance })`).
- `PageTransition` is already applied in layouts — do not add transition wrappers in individual pages.

## No CSS imports needed
`@innovaccer/design-system/css` is provided by the datashop shell — do not import it.
