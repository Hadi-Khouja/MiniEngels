import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('@/views/HomePage.vue')

const router = createRouter({
  history: createWebHistory('/ReMPro'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
  ],
})

export default router
