import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface TokenEntry {
  value: string;
  resolved?: string;
  category: 'raw' | 'semantic';
  deprecated?: boolean;
}

export interface TokenNamespace {
  [name: string]: TokenEntry;
}

export interface TokensManifest {
  version: string;
  namespaces: Record<string, TokenNamespace>;
}

const NAMESPACE_PATTERNS: Record<string, RegExp> = {
  colors: /^--(primary|secondary|success|alert|warning|accent\d?|inverse|text|card)[\w-]*/,
  spacing: /^--spacing[\w-]*/,
  typography: /^--(font|letter)[\w-]*/,
  shadows: /^--shadow[\w-]*/,
  borders: /^--border[\w-]*/,
  animation: /^--(standard|entrance|exit|duration)[\w-]*/,
  opacity: /^--opacity[\w-]*/,
  grid: /^--grid[\w-]*/,
};

function parseCustomProperties(css: string): Map<string, string> {
  const props = new Map<string, string>();
  const re = /^\s*(--[\w-]+)\s*:\s*(.+?)\s*;/gm;
  let match: RegExpExecArray | null;
  while ((match = re.exec(css)) !== null) {
    props.set(match[1], match[2]);
  }
  return props;
}

function classifyNamespace(name: string): string {
  for (const [ns, pattern] of Object.entries(NAMESPACE_PATTERNS)) {
    if (pattern.test(name)) return ns;
  }
  return 'other';
}

const DEPRECATED_SPACING = new Set([
  '--spacing-xs', '--spacing-s', '--spacing-m', '--spacing-0-75',
  '--spacing', '--spacing-l', '--spacing-2', '--spacing-xl',
  '--spacing-3', '--spacing-4', '--spacing-5', '--spacing-6',
  '--spacing-7', '--spacing-8', '--spacing-9',
]);

export function extractTokens(version: string): TokensManifest {
  const tokensCSS = readFileSync(resolve(ROOT, 'css/src/tokens/index.css'), 'utf-8');
  const variablesCSS = readFileSync(resolve(ROOT, 'css/src/variables/index.css'), 'utf-8');

  const rawTokens = parseCustomProperties(tokensCSS);
  const semanticVars = parseCustomProperties(variablesCSS);

  const namespaces: Record<string, TokenNamespace> = {};

  for (const [name, value] of rawTokens) {
    const ns = 'rawColors';
    namespaces[ns] ??= {};
    namespaces[ns][name] = { value, category: 'raw' };
  }

  for (const [name, value] of semanticVars) {
    const ns = classifyNamespace(name);
    namespaces[ns] ??= {};

    const entry: TokenEntry = { value, category: 'semantic' };

    if (DEPRECATED_SPACING.has(name)) {
      entry.deprecated = true;
    }

    const varRef = value.match(/^var\((--[\w-]+)\)$/);
    if (varRef) {
      const resolved = rawTokens.get(varRef[1]);
      if (resolved) entry.resolved = resolved;
    }

    namespaces[ns][name] = entry;
  }

  return { version, namespaces };
}
