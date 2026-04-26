import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE = 'http://localhost:4321';
const OUT = path.resolve('./public/previews');

const TEMPLATES = [
  'wedding-photographer-growth',
  'wedding-photographer-pro',
  'mehndi-artist-growth',
  'mehndi-artist-pro',
  'food-photographer-growth',
  'food-photographer-pro',
  'tattoo-artist-growth',
  'tattoo-artist-pro',
];

async function capture() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  fs.mkdirSync(OUT, { recursive: true });

  for (const slug of TEMPLATES) {
    console.log(`Capturing ${slug}...`);
    const filePath = path.join(OUT, `${slug}.png`);

    try {
      await page.goto(`${BASE}/${slug}?t=${Date.now()}`, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(500);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`  Saved ${filePath}`);
    } catch (err) {
      console.error(`  FAILED ${slug}:`, err.message);
    }
  }

  await browser.close();
  console.log('\nDone. Screenshots in', OUT);
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
