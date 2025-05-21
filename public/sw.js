import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

// This is the manifest placeholder that will be replaced during build
self.__WB_MANIFEST;

// Precache all assets
precacheAndRoute(self.__WB_MANIFEST);

// Handle Supabase API requests
registerRoute(
  /^https:\/\/api\.supabase\.co\/.*/i,
  new NetworkFirst({
    cacheName: 'supabase-api-cache',
    networkTimeoutSeconds: 10,
    plugins: [
      {
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    ]
  })
); 