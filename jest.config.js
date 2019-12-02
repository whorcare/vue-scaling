module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testURL: 'http://localhost/',
  testEnvironment: 'jest-environment-jsdom-global',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testRegex: '\\.test\\.(ts)$',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.vue',
  ],
};
