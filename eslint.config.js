// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    // Fichiers TypeScript
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // ✅ Nommage des composants Angular
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      // Interdit les console.log
      'no-console': ['error'],
      //  Indentation à 2 espaces
      'indent': ['error', 2],
      //  Quotes simples obligatoires
      'quotes': ['error', 'single'],
      //  Point-virgule obligatoire
      'semi': ['error', 'always'],
      //  Interdit les variables inutilisées
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
  {
    // Fichiers HTML
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
