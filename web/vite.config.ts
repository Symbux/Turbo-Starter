import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			cache: false,
			fix: true,
		}),
	],
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3005',
				changeOrigin: true,
				// rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
});
