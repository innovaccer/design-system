import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { validateCode } from '../validation/engine.js';

const validateCodeSchema = {
  code: z.string().describe('The source code to validate'),
  filename: z.string().optional().describe('Optional filename for context (e.g. "App.tsx")'),
};

export function registerValidationTools(server: McpServer): void {
  server.tool(
    'ds_validate_code',
    'Validate code for design system compliance: checks for raw HTML controls, hardcoded colors, non-token sizes, and unapproved imports',
    validateCodeSchema,
    async ({ code, filename }: { code: string; filename?: string }) => {
      const result = validateCode(code, filename);

      let text = `# Validation Result${filename ? `: ${filename}` : ''}\n\n`;
      text += `**Status**: ${result.valid ? 'PASS' : 'FAIL'}\n`;
      text += `**Summary**: ${result.summary}\n\n`;

      if (result.violations.length > 0) {
        text += `## Violations\n\n`;
        for (const v of result.violations) {
          text += `### ${v.ruleId} (line ${v.line}, col ${v.column})\n`;
          text += `${v.message}\n`;
          if (v.fix) {
            text += `**Fix**: ${v.fix}\n`;
          }
          text += '\n';
        }
      }

      return { content: [{ type: 'text' as const, text }] };
    }
  );
}
