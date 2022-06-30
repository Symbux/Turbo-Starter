<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link class="navbar-item" to="/">
				<strong>Turbo Vite</strong>
			</router-link>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<Navigation />
	</nav>
</template>

<script setup lang="ts">
	import Navigation from './Navigation.vue';
</script>
