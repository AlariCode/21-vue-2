import { createRouter, createWebHistory } from 'vue-router';
import TestComp from './components/TestComp.vue';
import TestComp2 from './components/TestComp2.vue';

export const router = createRouter({
	routes: [
		{
			path: '/', component: TestComp,
		}, {
			path: '/new', component: TestComp2,
		}
	],
	history: createWebHistory()
});