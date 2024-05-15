import { PlaywrightTestConfig } from '@playwright/test'

const baseURL = 'http://localhost:5173'

export const playwrightBaseConfig: PlaywrightTestConfig = {
  use: {
    viewport: { width: 1536, height: 960 },
    ignoreHTTPSErrors: true,
    screenshot: 'off',
    baseURL
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', launchOptions: { args: ['--disable-gpu'] } }
    }
  ],
  retries: 0,
  reporter: [['line']],
  testDir: 'test',
  testMatch: 'override_me',
  globalTeardown: './test/global-teardown.ts',
  fullyParallel: true,
  forbidOnly: true,
  webServer: {
    command: process.env.CI ? 'vite preview --port 5173' : 'vite dev',
    url: baseURL,
    reuseExistingServer: !process.env.CI
  }
}
