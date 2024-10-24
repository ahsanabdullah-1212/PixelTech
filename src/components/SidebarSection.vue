<template>
  <div :class="['admin-sidebar', { 'sidebar-closed': isClosed }]">
    <div class="sidebar-toggle" @click="toggleSidebar">
      <i :class="isClosed ? 'fas fa-arrow-right' : 'fas fa-arrow-left'"></i>
    </div>
    <ul class="sidebar-nav-links">
      <li><router-link class="dashboard-nav-item" to="/admin/dashboard">
          <i class="fas fa-home"></i>
          <span v-if="!isClosed">Dashboard</span>
        </router-link></li>

      <li><router-link class="dashboard-nav-item" to="/admin/settings">
          <i class="fas fa-users"></i>
          <span v-if="!isClosed">Users</span>
        </router-link></li>

      <li><router-link class="dashboard-nav-item" to="/admin/profile">
          <i class="fas fa-chart-line"></i>
          <span v-if="!isClosed">Analytics</span>
        </router-link></li>

      <li><router-link class="dashboard-nav-item" to="/admin/settings">
          <i class="fas fa-cog"></i>
          <span v-if="!isClosed">Settings</span>
        </router-link></li>

      <li><router-link class="dashboard-nav-item" to="/admin/logout">
          <i class="fas fa-sign-out-alt"></i>
          <span v-if="!isClosed">Logout</span>
        </router-link></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "SidebarSection",
  data() {
    return {
      isClosed: false, // sidebar initially open
    };
  },
  methods: {
    toggleSidebar() {
      this.isClosed = !this.isClosed; // toggle the sidebar state
    },
  },
};
</script>


<style scoped>
.sidebar-closed {
  width: 100px;
}

.sidebar-toggle {
  position: absolute;
  top: 63px;
  right: 6px;
  width: 30px;
  height: 30px;
  background-color: #34495e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
}

.sidebar-nav-links {
  list-style: none;
  padding: 0;
}

.sidebar-nav-links li {
  margin: 20px 0;
}

.sidebar-nav-links li a {
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.sidebar-nav-links li a i {
  margin-right: 10px;
}

.sidebar-nav-links li a span {
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.sidebar-closed .sidebar-nav-links li a span {
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
</style>
