<template>
  <div class="dashboard-container">

    <div class="dashboard-main-content">
      <!-- Header -->
      <header class="dashboard-header">
        <div class="dashboard-header-left">
          <h1>Dashboard Overview</h1>
        </div>
  
      </header>
      <div class="dashboard-perv">
    <i>This is our Dashboard</i>
  </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-perv {
  margin-top: 100px;
  font-size: 35px;
  margin-top: 50px; 
}
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.dashboard-container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar Styles */
.dashboard-sidebar {
  width: 250px;
  background-color: #1e3a8a;
  color: white;
  padding: 20px;
}

.dashboard-sidebar-header {
  margin-bottom: 40px;
}

.dashboard-sidebar-nav {
  display: flex;
  flex-direction: column;
}

.dashboard-nav-item {
  text-decoration: none;
  color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.dashboard-nav-item i {
  margin-right: 10px;
}

.dashboard-nav-item:hover {
  background-color: #3b82f6;
}

/* Main Content Styles */
.dashboard-main-content {
  flex-grow: 1;
  padding: 20px;
}

.dashboard-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.dashboard-header-left {
  /* height: 100vh; */
  display: flex;
  text-align: center;
  justify-content: center;
}
.dashboard-header-left h1 {
  margin: 0;
}

.dashboard-search-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.dashboard-header-right {
  display: flex;
  align-items: center;
}

.dashboard-notification-btn {
  position: relative;
  background: none;
  border: none;
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
}

.dashboard-notification-dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
}

.dashboard-profile {
  display: flex;
  align-items: center;
}

.dashboard-profile img {
  border-radius: 50%;
  margin-right: 10px;
}

/* Dashboard Styles */
.dashboard-dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.dashboard-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-card h2 {
  margin: 0;
  font-size: 18px;
}

.dashboard-card p {
  font-size: 24px;
  margin-top: 10px;
}

.dashboard-icon {
  font-size: 40px;
  color: #3b82f6;
}
</style>
