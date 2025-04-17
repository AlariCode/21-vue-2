import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue'),
    },
    {
      path: '/',
      component: () => import('./views/AuthView.vue'),
      name: 'auth',
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      children: [
        { path: '', component: () => import('./views/IndexView.vue'), name: 'main' },
        { path: ':alias', component: () => import('./views/CategoryView.vue') },
      ],
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (!authStore.getToken && to.name != 'auth') {
    return { name: 'auth' };
  }
});
