import { defineStore } from 'pinia';
import apiClient from '@/Config/apiClient.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authToken: localStorage.getItem('authToken') || null,
    userType: null, // Admin or User
  }),
  getters: {
    isAuthenticated: (state) => !!state.authToken,
  },
  actions: {
    saveToken(token) {
      this.authToken = token;
      localStorage.setItem('authToken', token);
    },
    clearToken() {
      this.authToken = null;
      localStorage.removeItem('authToken');
    },
    async login(email, password) {
      try {
        const response = await apiClient.post('/api/login', { email, password });
        if (response.data.data.token) {
          this.saveToken(response.data.data.token);
          this.userType = response.data.data.type;

          return response.data.data.type === 'admin' ? '/admin/dashboard' : '/user/dashboard';
        }
        throw new Error('Invalid credentials');
      } catch (error) {
        throw error.response?.data?.message || 'Login failed';
      }
    },
    async logout() {
      try {
        await apiClient.post('/api/logout', {}, {
          headers: { Authorization: `Bearer ${this.authToken}` },
        });
        this.clearToken();
        return '/login'; 
      } catch (error) {
        throw error.response?.data?.message || 'Logout failed';
      }
    },
  },
});
