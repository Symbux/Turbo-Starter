import { Ref } from 'vue';

export type MaybeRef<T> = T | Ref<T>;

export type TaskItem = {
	id: string,
	name: string,
	description: string,
	completed: boolean,
};
