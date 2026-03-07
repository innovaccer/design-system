import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from '../server.js';

export async function startStdio(manifestPath?: string): Promise<void> {
  const server = createServer(manifestPath);
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
