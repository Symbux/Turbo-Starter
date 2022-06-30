<template>
	<form>
		<div class="field">
			<label class="label">Name</label>
			<div class="control">
				<input class="input" type="text" placeholder="Give your task a name..." v-model="task.name" />
			</div>
		</div>

		<div class="field">
			<label class="label">Description</label>
			<div class="control">
				<textarea class="textarea" placeholder="Describe the task you must complete..." v-model="task.description"></textarea>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" v-model="task.completed" />
					Was this task already completed?
				</label>
			</div>
		</div>

		<div class="field is-grouped">
			<div class="control">
				<button class="button is-link" @click.prevent="doSubmit">Submit</button>
			</div>
			<div class="control">
				<button class="button is-link is-light" @click.prevent="doReset">Reset</button>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
	import fetch from 'cross-fetch';
	import { ref } from 'vue';

	const emit = defineEmits<{
		(e: 'reload'): void,
	}>();

	const task = ref({
		name: '',
		description: '',
		completed: false,
	});

	const doSubmit = async () => {

		// Post the new task.
		await fetch('/api/task', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task.value),
		});

		// Reset the fields.
		doReset();

		// Tell the parent to reload the tasks.
		emit('reload');
	};

	const doReset = () => {
		task.value.name = '';
		task.value.description = '';
		task.value.completed = false;
	};
</script>
