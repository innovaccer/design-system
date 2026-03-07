import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { loadManifest, getTokens, getVersion, getResources } from './manifest/loader.js';
import { registerTokenTools } from './tools/tokens.js';
import { registerComponentTools } from './tools/components.js';
import { registerExampleTools } from './tools/examples.js';
import { registerPatternTools } from './tools/patterns.js';
import { registerValidationTools } from './tools/validate.js';

export function createServer(manifestPath?: string): McpServer {
  loadManifest(manifestPath);

  const version = getVersion();
  const server = new McpServer({
    name: 'Masala Design System',
    version: version.version,
  });

  registerTokenTools(server);
  registerComponentTools(server);
  registerExampleTools(server);
  registerPatternTools(server);
  registerValidationTools(server);

  server.resource('design-tokens', 'design-system://tokens', async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'application/json',
      text: JSON.stringify(getTokens(), null, 2),
    }],
  }));

  server.resource('css-variables', 'design-system://variables', async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/css',
      text: getResources().cssVariables || 'No CSS variables available.',
    }],
  }));

  server.resource('helper-classes', 'design-system://helpers', async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/css',
      text: getResources().helperClasses || 'No helper classes available.',
    }],
  }));

  server.resource('coding-conventions', 'design-system://conventions', async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/markdown',
      text: getResources().conventions || 'No coding conventions available.',
    }],
  }));

  server.resource('component-exports', 'design-system://exports', async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/plain',
      text: getResources().exports || 'No exports available.',
    }],
  }));

  server.resource('component-types', 'design-system://types', async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/plain',
      text: getResources().types || 'No types available.',
    }],
  }));

  return server;
}
