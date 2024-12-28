<template>
    <div class="password-reset-container">
      <h2>Reset Your Password</h2>
      <form @submit.prevent="resetPassword">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter your new email"
          />
        </div>
        <div class="form-group">
          <label for="password">New Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your new password"
          />
        </div>
        
        <div class="form-group">
          <label for="password_confirmation">Confirm New Password</label>
          <input
            type="password"
            id="password_confirmation"
            v-model="passwordConfirmation"
            required
            placeholder="Confirm your new password"
          />
        </div>
  
        <button type="submit" class="btn-submit">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/Config/apiClient.js';
  
  export default {
  data() {
    return {
      email: '',  
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    async resetPassword() {
    const token = this.$route.params.token;  
    try {
        const response = await apiClient.post(`/api/update-password`, {
            email: this.email,  
            token: token,  
            password: this.password,
            password_confirmation: this.passwordConfirmation,
        });

        if (response.data.message) {
            alert(response.data.message);
            this.$router.push("/login");
        } else {
            alert("Password reset failed. Please try again.");
        }
    } catch (error) {
        alert(error.response?.data?.message || "An error occurred. Please try again.");
    }
}

  },
};

  </script>
  
  <style scoped>
  .password-reset-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn-submit {
    width: 100%;
    padding: 10px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .btn-submit:hover {
    background-color: #0056b3;
  }
  </style>
  