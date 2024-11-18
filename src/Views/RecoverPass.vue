<template>
    <div class="recover-page">
      <div class="recover-box">
        <h2>Recover Password</h2>
        <p class="instruction-text">Enter your email to receive password reset instructions.</p>
        <form @submit.prevent="recoverPassword">
          <div class="recover-form-group">
            <label for="email">Email:</label>
            <input type="email" v-model="email" required placeholder="Enter your email" />
          </div>
          <button class="recover-button" type="submit">Send Recovery Link</button>
        </form>
        <div class="back-to-login">
          <router-link to="/login">Back to Login</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '@/Config/apiClient.js';
  
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      async recoverPassword() {
    try {
        const response = await apiClient.post('/api/forgot-password', {
            email: this.email,
        });

        // Check if the response status is 200 and handle the message
        if (response.status === 200 && response.data.message) {
            alert(response.data.message);
            this.$router.push('/login');
        } else {
            alert('Failed to send recovery email. Please try again.');
        }
    } catch (error) {
        if (error.response && error.response.data.message) {
            alert(error.response.data.message);
        } else {
            alert('An error occurred while attempting password recovery.');
        }
    }
},

    },
  };
  </script>
  
  <style scoped>
  .recover-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1abc9c, #16a085);
  }
  
  .recover-box {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 10px;
    color: #2c3e50;
  }
  
  .instruction-text {
    font-size: 14px;
    color: #7a7a7a;
    margin-bottom: 20px;
  }
  
  .recover-form-group {
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
    border: 1px solid #ddd;
    color: var(--dark-color);
    border-radius: 4px;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
  }
  
  input:focus {
    background-color: #e1f5f0;
    outline: none;
    box-shadow: 0 0 0 2px rgba(26, 188, 156, 0.2);
  }
  
  .recover-button {
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
  
  .recover-button:hover {
    background-color: #16a085;
    transform: translateY(-2px);
  }
  
  .recover-button:active {
    transform: translateY(1px);
  }
  
  .back-to-login {
    margin-top: 15px;
    font-size: 13px;
  }
  
  .back-to-login a {
    color: #7a7a7a;
    transition: color 0.3s ease;
  }
  
  .back-to-login a:hover {
    color: #1abc9c;
  }
  </style>
  