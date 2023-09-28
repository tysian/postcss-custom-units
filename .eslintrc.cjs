module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    '@tysian/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off',
  },
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
