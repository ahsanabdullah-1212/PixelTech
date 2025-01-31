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
      <li><router-link class="dashboard-nav-item" to="/admin/meta-tags">
        <i class="fa-brands fa-meta"></i>
          <span v-if="!isClosed">Meta Tags</span>
        </router-link></li>

      <li><router-link class="dashboard-nav-item" to="/admin/blogs">
        <i class="fa-brands fa-blogger-b"></i>
          <span v-if="!isClosed">Blogs</span>
        </router-link></li>
      <li><router-link class="dashboard-nav-item" to="/admin/portfolios">
        <i class="fa-brands fa-blogger-b"></i>
          <span v-if="!isClosed">Portfolios</span>
        </router-link></li>
        <li><router-link class="dashboard-nav-item" to="/admin/admin-profile">
        <i class="fa-solid fa-user"></i>
          <span v-if="!isClosed">Change Password</span>
        </router-link></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "SidebarSection",
  data() {
    return {
      isClosed: false, 
    };
  },
  methods: {
    toggleSidebar() {
      this.isClosed = !this.isClosed; 
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
.sidebar-nav-links li {
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.sidebar-nav-links li i {
  margin-right: 10px;
}

.sidebar-nav-links li span {
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.sidebar-closed .sidebar-nav-links li span {
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
</style>
