const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Update React dependencies
const reactDependencies = {
  'react': '19.0.0',
  'react-dom': '19.0.0',
  'react-is': '19.0.0',
  '@types/react': '^19.0.0',
  '@types/react-dom': '^19.0.0'
};

// Update dev dependencies
const devDependencies = {
  '@babel/plugin-proposal-class-properties': '^7.18.6',
  '@babel/plugin-proposal-private-methods': '^7.18.6',
  '@babel/plugin-proposal-private-property-in-object': '^7.21.11',
  '@babel/preset-react': '^7.22.15'
};

// Update dependencies
Object.entries(reactDependencies).forEach(([pkg, version]) => {
  if (packageJson.dependencies[pkg]) {
    packageJson.dependencies[pkg] = version;
  }
});

// Update devDependencies
Object.entries(devDependencies).forEach(([pkg, version]) => {
  if (packageJson.devDependencies[pkg]) {
    packageJson.devDependencies[pkg] = version;
  }
});

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json with React 19 dependencies'); 