import { expect, Page, TestInfo } from '@playwright/test'
import fs from 'fs/promises'

const screenshotOptions = { threshold: 0.1 }

export const isFileExist = async (filePath: string) => {
  try {
    await fs.access(filePath, 0)
    return true
  } catch (err) {
    return false
  }
}

export const comparePageScreenshot = async (
  screenshotName: string,
  page: Page,
  testInfo: TestInfo
) => {
  if (testInfo.retry === 0) {
    testInfo.config.updateSnapshots = 'missing'

    // https://github.com/microsoft/playwright/issues/23502
    const screenshotPath = `${testInfo.snapshotPath(screenshotName)}.png`
    if (!(await isFileExist(screenshotPath))) {
      testInfo.config.updateSnapshots = 'all'
    }
  } else {
    testInfo.config.updateSnapshots = 'all'
  }

  await expect(page).toHaveScreenshot(`${screenshotName}.png`, {
    ...screenshotOptions,
    fullPage: true
  })
}
