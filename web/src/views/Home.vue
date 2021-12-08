<template>
	<section class="section-container">
		<div class="section-left">
			<TaskList :tasks="tasks" />
		</div>
		<div class="section-right">
			<TaskForm :reload-tasks="reload" />
		</div>
	</section>
</template>

<script setup lang="ts">
	import TaskList from '../components/TaskList.vue';
	import TaskForm from '../components/TaskForm.vue';
	import useFetch from '../composables/useFetch';
	const { data: tasks, reload } = await useFetch<Record<string, any>[]>('/api/tasks');
</script>

<style scoped lang="scss">
	@import '../styles/base';

	.section-container {
		padding: 20px;
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		min-height: 100%;
		grid-template-columns: 1fr 1fr;

		.section-left {
			border-right: 1px solid $tertiary-colour;
			padding-right: 20px;
		}

		.section-right {
			border-left: 1px solid $tertiary-colour;
			padding-left: 20px;
		}
	}
</style>
