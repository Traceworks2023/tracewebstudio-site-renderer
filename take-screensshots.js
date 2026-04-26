import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const SITE_RENDERER_URL = 'http://localhost:4322';
const TEMPLATES_DIR = '/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/templates';
const OUTPUT_DIR = '/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/public/previews';

// Get all template slugs from directories
const templateDirs = fs.readdirSync(TEMPLATES_DIR)
  .filter(f => {
    const configPath = path.join(TEMPLATES_DIR, f, 'config.json');
    return fs.existsSync(configPath);
  });

console.log(`Found ${templateDirs.length} templates: ${templateDirs.join(', ')}`);

async function takeScreenshot(slug) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  const url = `${SITE_RENDERER_URL}/${slug}`;
  console.log(`Taking screenshot of ${slug}...`);

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000); // Wait for animations

    const outputPath = path.join(OUTPUT_DIR, `${slug}.png`);
    await page.screenshot({ path: outputPath, fullPage: false });
    console.log(`✓ Saved: ${outputPath}`);
  } catch (err) {
    console.error(`✗ Failed: ${slug} - ${err.message}`);
  }

  await browser.close();
}

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Take screenshots one by one
  for (const slug of templateDirs) {
    await takeScreenshot(slug);
  }

  console.log(`\nDone! ${templateDirs.length} screenshots saved to ${OUTPUT_DIR}`);
}

main().catch(console.error);