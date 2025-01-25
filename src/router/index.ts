import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('@/views/HomePage.vue');
const ResearchPage = () => import('@/views/ResearchPage.vue');
const Publications = () => import('@/views/PublicationPage.vue');
const News = () => import('@/views/NewsPage.vue');
const Events = () => import('@/views/EventsPage.vue');
const Career = () => import('@/views/CareerPages.vue');
const Training = () => import('@/views/TrainingPage.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ReMPro/',
      name: 'HOME',
      component: HomePage,
    },
    {
      path: '/ReMPro/research',
      name: 'RESEARCH',
      component: ResearchPage,
    },
    {
      path: '/ReMPro/publications',
      name: 'PUBLICATIONS',
      component: Publications,
    },
    {
      path: '/ReMPro/news',
      name: 'NEWS',
      component: News,
    },
    {
      path: '/ReMPro/events',
      name: 'EVENTS',
      component: Events,
    },
    {
      path: '/ReMPro/career',
      name: 'CAREER',
      component: Career,
    },
    {
      path: '/ReMPro/training',
      name: 'TRAINING',
      component: Training,
    },
  ],
});

export default router;
