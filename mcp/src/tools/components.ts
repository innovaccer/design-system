import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getComponents } from '../manifest/loader.js';

const getComponentSchema = {
  name: z.string().describe('Component name (e.g. "button", "modal", "datePicker")'),
};

const searchComponentsSchema = {
  query: z.string().describe('Search keyword (e.g. "date", "input", "nav", "card")'),
  limit: z.number().optional().describe('Max results (default 20)'),
};

export function registerComponentTools(server: McpServer): void {
  server.tool(
    'ds_list_components',
    'List all design system components grouped by category (atoms, molecules, organisms)',
    {},
    async () => {
      const manifest = getComponents();
      const grouped: Record<string, string[]> = {};

      for (const comp of manifest.components) {
        (grouped[comp.category] ??= []).push(comp.name);
      }

      let text = `# Masala Design System Components (v${manifest.version})\n\n`;
      text += `Total: ${manifest.components.length} components\n\n`;

      for (const [category, names] of Object.entries(grouped)) {
        text += `## ${category.charAt(0).toUpperCase() + category.slice(1)} (${names.length})\n`;
        text += names.map((n) => `- ${n}`).join('\n') + '\n\n';
      }

      return { content: [{ type: 'text' as const, text }] };
    }
  );

  server.tool(
    'ds_get_component',
    'Get full details for a component: props schema, variants, accessibility props, sub-components, and import path',
    getComponentSchema,
    async ({ name }: { name: string }) => {
      const manifest = getComponents();
      const q = name.toLowerCase().replace(/[-_\s]/g, '');
      const comp =
        manifest.components.find((c) => c.name.toLowerCase() === q) ||
        manifest.components.find((c) => c.name.toLowerCase().replace(/[-_\s]/g, '').includes(q));

      if (!comp) {
        return {
          content: [{
            type: 'text' as const,
            text: `Component "${name}" not found. Use ds_list_components to see available components.`,
          }],
          isError: true,
        };
      }

      let text = `# Component: ${comp.name}\n\n`;
      text += `- **Category**: ${comp.category}\n`;
      text += `- **Path**: ${comp.path}\n`;
      text += `- **Import**: \`import { ${comp.name.charAt(0).toUpperCase() + comp.name.slice(1)} } from '${comp.importPath}';\`\n\n`;

      if (comp.props.length > 0) {
        text += `## Props\n\n`;
        text += `| Name | Type | Required | Default | Description |\n`;
        text += `|------|------|----------|---------|-------------|\n`;
        for (const prop of comp.props) {
          text += `| ${prop.name} | \`${prop.type}\` | ${prop.required ? 'Yes' : 'No'} | ${prop.defaultValue || '-'} | ${prop.description || '-'} |\n`;
        }
        text += '\n';
      }

      if (Object.keys(comp.variants).length > 0) {
        text += `## Variants\n\n`;
        for (const [typeName, values] of Object.entries(comp.variants)) {
          text += `- **${typeName}**: ${values.map((v) => `\`'${v}'\``).join(' | ')}\n`;
        }
        text += '\n';
      }

      if (comp.a11yProps.length > 0) {
        text += `## Accessibility Props\n\n`;
        text += comp.a11yProps.map((p) => `- \`${p}\``).join('\n') + '\n\n';
      }

      if (comp.subComponents.length > 0) {
        text += `## Sub-Components\n\n`;
        text += comp.subComponents.map((s) => `- ${comp.name.charAt(0).toUpperCase() + comp.name.slice(1)}.${s}`).join('\n') + '\n';
      }

      return { content: [{ type: 'text' as const, text }] };
    }
  );

  server.tool(
    'ds_search_components',
    'Search components by name keyword',
    searchComponentsSchema,
    async ({ query, limit }: { query: string; limit?: number }) => {
      const manifest = getComponents();
      const maxResults = limit ?? 20;
      const q = query.toLowerCase();

      const matches = manifest.components
        .filter((c) =>
          c.name.toLowerCase().includes(q) ||
          c.category.includes(q) ||
          c.props.some((p) => p.name.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)) ||
          c.subComponents.some((s) => s.toLowerCase().includes(q))
        )
        .slice(0, maxResults);

      if (matches.length === 0) {
        return { content: [{ type: 'text' as const, text: `No components matching "${query}".` }] };
      }

      const text = `# Component search: "${query}" (${matches.length} results)\n\n` +
        matches
          .map((c) => `- **${c.name}** (${c.category}) — ${c.props.length} props, import from \`${c.importPath}\``)
          .join('\n');

      return { content: [{ type: 'text' as const, text }] };
    }
  );
}
