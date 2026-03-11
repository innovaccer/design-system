---
name: implement-design
description: Implement a UI design from Figma in this DataShop module. Use when given a Figma link, design spec, or screenshot to implement. Covers extracting specs from Figma, mapping to Masala Design System components, writing compliant code, and validating the result.
---

Implement a UI design for this DataShop module by mapping Figma specs to Masala Design System components.

## Workflow

### 1. Extract specs from Figma
Use the Figma Dev Mode MCP to extract from the design:
- Component names and hierarchy
- Spacing values (map to design token scale)
- Colors (map to CSS custom properties)
- Typography (map to `Heading`/`Text` props)
- Interactive states (hover, active, disabled, error)

### 2. Map to Masala Design System
Use the masala-design-system MCP to find matching components:

```
ds_search_components("keyword")     → find component by name/concept
ds_get_component("ComponentName")   → get exact props and variants
ds_search_tokens("spacing-l")       → map Figma values to design tokens
ds_get_token("--primary")           → get token value and CSS custom property
ds_list_patterns                    → find matching layout patterns
ds_get_pattern("form-layout")       → get pattern code template
ds_search_examples("data table")    → find usage examples
```

### 3. Map spacing to helper classes
Convert Figma pixel values to the spacing scale:

| Figma px | Scale | Class example |
|----------|-------|---------------|
| 4px  | 1 | `mt-1`, `p-1` |
| 8px  | 2 | `mt-2`, `p-2` |
| 12px | 3 | `mt-3`, `p-3` |
| 16px | 4 | `mt-4`, `p-4` |
| 20px | 5 | `mt-5`, `p-5` |
| 24px | 6 | `mt-6`, `p-6` |
| 32px | 7 | `mt-7`, `p-7` |
| 40px | 8 | `mt-8`, `p-8` |

### 4. Write the component
- Use MDS components — no raw `div`/`span`/`p` when a design system component exists
- Use CSS helper classes for all layout/spacing — never inline `style` for layout
- Only use `style` prop with `var(--token)` when no helper class covers the case
- Never hardcode hex colors, px font sizes, or literal spacing values

### 5. Validate
```
ds_validate_code(code)   → checks for raw HTML, hardcoded values, missing helper classes
```

### 6. Visual check
Use Chrome DevTools MCP to compare the implementation against the design:
```
take_screenshot          → capture the rendered result
```
Compare spacing, alignment, colors, and interactive states against the Figma spec.

## Figma → MDS component mapping hints

| Figma pattern | MDS component |
|---------------|--------------|
| Primary/Secondary button | `Button` with `appearance="primary"/"basic"` |
| Status badge/chip | `Badge` or `StatusHint` |
| Data table | `Table` with `fetchData` pattern |
| Modal/overlay | `Modal` or `Sidesheet` |
| Form field | `Input` + `Label` |
| Toast/notification | `Toast` |
| Navigation sidebar | `VerticalNav` |
| Card container | `Card` |
| Page heading | `Heading size="xl"/"m"` |
| Body text | `Text appearance="subtle"` |
| Empty state | `EmptyState` with mds-images |
