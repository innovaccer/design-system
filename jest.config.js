const esModules = ['@agm', 'ngx-bootstrap', 'lodash-es'].join('|');

const config = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePaths: ['core'],
  collectCoverageFrom: ['core/**/*.{ts,tsx}', '!**/dist/**/*'],
  setupFilesAfterEnv: ['./scripts/setupTest.js'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'text-summary', 'html'],
  verbose: true,
  globals: {
    window: true
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/core/$1'
  }
};

module.exports = config;