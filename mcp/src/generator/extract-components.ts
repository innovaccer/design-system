import { readFileSync, readdirSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../');

export interface PropInfo {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description?: string;
}

export interface ComponentEntry {
  name: string;
  category: string;
  path: string;
  importPath: string;
  props: PropInfo[];
  variants: Record<string, string[]>;
  a11yProps: string[];
  subComponents: string[];
}

export interface ComponentsManifest {
  version: string;
  components: ComponentEntry[];
}

const CATEGORIES = ['atoms', 'molecules', 'organisms'] as const;

function discoverComponents(): Array<{ name: string; category: string; dirPath: string }> {
  const results: Array<{ name: string; category: string; dirPath: string }> = [];

  for (const category of CATEGORIES) {
    const dir = resolve(ROOT, 'core/components', category);
    if (!existsSync(dir)) continue;

    for (const name of readdirSync(dir)) {
      if (name.startsWith('_')) continue;
      const compDir = join(dir, name);
      if (statSync(compDir).isDirectory()) {
        results.push({ name, category, dirPath: compDir });
      }
    }
  }
  return results;
}

function findMainTsxFile(dirPath: string, componentName: string): string | null {
  const capitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  const candidates = [`${capitalized}.tsx`, `${componentName}.tsx`, 'index.tsx'];

  for (const c of candidates) {
    const full = join(dirPath, c);
    if (existsSync(full) && statSync(full).isFile()) return full;
  }

  const allTsx = readdirSync(dirPath).filter(
    (f) => f.endsWith('.tsx') && !f.includes('.test.') && !f.includes('.story.')
  );
  return allTsx.length > 0 ? join(dirPath, allTsx[0]) : null;
}

const UNION_RE = /^\s*['"]([^'"]+)['"]\s*$/;

function parsePropsFromSource(source: string, componentName: string): {
  props: PropInfo[];
  variants: Record<string, string[]>;
  a11yProps: string[];
  subComponents: string[];
} {
  const props: PropInfo[] = [];
  const variants: Record<string, string[]> = {};
  const a11yProps: string[] = [];
  const subComponents: string[] = [];

  const capName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

  const interfacePatterns = [
    new RegExp(`interface\\s+${capName}Props[^{]*\\{`, 'g'),
    new RegExp(`interface\\s+\\w*Props[^{]*\\{`, 'g'),
  ];

  let interfaceBody: string | null = null;

  for (const pattern of interfacePatterns) {
    const match = pattern.exec(source);
    if (match) {
      const startIdx = match.index + match[0].length;
      let depth = 1;
      let i = startIdx;
      while (i < source.length && depth > 0) {
        if (source[i] === '{') depth++;
        else if (source[i] === '}') depth--;
        i++;
      }
      interfaceBody = source.slice(startIdx, i - 1);
      break;
    }
  }

  if (interfaceBody) {
    const propRe = /^\s*(?:\/\*\*([^*]*(?:\*(?!\/)[^*]*)*)\*\/\s*)?['"]?([\w-]+)['"]?\s*(\??):\s*(.+?);\s*$/gm;
    let propMatch: RegExpExecArray | null;

    while ((propMatch = propRe.exec(interfaceBody)) !== null) {
      const description = propMatch[1]?.trim().replace(/\s*\*\s*/g, ' ').trim();
      const name = propMatch[2];
      const required = propMatch[3] !== '?';
      const type = propMatch[4].trim();

      props.push({
        name,
        type,
        required,
        ...(description ? { description } : {}),
      });

      if (name.startsWith('aria-') || name === 'role' || name === 'tabIndex') {
        a11yProps.push(name);
      }
    }
  }

  const typeAliasRe = /type\s+(\w+)\s*=\s*([^;]+);/g;
  let typeMatch: RegExpExecArray | null;
  while ((typeMatch = typeAliasRe.exec(source)) !== null) {
    const typeName = typeMatch[1];
    const typeBody = typeMatch[2].trim();

    if (typeBody.includes('|')) {
      const members = typeBody
        .split('|')
        .map((m) => m.trim())
        .filter((m) => UNION_RE.test(m))
        .map((m) => m.replace(/['"]/g, ''));

      if (members.length > 0) {
        variants[typeName] = members;
      }
    }
  }

  const subCompRe = new RegExp(`${capName}\\.(\\w+)\\s*=`, 'g');
  let subMatch: RegExpExecArray | null;
  while ((subMatch = subCompRe.exec(source)) !== null) {
    if (!subComponents.includes(subMatch[1])) {
      subComponents.push(subMatch[1]);
    }
  }

  const defaultPropsRe = /defaultProps\s*[:=]\s*\{([^}]+)\}/;
  const defaultMatch = defaultPropsRe.exec(source);
  if (defaultMatch) {
    const defaults = defaultMatch[1];
    const dvRe = /(\w+)\s*:\s*([^,\n]+)/g;
    let dvMatch: RegExpExecArray | null;
    while ((dvMatch = dvRe.exec(defaults)) !== null) {
      const prop = props.find((p) => p.name === dvMatch![1]);
      if (prop) {
        prop.defaultValue = dvMatch[2].trim().replace(/['"]/g, '');
      }
    }
  }

  return { props, variants, a11yProps, subComponents };
}

export function extractComponents(version: string): ComponentsManifest {
  const discovered = discoverComponents();
  const components: ComponentEntry[] = [];

  for (const { name, category, dirPath } of discovered) {
    const mainFile = findMainTsxFile(dirPath, name);
    if (!mainFile) continue;

    const source = readFileSync(mainFile, 'utf-8');
    const { props, variants, a11yProps, subComponents } = parsePropsFromSource(source, name);

    const relativePath = `core/components/${category}/${name}`;

    components.push({
      name,
      category,
      path: relativePath,
      importPath: `@innovaccer/design-system`,
      props,
      variants,
      a11yProps,
      subComponents,
    });
  }

  return { version, components };
}
