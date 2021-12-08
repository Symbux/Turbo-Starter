import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

/**
 * This pushes meta content into the header before navigation change and helps
 * with pre-rendering and SEO.
 * 
 * @param {object} to The router navigation record for the next route.
 * @param {object} from The router navigation record for the previous route.
 * @param {function} next The function to call to proceed with the route change.
 */
export default function MetaGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
	const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	if (nearestWithTitle) (document as any).title = nearestWithTitle.meta.title;
	Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el: Element) => el.parentNode?.removeChild(el));

	if (!nearestWithMeta) return next();
	(nearestWithMeta as any).meta.metaTags.map((tagDef: any) => {
		const tag = document.createElement('meta');

		Object.keys(tagDef).forEach(key => {
			tag.setAttribute(key, tagDef[key]);
		});

		tag.setAttribute('data-vue-router-controlled', '');
		return tag;
	}).forEach((tag: Element) => document.head.appendChild(tag));

	next();
}
