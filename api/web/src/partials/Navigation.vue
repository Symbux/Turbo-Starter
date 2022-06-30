<template>
	<div id="navigation" class="navbar-menu">
		<div class="navbar-end">
			<router-link to="/" class="navbar-item">
				Home
			</router-link>

			<router-link to="/about" class="navbar-item">
				About
			</router-link>

			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					Docs
				</a>

				<div class="navbar-dropdown dropdown-right">
					<a target="_blank" href="https://github.com/Symbux/Turbo/wiki" class="navbar-item">
						Turbo
					</a>
					<a target="_blank" href="https://github.com/Symbux/Turbo-Vite/wiki" class="navbar-item">
						Turbo Vite
					</a>
					<a target="_blank" href="https://vitejs.dev/" class="navbar-item">
						Vite
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.dropdown-right {
		left: initial;
		right: 0;
	}
</style>
