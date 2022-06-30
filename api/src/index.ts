import 'reflect-metadata';
import { Engine, HttpPlugin, Registry } from '@symbux/turbo';
import VitePlugin from '@symbux/turbo-vite';
import VueVitePlugin from '@vitejs/plugin-vue';
import { resolve } from 'path';

// Create engine instance.
const engine = new Engine({
	autowire: true,
	database: true,
	errors: { continue: true },
	logLevels: ['info', 'warn', 'error', 'verbose', 'debug'],
	translations: resolve(process.cwd(), 'translations'),
});

// Register HTTP plugin.
engine.use(new HttpPlugin({
	port: parseInt(String(process.env.PORT)) || 3005,
	static: Registry.get('turbo.mode') === 'production' ? [
		{ folder: resolve(process.cwd(), './web/dist/client/assets'), pathname: '/assets' },
		{ folder: resolve(process.cwd(), './web/dist/client/'), pathname: '/' },
	] : undefined,
}));

// Register the Vite plugin.
engine.use(new VitePlugin({
	environment: Registry.get('turbo.mode') === 'production' ? 'production' : 'development',
	plugins: [ VueVitePlugin() ],
	disableAutoRouting: false,
}));

// Start engine.
engine.start().catch(console.error);
