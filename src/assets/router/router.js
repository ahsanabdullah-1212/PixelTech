import { createRouter, createWebHistory } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import BasicLayout from '@/layouts/BasicLayout.vue';
import LoginPage from '@/Views/LoginPage.vue';
import RegisterPage from '@/Views/RegisterPage.vue';
import NotFound from '@/Views/NotFound.vue'
import RecoverPass from '@/Views/RecoverPass.vue';
import NewPass from '@/Views/NewPass.vue';
import EditMetaTag from '@/Views/EditMetaTag.vue';


// Authentication check function
const isAuthenticated = () => {
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
      { path: 'admin-profile', name: 'admin-Profile', component: () => import('@/Views/AdminProfile.vue') },
      { path: 'meta-tags', name: 'meta-tags', component: () => import('@/Views/AdminMetaTags.vue') },
      { path: '/meta-tag-show/:id', name: 'MetaTagDetails', component: () => import('@/Views/MetaTagDetails.vue') },
      { path: '/edit-meta-tag/:id', name: 'EditMetaTag', component: EditMetaTag },
      { path: 'meta-tags/add', name: 'AddMetaTag', component: () => import('@/Views/NewAdminTags.vue') },
      { path: 'blogs', name: 'BlogList', component: () => import('@/Views/BlogsList.vue') },
      { path: 'addBlogs', name: 'AddBlog', component: () => import('@/Views/AddBlogs.vue') },
      { path: 'viewBlogs/:id', name: 'ViewBlog', component: () => import('@/Views/ViewBlogs.vue') },
      { path: 'editBlogs/:id', name: 'EditBlog', component: () => import('@/Views/EditBlogs.vue') },
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
  },
  {
    path: '/forgot-password',
    name: 'RecoverPass',
    component: RecoverPass
  },
  {
    path: '/newpass/:token',
    name: 'NewPass',
    component: NewPass,
    props: true, // Pass the token as a prop
  },

  // Not Found Page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
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
