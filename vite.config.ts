import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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
