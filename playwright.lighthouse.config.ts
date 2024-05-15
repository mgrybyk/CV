import { PlaywrightTestConfig } from '@playwright/test'
import { playwrightBaseConfig } from './playwright.base.config.js'

process.env.LH_REPORT_DIR = 'lighthouse'
process.env.LH_SCORES_DIR = 'lh-scores'

const config: PlaywrightTestConfig = {
  ...playwrightBaseConfig,
  testMatch: 'lighthouse.spec.ts',
  globalSetup: './test/global-setup-lighthouse.ts'
}

export default config
