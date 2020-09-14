const esModules = ['@agm', 'ngx-bootstrap', 'lodash-es'].join('|');

const config = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePaths: ['core'],
  setupFilesAfterEnv: ['./scripts/setupTest.ts'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'html'],
  verbose: true,
  collectCoverageFrom: [
    'core/**/*.{ts,tsx}',
    '!**/dist/**/*',
    '!core/**/*.story.tsx',
    '!core/**/__stories__/**'
  ],
  globals: {
    window: true
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/core/$1'
  }
};

module.exports = config;