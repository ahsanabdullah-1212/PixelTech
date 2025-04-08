import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@/assets/router/router';
import '@/assets/styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import apiClient from '@/Config/apiClient.js';

const app = createApp(App);
const pinia = createPinia();
const head = createHead();
// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);
app.use(pinia);
app.use(head);
app.config.globalProperties.$apiClient = apiClient;
// Mount the app
app.mount('#app');
