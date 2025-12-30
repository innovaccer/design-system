/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const fs = require('fs');
const path = require('path');

/**
 * Extracts CSS from ESM bundle and saves it as a separate file
 * This runs after the build completes and doesn't affect the existing build
 */

const esmFilePath = path.resolve(__dirname, '../dist/esm/index.js');
const cssOutputPath = path.resolve(__dirname, '../dist/esm/index.css');

try {
  console.log('📦 Extracting CSS from ESM bundle...');

  // Read the ESM bundle
  const esmContent = fs.readFileSync(esmFilePath, 'utf-8');

  // Pattern to match: var css_248z$1l = "CSS_CONTENT";
  // The CSS variables are named like css_248z$<id>
  const cssVariablePattern = /var css_248z\$\w+ = "([\s\S]*?)";/g;

  let allCss = [];
  let match;

  // Extract all CSS from variable declarations
  while ((match = cssVariablePattern.exec(esmContent)) !== null) {
    if (match[1]) {
      // Unescape the CSS string
      let css = match[1]
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '\r')
        .replace(/\\t/g, '\t')
        .replace(/\\'/g, "'")
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');

      allCss.push(css);
    }
  }

  if (allCss.length === 0) {
    console.log('⚠️  No CSS variables found in ESM bundle.');
    console.log('💡 This might mean:');
    console.log('   - CSS extraction is already enabled in rollup config');
    console.log('   - CSS is in a different injection format');
    console.log('   - The build completed without CSS modules');
    process.exit(0);
  }

  // Combine all CSS
  const combinedCss = allCss.join('\n\n');

  // Write to file
  fs.writeFileSync(cssOutputPath, combinedCss, 'utf-8');

  const sizeKB = (combinedCss.length / 1024).toFixed(2);
  console.log(`✅ CSS extracted successfully!`);
  console.log(`📄 File: dist/esm/index.css`);
  console.log(`📊 Size: ${sizeKB} KB`);
  console.log(`🎨 CSS modules extracted: ${allCss.length}`);
} catch (error) {
  console.error('❌ Error extracting CSS:', error.message);
  console.log('💡 Note: The ESM build will still work - CSS is bundled in the JS file');
  process.exit(0); // Don't fail the build
}
