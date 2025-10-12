import antfu from '@antfu/eslint-config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default antfu(
  {
    type: 'lib',
    typescript: true,
    stylistic: false,
  },
  {
    rules: {
      'node/prefer-global/process': ['off'],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['README.md'],
        },
      ],
    },
  },
  eslintConfigPrettier
);
