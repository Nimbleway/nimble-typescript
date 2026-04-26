// @ts-check
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { sourceType: 'module' },
    },
    files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.js', '**/*.mjs', '**/*.cjs'],
    ignores: ['dist/'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'unused-imports': unusedImports,
      prettier,
    },
    rules: {
      'no-unused-vars': 'off',
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^@nimble-way/nimble-js(/.*)?',
              message: 'Use a relative import, not a package import.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['tests/**', 'examples/**', 'packages/**'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
  {
    files: ['contract-tests/**'],
    rules: {
      'no-restricted-imports': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.object.name='expect'][callee.property.name='any'][arguments.0.name='Object']",
          message:
            'expect.any(Object) is too vague. Use expect.objectContaining({…}) to describe the expected shape.',
        },
        {
          selector:
            "CallExpression[callee.object.name='expect'][callee.property.name='objectContaining'][arguments.0.type='ObjectExpression'][arguments.0.properties.length=0]",
          message:
            'expect.objectContaining({}) matches any object — describe the shape or fix the OpenAPI spec.',
        },
      ],
    },
  },
);
