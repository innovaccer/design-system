#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT_DIR = path.resolve(__dirname, '..', '..');
const CORE_COMPONENTS_DIR = path.join(ROOT_DIR, 'core', 'components');
const CORE_INDEX_TYPES = path.join(ROOT_DIR, 'core', 'index.type.tsx');
const TOKENS_RAW_FILE = path.join(ROOT_DIR, 'css', 'src', 'tokens', 'index.css');
const TOKENS_VARIABLES_FILE = path.join(ROOT_DIR, 'css', 'src', 'variables', 'index.css');
const CSS_UTILS_DIR = path.join(ROOT_DIR, 'css', 'src', 'utils');
const A11Y_README_FILE = path.join(ROOT_DIR, 'a11y-context', 'README.md');
const A11Y_WCAG_JSON_FILE = path.join(ROOT_DIR, 'a11y-context', 'wcag-as-json.json');

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_error) {
    return '';
  }
}

function walkDir(dirPath) {
  const results = [];

  if (!fs.existsSync(dirPath)) {
    return results;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      results.push(...walkDir(fullPath));
      return;
    }

    results.push(fullPath);
  });

  return results;
}

function parseCssVariables(cssContent) {
  const matches = cssContent.match(/--[a-zA-Z0-9-_]+\s*:/g) || [];
  return Array.from(new Set(matches.map((entry) => entry.replace(':', '').trim()))).sort();
}

function parseCssClasses(cssContent) {
  const classMatches = cssContent.match(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g) || [];
  return Array.from(new Set(classMatches.map((item) => item.replace('.', '')))).sort();
}

function getComponentNameFromPath(filePath) {
  const segments = filePath.split(path.sep);
  const componentsIndex = segments.indexOf('components');

  if (componentsIndex === -1 || componentsIndex + 2 >= segments.length) {
    return '';
  }

  return segments[componentsIndex + 2];
}

function getComponentIndex() {
  const files = walkDir(CORE_COMPONENTS_DIR);
  const componentMap = new Map();

  files.forEach((filePath) => {
    const relativePath = path.relative(ROOT_DIR, filePath);
    const componentName = getComponentNameFromPath(filePath);

    if (!componentName) {
      return;
    }

    if (!componentMap.has(componentName)) {
      componentMap.set(componentName, {
        name: componentName,
        paths: [],
        stories: [],
        tests: [],
        types: [],
        implementations: [],
      });
    }

    const record = componentMap.get(componentName);
    record.paths.push(relativePath);

    if (relativePath.includes('__stories__')) {
      record.stories.push(relativePath);
    }

    if (relativePath.includes('__tests__')) {
      record.tests.push(relativePath);
    }

    if (relativePath.endsWith('.type.tsx') || relativePath.endsWith('.types.tsx')) {
      record.types.push(relativePath);
    }

    if (
      relativePath.endsWith('.tsx')
      && !relativePath.endsWith('index.tsx')
      && !relativePath.endsWith('.test.tsx')
      && !relativePath.includes('__stories__')
    ) {
      record.implementations.push(relativePath);
    }
  });

  return Array.from(componentMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

function resolveComponent(componentName) {
  const components = getComponentIndex();
  return components.find((component) => component.name.toLowerCase() === componentName.toLowerCase());
}

function getComponentContext(componentName) {
  const component = resolveComponent(componentName);

  if (!component) {
    return {
      found: false,
      message: `Component \"${componentName}\" not found.`,
      availableComponents: getComponentIndex().map((entry) => entry.name),
    };
  }

  const fileContents = {};
  const selectedFiles = [
    ...component.implementations,
    ...component.types,
    ...component.stories,
    ...component.tests,
  ].slice(0, 30);

  selectedFiles.forEach((relativePath) => {
    fileContents[relativePath] = safeRead(path.join(ROOT_DIR, relativePath));
  });

  return {
    found: true,
    component,
    exportedTypesIndex: safeRead(CORE_INDEX_TYPES),
    files: fileContents,
  };
}

function getTokensContext() {
  const rawTokens = safeRead(TOKENS_RAW_FILE);
  const variableTokens = safeRead(TOKENS_VARIABLES_FILE);

  return {
    rawTokensFile: path.relative(ROOT_DIR, TOKENS_RAW_FILE),
    variableTokensFile: path.relative(ROOT_DIR, TOKENS_VARIABLES_FILE),
    rawVariables: parseCssVariables(rawTokens),
    semanticVariables: parseCssVariables(variableTokens),
    rawTokens,
    variableTokens,
  };
}

function getCssHelpersContext() {
  const utilFiles = walkDir(CSS_UTILS_DIR).filter((entry) => entry.endsWith('.css'));

  const utilities = utilFiles.map((filePath) => {
    const content = safeRead(filePath);
    return {
      file: path.relative(ROOT_DIR, filePath),
      classes: parseCssClasses(content),
      content,
    };
  });

  return {
    utilities,
  };
}

function getA11yContext() {
  const readme = safeRead(A11Y_README_FILE);
  const wcagRaw = safeRead(A11Y_WCAG_JSON_FILE);

  let wcag = [];
  try {
    wcag = JSON.parse(wcagRaw);
  } catch (_error) {
    wcag = [];
  }

  return {
    readmeFile: path.relative(ROOT_DIR, A11Y_README_FILE),
    wcagFile: path.relative(ROOT_DIR, A11Y_WCAG_JSON_FILE),
    readme,
    wcag,
  };
}

function searchComponents(query) {
  const normalized = query.toLowerCase().trim();
  return getComponentIndex().filter((component) => {
    if (component.name.toLowerCase().includes(normalized)) {
      return true;
    }

    return component.paths.some((entry) => entry.toLowerCase().includes(normalized));
  });
}

const SERVER_INFO = {
  name: 'design-system-context-server',
  version: '0.1.0',
};

function listResources() {
  return [
    {
      uri: 'design-system://components/index',
      name: 'Component Index',
      description: 'All discoverable components with stories/tests/types paths',
      mimeType: 'application/json',
    },
    {
      uri: 'design-system://tokens/raw',
      name: 'Raw Design Tokens',
      description: 'Source raw token CSS definitions',
      mimeType: 'text/css',
    },
    {
      uri: 'design-system://tokens/variables',
      name: 'Mapped Design Tokens',
      description: 'Semantic token variable mappings used by components',
      mimeType: 'text/css',
    },
    {
      uri: 'design-system://css/helpers',
      name: 'CSS Utility Helpers',
      description: 'Utility class files and discovered helper classes',
      mimeType: 'application/json',
    },
    {
      uri: 'design-system://a11y/guide',
      name: 'Accessibility Guide',
      description: 'Accessibility guidance and WCAG mapping',
      mimeType: 'application/json',
    },
  ];
}

function resourceByUri(uri) {
  if (uri === 'design-system://components/index') {
    return {
      mimeType: 'application/json',
      text: JSON.stringify(getComponentIndex(), null, 2),
    };
  }

  if (uri === 'design-system://tokens/raw') {
    return {
      mimeType: 'text/css',
      text: safeRead(TOKENS_RAW_FILE),
    };
  }

  if (uri === 'design-system://tokens/variables') {
    return {
      mimeType: 'text/css',
      text: safeRead(TOKENS_VARIABLES_FILE),
    };
  }

  if (uri === 'design-system://css/helpers') {
    return {
      mimeType: 'application/json',
      text: JSON.stringify(getCssHelpersContext(), null, 2),
    };
  }

  if (uri === 'design-system://a11y/guide') {
    return {
      mimeType: 'application/json',
      text: JSON.stringify(getA11yContext(), null, 2),
    };
  }

  if (uri.startsWith('design-system://component/')) {
    const componentName = uri.replace('design-system://component/', '');
    return {
      mimeType: 'application/json',
      text: JSON.stringify(getComponentContext(componentName), null, 2),
    };
  }

  return null;
}

function listTools() {
  return [
    {
      name: 'search_components',
      description: 'Search components by name or path.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string' },
        },
        required: ['query'],
      },
    },
    {
      name: 'get_component_context',
      description:
        'Get implementation, types, stories, tests, and export type index for a specific component.',
      inputSchema: {
        type: 'object',
        properties: {
          componentName: { type: 'string' },
        },
        required: ['componentName'],
      },
    },
    {
      name: 'get_tokens_context',
      description: 'Get raw and semantic design token data and extracted CSS variables.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
    },
    {
      name: 'get_css_helpers_context',
      description: 'Get CSS utility files and discovered helper classes.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
    },
    {
      name: 'get_accessibility_context',
      description: 'Get accessibility guidance and WCAG mapping data.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
    },
  ];
}

function toolResponse(result) {
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
}

function makeError(id, code, message) {
  return {
    jsonrpc: '2.0',
    id,
    error: {
      code,
      message,
    },
  };
}

function handleRequest(payload) {
  const { id, method, params = {} } = payload;

  if (method === 'initialize') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2024-11-05',
        serverInfo: SERVER_INFO,
        capabilities: {
          resources: {
            listChanged: false,
          },
          tools: {
            listChanged: false,
          },
        },
      },
    };
  }

  if (method === 'notifications/initialized' || method === 'initialized') {
    return null;
  }

  if (method === 'resources/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        resources: listResources(),
      },
    };
  }

  if (method === 'resources/read') {
    const resource = resourceByUri(params.uri || '');

    if (!resource) {
      return makeError(id, -32002, `Unknown resource URI: ${params.uri || '<empty>'}`);
    }

    return {
      jsonrpc: '2.0',
      id,
      result: {
        contents: [
          {
            uri: params.uri,
            mimeType: resource.mimeType,
            text: resource.text,
          },
        ],
      },
    };
  }

  if (method === 'tools/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        tools: listTools(),
      },
    };
  }

  if (method === 'tools/call') {
    const { name, arguments: args = {} } = params;

    if (name === 'search_components') {
      return {
        jsonrpc: '2.0',
        id,
        result: toolResponse(searchComponents(args.query || '')),
      };
    }

    if (name === 'get_component_context') {
      return {
        jsonrpc: '2.0',
        id,
        result: toolResponse(getComponentContext(args.componentName || '')),
      };
    }

    if (name === 'get_tokens_context') {
      return {
        jsonrpc: '2.0',
        id,
        result: toolResponse(getTokensContext()),
      };
    }

    if (name === 'get_css_helpers_context') {
      return {
        jsonrpc: '2.0',
        id,
        result: toolResponse(getCssHelpersContext()),
      };
    }

    if (name === 'get_accessibility_context') {
      return {
        jsonrpc: '2.0',
        id,
        result: toolResponse(getA11yContext()),
      };
    }

    return makeError(id, -32003, `Unknown tool: ${name}`);
  }

  return makeError(id, -32601, `Method not found: ${method}`);
}

function startServer() {
  const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return;
    }

    let request;
    try {
      request = JSON.parse(trimmed);
    } catch (_error) {
      const response = makeError(null, -32700, 'Invalid JSON in request payload.');
      process.stdout.write(`${JSON.stringify(response)}\n`);
      return;
    }

    const response = handleRequest(request);

    if (response) {
      process.stdout.write(`${JSON.stringify(response)}\n`);
    }
  });
}

startServer();
