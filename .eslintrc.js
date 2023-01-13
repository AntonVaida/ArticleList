module.exports = {
'env': {
    'browser': true,
    'es6': true,
    'jest': true,
},
'extends': [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
],
'overrides': [
],
'parser': '@typescript-eslint/parser',
'parserOptions': {
    'ecmaFeatures': {
        'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json',
    // 'tsconfigRootDir': ['./tsconfig.json'],
},
'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
],
'rules': {
    'indent': [
        'error',
        2,
        { SwitchCase: 1 }
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    'quotes': [
        'error',
        'single',
        { avoidEscape: true }
    ],
    'semi': [
        'error',
        'always'
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/consistent-type-imports": "warn"
},
'settings': {
    react: {
    version: 'detect',
    },
},
};
