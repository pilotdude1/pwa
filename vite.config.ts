import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			strategies: 'generateSW',
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			},
			manifest: false,
			includeAssets: ['favicon.ico', 'robots.txt', 'icons/*', 'screenshots/*', 'manifest.webmanifest'],
			workbox: {
				cleanupOutdatedCaches: true,
				sourcemap: true,
				clientsClaim: true,
				skipWaiting: true,
				globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
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
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					},
					{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'gstatic-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					}
				]
			}
		})
	],
	server: {
		host: '0.0.0.0',
		port: 3000,
		strictPort: true,
		watch: {
			usePolling: true
		},
		hmr: {
			clientPort: 3000,
			protocol: 'ws'
		},
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
						if (id.includes('daisyui') || id.includes('tailwindcss')) {
							return 'ui';
						}
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
