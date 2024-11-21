<template>
    <div class="admin-navbar">
      <div class="admin-navbar-left">
        <h2 class="admin-navbar-logo">Admin Panel</h2>
      </div>
      <div class="admin-navbar-right">
        <ul class="admin-nav-links">
          <li @click="logout">
            <span v-if="!isClosed">Logout</span></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '@/Config/apiClient.js';
  export default {
    name: "AdminNavbarSection",
    data() {
    return {
      isClosed: false, // Set the default value
    };
  },
    methods: {
    async logout() {
      try {
        // Call the logout API
        await apiClient.post("/api/logout", {}, {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
        });

        // Remove auth token from local storage
        localStorage.removeItem("authToken");

        // Redirect to login page
        this.$router.push("/login");
      } catch (error) {
        console.error("Logout failed:", error);
        alert("Failed to log out. Please try again.");
      }
    },
  },
  };
  </script>
  
  <style scoped>
  .admin-nav-links {
    cursor: pointer;
  }
  </style>
  