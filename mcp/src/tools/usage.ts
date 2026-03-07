import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getUsage } from '../manifest/loader.js';

const getUsageSchema = {
  component: z.string().describe('Component name (e.g. "button", "inputs", "modal", "datePicker")'),
};

const searchUsageSchema = {
  query: z.string().describe('Search keyword (matched against title, description, keywords, content)'),
  limit: z.number().optional().describe('Max results (default 10)'),
};

export function registerUsageTools(server: McpServer): void {
  server.tool(
    'ds_get_usage',
    'Get usage guidelines for a component: types, variants, sizes, states, and best practices',
    getUsageSchema,
    async ({ component }: { component: string }) => {
      const manifest = getUsage();
      const q = component.toLowerCase().replace(/[-_\s]/g, '');

      const entry =
        manifest.entries.find((e) => e.component.toLowerCase() === q) ||
        manifest.entries.find((e) => e.component.toLowerCase().replace(/[-_\s]/g, '').includes(q)) ||
        manifest.entries.find((e) => e.title.toLowerCase().replace(/[-_\s]/g, '').includes(q));

      if (!entry) {
        const available = manifest.entries.map((e) => e.component).join(', ');
        return {
          content: [{
            type: 'text' as const,
            text: `No usage guidelines found for "${component}". Available: ${available}`,
          }],
          isError: true,
        };
      }

      let text = `# ${entry.title} — Usage Guidelines\n\n`;
      if (entry.description) text += `${entry.description}\n\n`;
      if (entry.keywords.length > 0) text += `**Keywords**: ${entry.keywords.join(', ')}\n\n---\n\n`;
      text += entry.content;

      return { content: [{ type: 'text' as const, text }] };
    }
  );

  server.tool(
    'ds_search_usage',
    'Search component usage guidelines by keyword',
    searchUsageSchema,
    async ({ query, limit }: { query: string; limit?: number }) => {
      const manifest = getUsage();
      const maxResults = limit ?? 10;
      const q = query.toLowerCase();

      const matches = manifest.entries
        .filter((e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.keywords.some((k) => k.toLowerCase().includes(q)) ||
          e.content.toLowerCase().includes(q)
        )
        .slice(0, maxResults);

      if (matches.length === 0) {
        return { content: [{ type: 'text' as const, text: `No usage guidelines matching "${query}".` }] };
      }

      let text = `# Usage search: "${query}" (${matches.length} results)\n\n`;
      for (const entry of matches) {
        text += `## ${entry.title}\n`;
        text += `- **Component**: ${entry.component}\n`;
        if (entry.description) text += `- **Description**: ${entry.description}\n`;
        if (entry.keywords.length > 0) text += `- **Keywords**: ${entry.keywords.join(', ')}\n`;
        text += `\nUse \`ds_get_usage\` with component="${entry.component}" for full guidelines.\n\n---\n\n`;
      }

      return { content: [{ type: 'text' as const, text }] };
    }
  );
}
