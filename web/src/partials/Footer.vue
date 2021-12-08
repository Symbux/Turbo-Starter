<template>
	<div class="footer">
		<div class="footer__left">
			<p class="text">Powered by <a href="#">Turbo</a></p>
		</div>
		<div class="footer__right">
			<a target="_blank" href="#" class="social-item">
				<fa class="icon" :icon="['fab', 'npm']" />
			</a>
			<a target="_blank" href="#" class="social-item">
				<fa class="icon" :icon="['fab', 'github']" />
			</a>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@import '../styles/base';

	.footer {
		display: grid;
		grid-auto-columns: 1fr;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		justify-content: space-between;
		justify-items: stretch;
		width: 100%;

		&__left {
			padding-top: 10px;
			padding-left: 10px;
			color: darken($primary-text-colour, 10%);

			.text {
				font-size: 16px;
				font-weight: bold;

				a {
					color: darken($primary-text-colour, 10%);
					text-decoration: underline;

					&:hover {
						color: darken($primary-text-colour, 20%);
					}
				}
			}
		}

		&__right {
			text-align: right;
			padding: 8px 10px;

			.social-item {
				margin: 0 5px;

				.icon {
					font-size: 24px;
					color: darken($primary-text-colour, 10%);
				}

				&:hover {
					.icon {
						color: darken($primary-text-colour, 20%);
					}
				}
			}
		}
	}
</style>
