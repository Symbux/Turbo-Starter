import { watch, ref, unref, isRef } from 'vue';
import { MaybeRef, HttpMethod } from '../types/general';
import httpInstance from '../providers/http';

export default async function useFetch<T>(url: MaybeRef<string>, method: HttpMethod = 'GET', body: any = {}, headers?: Record<string, any>) {

	// Define variables.
	const http = httpInstance;
	const error = ref<string>('');
	if (!http) {
		error.value = 'No http transport defined.';
	}

	// Load the data.
	const data = ref<T>(
		http
			? await (await (http as any)[method.toLowerCase()](...[
				unref(url),
				method === 'GET' ? headers : body,
				method !== 'GET' ? headers : undefined,
			])).json()
			: [],
	);

	// Watch for changes.
	if (isRef(url)) {
		watch(url, reload);
	}

	// Reload the data.
	async function reload() {
		data.value = http ? await (await http.get(unref(url))).json() : [];
	}

	// Return the data.
	return {
		error,
		data,
		reload,
	};
}
