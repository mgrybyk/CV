import { PlaywrightTestConfig } from '@playwright/test'
import { playwrightBaseConfig } from './playwright.base.config.js'

const config: PlaywrightTestConfig = {
  ...playwrightBaseConfig,
  projects: [
    ...playwrightBaseConfig.projects!,
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' }
    }
  ],
  retries: 1,
  updateSnapshots: 'all',
  testMatch: 'screenshot.spec.ts'
}

export default config
