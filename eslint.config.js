const airbnb = require('eslint-config-airbnb')
const airbnbTypescript = require('eslint-config-airbnb-typescript')
const reactRecommended = require('eslint-plugin-react/configs/recommended')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const jsxA11y = require('eslint-plugin-jsx-a11y')

module.exports = [
  // Base configuration for JavaScript and React
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript version
      sourceType: 'module', // Set source type as ES modules
      // ecmaFeatures: { jsx: true }, // Enable JSX
    },
    plugins: {
      react: require('eslint-plugin-react'),
      import: require('eslint-plugin-import'),
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      'import/resolver': {
        typescript: true, // Allow TypeScript resolution
      },
    },
    // environment: {
    //   jest: true, // Enable Jest environment
    // },
    rules: {
      'arrow-body-style': 'off', // Disable enforcing braces in one-liners
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      'class-methods-use-this': 'off', // Disable rule requiring class methods to use `this`
      'consistent-return': 'off',
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      'default-case': 'off',
      'func-names': 'off',
      'function-call-argument-newline': 'off',
      'function-paren-newline': 'off',
      'import/no-self-import': 'off', // Disable rule for self imports
      'import/prefer-default-export': 'off', // Allow named exports
      'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], aspects: ['invalidHref', 'preferButton'] }],
      'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
      'max-len': ['error', {
        code: 150, // Allow max line length of 150 chars
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      }],
      'no-await-in-loop': 'off',
      'no-continue': 'off',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-restricted-syntax': ['error', {
        selector: 'ForInStatement',
        message: 'Avoid `for...in` as it iterates over prototype chain.',
      }, {
        selector: 'LabeledStatement',
        message: 'Avoid labeled statements for readability.',
      }, {
        selector: 'WithStatement',
        message: 'Avoid `with` in strict mode.',
      }],
      'no-use-before-define': ['error', { functions: true, variables: false }],
      'object-curly-newline': 'off',
      'react/forbid-prop-types': 'off',
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-danger': 'off',
      'react/self-closing-comp': 'off',
      'react/sort-comp': 'off',
      'simple-import-sort/imports': ['error', {
        groups: [
          ['^\\u0000'], // Side-effect imports (e.g., `import 'foo.css'`)
          ['^react', '^next', '^@?\\w'], // External libraries
          ['^(@tv4)(/.*|$)'], // TV4 internal packages
          ['^(@/types)(/.*|$)'], // Types
          ['^(@/.*)(/.*|$)'], // Other alias imports
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Relative imports
          ['^.+\\.?(svg)$'], // SVG imports
          ['^.+\\.?(css)$'], // Style imports
        ],
      }],
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],
      'vars-on-top': 'off',
      curly: ['error', 'multi-line', 'consistent'],
      radix: ['error', 'as-needed'],
      semi: ['error', 'never'],
    },
  },

  // TypeScript-specific overrides
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      project: './tsconfig.json',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        enums: 'always-multiline',
        functions: 'never',
      }],
      '@typescript-eslint/member-delimiter-style': ['error', {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma' },
      }],
      '@typescript-eslint/no-use-before-define': ['error', { functions: true, variables: false }],
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@typescript-eslint/type-annotation-spacing': ['error', {
        before: false,
        after: true,
      }],
      'react/require-default-props': ['error', {
        forbidDefaultForRequired: true,
        classes: 'defaultProps',
        functions: 'defaultArguments',
      }],
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    },
  },
]