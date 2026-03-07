import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getExamples } from '../manifest/loader.js';

const searchExamplesSchema = {
  query: z.string().describe('Search keyword (matched against title, code, tags)'),
  component: z.string().optional().describe('Filter by component name'),
  limit: z.number().optional().describe('Max results (default 10)'),
};

const getExampleSchema = {
  id: z.string().describe('Example ID (from ds_search_examples results)'),
};

export function registerExampleTools(server: McpServer): void {
  server.tool(
    'ds_search_examples',
    'Search component usage examples by keyword, optionally filtered by component name',
    searchExamplesSchema,
    async ({ query, component, limit }: { query: string; component?: string; limit?: number }) => {
      const examples = getExamples();
      const maxResults = limit ?? 10;
      const q = query.toLowerCase();

      const matches = examples
        .filter((ex) => {
          if (component && ex.component.toLowerCase() !== component.toLowerCase()) return false;
          return (
            ex.title.toLowerCase().includes(q) ||
            ex.code.toLowerCase().includes(q) ||
            ex.tags.some((t) => t.toLowerCase().includes(q)) ||
            ex.component.toLowerCase().includes(q)
          );
        })
        .slice(0, maxResults);

      if (matches.length === 0) {
        return { content: [{ type: 'text' as const, text: `No examples matching "${query}"${component ? ` for component "${component}"` : ''}.` }] };
      }

      let text = `# Example search: "${query}" (${matches.length} results)\n\n`;
      for (const ex of matches) {
        text += `## ${ex.title}\n`;
        text += `- **ID**: ${ex.id}\n`;
        text += `- **Component**: ${ex.component} (${ex.category})\n`;
        text += `- **Tags**: ${ex.tags.join(', ')}\n\n`;
        text += `\`\`\`tsx\n${ex.code.slice(0, 500)}${ex.code.length > 500 ? '\n// ... truncated, use ds_get_example for full code' : ''}\n\`\`\`\n\n---\n\n`;
      }

      return { content: [{ type: 'text' as const, text }] };
    }
  );

  server.tool(
    'ds_get_example',
    'Get a specific usage example by ID with full code and imports',
    getExampleSchema,
    async ({ id }: { id: string }) => {
      const examples = getExamples();
      const example = examples.find((ex) => ex.id === id);

      if (!example) {
        return {
          content: [{ type: 'text' as const, text: `Example "${id}" not found. Use ds_search_examples to find examples.` }],
          isError: true,
        };
      }

      let text = `# Example: ${example.title}\n\n`;
      text += `- **Component**: ${example.component} (${example.category})\n`;
      text += `- **Tags**: ${example.tags.join(', ')}\n\n`;

      if (example.imports.length > 0) {
        text += `## Imports\n\n\`\`\`tsx\n${example.imports.join('\n')}\n\`\`\`\n\n`;
      }

      text += `## Code\n\n\`\`\`tsx\n${example.code}\n\`\`\`\n`;

      return { content: [{ type: 'text' as const, text }] };
    }
  );
}
