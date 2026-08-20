import js from '@eslint/js'
import unocss from '@unocss/eslint-config/flat'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default withVueTs(
  js.configs.recommended,
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  unocss,

  {
    files: ['src/**/*.{js,mjs,cjs,jsx,ts,tsx,vue}'],
    languageOptions: {
      globals: globals.browser
    }
  },

  {
    files: ['*.{js,mjs,cjs,ts}', 'test/**/*.ts'],
    languageOptions: {
      globals: globals.node
    }
  },

  {
    ignores: [
      'dist',
      'node_modules',
      '.git',
      'lh-scores',
      'lighthouse',
      'report',
      'test-results',
      'allure-results',
      'allure-report',
      'public',
      '.vscode'
    ]
  },

  skipFormatting
)
