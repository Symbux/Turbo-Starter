<template>
	<header class="header-container">
		<Header />
	</header>

	<main class="content-container">
		<router-view v-slot="{ Component }">
			<template v-if="Component">
				<transition name="fade">
					<keep-alive>
						<suspense>
							<component :is="Component" />
							<template #fallback>
								<Loading />
							</template>
						</suspense>
					</keep-alive>
				</transition>
			</template>
		</router-view>
	</main>

	<footer class="footer-container">
		<Footer />
	</footer>
</template>

<script setup lang="ts">
	import Header from './partials/Header.vue';
	import Footer from './partials/Footer.vue';
	import Loading from './partials/Loading.vue';
</script>

<style lang="scss">
	@import './styles/base/main';
	@import './styles/modules';
</style>
