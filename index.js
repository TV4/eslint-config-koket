const eslintRules = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  plugins: [
    'import',
    'react',
  ],
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          '.', // app-path directory - for rule import/no-unresolved
        ],
      },
    },
  },
  rules: {
    'arrow-body-style': 'off', // We can choose to include the braces on one-liners if we think it makes the code more readable
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'class-methods-use-this': 'off', // We tried to implement this but it caused problems. Leaving it off for now
    'consistent-return': 'off',
    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'default-case': 'off',
    'func-names': 'off',
    'function-call-argument-newline': 'off', // We allow line breaks in argument lists
    'function-paren-newline': 'off', // We allow line breaks in argument lists
    'import/no-self-import': 'off', // We had problems with this rule. For example files named 'espress.js' etc. Turning it off for now
    'import/prefer-default-export': 'off', // We allow named exports even if there's just one
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }], // We allow either nesting of htmlFor association
    'max-len': [
      'error',
      {
        code: 150, // We allow 150 chars per line
        tabWidth: 2,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'no-await-in-loop': 'off', // We allow await in loops
    'no-continue': 'off', // We allow continue in loops
    'no-multiple-empty-lines': ['error', { max: 1 }], // We only allow one empty line
    'no-param-reassign': 'off', // We allow reassigning variables
    'no-plusplus': 'off', // We allow the unary ++ and -- operators
    'no-restricted-syntax': [ // We allow for-of-loops
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-use-before-define': ['error', { functions: true, variables: false }], // We like to keep the most important functions at the top of the file
    'object-curly-newline': 'off', // We don’t enforce strict formatting of objects
    'react/forbid-prop-types': 'off', // We allow arrays and objects as proptypesv
    'react/function-component-definition': ['error', { // We use arrow functions for our components
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], aspects: ['invalidHref', 'preferButton'] }],
    'react/jsx-closing-bracket-location': 'off', // We don't enforce the location of the closing bracket
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // We allow jsx in js-files
    'react/jsx-first-prop-new-line': 'off', // We can decide how to format the props from case to case
    'react/jsx-max-props-per-line': 'off', // We can decide how to format the props from case to case
    'react/jsx-one-expression-per-line': 'off', // We allow multiple expressions per line for example <span>Sparade recept <SvgIcon name="recipe" /></span>
    'react/jsx-props-no-spreading': 'off', // Allowing props spreading
    'react/no-danger': 'off', // Sometimes we need to use dangerouslySetInnerHTML
    'react/self-closing-comp': 'off', // We don't requre components to be self closed. <div id="video-player"></div> is ok
    'react/sort-comp': 'off', // We allow excpetions to this strict sorting of methods
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'vars-on-top': 'off', // We declare variables when we first use them instead of at the top of the function
    curly: ['error', 'multi-line', 'consistent'],
    radix: ['error', 'as-needed'],
    semi: ['error', 'never'],
  },
}

module.exports = eslintRules
