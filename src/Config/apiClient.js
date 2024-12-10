import axios from 'axios';
import { useAuthStore } from '@/authStore/auth';

export const baseURL = 'http://127.0.0.1:8000'; 
// export const baseURL = 'https://pixeltechapi.stechsole.com'; 

const apiClient = axios.create({
  baseURL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore.authToken) {
    config.headers.Authorization = `Bearer ${authStore.authToken}`;
  }
  return config;
});

export default apiClient;
