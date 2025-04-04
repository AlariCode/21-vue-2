import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	routes: [],
	history: createWebHistory()
})

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router)
app.mount('#app');
