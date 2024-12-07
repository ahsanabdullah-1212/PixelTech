import axios from 'axios';

// export const baseURL = 'http://127.0.0.1:8000'; 
export const baseURL = 'https://pixeltechapi.stechsole.com'; 

const apiClient = axios.create({
  baseURL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use((config) => {
  // const token = localStorage.getItem('authToken-pixeltech'); 
  const token = localStorage.getItem('authToken'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  }
  return config;
});

export default apiClient;
