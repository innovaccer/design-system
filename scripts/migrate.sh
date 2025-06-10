#!/bin/bash

echo "Starting React 19 migration process..."

# Step 1: Update dependencies
echo "Step 1: Updating dependencies..."
node scripts/update-dependencies.js

# Step 2: Install new dependencies
echo "Step 2: Installing new dependencies..."
npm install

# Step 3: Run codemods
echo "Step 3: Running codemods..."
npx react-codemod rename-unsafe-lifecycles core/components --force
npx react-codemod class-to-function core/components --force
npx react-codemod update-react-imports core/components --force

# Step 4: Run our custom migration script
echo "Step 4: Running custom migration script..."
node scripts/migrate-to-react19.js

# Step 5: Run tests
echo "Step 5: Running tests..."
npm test

echo "Migration completed! Please review the changes and fix any remaining issues." 