<template>
	<div class="task-item">
		<p class="title">
			<fa :icon="getIcon" class="status" :class="{ complete: task.completed }" />
			{{ task.title }}
		</p>
		<p class="content">{{ task.content }}</p>
		<p class="due">{{ task.due }}</p>
		<button class="btn btn-icon delete" @click="deleteTask(task.id)">
			<fa :icon="['fas', 'trash']" />
		</button>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import http from '../providers/http';

	const props = defineProps<{
		task: Record<string, any>;
		reloadTasks: () => Promise<void>;
	}>();

	const getIcon = computed(() => {
		if (props.task.completed) {
			return ['fas', 'check'];
		} else {
			return ['fas', 'times'];
		}
	});

	const deleteTask = async (taskId: string) => {
		const response = await http.delete(`/api/tasks/${taskId}`);
		if (response.status === 204) {
			props.reloadTasks();
		}
	};
</script>

<style scoped lang="scss">
	@import '../styles/base';
	@import '../styles/modules/button';

	.task-item {
		float: left;
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		background-color: $tertiary-colour;
		margin-bottom: 25px;
		position: relative;
		overflow: hidden;
		@include prefix(transition, all 0.2s ease-in-out);
		@include prefix(box-shadow, 0 0 10px 0 rgba(black, 0.3));

		.title {
			float: left;
			width: 100%;
			font-weight: bold;
			color: $primary-colour;
			font-size: 16px;
			border-bottom: 1px solid $primary-colour;
			padding-bottom: 8px;
			margin-bottom: 8px;

			.status {
				color: $alert-danger-colour;
				margin-right: 5px;
				font-size: 15px;

				&.completed {
					color: $alert-success-colour;
				}
			}
		}

		.content {
			float: left;
			width: 100%;
			font-size: 15px;
			font-weight: normal;
			color: darken($primary-colour, 10%);
		}

		.due {
			float: right;
			width: 100%;
			padding-top: 10px;
			color: rgba($primary-colour, 0.7);
			font-style: italic;
			text-align: right;
		}

		.btn.btn-icon.delete {
			right: -32px;
			position: absolute;
			top: 0;
			height: 100%;
			padding: 5px 10px;
			background-color: rgba($alert-danger-colour, 0.8);
			color: white;
			max-width: 32px;

			&:hover {
				background-color: $alert-danger-colour;
			}
		}

		&:hover {
			padding-right: 42px;

			.btn.btn-icon.delete {
				right: 0;
			}
		}
	}
</style>
