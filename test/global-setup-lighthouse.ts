import path from 'path'
import fs from 'fs/promises'
import { lighthouseSetup } from 'lighthouse-reporting'

const lhScoresDir = path.join(process.cwd(), process.env.LH_SCORES_DIR as string)

async function globalSetup() {
  await fs.mkdir(lhScoresDir, { recursive: true })
  await lighthouseSetup()
}

export default globalSetup
