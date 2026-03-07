import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getTokens } from '../manifest/loader.js';

const listTokensSchema = {
  namespace: z
    .string()
    .optional()
    .describe('Filter by token namespace (e.g. "colors", "spacing", "typography")'),
};

const getTokenSchema = {
  name: z.string().describe('Token name including -- prefix (e.g. "--primary", "--spacing-40")'),
};

const searchTokensSchema = {
  query: z.string().describe('Search query (matched against token names and values)'),
  limit: z.number().optional().describe('Max results to return (default 20)'),
};

export function registerTokenTools(server: McpServer): void {
  server.tool(
    'ds_list_tokens',
    'List all design tokens, optionally filtered by namespace (rawColors, colors, spacing, typography, shadows, borders, animation, opacity, grid, other)',
    listTokensSchema,
    // @ts-ignore -- MCP SDK deep type instantiation (TS2589)
    async ({ namespace }: { namespace?: string }) => {
      const manifest = getTokens();
      const namespaces = namespace
        ? { [namespace]: manifest.namespaces[namespace] }
        : manifest.namespaces;

      if (namespace && !manifest.namespaces[namespace]) {
        return {
          content: [{
            type: 'text' as const,
            text: `Namespace "${namespace}" not found. Available: ${Object.keys(manifest.namespaces).join(', ')}`,
          }],
          isError: true,
        };
      }

      let text = `# Design Tokens (v${manifest.version})\n\n`;
      for (const [ns, tokens] of Object.entries(namespaces)) {
        if (!tokens) continue;
        const entries = Object.entries(tokens);
        text += `## ${ns} (${entries.length})\n`;
        for (const [name, entry] of entries) {
          const parts = [`\`${name}\`: ${entry.value}`];
          if (entry.resolved) parts.push(`→ ${entry.resolved}`);
          if (entry.deprecated) parts.push('*(deprecated)*');
          text += `- ${parts.join(' ')}\n`;
        }
        text += '\n';
      }
      return { content: [{ type: 'text' as const, text }] };
    }
  );

  server.tool(
    'ds_get_token',
    'Get details for a specific design token by name',
    getTokenSchema,
    async ({ name }: { name: string }) => {
      const manifest = getTokens();
      for (const [ns, tokens] of Object.entries(manifest.namespaces)) {
        if (tokens[name]) {
          const entry = tokens[name];
          const details: Record<string, string | boolean | undefined> = {
            name,
            namespace: ns,
            value: entry.value,
            resolved: entry.resolved,
            category: entry.category,
            deprecated: entry.deprecated,
          };

          return {
            content: [{
              type: 'text' as const,
              text: `# Token: ${name}\n\n${Object.entries(details)
                .filter(([, v]) => v !== undefined)
                .map(([k, v]) => `- **${k}**: ${v}`)
                .join('\n')}`,
            }],
          };
        }
      }
      return {
        content: [{ type: 'text' as const, text: `Token "${name}" not found. Use ds_search_tokens to search.` }],
        isError: true,
      };
    }
  );

  server.tool(
    'ds_search_tokens',
    'Search design tokens by name or value substring',
    searchTokensSchema,
    // @ts-ignore -- MCP SDK deep type instantiation (TS2589)
    async ({ query, limit }: { query: string; limit?: number }) => {
      const manifest = getTokens();
      const maxResults = limit ?? 20;
      const q = query.toLowerCase();
      const matches: Array<{ ns: string; name: string; value: string; resolved?: string }> = [];

      for (const [ns, tokens] of Object.entries(manifest.namespaces)) {
        for (const [name, entry] of Object.entries(tokens)) {
          if (
            name.toLowerCase().includes(q) ||
            entry.value.toLowerCase().includes(q) ||
            entry.resolved?.toLowerCase().includes(q)
          ) {
            matches.push({ ns, name, value: entry.value, resolved: entry.resolved });
            if (matches.length >= maxResults) break;
          }
        }
        if (matches.length >= maxResults) break;
      }

      if (matches.length === 0) {
        return { content: [{ type: 'text' as const, text: `No tokens matching "${query}".` }] };
      }

      const text = `# Token search: "${query}" (${matches.length} results)\n\n` +
        matches
          .map((m) => `- \`${m.name}\` (${m.ns}): ${m.value}${m.resolved ? ` → ${m.resolved}` : ''}`)
          .join('\n');

      return { content: [{ type: 'text' as const, text }] };
    }
  );
}
