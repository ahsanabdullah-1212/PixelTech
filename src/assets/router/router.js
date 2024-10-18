import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'LandingPage', component: () => import('../pages/landingPage.vue') },
  { path: '/services', name: 'ServicePage', component: () => import('../pages/ServicePage.vue') },
  { path: '/portfolio', name: 'AboutUs', component: () => import('../pages/portfolioUs.vue') },
  { path: '/blogs', name: 'Blogs', component: () => import('../pages/BlogsPage.vue') },
  { path: '/contact', name: 'Contact us', component: () => import('../pages/ContactPage.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
