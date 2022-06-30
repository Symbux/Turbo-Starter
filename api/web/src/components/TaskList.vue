<template>
	<table class="table is-striped is-hoverable is-fullwidth">
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Status</th>
				<th>Controls</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(task, index) in tasks" :key="index" :class="{ 'is-selected': task.completed }">
				<td>{{ task.name }}</td>
				<td>{{ task.description }}</td>
				<td>{{ task.completed ? '✔️' : '❌' }}</td>
				<td>
					<button class="button is-small mr-3" :class="[task.completed ? 'is-light' : 'is-success']" @click="setCompleteStatus(task, task.completed ? false : true)">{{ task.completed ? 'Reset' : 'Complete' }}</button>
					<button class="button is-small is-danger mr-3" @click="deleteTask(task)">Delete</button>
				</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td colspan="4">{{ tasks.length }} Item(s)</td>
			</tr>
		</tfoot>
	</table>
</template>

<script setup lang="ts">
	import { TaskItem } from '../types/general';

	const emit = defineEmits<{
		(e: 'reload'): void,
	}>();

	defineProps<{
		tasks: TaskItem[],
	}>();

	const deleteTask = async (task: TaskItem) => {

		// Delete the task.
		await fetch(`/api/task/${task.id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(task),
		});

		// Tell the parent to reload.
		emit('reload');
	};

	const setCompleteStatus = async (task: TaskItem, status: boolean) => {

		// Update the task.
		await fetch(`/api/task/${task.id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ completed: status }),
		});

		// Tell the parent to reload.
		emit('reload');
	};
</script>

<style scoped lang="scss">
	tr > th:nth-child(1) {
		width: 15%;
	}

	tr > th:nth-child(3) {
		width: 10%;
	}

	tr > th:nth-child(4) {
		width: 20%;
	}
</style>
