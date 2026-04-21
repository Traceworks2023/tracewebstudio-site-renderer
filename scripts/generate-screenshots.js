const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SITE_RENDERER_URL = 'http://localhost:4322';
const OUTPUT_DIR = '/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/public/previews';
const TEMPLATES_DIR = '/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/templates';

async function generateScreenshots() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get all template slugs
  const dirs = fs.readdirSync(TEMPLATES_DIR).filter(f => {
    return fs.statSync(path.join(TEMPLATES_DIR, f)).isDirectory();
  });

  console.log(`Found ${dirs.length} templates`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });

  let success = 0;
  let failed = 0;

  for (const slug of dirs) {
    const outputPath = path.join(OUTPUT_DIR, `${slug}.jpg`);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${slug} (already exists)`);
      continue;
    }

    try {
      const page = await context.newPage();
      const url = `${SITE_RENDERER_URL}/${slug}`;

      console.log(`Capturing ${slug}...`);

      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.screenshot({ path: outputPath, type: 'jpeg', quality: 80 });

      await page.close();
      success++;
      console.log(`  ✓ ${slug}`);
    } catch (err) {
      console.log(`  ✗ ${slug}: ${err.message}`);
      failed++;
    }
  }

  await browser.close();

  console.log(`\nDone: ${success} succeeded, ${failed} failed`);
}

generateScreenshots().catch(console.error);
