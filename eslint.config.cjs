/** @type {import('eslint').Linter.Config} */
module.exports = [
  {
    files: ['src/**/*.ts'],
    plugins: {
      import: require('eslint-plugin-import'),
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaFeatures: { jsx: false },
      },
    },
    rules: {
      // Sort imports: groups first, then alphabetically within each group.
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          warnOnUnassignedImports: true,
        },
      ],
      // Keep the codebase's explicit .ts extension style intact.
      'import/extensions': ['error', 'always', { ignore: [] }],
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'error',
    },
  },
];