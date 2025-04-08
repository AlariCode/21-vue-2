import { createRouter, createWebHistory } from 'vue-router';
import TestComp from './components/TestComp.vue';
import TestComp2 from './components/TestComp2.vue';
import AuthView from './views/AuthView.vue';
import MainView from './views/MainView.vue';

export const router = createRouter({
	routes: [
		{
			path: '/', component: AuthView,
		}, {
			path: '/main', component: MainView,
			children: [
				{ path: '', component: TestComp },
				{ path: 'new', component: TestComp2 },
			]
		}
	],
	history: createWebHistory()
});