import { test } from '@playwright/test'
import { comparePageScreenshot } from '../screenshot'

test('CV @screenshot', async ({ page }, testInfo) => {
  await page.goto('/')

  await comparePageScreenshot('cv', page, testInfo)
})
