<template>
  <div class="users-container">
    <header class="users-header">
      <h1>User Profiles</h1>
      <input type="text" class="users-search-input" placeholder="Search Users...">
    </header>

    <main class="users-main">
      <section class="users-grid">
        <div class="user-card" v-for="user in users" :key="user.id">
          <img :src="user.image" alt="User Profile" class="user-image" />
          <div class="user-info">
            <h2 class="user-name">{{ user.name }}</h2>
            <p class="user-email">{{ user.email }}</p>
            <p class="user-role">{{ user.role }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "UsersPage",
  data() {
    return {
      users: [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", image: "https://picsum.photos/200/200?random=1" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", image: "https://picsum.photos/200/200?random=2" },
        { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "User", image: "https://picsum.photos/200/200?random=3" },
        { id: 4, name: "Sara Connor", email: "sara@example.com", role: "User", image: "https://picsum.photos/200/200?random=4" },
        { id: 5, name: "Tony Stark", email: "tony@example.com", role: "Admin", image: "https://picsum.photos/200/200?random=5" },
      ]
    };
  }
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

.users-container {
  padding: 20px;
}

/* Header */
.users-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.users-header h1 {
  font-size: 24px;
  color: #333;
  margin: 0;
}

.users-search-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
}

/* Main Content */
.users-main {
  display: flex;
  flex-direction: column;
}

/* User Cards */
.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.user-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.user-card:hover {
  transform: translateY(-5px);
}

.user-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.user-info {
  padding: 15px;
  text-align: center;
}

.user-name {
  margin: 10px 0 5px;
  font-size: 20px;
  color: #333;
}

.user-email {
  margin: 0;
  color: #777;
}

.user-role {
  margin: 5px 0 0;
  font-size: 14px;
  color: #3b82f6;
}
</style>
