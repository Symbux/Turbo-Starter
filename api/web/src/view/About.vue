<template>
	<div>
		<section class="section">
			<h1 class="title is-2">About Turbo Vite</h1>
		</section>

		<section class="section">
			<h2 class="subtitle">What is Turbo?</h2>
			<p>The Turbo engine is a command-based framework for building API (and web) based applications using either built-in or community/custom ones plugins.</p>
			<p>The engine provides a simple file structure, and provides a heap of useful built-in functionality for making your life simpler, with the idea to expand.</p>

			<p class="mt-5 mb-3">Some key features of Turbo:</p>
			<ul class="pl-4">
				<li><strong>Dependecy Injection</strong> - Turbo employs a package called <code>@symbux/injector</code> which allows provide/inject functionality.</li>
				<li><strong>Structured Controllers</strong> - All services interact with the platform using defined controllers for business logic.</li>
				<li><strong>Translations</strong> - Turbo offers and supports auto and manual translations given translation files.</li>
				<li><strong>Fibres / Threads</strong> - Built in support for threads that is automatically forwarded behind the scenes, so you can call classes like normal.</li>
				<li><strong>Middlewares / Auth</strong> - A powerful middleware and authentication system is built-in for controllers to utilise.</li>
				<li><strong>Built-In HTTP/WS</strong> - The engine comes with HTTP and WebSocket services built-in.</li>
				<li><strong>Static Website Hosting</strong> - The engine can serve static assets/files (like a compiled Vue, React app or just a static website) out of the box.</li>
			</ul>
		</section>

		<section class="section">
			<h2 class="subtitle">What is Turbo Vite?</h2>
			<p>Turbo Vite (what you're currently looking at), is a plugin that expands the Turbo engine with support for the Vite development server and server-side rending (SSR).</p>
			<p>Vite provides a great developer experience for working with JS frameworks like Vue, React, Svelte and more.</p>

			<p class="mt-5 mb-3">Some key features of Turbo Vite:</p>
			<ul class="pl-4">
				<li><strong>SSR Support</strong> - Turbo Vite comes with server-side rendering built-in as a default that is integrated to the framework.</li>
				<li><strong>Auto Routing</strong> - To keep routes working everywhere, the plugin also enables a built-in routing class that reads your router file and generates routes based on that.</li>
				<li><strong>Pre-Production Compilation</strong> - Turbo Vite has hooks into the engine that on init, it will compile the server/client bundles on application start in production mode.</li>
				<li><strong>HMR / Dev Server</strong> - The plugin can offer a functional dev server provided by Vite that is hooked into the the engine so you can test your applications together.</li>
			</ul>
		</section>

		<section class="section">
			<h2 class="subtitle">What is Vite?</h2>
			<p>Vite.js is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience. Vite uses native browser ES imports to enable support for modern browsers without a build process.</p>

			<p class="mt-5 mb-3">Some key features of Vite.js:</p>
			<ul class="pl-4">
				<li><strong>Instant Server Start</strong> - On demand file serving over native ESM, no bundling required!</li>
				<li><strong>Lightning Fast HMR</strong> - On demand file serving over native ESM, no bundling required!</li>
				<li><strong>Rich Features</strong> - Hot Module Replacement (HMR) that stays fast regardless of app size.</li>
				<li><strong>Optimized Build</strong> - Pre-configured Rollup build with multi-page and library mode support.</li>
				<li><strong>Universal Plugins</strong> - Rollup-superset plugin interface shared between dev and build.</li>
				<li><strong>Fully Typed APIs</strong> - Flexible programmatic APIs with full TypeScript typing.</li>
			</ul>
		</section>
	</div>
</template>
