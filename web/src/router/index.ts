import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import metaGuard from '../setup/meta-guard';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		meta: {
			title: 'Task Manager | Turbo',
			description: 'Task manager software written with Vue 3, Pinia, TypeScript, and Turbo.',
			keywords: 'tasks,manager,vue,vue3,pina,typescript,vue-router,turbo',
		},
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	metaGuard(to, from, next);
});

export default router;
