import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateScreenshots() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Start the dev server
    console.log('Starting dev server...');
    // Note: You'll need to start the dev server separately before running this script
    const baseUrl = 'http://localhost:3000';

    // Generate desktop screenshot (1920x1080 - modern desktop)
    console.log('Generating desktop screenshot...');
    await page.goto(baseUrl);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({ 
      path: join(__dirname, '../static/screenshots/desktop.png'),
      fullPage: true
    });

    // Generate mobile screenshot (390x844 - iPhone 12/13/14)
    console.log('Generating mobile screenshot...');
    await page.setViewport({ width: 390, height: 844 });
    await page.screenshot({ 
      path: join(__dirname, '../static/screenshots/mobile.png'),
      fullPage: true
    });

    console.log('Screenshots generated successfully!');
  } catch (error) {
    console.error('Error generating screenshots:', error);
  } finally {
    await browser.close();
  }
}

generateScreenshots().catch(console.error); 