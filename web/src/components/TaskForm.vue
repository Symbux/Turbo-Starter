<template>
	<header>
		<h2>Create Task</h2>
	</header>

	<section>
		<div class="form-container">
			<div class="form-item">
				<label for="title">Title</label>
				<input type="text" id="title" v-model="task.title" placeholder="Name your task..." />
			</div>
			<div class="form-item">
				<label for="content">Content</label>
				<textarea id="content" v-model="task.content" rows="8" placeholder="Describe your task..."></textarea>
			</div>
			<div class="form-item">
				<label for="title">Due Date</label>
				<input type="datetime-local" id="title" v-model="task.due" />
			</div>
			<div class="form-item">
				<label for="title">Is Completed</label>
				<input type="checkbox" id="title" v-model="task.completed" />
			</div>
			<div class="form-item">
				<button class="btn btn-success" @click="onSubmit">Submit</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { reactive } from 'vue';
	import useDate from '../composables/useDate';
	import http from '../providers/http';

	const props = defineProps<{
		reloadTasks: () => Promise<void>;
	}>();

	const onSubmit = async () => {
		const response = await http.post('/api/tasks', task);
		if (response.status === 201) {
			props.reloadTasks();
			task.title = '';
			task.content = '';
			task.due = useDate();
			task.completed = false;
		}
	};

	const task = reactive({
		title: '',
		content: '',
		due: useDate(),
		completed: false,
	});
</script>

<style scoped lang="scss">
	@import '../styles/base';
	@import '../styles/modules/form';
	@import '../styles/modules/input';
	@import '../styles/modules/button';

	header > h2 {
		font-weight: bold;
		font-size: 20px;
		color: darken($primary-text-colour, 10%);
	}

	.form-container {
		margin-top: 25px;
	}
</style>
