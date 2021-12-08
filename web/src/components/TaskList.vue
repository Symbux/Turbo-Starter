<template>
	<div class="task-list">
		<div class="task-item" v-for="task in tasks" :key="task.id">
			<p>{{ JSON.stringify(task) }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		tasks: Record<string, any>[];
	}>();
</script>
