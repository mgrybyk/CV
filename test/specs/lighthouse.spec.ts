import path from 'path'
import { playAudit } from 'playwright-lighthouse'
import {
  playwrightLighthouseTest,
  getScores,
  writeCsvResult,
  writeHtmlListEntryWithRetry,
  writeScoresToJson
} from 'lighthouse-reporting'

playwrightLighthouseTest.setTimeout(60000)
const lhScoresDir = path.join(process.cwd(), process.env.LH_SCORES_DIR as string)
const reportDir = path.join(process.cwd(), process.env.LH_REPORT_DIR as string)
const htmlFilePath = path.join(reportDir, 'index.html')

playwrightLighthouseTest('CV @lighthouse', async ({ page, port, baseURL }) => {
  const onlyCategories = ['accessibility']
  const thresholds = { accessibility: 100 }
  const name = 'cv'

  const result = await playAudit({
    url: baseURL,
    page,
    port,
    thresholds,
    reports: {
      formats: {
        html: true
      },
      name,
      directory: reportDir
    },
    opts: {
      onlyCategories,
      screenEmulation: { disabled: true }
    },
    disableLogs: true,
    ignoreError: true
  })

  const scores = getScores(result)
  await writeCsvResult(reportDir, name, scores, thresholds)
  await writeHtmlListEntryWithRetry(htmlFilePath, name, scores, thresholds, result.comparisonError)

  // reflect accessibility score changes in the PR
  await writeScoresToJson(lhScoresDir, name, scores, result)
})
