import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getResources } from '../manifest/loader.js';

interface HelperClass {
  className: string;
  property: string;
  value: string;
  category: string;
}

let parsedCache: HelperClass[] | null = null;

function parseHelperClasses(css: string): HelperClass[] {
  if (parsedCache) return parsedCache;

  const results: HelperClass[] = [];
  const ruleRe = /\.([a-zA-Z][\w-]*)\s*\{([^}]+)\}/g;
  let match: RegExpExecArray | null;

  while ((match = ruleRe.exec(css)) !== null) {
    const className = match[1];
    const body = match[2].trim();

    const declRe = /([\w-]+)\s*:\s*([^;!]+)/g;
    let declMatch: RegExpExecArray | null;

    while ((declMatch = declRe.exec(body)) !== null) {
      const property = declMatch[1];
      const value = declMatch[2].trim();

      let category = 'other';
      if (/^(display)/.test(property)) category = 'display';
      else if (/^(flex|align|justify|order)/.test(property)) category = 'flexbox';
      else if (/^(margin|padding)/.test(property)) category = 'spacing';
      else if (/^(width|height|min-|max-)/.test(property)) category = 'sizing';
      else if (/^(overflow)/.test(property)) category = 'overflow';
      else if (/^(position|top|left|right|bottom|z-index)/.test(property)) category = 'position';
      else if (/^(cursor|pointer)/.test(property)) category = 'cursor';
      else if (/^(text|font|line-height|letter)/.test(property)) category = 'typography';
      else if (/^(border|rounded)/.test(property)) category = 'border';
      else if (/^(background|bg)/.test(property)) category = 'background';

      results.push({ className, property, value, category });
    }
  }

  parsedCache = results;
  return results;
}

const searchHelpersSchema = {
  query: z.string().describe('Search keyword — CSS property, value, or intent (e.g. "flex", "center", "margin", "hidden")'),
  category: z.string().optional().describe('Filter by category: display, flexbox, spacing, sizing, overflow, position, cursor, typography, border, background'),
  limit: z.number().optional().describe('Max results (default 20)'),
};

export function registerHelperTools(server: McpServer): void {
  server.tool(
    'ds_search_helpers',
    'Search CSS helper/utility classes by keyword, property, or intent. Use instead of inline styles for layout and spacing.',
    searchHelpersSchema,
    async ({ query, category, limit }: { query: string; category?: string; limit?: number }) => {
      const css = getResources().helperClasses;
      if (!css) {
        return { content: [{ type: 'text' as const, text: 'No helper classes available in manifest.' }] };
      }

      const helpers = parseHelperClasses(css);
      const maxResults = limit ?? 20;
      const q = query.toLowerCase();

      const matches = helpers
        .filter((h) => {
          if (category && h.category !== category) return false;
          return (
            h.className.toLowerCase().includes(q) ||
            h.property.toLowerCase().includes(q) ||
            h.value.toLowerCase().includes(q) ||
            h.category.toLowerCase().includes(q)
          );
        })
        .slice(0, maxResults);

      if (matches.length === 0) {
        return { content: [{ type: 'text' as const, text: `No helper classes matching "${query}"${category ? ` in category "${category}"` : ''}.` }] };
      }

      let text = `# Helper class search: "${query}" (${matches.length} results)\n\n`;
      text += `| Class | Property | Value | Category |\n`;
      text += `|-------|----------|-------|----------|\n`;
      for (const h of matches) {
        text += `| \`.${h.className}\` | \`${h.property}\` | \`${h.value}\` | ${h.category} |\n`;
      }

      text += `\n**Spacing scale**: 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 7=32px, 8=40px`;

      return { content: [{ type: 'text' as const, text }] };
    }
  );
}
