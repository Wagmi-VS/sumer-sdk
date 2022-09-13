/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  testEnvironment: 'node',
  transform: {
    ".(ts|tsx)": "ts-jest",
    "\\.[jt]sx?$": "babel-jest",
  },
  testRegex: "(/test/.*|\\.(test))\\.(ts|tsx)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  globals: {
    "ts-jest": {
      compiler: "ttypescript"
    }
  },
  globalSetup: `./test/e2e/conf/setup.js`,
  globalTeardown: `./test/e2e/conf/teardown.js`,
  testEnvironment: `./test/e2e/conf/environment.js`,
};