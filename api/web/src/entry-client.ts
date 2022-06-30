import { createPinia } from 'pinia';
import { createApp } from './main';
const { app, router } = createApp();

router.isReady().then(() => {
	app
		.use(createPinia())
		.mount('#app');
});
