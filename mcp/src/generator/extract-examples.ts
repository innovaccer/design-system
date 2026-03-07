import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface ExampleEntry {
  id: string;
  component: string;
  category: string;
  title: string;
  code: string;
  imports: string[];
  tags: string[];
}

const CATEGORIES = ['atoms', 'molecules', 'organisms'] as const;

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function extractStoryMetadata(source: string): {
  title?: string;
  componentRef?: string;
  customCode?: string;
} {
  const titleMatch = source.match(/title\s*:\s*['"]([^'"]+)['"]/);
  const componentMatch = source.match(/component\s*:\s*(\w+)/);
  const customCodeMatch = source.match(/customCode\s*(?:=|:)\s*`([\s\S]*?)`/);

  return {
    title: titleMatch?.[1],
    componentRef: componentMatch?.[1],
    customCode: customCodeMatch?.[1]?.trim(),
  };
}

function extractBracketedBody(source: string, startIdx: number, open: string, close: string): string | null {
  if (source[startIdx] !== open) return null;
  let depth = 1;
  let i = startIdx + 1;
  while (i < source.length && depth > 0) {
    if (source[i] === open) depth++;
    else if (source[i] === close) depth--;
    i++;
  }
  return depth === 0 ? source.slice(startIdx, i).trim() : null;
}

function extractNamedExports(source: string): Array<{ name: string; body: string }> {
  const results: Array<{ name: string; body: string }> = [];

  // Match arrow functions: export const Foo = (...) => ...
  const arrowRe = /export\s+const\s+(\w+)\s*=\s*\([^)]*\)\s*(?::\s*[\w<>[\]|&\s]+)?\s*=>\s*/g;
  // Match function declarations: export function Foo(...) { ... }
  const fnDeclRe = /export\s+function\s+(\w+)\s*\([^)]*\)\s*(?::\s*[\w<>[\]|&\s]+)?\s*\{/g;

  let match: RegExpExecArray | null;

  while ((match = arrowRe.exec(source)) !== null) {
    const name = match[1];
    const startIdx = match.index + match[0].length;

    const body =
      extractBracketedBody(source, startIdx, '(', ')') ||
      extractBracketedBody(source, startIdx, '{', '}');

    if (body) {
      results.push({ name, body });
    } else if (source[startIdx] === '<') {
      const endTagRe = /;\s*$/m;
      const restOfSource = source.slice(startIdx);
      const endMatch = endTagRe.exec(restOfSource);
      if (endMatch) {
        results.push({ name, body: restOfSource.slice(0, endMatch.index).trim() });
      }
    }
  }

  while ((match = fnDeclRe.exec(source)) !== null) {
    const name = match[1];
    // fnDeclRe includes the opening {, so back up one char
    const startIdx = match.index + match[0].length - 1;
    const body = extractBracketedBody(source, startIdx, '{', '}');
    if (body) {
      results.push({ name, body });
    }
  }

  return results;
}

function extractImportsFromSource(source: string): string[] {
  const imports: string[] = [];
  const importRe = /^import\s+.+?from\s+['"]([^'"]+)['"];?\s*$/gm;
  let match: RegExpExecArray | null;
  while ((match = importRe.exec(source)) !== null) {
    imports.push(match[0].trim());
  }
  return imports;
}

function processStoryFile(filePath: string, componentName: string, category: string): ExampleEntry[] {
  const source = readFileSync(filePath, 'utf-8');
  const entries: ExampleEntry[] = [];
  const meta = extractStoryMetadata(source);
  const imports = extractImportsFromSource(source);
  const storyFileName = relative(ROOT, filePath);

  if (meta.customCode) {
    const id = slugify(`${componentName}-${meta.title || storyFileName}-custom`);
    entries.push({
      id,
      component: componentName,
      category,
      title: meta.title || componentName,
      code: meta.customCode,
      imports,
      tags: ['customCode', category],
    });
  }

  const namedExports = extractNamedExports(source);
  for (const exp of namedExports) {
    if (exp.body === '<></>' || exp.body.length < 10) continue;
    const id = slugify(`${componentName}-${exp.name}`);
    entries.push({
      id,
      component: componentName,
      category,
      title: `${componentName} / ${exp.name}`,
      code: exp.body,
      imports,
      tags: [exp.name, category],
    });
  }

  return entries;
}

export function extractExamples(_version: string): ExampleEntry[] {
  const examples: ExampleEntry[] = [];

  for (const category of CATEGORIES) {
    const catDir = resolve(ROOT, 'core/components', category);
    if (!existsSync(catDir)) continue;

    for (const compName of readdirSync(catDir)) {
      if (compName.startsWith('_')) continue;
      const compDir = join(catDir, compName);
      if (!statSync(compDir).isDirectory()) continue;

      const storiesDir = join(compDir, '__stories__');
      if (!existsSync(storiesDir)) continue;

      for (const storyFile of readdirSync(storiesDir)) {
        if (!storyFile.match(/\.story\.(tsx?|jsx?)$/)) continue;
        const storyPath = join(storiesDir, storyFile);
        try {
          const storyExamples = processStoryFile(storyPath, compName, category);
          examples.push(...storyExamples);
        } catch {
          // skip malformed story files
        }
      }
    }
  }

  return examples;
}
