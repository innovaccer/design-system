# @innovaccer/mds-mcp

MCP (Model Context Protocol) server for the Masala Design System. Enables AI coding tools (Cursor, Claude Code, OpenWebUI) to correctly use the design system's components, tokens, patterns, and examples.

## Features

- **11 tools**: tokens, components, examples, patterns, and code validation
- **5 resources**: tokens, CSS variables, coding conventions, exports, types
- **Deterministic**: no AI inside MCP, pure static lookup and AST validation
- **Dual transport**: stdio (default, for Cursor/Claude) and HTTP (for OpenWebUI)

## Quick Start

### 1. Generate the manifest

```bash
npm run generate -w mcp
```

### 2. Build

```bash
npm run build -w mcp
```

### 3. Run

**stdio (default)**:
```bash
node mcp/dist/cli.js
```

**HTTP**:
```bash
node mcp/dist/cli.js --http --port 3100
```

## Cursor Configuration

Add to your project's `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "masala-design-system": {
      "command": "node",
      "args": ["./mcp/dist/cli.js"]
    }
  }
}
```

## Claude Code Configuration

```bash
claude mcp add masala-design-system node ./mcp/dist/cli.js
```

## Available Tools

| Tool | Description |
|------|-------------|
| `ds.list_tokens` | List design tokens by namespace |
| `ds.get_token` | Get a specific token's details |
| `ds.search_tokens` | Search tokens by name/value |
| `ds.list_components` | List all components by category |
| `ds.get_component` | Get component props, variants, a11y info |
| `ds.search_components` | Search components by keyword |
| `ds.search_examples` | Search usage examples |
| `ds.get_example` | Get full example code |
| `ds.list_patterns` | List UI patterns |
| `ds.get_pattern` | Get pattern code and components |
| `ds.validate_code` | Validate code for DS compliance |

## Validation Rules

`ds.validate_code` checks for:

- **no-raw-html-controls**: Flags `<input>`, `<button>`, `<select>`, `<textarea>` (use DS components)
- **no-hardcoded-colors**: Flags hex/rgb values in color properties (use `var(--token)`)
- **tokens-only**: Flags hardcoded px/rem for sizing (use spacing tokens)
- **approved-imports**: Flags imports from non-approved UI libraries

## Development

```bash
# Generate manifest from design system source
npm run generate -w mcp

# Type check
cd mcp && npx tsc --noEmit

# Run tests
npm run test -w mcp

# Build
npm run build -w mcp
```
