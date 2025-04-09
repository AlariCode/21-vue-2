import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
	routes: [
		{
			path: '/', component: () => import('./views/AuthView.vue'),
		}, {
			path: '/main', component: () => import('./views/MainView.vue'),
			children: [
				{ path: '', component: () => import('./components/TestComp.vue'), name: 'main' },
				{ path: 'new', component: () => import('./components/TestComp2.vue') },
			]
		}
	],
	history: createWebHistory()
});