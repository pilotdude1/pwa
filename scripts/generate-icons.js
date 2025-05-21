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
      
      <!-- Safe zone (10% padding) -->
      <rect x="51.2" y="51.2" width="409.6" height="409.6" fill="none" stroke="#ffffff" stroke-width="2"/>
      
      <!-- Main content (centered in safe zone) -->
      <g transform="translate(256, 256)">
        <!-- Example: Simple PWA logo -->
        <circle cx="0" cy="0" r="153.6" fill="#ffffff"/>
        <text x="0" y="0" font-family="Arial" font-size="120" fill="#000000" text-anchor="middle" dominant-baseline="middle">PWA</text>
      </g>
    </svg>
  `;

  // Write SVG to temporary file
  const tempSvgPath = join(__dirname, '../static/icons/temp-icon.svg');
  await fs.writeFile(tempSvgPath, svgContent);

  // Load the SVG
  await page.goto(`file:${tempSvgPath}`);

  // Generate different sizes
  const sizes = [192, 512];
  for (const size of sizes) {
    // Take screenshot
    const screenshot = await page.screenshot({
      path: join(__dirname, `../static/icons/icon-${size}x${size}.png`),
      omitBackground: true
    });
  }

  // Clean up
  await fs.unlink(tempSvgPath);
  await browser.close();

  console.log('Icons generated successfully!');
}

generateIcons().catch(console.error); 