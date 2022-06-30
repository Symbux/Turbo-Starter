<template>
	<div>
		<section class="section">
			<h1 class="title is-2">To-Do List</h1>
		</section>

		<section class="section">
			<h2 class="subtitle">Add Task</h2>
			<AddTask @reload="requestTasks" />
		</section>

		<section class="section">
			<h2 class="subtitle">Task List</h2>
			<TaskList @reload="requestTasks" :tasks="tasks" />
		</section>
	</div>
</template>

<script setup lang="ts">
	import TaskList from '../components/TaskList.vue';
	import AddTask from '../components/AddTask.vue';
	import fetch from 'cross-fetch';
	import { ref } from 'vue';
	const tasks = ref<any[]>([]);

	const requestTasks = async () => {
		const response = await fetch('http://localhost:5600/api/task');
		tasks.value = await response.json();
	};

	await requestTasks();
</script>
