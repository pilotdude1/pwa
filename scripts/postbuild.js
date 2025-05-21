import { copyFileSync } from 'fs';
import { join } from 'path';

// Copy service worker to static directory
copyFileSync(
  join(process.cwd(), '.svelte-kit/output/client/sw.js'),
  join(process.cwd(), 'static/sw.js')
);

console.log('Service worker copied to static directory'); 