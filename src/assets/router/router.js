import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'LandingPage', component: () => import('../pages/landingPage.vue') },
  { path: '/services', name: 'ServicePage', component: () => import('../pages/ServicePage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
