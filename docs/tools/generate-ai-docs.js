const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../src/pages/components');
const AI_DOCS_DIR = path.join(__dirname, '../src/pages/ai');
const SB_JSON_DIR = path.join(__dirname, '../static/sb');

// Ensure AI docs directory exists
if (!fs.existsSync(AI_DOCS_DIR)) {
  fs.mkdirSync(AI_DOCS_DIR, { recursive: true });
}

// Function to extract code from JSON file
function extractCodeFromJson(jsonPath) {
  try {
    const jsonContent = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(jsonContent);
    
    // Try different paths to find the code
    if (data.parameters?.docs?.source?.code) {
      return data.parameters.docs.source.code;
    }
    
    if (data.parameters?.storySource?.source) {
      return data.parameters.storySource.source;
    }
    
    if (data.source) {
      return data.source;
    }
    
    console.warn(`No code found in ${jsonPath}`);
    return null;
  } catch (error) {
    console.error(`Error processing JSON file ${jsonPath}:`, error);
    return null;
  }
}

// Function to clean up the code
function cleanupCode(code) {
  if (!code) return '';
  
  // Remove arrow function wrapper if present
  code = code.replace(/^\(\s*\)\s*=>\s*{\s*/, '');
  code = code.replace(/^\(\)\s*=>\s*/, '');
  code = code.replace(/;\s*}\s*$/, '');
  
  // Remove extra newlines and trim
  code = code.trim();
  
  return code;
}

// Function to process Preview component
function processPreviewComponent(content, componentName) {
  // Use a more specific regex to match Preview components
  const previewRegex = /<Preview\s+name=['"]([^'"]+)['"]\s*\/>/g;
  let processedContent = content;
  let match;

  while ((match = previewRegex.exec(content)) !== null) {
    const previewName = match[1];
    console.log(`Processing preview: ${previewName} for component: ${componentName}`);
    
    // Try different possible JSON file names
    const possiblePaths = [
      path.join(SB_JSON_DIR, `${previewName}.json`),
      path.join(SB_JSON_DIR, `components-${componentName.toLowerCase()}-${previewName}.json`),
      path.join(SB_JSON_DIR, `components-ai-${componentName.toLowerCase()}-${previewName}.json`),
      path.join(SB_JSON_DIR, `${componentName.toLowerCase()}-${previewName}.json`),
      // Add more patterns based on the actual file structure
      path.join(SB_JSON_DIR, `${previewName}--all.json`),
      path.join(SB_JSON_DIR, `components-${componentName.toLowerCase()}-${previewName}--all.json`)
    ];
    
    let code = null;
    let foundPath = null;
    
    for (const jsonPath of possiblePaths) {
      console.log(`Trying path: ${jsonPath}`);
      if (fs.existsSync(jsonPath)) {
        console.log(`Found file: ${jsonPath}`);
        code = extractCodeFromJson(jsonPath);
        if (code) {
          foundPath = jsonPath;
          break;
        }
      }
    }
    
    if (code) {
      console.log(`Successfully extracted code from: ${foundPath}`);
      // Clean up the code
      code = cleanupCode(code);
      
      // Replace the Preview component with the actual code
      const replacement = '\n```tsx\n' + code + '\n```\n';
      processedContent = processedContent.replace(match[0], replacement);
      console.log(`Replaced Preview component with code block`);
    } else {
      console.warn(`No code found for preview: ${previewName}`);
    }
  }

  return processedContent;
}

// Function to process a single component
function processComponent(usagePath) {
  try {
    // Read the usage.mdx file
    const content = fs.readFileSync(usagePath, 'utf8');
    
    // Get component name from path
    const componentName = path.basename(path.dirname(usagePath));
    
    // Process the content
    const processedContent = processPreviewComponent(content, componentName);
    


    // Write to AI documentation file
    const aiFilePath = path.join(AI_DOCS_DIR, `${componentName}.mdx`);
    fs.writeFileSync(aiFilePath, processedContent);
    
    console.log(`Generated AI documentation for ${componentName}`);
  } catch (error) {
    console.error(`Error processing ${usagePath}:`, error);
  }
}

// Main execution
function main() {
  // Find all usage.mdx files
  const usageFiles = glob.sync(path.join(COMPONENTS_DIR, '**/usage.mdx'));
  
  console.log(`Found ${usageFiles.length} component usage files`);
  
  // Process each component
  usageFiles.forEach(processComponent);
  
  console.log('AI documentation generation complete!');
}

// Run the script
main(); 