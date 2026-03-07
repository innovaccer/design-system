import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { loadManifest, getTokens, getComponents, getVersion, getResources } from './manifest/loader.js';
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

  server.resource('component-types', 'design-system://types', async (uri) => {
    const manifest = getComponents();
    let text = `// Masala Design System — Component Props (v${manifest.version})\n`;
    text += `// Auto-generated from component source files\n\n`;

    for (const comp of manifest.components) {
      if (comp.props.length === 0) continue;
      const capName = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);
      text += `interface ${capName}Props {\n`;
      for (const prop of comp.props) {
        if (prop.description) text += `  /** ${prop.description} */\n`;
        text += `  ${prop.name}${prop.required ? '' : '?'}: ${prop.type};`;
        if (prop.defaultValue) text += ` // default: ${prop.defaultValue}`;
        text += '\n';
      }
      text += `}\n\n`;

      if (Object.keys(comp.variants).length > 0) {
        for (const [typeName, values] of Object.entries(comp.variants)) {
          text += `type ${typeName} = ${values.map((v) => `'${v}'`).join(' | ')};\n`;
        }
        text += '\n';
      }
    }

    return {
      contents: [{
        uri: uri.href,
        mimeType: 'text/plain',
        text,
      }],
    };
  });

  return server;
}
