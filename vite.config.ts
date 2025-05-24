import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import type { PluginOption } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),

    VitePWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module'
      },

      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'masked-icon.svg'
      ],

      manifest: {
        name: 'SvelteShip Template',
        short_name: 'SvelteShip',
        description: 'A modern SvelteKit template with PWA support',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        globDirectory: 'dev-dist',
        globPatterns: ['**/*.{js,mjs,css,html,ico,png,svg,json}'],
        globIgnores: [
          '**/node_modules/**/*',
          '**/sw.js',
          '**/workbox-*.js',
          '**/manifest.webmanifest'
        ],
        navigateFallback: undefined,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      }
    }) as PluginOption
  ],

  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: true,
    watch: { usePolling: true },
    hmr: { clientPort: 3000, protocol: 'ws' },
    cors: true
  },

  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('daisyui') || id.includes('tailwindcss')) return 'ui';
            return 'vendor';
          }
        }
      }
    }
  },

  optimizeDeps: {
    include: ['@supabase/supabase-js', '@stripe/stripe-js']
  }
});
