const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../core/components');
const EXCLUDED_DIRS = ['__tests__', '__mocks__', 'stories'];

// Helper functions
function isClassComponent(content) {
  return content.includes('extends React.Component') || content.includes('extends Component');
}

function hasLifecycleMethods(content) {
  const lifecycleMethods = [
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
    'getDerivedStateFromProps',
    'getSnapshotBeforeUpdate'
  ];
  return lifecycleMethods.some(method => content.includes(method));
}

function convertClassToFunction(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if not a class component or no lifecycle methods
  if (!isClassComponent(content) || !hasLifecycleMethods(content)) {
    return;
  }

  console.log(`Converting ${filePath}...`);

  // Create backup
  fs.writeFileSync(`${filePath}.backup`, content);

  // Run react-codemod
  try {
    execSync(`npx react-codemod class-to-function ${filePath} --force`, { stdio: 'inherit' });
    console.log(`Successfully converted ${filePath}`);
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
    // Restore backup
    fs.writeFileSync(filePath, content);
  }
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.includes(entry.name)) {
        processDirectory(fullPath);
      }
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      convertClassToFunction(fullPath);
    }
  }
}

// Main execution
console.log('Starting React 19 migration...');
processDirectory(COMPONENTS_DIR);
console.log('Migration completed!'); 