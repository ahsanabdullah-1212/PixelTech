<template>
  <div class="register-page">
    <div class="register-box">
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <div class="register-form-group">
          <label for="name">Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <div class="register-form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="register-form-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" v-model="phone" required />
        </div>
        <div class="register-form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button class="register-button" type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import apiClient from '@/Config/apiClient.js';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await apiClient.post('/api/register', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        });
        
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          this.$router.push('/login');
        } else {
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        if (error.response && error.response.data.error) {
          alert(error.response.data.error);
        } else {
          alert('An error occurred during registration.');
        }
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1abc9c, #16a085);
}

.register-box {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.register-form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 12px;
  color: #7a7a7a;
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  color: var(--dark-color);
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

input:focus {
  background-color: #e1f5f0;
  outline: none;
  box-shadow: 0 0 0 2px rgba(26, 188, 156, 0.2);
}

.register-button {
  width: 100%;
  padding: 10px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.register-button:hover {
  background-color: #16a085;
  transform: translateY(-2px);
}

.register-button:active {
  transform: translateY(1px);
}
</style>
