module.exports = {
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'mjs', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^src(.*)': '<rootDir>/src$1'
  },
  setupTestFrameworkScriptFile: '<rootDir>/script/setupTest.js',
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    '^.+\\.(ts|tsx|mjs|js|jsx)?$': 'babel-jest',
    '.+\\.(css|png|jpg|jpeg|gif|svg|ttf|otf|woff)$': 'jest-transform-stub'
  }
}
