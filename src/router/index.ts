import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('@/views/HomePage.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ReMPro',
      name: 'HOME',
      component: HomePage,
    },
  ],
});

export default router;
