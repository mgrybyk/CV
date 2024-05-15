import { expect, Page, TestInfo } from '@playwright/test'

const screenshotOptions = { threshold: 0.1 }

export const comparePageScreenshot = async (
  screenshotName: string,
  page: Page,
  testInfo: TestInfo
) => {
  if (testInfo.retry > 0 && testInfo.config.updateSnapshots !== 'all') {
    testInfo.config.updateSnapshots = 'all'
  }
  await expect(page).toHaveScreenshot(`${screenshotName}.png`, {
    ...screenshotOptions,
    fullPage: true
  })
}
