<template>
    <div class="admin-navbar">
      <div class="admin-navbar-left">
        <h2 class="admin-navbar-logo">Admin Panel</h2>
      </div>
      <div class="admin-navbar-right">
        <ul class="admin-nav-links">
          <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
          <li><router-link to="/admin/settings">Settings</router-link></li>
          <li><router-link to="/admin/profile">Profile</router-link></li>
          <li><router-link to="/admin/logout">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminNavbarSection",
  };
  </script>
  
  <style scoped>
  </style>
  