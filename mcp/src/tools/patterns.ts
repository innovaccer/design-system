import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getPatterns } from '../manifest/loader.js';

const getPatternSchema = {
  name: z.string().describe('Pattern name (e.g. "Basic Form", "Sync Table With Filters")'),
};

export function registerPatternTools(server: McpServer): void {
  server.tool(
    'ds_list_patterns',
    'List all UI patterns (forms, layouts, tables, date pickers, etc.) with their categories',
    {},
    async () => {
      const manifest = getPatterns();
      const grouped: Record<string, string[]> = {};

      for (const pattern of manifest.patterns) {
        (grouped[pattern.category] ??= []).push(pattern.name);
      }

      let text = `# UI Patterns (v${manifest.version})\n\n`;
      text += `Total: ${manifest.patterns.length} patterns\n\n`;

      for (const [category, names] of Object.entries(grouped)) {
        text += `## ${category} (${names.length})\n`;
        text += names.map((n) => `- ${n}`).join('\n') + '\n\n';
      }

      return { content: [{ type: 'text' as const, text }] };
    }
  );

  server.tool(
    'ds_get_pattern',
    'Get a specific UI pattern with full code example and component references',
    getPatternSchema,
    async ({ name }: { name: string }) => {
      const manifest = getPatterns();
      const q = name.toLowerCase();

      const pattern = manifest.patterns.find(
        (p) => p.name.toLowerCase() === q || p.title.toLowerCase().includes(q)
      );

      if (!pattern) {
        return {
          content: [{
            type: 'text' as const,
            text: `Pattern "${name}" not found. Use ds_list_patterns to see available patterns.`,
          }],
          isError: true,
        };
      }

      let text = `# Pattern: ${pattern.name}\n\n`;
      text += `- **Category**: ${pattern.category}\n`;
      text += `- **Title**: ${pattern.title}\n`;

      if (pattern.components.length > 0) {
        text += `- **Components used**: ${pattern.components.join(', ')}\n`;
      }

      if (pattern.sandboxUrl) {
        text += `- **Sandbox**: ${pattern.sandboxUrl}\n`;
      }

      text += '\n';

      if (pattern.code) {
        text += `## Code\n\n\`\`\`tsx\n${pattern.code}\n\`\`\`\n`;
      }

      return { content: [{ type: 'text' as const, text }] };
    }
  );
}
