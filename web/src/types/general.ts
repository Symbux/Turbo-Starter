import { Ref } from 'vue';

export type MaybeRef<T> = T | Ref<T>;

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
