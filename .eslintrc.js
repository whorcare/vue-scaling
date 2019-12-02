module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    quotes: [1, 'single'], //引号类型 `` "" ''
    'import/extensions': ['error', 'always', {
      ts: 'never',
      js: 'never',
    }],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'change',
        'changeHandle',
        'beforeHandle',
        'setTitle',
        'bindKeyUp',
        'setScroll',
        'returnModel',
        'popoverClick',
      ],
    }],
    'no-unused-vars': ['error', { varsIgnorePattern: '^V|Moment|Entity$' }],
    'no-underscore-dangle': ['error', { allow: ['_componentTag'] }],
    'spaced-comment': 'off',
    'no-dupe-keys': 'off',
    'no-console': 'always',
    'no-plusplus': 'off',
    'max-len': ['error', {
      code: 100,
      ignoreTrailingComments: true,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js'],
    }],
    'no-param-reassign': ['error', { props: false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
