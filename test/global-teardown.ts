import { lighthousePlaywrightTeardown } from 'lighthouse-reporting';

async function globalTeardown() {
  await lighthousePlaywrightTeardown();
}

export default globalTeardown;
