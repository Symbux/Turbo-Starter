import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router';

export function createRouter() {

	// Define router.
	const router = _createRouter({
		// @ts-ignore env.SSR is injected by Vite.
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
		routes: [
			{
				path: '/',
				name: 'Home',
				meta: { title: 'Home | Turbo UI' },
				component: () => import('../view/Home.vue'),
			},
			{
				path: '/about',
				name: 'About',
				component: () => import('../view/About.vue'),
			},
		],
	});

	// Guard setup example.
	// // @ts-ignore env.SSR is injected by Vite.
	// if (!import.meta.env.SSR) {
	// 	router.beforeEach((to, from, next) => {
	// 		MetaGuard(to, from, next);
	// 	});
	// }

	// Return the router.
	return router;
}
