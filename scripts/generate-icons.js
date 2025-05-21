import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateIcons() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to 512x512 (we'll scale down for smaller sizes)
  await page.setViewport({ width: 512, height: 512 });

  // Create SVG with safe zone
  const svgContent = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="512" height="512" fill="#000000"/>
      
      <!-- Main content (centered in safe zone) -->
      <g transform="translate(256, 256)">
        <!-- Modern PWA logo -->
        <circle cx="0" cy="0" r="153.6" fill="#ffffff"/>
        <path d="M-60,-20 L60,-20 L60,20 L-60,20 Z" fill="#000000"/>
        <path d="M-40,0 L40,0" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
        <path d="M0,-40 L0,40" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
      </g>
    </svg>
  `;

  // Write SVG to temporary file
  const tempSvgPath = join(__dirname, '../static/icons/temp-icon.svg');
  await fs.writeFile(tempSvgPath, svgContent);

  try {
    // Load the SVG
    await page.goto(`file:${tempSvgPath}`);

    // Generate different sizes
    const sizes = [192, 512];
    for (const size of sizes) {
      // Take screenshot
      await page.screenshot({
        path: join(__dirname, `../static/icons/icon-${size}x${size}.png`),
        omitBackground: true,
        type: 'png'
      });
    }

    console.log('Icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  } finally {
    // Clean up
    await fs.unlink(tempSvgPath).catch(() => {});
    await browser.close();
  }
}

generateIcons().catch(console.error); 