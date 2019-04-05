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
  parser: 'babel-eslint',
  parserOptions: {
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
    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    radix: ['error', 'as-needed'],
    curly: ['error', 'multi-line', 'consistent'],
    semi: ['error', 'never'],
    'consistent-return': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'no-plusplus': 'off', // We allow the unary ++ and -- operators
    'arrow-body-style': 'off', // We can choose to include the braces on one-liners if we think it makes the code more readable
    'no-use-before-define': [
      'error', {
        functions: true, // We like to keep the most important functions at the top of the file
        variables: false,
      },
    ],
    'no-multiple-empty-lines': ['error', { // We only allow one empty line
      max: 1,
    }],
    'vars-on-top': 'off', // We declare variables when we first use them instead of at the top of the function
    'class-methods-use-this': 'off', // We tried to implement this but it caused problems. Leaving it off for now
    'no-param-reassign': 'off', // We allow reassigning variables
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // We allow jsx in js-files
    'object-curly-newline': 'off', // We don’t enforce strict formatting of objects
    'react/self-closing-comp': 'off', // We don't requre components to be self closed. <div id="video-player"></div> is ok
    'react/sort-comp': 'off', // We allow excpetions to this strict sorting of methods
    'react/no-danger': 'off', // Sometimes we need to use dangerouslySetInnerHTML
    'react/forbid-prop-types': 'off', // We allow arrays and objects as proptypesv
    'react/jsx-one-expression-per-line': 'off', // We allow multiple expressions per line for example <span>Sparade recept <SvgIcon name="recipe" /></span>
    'react/jsx-closing-bracket-location': 'off', // We don't enforce the location of the closing bracket
    'react/jsx-first-prop-new-line': 'off', // We can decide how to format the props from case to case
    'react/jsx-max-props-per-line': 'off', // We can decide how to format the props from case to case
    'import/no-self-import': 'off', // We had problems with this rule. For example files named 'espress.js' etc. Turning it off for now

    'jsx-a11y/label-has-for': 'off', // Depricated rule - remove when airbnb is updated
  },
}

module.exports = eslintRules
