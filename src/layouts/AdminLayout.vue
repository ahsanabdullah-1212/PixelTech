<template>
  <div class="admin-layout">
    <AdminNavbar />
    <SidebarSection />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AdminNavbar from "@/components/AdminNavbar.vue";
import SidebarSection from "@/components/SidebarSection.vue";

export default {
  name: "AdminLayout",
  components: {
    SidebarSection,
    AdminNavbar,
  },
};
</script>

<style scoped>
</style>
