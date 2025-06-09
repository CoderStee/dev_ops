module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Basic code quality
    'no-console': 'off', // Valid for server applications
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'prefer-const': 'error',
    
    // Formatting
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    
    // Best practices
    'curly': 'error',
    'eqeqeq': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'prefer-promise-reject-errors': 'error',
    
    // ES6+
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
  },
};