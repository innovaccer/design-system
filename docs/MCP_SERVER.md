# Design System MCP Server

This repository now includes an MCP server that exposes the design-system context needed to build UI consistently.

## Run

```bash
npm run mcp:server
```

The server communicates over stdio using JSON-RPC messages (one JSON request per line).

## Exposed resources

- `design-system://components/index` – discovered component inventory with story/test/type paths.
- `design-system://component/<ComponentName>` – component implementation, types, stories, tests, and `core/index.type.tsx` export context.
- `design-system://tokens/raw` – `css/src/tokens/index.css`.
- `design-system://tokens/variables` – `css/src/variables/index.css`.
- `design-system://css/helpers` – utility CSS files and discovered helper class names.
- `design-system://a11y/guide` – a11y guide and WCAG JSON mapping.

## Exposed tools

- `search_components({ query })`
- `get_component_context({ componentName })`
- `get_tokens_context({})`
- `get_css_helpers_context({})`
- `get_accessibility_context({})`

## Typical usage

Use this MCP server in an LLM client to fetch:

- component props/types and examples from stories/tests,
- accessibility guidelines from `a11y-context/`,
- design-token values and semantic mappings,
- utility/helper CSS classes for layout and spacing.

This avoids hard-coding assumptions and keeps generated UI aligned with the codebase source of truth.
