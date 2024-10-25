import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

// Некоторые пояснения
// https://www.programmerall.com/article/31412768669/

export default withNuxt([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/camelcase': 'off',
      'vue/attribute-hyphenation': ['warn', 'never'],
      'vue/multi-word-component-names': 'warn',
      'vue/prop-name-casing': ['warn', 'camelCase'],
      'vue/custom-event-name-casing': ['warn', 'camelCase'],
      'vue/component-definition-name-casing': ['warn', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-options-name-casing': ['warn', 'PascalCase'],
    },
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: [
      'node_modules',
      'build',
      'projects',
      'dist',
      'public',
      '.nuxt',
      '.output',
      '**/api/**',
      '*.cjs',
      '**/*.cjs',
    ],
  },
  eslintConfigPrettier,
])

// export default [
//   { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
//   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...pluginVue.configs['flat/recommended'],
//   { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
//   {
//     ignores: ['node_modules', 'dist', 'public', '.nuxt', '**/api/**'],
//   },
//   eslintConfigPrettier,
// ]
