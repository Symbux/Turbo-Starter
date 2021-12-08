import 'reflect-metadata';
import { Engine, HttpPlugin } from '@symbux/turbo';
import { resolve } from 'path';

// Create engine instance.
const engine = new Engine({
	autowire: true,
	database: true,
	logLevels: ['info', 'warn', 'error', 'verbose', 'debug'],
	translations: resolve(process.cwd(), 'translations'),
});

// Define is production
const isProduction = process.env.NODE_ENV === 'production';

// Register HTTP plugin.
engine.use(new HttpPlugin({
	port: parseInt(String(process.env.PORT)) || 3005,
	static: isProduction ?
		[
			{ folder: resolve(process.cwd(), '../web/dist'), pathname: '/' },
			{ folder: resolve(process.cwd(), '../web/dist'), pathname: '*' },
		]
		: undefined,
	security: {
		enableHelmet: true,
	},
}));

// Start engine.
engine.start().catch(console.error);
