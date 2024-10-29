import { createRouter, createWebHistory } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import BasicLayout from '@/layouts/BasicLayout.vue';
import LoginPage from '@/Views/LoginPage.vue';
import RegisterPage from '@/Views/RegisterPage.vue';

// Authentication check function
const isAuthenticated = () => {
  // Example logic to check for authentication
  return !!localStorage.getItem('authToken'); // Replace with real logic
};

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '', name: 'LandingPage', component: () => import('../pages/landingPage.vue') },
      { path: 'services', name: 'ServicePage', component: () => import('../pages/ServicePage.vue') },
      { path: 'portfolio', name: 'AboutUs', component: () => import('../pages/portfolioUs.vue') },
      { path: 'blogs', name: 'Blogs', component: () => import('../pages/BlogsPage.vue') },
      { path: 'contact', name: 'ContactPage', component: () => import('../pages/ContactPage.vue') },
      { path: 'team', name: 'TeamPage', component: () => import('../pages/TemPage.vue') },
    ]
  },

  // Admin Routes (Admin Layout with Sidebar)
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'Dashboard', component: () => import('@/Views/DashboardView.vue') },
      { path: 'settings', name: 'Settings', component: () => import('@/Views/SettingsView.vue') },
      { path: 'profile', name: 'Profile', component: () => import('@/Views/ProfileView.vue') },
    ]
  },

  // Login Page (without layout)
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  // Register Page (without layout)
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

// Navigation Guard to Protect Admin Routes
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
