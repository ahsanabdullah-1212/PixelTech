<template>
    <div class="register-page">
      <h1>Register</h1>
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
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button class="register-button" type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      registerUser() {
        // Here you would handle your registration logic (API call)
        console.log('Registering user with:', this.name, this.email, this.password);
        // Redirect to another page after successful registration
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  