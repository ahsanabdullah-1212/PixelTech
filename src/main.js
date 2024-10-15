import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from '@/assets/router/router';
import '@/assets/styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';

// Create the app instance
const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
