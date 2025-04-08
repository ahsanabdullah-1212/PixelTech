<template>
  <div class="admin-navbar">
    <div class="admin-navbar-left">
      <h2 class="admin-navbar-logo">Admin Panel</h2>
    </div>
    <div class="admin-navbar-right">
      <ul class="admin-nav-links">
        <li @click="logout">
          <span v-if="!isClosed">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { useAuthStore } from '@/authStore/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'AdminNavbarSection',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter()

    const logout = async () => {
      try {
        const redirectPath = await authStore.logout();
        router.push(redirectPath);
      } catch (error) {
        alert(error);
      }
    };

    return {
      logout,
      isClosed: false,
    };
  },
};
</script>

<style scoped>

</style>