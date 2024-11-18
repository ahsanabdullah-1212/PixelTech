import axios from 'axios';

export const baseURL = 'https://pixeltechapi.stechsole.com/'; 

const apiClient = axios.create({
  baseURL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken-pixeltech'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  }
  return config;
});

export default apiClient;
