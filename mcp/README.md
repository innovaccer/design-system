# @innovaccer/mds-mcp

MCP (Model Context Protocol) server for the Masala Design System. Enables AI coding tools (Cursor, Claude Code, Windsurf, OpenWebUI) to correctly use the design system's components, tokens, patterns, and examples.

## Features

- **11 tools**: tokens, components, examples, patterns, and code validation
- **5 resources**: tokens, CSS variables, coding conventions, exports, types
- **Deterministic**: no AI inside MCP, pure static lookup and AST validation
- **Dual transport**: stdio (default, for Cursor/Claude) and HTTP (for OpenWebUI)

## Install

```bash
npm install -g @innovaccer/mds-mcp
```

## Usage

### Cursor

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "masala-design-system": {
      "command": "mds-mcp"
    }
  }
}
```

### Claude Code

```bash
claude mcp add masala-design-system mds-mcp
```

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "masala-design-system": {
      "command": "mds-mcp"
    }
  }
}
```

### HTTP (OpenWebUI / remote clients)

```bash
mds-mcp --http --port 3100
```

Endpoint: `http://localhost:3100/mcp`
Health check: `http://localhost:3100/health`

## Available Tools

| Tool | Description |
|------|-------------|
| `ds_list_tokens` | List design tokens by namespace |
| `ds_get_token` | Get a specific token's details |
| `ds_search_tokens` | Search tokens by name/value |
| `ds_list_components` | List all components by category |
| `ds_get_component` | Get component props, variants, a11y info |
| `ds_search_components` | Search components by keyword |
| `ds_search_examples` | Search usage examples |
| `ds_get_example` | Get full example code |
| `ds_list_patterns` | List UI patterns |
| `ds_get_pattern` | Get pattern code and components |
| `ds_validate_code` | Validate code for DS compliance |

## Validation Rules

`ds_validate_code` checks for:

- **no-raw-html-controls**: Flags `<input>`, `<button>`, `<select>`, `<textarea>` (use DS components)
- **no-hardcoded-colors**: Flags hex/rgb values in color properties (use `var(--token)`)
- **tokens-only**: Flags hardcoded px/rem for sizing (use spacing tokens)
- **approved-imports**: Flags imports from non-approved UI libraries

## Development

```bash
cd mcp

# Install dependencies
npm install

# Generate manifest from design system source
npm run generate

# Type check
npx tsc --noEmit

# Run tests
npm test

# Build
npm run build

# Run locally
node dist/cli.js
```
