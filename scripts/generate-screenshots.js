import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateScreenshots() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Generate desktop screenshot
  await page.goto(`file:${join(__dirname, '../static/screenshots/desktop.html')}`);
  await page.setViewport({ width: 1280, height: 720 });
  await page.screenshot({ path: join(__dirname, '../static/screenshots/desktop.png') });

  // Generate mobile screenshot
  await page.goto(`file:${join(__dirname, '../static/screenshots/mobile.html')}`);
  await page.setViewport({ width: 750, height: 1334 });
  await page.screenshot({ path: join(__dirname, '../static/screenshots/mobile.png') });

  await browser.close();
}

generateScreenshots().catch(console.error); 