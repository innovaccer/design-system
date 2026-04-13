module.exports = {
  'core/**/*.{ts,tsx,js,jsx}': [
    'eslint --ext .tsx,.ts,.js,.jsx',
    () => 'npm run lint:types',
  ],
  'css/src/**/*.css': ['npm run prettier:check'],
};
