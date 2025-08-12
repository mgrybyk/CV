import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import unocss from '@unocss/eslint-plugin'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: ['.vue']
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      vue,
      '@typescript-eslint': typescript,
      '@unocss': unocss
    },
    rules: {
      ...typescript.configs.recommended.rules
    }
  },

  {
    ignores: [
      'dist',
      'node_modules',
      '.git',
      'lh-scoures',
      'lighthouse',
      'report',
      'test-results',
      'allure-results',
      'allure-report',
      'public',
      '.vscode'
    ]
  }
]
