export interface Violation {
  ruleId: string;
  message: string;
  line: number;
  column: number;
  fix?: string;
}

export interface ValidationRule {
  id: string;
  name: string;
  check(lines: string[]): Violation[];
}

const RAW_HTML_ELEMENTS = ['input', 'button', 'select', 'textarea'];
const RAW_HTML_RE = new RegExp(
  `<(${RAW_HTML_ELEMENTS.join('|')})(?:\\s|>|\\/)`,
  'g'
);

export const noRawHtmlControls: ValidationRule = {
  id: 'no-raw-html-controls',
  name: 'No raw HTML form controls',
  check(lines) {
    const violations: Violation[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      RAW_HTML_RE.lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = RAW_HTML_RE.exec(line)) !== null) {
        const tag = match[1].toLowerCase();
        const dsMap: Record<string, string> = {
          input: 'Input',
          button: 'Button',
          select: 'Select',
          textarea: 'Textarea',
        };

        violations.push({
          ruleId: 'no-raw-html-controls',
          message: `Use <${dsMap[tag]}> from @innovaccer/design-system instead of <${tag}>`,
          line: i + 1,
          column: match.index + 1,
          fix: `Replace <${tag}> with <${dsMap[tag]}> from @innovaccer/design-system`,
        });
      }
    }

    return violations;
  },
};

const HEX_COLOR_RE = /#([0-9a-fA-F]{3,8})\b/g;
const RGB_RE = /rgba?\s*\(/gi;
const COLOR_PROP_RE = /(?:color|background(?:-color)?|border(?:-color)?|outline-color|fill|stroke)\s*:\s*/i;

export const noHardcodedColors: ValidationRule = {
  id: 'no-hardcoded-colors',
  name: 'No hardcoded color values',
  check(lines) {
    const violations: Violation[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!COLOR_PROP_RE.test(line)) continue;

      // Split on semicolons to check each declaration independently,
      // so `background: var(--x); color: #ff0000` still flags the hex.
      const declarations = line.split(';');

      for (const decl of declarations) {
        if (!COLOR_PROP_RE.test(decl)) continue;
        if (decl.includes('var(--')) continue;

        HEX_COLOR_RE.lastIndex = 0;
        let match: RegExpExecArray | null;
        const declOffset = line.indexOf(decl);
        while ((match = HEX_COLOR_RE.exec(decl)) !== null) {
          violations.push({
            ruleId: 'no-hardcoded-colors',
            message: `Hardcoded color "#${match[1]}". Use a design token variable instead (e.g. var(--primary))`,
            line: i + 1,
            column: declOffset + match.index + 1,
            fix: 'Replace with var(--<token-name>). Use ds_search_tokens to find the right token.',
          });
        }

        RGB_RE.lastIndex = 0;
        while ((match = RGB_RE.exec(decl)) !== null) {
          violations.push({
            ruleId: 'no-hardcoded-colors',
            message: `Hardcoded rgb/rgba color. Use a design token variable instead`,
            line: i + 1,
            column: declOffset + match.index + 1,
            fix: 'Replace with var(--<token-name>). Use ds_search_tokens to find the right token.',
          });
        }
      }
    }

    return violations;
  },
};

const HARDCODED_SIZE_RE = /(?:width|height|margin|padding|gap|top|left|right|bottom|font-size|border-radius|line-height)\s*:\s*(\d+(?:\.\d+)?)(px|rem|em)\b/gi;

export const tokensOnly: ValidationRule = {
  id: 'tokens-only',
  name: 'Use design tokens for sizes/spacing',
  check(lines) {
    const violations: Violation[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      const declarations = line.split(';');
      for (const decl of declarations) {
        if (decl.includes('var(--')) continue;

        HARDCODED_SIZE_RE.lastIndex = 0;
        let match: RegExpExecArray | null;
        const declOffset = line.indexOf(decl);
        while ((match = HARDCODED_SIZE_RE.exec(decl)) !== null) {
          violations.push({
            ruleId: 'tokens-only',
            message: `Hardcoded size "${match[1]}${match[2]}". Use a spacing/sizing token (e.g. var(--spacing-40))`,
            line: i + 1,
            column: declOffset + match.index + 1,
            fix: 'Replace with var(--spacing-*) or var(--border-radius-*). Use ds_search_tokens to find the right token.',
          });
        }
      }
    }

    return violations;
  },
};

const UI_LIBS = [
  '@mui/', '@chakra-ui/', '@mantine/', 'antd', '@ant-design/',
  'react-bootstrap', '@blueprintjs/', 'semantic-ui-react',
  '@headlessui/', '@radix-ui/',
];

export const approvedImports: ValidationRule = {
  id: 'approved-imports',
  name: 'Only approved component imports',
  check(lines) {
    const violations: Violation[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trimStart().startsWith('import')) continue;

      for (const lib of UI_LIBS) {
        if (line.includes(`'${lib}`) || line.includes(`"${lib}`)) {
          violations.push({
            ruleId: 'approved-imports',
            message: `Import from "${lib}" is not approved. Use @innovaccer/design-system components instead`,
            line: i + 1,
            column: 1,
            fix: `Replace with import from '@innovaccer/design-system'. Use ds_search_components to find equivalent components.`,
          });
        }
      }
    }

    return violations;
  },
};

const LAYOUT_STYLE_PROPS: Record<string, string> = {
  display: 'd-flex / d-block / d-none / d-inline',
  flexDirection: 'flex-row / flex-column',
  justifyContent: 'justify-content-{start,center,end,between}',
  alignItems: 'align-items-{start,center,end,stretch}',
  flexWrap: 'flex-wrap / flex-nowrap',
  gap: 'Use margin/padding helpers (mt-*, mr-*, etc.)',
  margin: 'm-{1..8} (scale: 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 7=32px, 8=40px)',
  marginTop: 'mt-{1..8}',
  marginBottom: 'mb-{1..8}',
  marginLeft: 'ml-{1..8}',
  marginRight: 'mr-{1..8}',
  padding: 'p-{1..8}',
  paddingTop: 'pt-{1..8}',
  paddingBottom: 'pb-{1..8}',
  paddingLeft: 'pl-{1..8}',
  paddingRight: 'pr-{1..8}',
};

const INLINE_STYLE_LAYOUT_RE = /style\s*=\s*\{\s*\{/;

export const noInlineStyleLayout: ValidationRule = {
  id: 'no-inline-style-layout',
  name: 'No inline style for layout/spacing',
  check(lines) {
    const violations: Violation[] = [];
    let inStyleBlock = false;
    let braceDepth = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (INLINE_STYLE_LAYOUT_RE.test(line)) {
        inStyleBlock = true;
        braceDepth = 0;
      }

      if (inStyleBlock) {
        for (const ch of line) {
          if (ch === '{') braceDepth++;
          else if (ch === '}') braceDepth--;
        }
        if (braceDepth <= 0) inStyleBlock = false;
      }

      for (const [prop, helper] of Object.entries(LAYOUT_STYLE_PROPS)) {
        const re = new RegExp(`(?:style\\s*=\\s*\\{\\s*\\{[^}]*|,\\s*)${prop}\\s*:`, 'g');
        if (re.test(line)) {
          violations.push({
            ruleId: 'no-inline-style-layout',
            message: `Inline style "${prop}" — use CSS helper class instead`,
            line: i + 1,
            column: line.indexOf(prop) + 1,
            fix: `Remove "${prop}" from style prop and use className="${helper}"`,
          });
        }
      }
    }

    return violations;
  },
};

export const allRules: ValidationRule[] = [
  noRawHtmlControls,
  noHardcodedColors,
  tokensOnly,
  approvedImports,
  noInlineStyleLayout,
];
