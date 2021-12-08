import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import FontAwesomeIcon from './setup/fontawesome';
import httpInstance from './providers/http';
import IntlProvider from './providers/intl';

createApp(App)
	.use(Router)
	.component('fa', FontAwesomeIcon)
	.provide('http', httpInstance)
	.provide('intl', new IntlProvider())
	.mount('#app');
