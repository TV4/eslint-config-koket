const eslintRules = {
  extends: [
    'airbnb-base',
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
    'space-before-function-paren': ['error', 'never'],
    radix: ['error', 'as-needed'],
    curly: ['error', 'multi-line', 'consistent'],
    'object-curly-spacing': ['error', 'never'],
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
    'vars-on-top': 'off', // We declare variables when we first use them instead of at the top of the function
    'class-methods-use-this': 'off', // We tried to implement this but it caused problems. Leaving it off for now
    'no-param-reassign': 'off', // We allow reassigning variables
  },
};

module.exports = eslintRules;
