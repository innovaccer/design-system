#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Post-processing script to fix API Extractor output
 * - Resolves path aliases to relative paths
 * - Fixes incorrect relative paths (../../core/ -> ./)
 * - Converts CRLF to LF
 * - Handles React triple slash references
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.resolve(__dirname, '../dist/index.type.d.ts');

function fixTypeBundle() {
  console.log('🔧 Fixing type bundle...\n');

  if (!fs.existsSync(OUTPUT_FILE)) {
    console.error(`❌ File not found: ${OUTPUT_FILE}`);
    process.exit(1);
  }

  let content = fs.readFileSync(OUTPUT_FILE, 'utf-8');
  const originalContent = content;

  // 1. Fix line endings: CRLF -> LF
  content = content.replace(/\r\n/g, '\n');
  console.log('✓ Fixed line endings (CRLF → LF)');

  // 2. Handle React import - API Extractor uses React_2, React_3 aliases
  // Remove ALL malformed React imports (various patterns)
  // Match any import statement with invalid syntax like "import { * as ... }"
  let removedMalformedImport = false;

  // Split into lines and filter out malformed imports
  const lines = content.split('\n');
  let newLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    // Check if line contains malformed import pattern - match "import { * as ... }"
    // This includes patterns like:
    // - import { * as React } from 'react';
    // - import { * as React, * as React_2, default as React_3 } from 'react';
    // All of these are invalid syntax that TypeScript doesn't support
    // Match any import that has "* as" inside curly braces (more flexible pattern)
    const isMalformed =
      /^import\s+\{[\s\S]*\*\s+as[\s\S]*\}\s+from\s+['"]react['"]/.test(trimmed) ||
      /^import\s+\{\s*\*\s+as/.test(trimmed);
    if (isMalformed) {
      removedMalformedImport = true;
      // Skip this line - don't add it to newLines
      continue;
    }
    newLines.push(line);
  }

  if (removedMalformedImport) {
    content = newLines.join('\n');
    console.log('✓ Removed malformed React import(s)');
  }

  // Remove triple slash reference (ESLint prefers import style)
  let removedTripleSlash = false;
  if (content.includes('/// <reference types="react" />')) {
    content = content.replace(/^\/\/\/ <reference types="react" \/>\s*\n+/gm, '');
    removedTripleSlash = true;
  }

  // Add proper React import and namespace aliases for React_2 and React_3
  // Use "import React_2 = React;" syntax which works for both types and namespaces
  if (content.includes('React_2') || content.includes('React_3')) {
    // Check if we already have the proper setup
    // Use multiline regex to match anywhere in the file
    const hasReactImport = /^import\s+\*\s+as\s+React\s+from\s+['"]react['"];?$/m.test(content);
    const hasReact2Alias = /^import\s+React_2\s*=\s*React;?$/m.test(content);
    const hasReact3Alias = /^import\s+React_3\s*=\s*React;?$/m.test(content);

    // Also check for old type aliases that need to be replaced
    const hasOldTypeAlias2 = /^type\s+React_2\s*=\s*typeof\s+React;?$/m.test(content);
    const hasOldTypeAlias3 = /^type\s+React_3\s*=\s*typeof\s+React;?$/m.test(content);

    if (!hasReactImport || !hasReact2Alias || !hasReact3Alias || hasOldTypeAlias2 || hasOldTypeAlias3) {
      // Remove old type aliases first
      if (hasOldTypeAlias2) {
        content = content.replace(/^type\s+React_2\s*=\s*typeof\s+React;?\s*\n?/gm, '');
      }
      if (hasOldTypeAlias3) {
        content = content.replace(/^type\s+React_3\s*=\s*typeof\s+React;?\s*\n?/gm, '');
      }

      // Add proper import and namespace aliases at the beginning
      let reactSetup = '';
      // Always add React import first if it doesn't exist
      if (!hasReactImport) {
        reactSetup += "import * as React from 'react';\n";
      }
      if (!hasReact2Alias && content.includes('React_2')) {
        reactSetup += 'import React_2 = React;\n';
      }
      if (!hasReact3Alias && content.includes('React_3')) {
        reactSetup += 'import React_3 = React;\n';
      }

      if (reactSetup) {
        // Insert at the beginning of the file
        content = reactSetup + '\n' + content;
        console.log('✓ Added React import and namespace aliases (React_2, React_3)');
      }
    }
  }

  if (removedTripleSlash) {
    console.log('✓ Removed triple slash reference (using import style instead)');
  }

  // 3. Fix incorrect relative paths first (../../core/ -> ./core/)
  // These are wrong paths created by previous runs
  const incorrectPathRegex = /from ['"]\.\.\/\.\.\/core\/([^'"]+)['"]/g;
  let fixedIncorrectPaths = false;
  content = content.replace(incorrectPathRegex, (match, importPath) => {
    fixedIncorrectPaths = true;
    // Fix paths like ../../core/common.type -> ./core/common.type
    // Output file is at dist/index.type.d.ts, target files are in dist/core/
    const cleanPath = importPath.replace(/\.d\.ts$/, '');

    // All paths should include ./core/ prefix
    return `from './core/${cleanPath}'`;
  });
  if (fixedIncorrectPaths) {
    console.log('✓ Fixed incorrect relative paths (../../core/ -> ./core/)');
  }

  // 3.5. Fix paths that are missing ./core/ prefix
  // Pattern: from './common.type', './utils/...', './components/...', './index.type'
  // These should be './core/common.type', './core/utils/...', './core/components/...', './core/index.type'
  // But NOT './index' (runtime import) which should remain as-is
  const missingCorePrefixRegex = /from ['"]\.\/(common\.type|utils\/|components\/|index\.type)([^'"]*)['"]/g;
  let fixedMissingCorePrefix = false;
  content = content.replace(missingCorePrefixRegex, (match, pathStart, pathRest) => {
    // Skip if it's already ./core/ or if it's exactly './index' (runtime import, not './index.type')
    if (match.includes('./core/') || match === "'./index'" || match === '"./index"') {
      return match;
    }
    fixedMissingCorePrefix = true;
    return `from './core/${pathStart}${pathRest}'`;
  });
  if (fixedMissingCorePrefix) {
    console.log('✓ Fixed paths missing ./core/ prefix');
  }

  // 4. Resolve path aliases to relative paths
  // Pattern: import { ... } from '@/path';
  const pathAliasRegex = /from ['"]@\/([^'"]+)['"]/g;
  let fixedPathAliases = false;

  content = content.replace(pathAliasRegex, (match, importPath) => {
    fixedPathAliases = true;
    // Output file is dist/index.type.d.ts (at root of dist/)
    // Target files are in dist/core/ (subdirectory)
    // importPath examples: 'common.type', 'utils/types', 'components/atoms/button'

    // Remove any .d.ts extension from importPath
    const cleanImportPath = importPath.replace(/\.d\.ts$/, '');

    // Since output is at dist/index.type.d.ts and targets are in dist/core/,
    // relative path from dist/ to dist/core/ is ./core/
    // For subdirectories: ./core/utils/types, ./core/components/atoms/button
    // For same dir: ./core/common.type
    const relativePath = './core/' + cleanImportPath;

    return `from '${relativePath}'`;
  });

  if (fixedPathAliases) {
    console.log('✓ Resolved path aliases to relative paths');
  }

  // 4.5. Remove imports for types that are already defined inline
  // This fixes the issue where API Extractor both imports and inlines re-exported types
  const beforeImportRemoval = content;
  const internalImportRegex = /^import\s+\{([^}]+)\}\s+from\s+['"]\.\/core\/([^'"]+)['"];?$/gm;
  const definedTypes = new Set();
  const typeAliasMap = new Map(); // alias -> original name
  
  // Collect all type/interface definitions that are already in the file
  const typeDefRegex = /^export\s+declare\s+(type|interface|class|enum|namespace)\s+(\w+)/gm;
  let typeMatch;
  while ((typeMatch = typeDefRegex.exec(content)) !== null) {
    definedTypes.add(typeMatch[2]);
  }
  
  // Remove imports for types that are already defined, and replace aliases
  let importMatch;
  const importsToProcess = [];
  while ((importMatch = internalImportRegex.exec(content)) !== null) {
    const importList = importMatch[1].split(',').map(i => i.trim());
    const modulePath = importMatch[2];
    
    const typeMappings = [];
    for (const item of importList) {
      if (item.includes(' as ')) {
        const [original, alias] = item.split(' as ').map(s => s.trim());
        typeMappings.push({ original, alias, isAliased: true });
      } else {
        typeMappings.push({ original: item, alias: item, isAliased: false });
      }
    }
    
    // Check if all original types are already defined
    const allDefined = typeMappings.every(({ original }) => definedTypes.has(original));
    if (allDefined) {
      importsToProcess.push({
        fullLine: importMatch[0],
        typeMappings,
        modulePath
      });
    }
  }
  
  // Remove imports and replace aliases with original type names
  for (const { fullLine, typeMappings } of importsToProcess) {
    // Remove the import line
    content = content.replace(new RegExp(`^${fullLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n?`, 'gm'), '');
    content = content.replace(new RegExp(`\\n${fullLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n?`, 'gm'), '\n');
    
    // Replace alias usage with original type name
    for (const { original, alias, isAliased } of typeMappings) {
      if (isAliased && alias !== original) {
        // Replace alias with original type name (but be careful not to replace in strings/comments)
        // Use word boundaries to avoid partial matches
        const aliasRegex = new RegExp(`\\b${alias}\\b`, 'g');
        content = content.replace(aliasRegex, original);
      }
    }
  }
  
  if (content !== beforeImportRemoval) {
    console.log(`✓ Removed ${importsToProcess.length} duplicate import(s) and replaced aliases for already-inlined types`);
  }

  // 5. Consolidate duplicate imports from the same module
  // First, fix any malformed imports with incorrect syntax like: import { A }, { B } from
  // This should be: import { A, B } from

  // Pattern to match: import { ... }, { ... } from 'module'
  // We need to collect all imports from the same module and combine them
  const importBlockRegex = /(^import .+ from ['"].+['"];?$)/gm;
  const allImports = [];
  let match;

  // Collect all import statements
  while ((match = importBlockRegex.exec(content)) !== null) {
    allImports.push(match[1]);
  }

  // Group by module and fix malformed syntax
  const importsByModule = new Map();

  allImports.forEach((importLine) => {
    // Match malformed: import { A }, { B } from 'module'
    // Or normal: import { A, B } from 'module'
    const malformedMatch = importLine.match(/^import (.+?) from ['"](.+)['"];?$/);
    if (malformedMatch) {
      const [, imports, module] = malformedMatch;
      if (!importsByModule.has(module)) {
        importsByModule.set(module, []);
      }

      // Check if it's malformed: { A }, { B }
      if (imports.includes('}, {')) {
        // Split by '}, {' and extract individual imports
        const parts = imports.split('}, {');
        parts.forEach((part, index) => {
          let cleanPart = part.trim();
          if (index === 0) {
            cleanPart = cleanPart.replace(/^\{/, '').trim();
          }
          if (index === parts.length - 1) {
            cleanPart = cleanPart.replace(/\}$/, '').trim();
          } else {
            cleanPart = cleanPart.replace(/\}$/, '').trim();
          }
          if (cleanPart) {
            importsByModule.get(module).push(cleanPart);
          }
        });
      } else {
        // Normal import: { A, B }
        const cleanImports = imports.replace(/^\{/, '').replace(/\}$/, '').trim();
        if (cleanImports) {
          const items = cleanImports
            .split(',')
            .map((i) => i.trim())
            .filter((i) => i);
          importsByModule.get(module).push(...items);
        }
      }
    }
  });

  // Remove all existing imports
  importsByModule.forEach((imports, module) => {
    const escapedModule = module.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`^import .+ from ['"]${escapedModule}['"];?$`, 'gm');
    content = content.replace(regex, '');
  });

  // Add consolidated imports
  const consolidatedImports = [];
  importsByModule.forEach((importItems, module) => {
    if (importItems.length > 0) {
      // Remove duplicates while preserving order
      const uniqueImports = [];
      const seen = new Set();
      for (const item of importItems) {
        if (!seen.has(item)) {
          seen.add(item);
          uniqueImports.push(item);
        }
      }

      if (uniqueImports.length > 0) {
        const combinedImports = uniqueImports.join(', ');
        consolidatedImports.push(`import { ${combinedImports} } from '${module}';`);
      }
    }
  });

  if (consolidatedImports.length > 0) {
    // Add all consolidated imports at the beginning
    const consolidatedBlock = consolidatedImports.join('\n') + '\n';
    content = consolidatedBlock + '\n' + content;
    console.log(`✓ Consolidated ${consolidatedImports.length} duplicate import(s)`);
  }

  // 6. Remove duplicate React imports (if any remain)
  const reactImports = content.match(/^import \* as React from ['"]react['"];?$/gm) || [];
  if (reactImports.length > 1) {
    // Keep only the first import
    content = content.replace(/^import \* as React from ['"]react['"];?$/gm, '');
    // Add it back once at the top
    content = "import * as React from 'react';\n\n" + content;
    console.log('✓ Fixed duplicate React imports');
  }

  // 6. Fix empty object type {} -> Record<string, never>
  // Replace {} when used as a type annotation
  // Pattern: : {} followed by ; or , (property type annotations)
  const emptyObjectTypeRegex = /:\s*\{\}\s*([;,])/g;
  let fixedEmptyObjectTypes = false;
  content = content.replace(emptyObjectTypeRegex, (match, punctuation) => {
    fixedEmptyObjectTypes = true;
    return `: Record<string, never>${punctuation}`;
  });

  if (fixedEmptyObjectTypes) {
    console.log('✓ Fixed empty object types ({} -> Record<string, never>)');
  }

  // 7. Ensure React import exists when React_2/React_3 are used
  // Check if React_2 or React_3 are used but React import is missing
  if (
    (content.includes('import React_2 = React') || content.includes('import React_3 = React')) &&
    !/^import\s+\*\s+as\s+React\s+from\s+['"]react['"];?$/m.test(content)
  ) {
    // Find where React_2/React_3 imports are and add React import before them
    const reactAliasMatch = content.match(
      /^(import\s+React_2\s*=\s*React;?\s*\n?import\s+React_3\s*=\s*React;?|import\s+React_2\s*=\s*React;?|import\s+React_3\s*=\s*React;?)/m
    );
    if (reactAliasMatch) {
      const insertPos = reactAliasMatch.index;
      content = content.slice(0, insertPos) + "import * as React from 'react';\n" + content.slice(insertPos);
      console.log('✓ Added missing React import');
    }
  }

  // 8. Normalize blank lines
  // - Between import statements: max 1 blank line
  // - Before declarations: max 1 blank line
  // - Overall: max 2 consecutive blank lines
  const beforeBlankLineFix = content;

  // Normalize blank lines between import blocks (reduce multiple blank lines to single)
  // Match pattern: import statement followed by 2+ blank lines then another import or declaration
  content = content.replace(/(^import[^;]+;)\n{3,}(?=import|declare)/gm, '$1\n\n');

  // Normalize blank lines before declarations (reduce multiple blank lines to single)
  content = content.replace(/\n{3,}(?=declare|export)/g, '\n\n');

  // Normalize blank lines between any statements (reduce 3+ blank lines to 2)
  content = content.replace(/\n{3,}/g, '\n\n');

  if (content !== beforeBlankLineFix) {
    console.log('✓ Normalized blank lines');
  }

  // 9. Fix package.json import - convert to declare const
  // Pattern: import { version } from '../package.json';
  const packageJsonImportRegex = /^import\s+\{\s*version\s*\}\s+from\s+['"]\.\.\/package\.json['"];?\s*$/gm;
  if (packageJsonImportRegex.test(content)) {
    content = content.replace(packageJsonImportRegex, 'declare const version: string;');
    console.log('✓ Fixed package.json import (converted to declare const)');
  }

  // 10. Fix fromEvent type usage - should be typeof fromEvent when used as a type
  // Pattern: propertyName: fromEvent; (where fromEvent is a function)
  // Only replace if it's used as a type annotation, not in function calls
  const fromEventTypeRegex = /:\s*fromEvent\s*([;,])/g;
  let fixedFromEventTypes = false;
  content = content.replace(fromEventTypeRegex, (match, punctuation) => {
    fixedFromEventTypes = true;
    return `: typeof fromEvent${punctuation}`;
  });

  if (fixedFromEventTypes) {
    console.log('✓ Fixed fromEvent type usage (added typeof)');
  }

  // 10.5. Fix missing semicolons after closing braces in object type definitions
  // Pattern: } followed by newline and then JSDoc comment (missing semicolon)
  // Example: defaultProps: { ... }\n    /** -> defaultProps: { ... };\n    /**
  // This must run BEFORE the JSDoc semicolon fix to avoid conflicts
  let fixedMissingSemicolons = false;
  const beforeSemicolonFix = content;
  content = content.replace(/(\s+)\}\s*\n(\s+)\/\*\*/g, '$1};\n$2/**');
  if (content !== beforeSemicolonFix) {
    fixedMissingSemicolons = true;
  }
  if (fixedMissingSemicolons) {
    console.log('✓ Fixed missing semicolons after closing braces before JSDoc comments');
  }

  // 10.6. Fix malformed JSDoc comments with semicolons
  // Pattern: */; should be just */
  // Match: */ followed by optional whitespace, semicolon, and newline
  // This runs AFTER the missing semicolon fix to clean up any remaining issues
  let fixedJSDocSemicolons = false;
  const beforeJSDocFix = content;
  content = content.replace(/\*\/\s*;\s*\n/g, '*/\n');
  if (content !== beforeJSDocFix) {
    fixedJSDocSemicolons = true;
  }
  if (fixedJSDocSemicolons) {
    console.log('✓ Fixed JSDoc comments with trailing semicolons');
  }

  // Fix missing semicolons after closing braces before properties in object types
  // Pattern: }\n    propertyName: (where propertyName is not a comment)
  // This catches cases where a property object ends but the next property starts
  // Example: defaultProps: { ... }\n    propertyName: -> defaultProps: { ... };\n    propertyName:
  let fixedPropertySemicolons = false;
  const beforePropertyFix = content;
  content = content.replace(/(\s+)\}\s*\n(\s+)([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1};\n$2$3');
  if (content !== beforePropertyFix) {
    fixedPropertySemicolons = true;
  }
  if (fixedPropertySemicolons) {
    console.log('✓ Fixed missing semicolons after closing braces before properties');
  }

  // 11. Move declare const version after all imports (if it exists between imports)
  // Find declare const version and move it to after the last import
  const declareVersionRegex = /^declare\s+const\s+version:\s*string;?\s*$/m;
  const versionMatch = content.match(declareVersionRegex);
  if (versionMatch) {
    // Check if it's already after all imports (simple check: no import after it in first 50 lines)
    const lines = content.split('\n');
    const versionLineIndex = lines.findIndex((line) => declareVersionRegex.test(line.trim()));

    if (versionLineIndex >= 0) {
      // Check if there are any imports after this line
      let hasImportAfter = false;
      for (let i = versionLineIndex + 1; i < Math.min(versionLineIndex + 50, lines.length); i++) {
        if (lines[i].trim().startsWith('import ')) {
          hasImportAfter = true;
          break;
        }
      }

      // If there are imports after, move declare const version to after the last import
      if (hasImportAfter) {
        // Find the last import line
        let lastImportIndex = -1;
        for (let i = lines.length - 1; i >= 0; i--) {
          if (lines[i].trim().startsWith('import ')) {
            lastImportIndex = i;
            break;
          }
        }

        if (lastImportIndex >= 0 && lastImportIndex < versionLineIndex) {
          // Remove version declaration from current position
          lines.splice(versionLineIndex, 1);
          // Add it after the last import
          lines.splice(lastImportIndex + 1, 0, '', 'declare const version: string;');
          content = lines.join('\n');
          console.log('✓ Moved declare const version after imports');
        }
      }
    }
  }

  // Final pass: Remove any remaining malformed React imports before writing
  const finalLines = content.split('\n');
  const finalFiltered = [];
  let finalRemoved = false;
  for (const line of finalLines) {
    const trimmed = line.trim();
    // Match any import with "* as" inside curly braces from 'react'
    const isMalformed =
      /^import\s+\{[\s\S]*\*\s+as[\s\S]*\}\s+from\s+['"]react['"]/.test(trimmed) ||
      /^import\s+\{\s*\*\s+as/.test(trimmed);
    if (!isMalformed) {
      finalFiltered.push(line);
    } else {
      finalRemoved = true;
    }
  }
  if (finalRemoved) {
    content = finalFiltered.join('\n');
    console.log('✓ Final pass: Removed remaining malformed React import(s)');
  }

  // 12. Format with Prettier (if available) - Run at the end after all fixes
  try {
    const { execSync } = require('child_process');
    const prettierPath = path.resolve(__dirname, '../node_modules/.bin/prettier');
    const prettierConfigPath = path.resolve(__dirname, '../.prettierrc');
    if (fs.existsSync(prettierPath)) {
      // Write content first, then format
      fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
      // Use --config flag to ensure correct formatting
      const prettierCmd = fs.existsSync(prettierConfigPath)
        ? `"${prettierPath}" --config "${prettierConfigPath}" --write "${OUTPUT_FILE}"`
        : `"${prettierPath}" --write "${OUTPUT_FILE}"`;
      execSync(prettierCmd, { stdio: 'ignore' });
      content = fs.readFileSync(OUTPUT_FILE, 'utf-8');
      console.log('✓ Formatted with Prettier');

      // After Prettier, remove any malformed React imports that might have been restored
      const linesAfterPrettier = content.split('\n');
      const filteredAfterPrettier = [];
      let removedAfterPrettier = false;
      for (const line of linesAfterPrettier) {
        const trimmed = line.trim();
        const isMalformed =
          /^import\s+\{[\s\S]*\*\s+as[\s\S]*\}\s+from\s+['"]react['"]/.test(trimmed) ||
          /^import\s+\{\s*\*\s+as/.test(trimmed);
        if (!isMalformed) {
          filteredAfterPrettier.push(line);
        } else {
          removedAfterPrettier = true;
        }
      }
      if (removedAfterPrettier) {
        content = filteredAfterPrettier.join('\n');
        fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
        console.log('✓ Removed malformed React import(s) after Prettier');
      }
    }
  } catch (error) {
    // Prettier not available or failed, continue without formatting
  }

  // Only write if content changed
  if (content !== originalContent) {
    fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
    console.log(`\n✅ Fixed type bundle: ${OUTPUT_FILE}`);
    console.log(`   - Line endings: LF`);
    console.log(`   - Path aliases: Resolved`);
    console.log(`   - React import: Fixed`);
    console.log(`   - Formatting: Applied`);
  } else {
    console.log('\n✅ No changes needed');
  }
}

fixTypeBundle();
