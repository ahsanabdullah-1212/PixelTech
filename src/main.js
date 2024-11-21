import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from '@/assets/router/router';
import '@/assets/styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import apiClient from '@/Config/apiClient.js';

// Create the app instance
const app = createApp(App);
const head = createHead();
// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);
app.use(head);
app.config.globalProperties.$apiClient = apiClient;
// Mount the app
app.mount('#app');
