import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'LandingPage', component: () => import('../pages/landingPage.vue') },
  { path: '/services', name: 'ServicePage', component: () => import('../pages/ServicePage.vue') },
  { path: '/about', name: 'AboutUs', component: () => import('../pages/AboutUs.vue') },
  { path: '/blogs', name: 'Blogs', component: () => import('../pages/BlogsPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
