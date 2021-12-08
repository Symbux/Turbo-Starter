<template>
	<header>
		<h2>Task List</h2>
	</header>

	<section class="tasks-container">
		<Task v-for="task in tasks" :key="task.id" :task="task" :reload-tasks="reloadTasks" />
	</section>
</template>

<script setup lang="ts">
	import Task from './Task.vue';

	defineProps<{
		tasks: Record<string, any>[];
		reloadTasks: () => Promise<void>;
	}>();
</script>

<style scoped lang="scss">
	@import '../styles/base';

	header > h2 {
		font-weight: bold;
		font-size: 20px;
		color: darken($primary-text-colour, 10%);
	}

	.tasks-container {
		margin-top: 25px;
	}
</style>
