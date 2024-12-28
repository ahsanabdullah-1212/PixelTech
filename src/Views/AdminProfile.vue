<template>
  <div class="profile-container">
    <div class="profile-header">
      <h1>Admin Profile</h1>
      <p>Manage your account settings.</p>
    </div>
    <div class="profile-content">
      <!-- Password Change Section -->
      <section class="profile-section">
        <h2>Change Password</h2>
        <form @submit.prevent="changePassword">
          <div class="form-group">
            <label for="current-password">Current Password</label>
            <input type="password" v-model="currentPassword" placeholder="Current Password" required />
          </div>
          <div class="form-group">
            <label for="new-password">New Password</label>
            <input type="password" v-model="newPassword" placeholder="New Password" required />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm New Password</label>
            <input type="password" v-model="confirmPassword" placeholder="Confirm New Password" required />
          </div>
          <button type="submit" class="primary-btn">Change Password</button>
        </form>

      </section>
    </div>
  </div>
</template>

<script>
import apiClient from '@/Config/apiClient.js';

export default {
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
  async changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    try {
      const response = await apiClient.post('/api/change-password', {
        current_password: this.currentPassword,
        new_password: this.newPassword,
        new_password_confirmation: this.confirmPassword,
      });

      if (response.status === 200) {
        alert(response.data.message);  
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
      } else {
        alert('Failed to change password. Please try again.');
      }
    } catch (error) {
      alert(error.response?.data.message || 'An error occurred while attempting to change the password.');
    }
  },
},

};
</script>

<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background-color: #f4f6f8;
  color: #333;
}

.profile-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.profile-header {
  text-align: center;
  margin-bottom: 30px;
}

.profile-header h1 {
  font-size: 24px;
  color: #2e3a59;
  margin: 0;
}

.profile-header p {
  font-size: 14px;
  color: #7a7a7a;
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.profile-section {
  padding: 20px;
  background-color: #f9fbfd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.profile-section h2 {
  font-size: 20px;
  color: #2e3a59;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  color: #555;
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  color: var(--dark-color);
  padding: 12px;
  border: 1px solid #e0e4e7;
  border-radius: 5px;
  background-color: #f3f6f9;
  transition: background-color 0.3s ease;
}

input:focus {
  background-color: #e7f0fa;
  outline: none;
  box-shadow: 0 0 0 2px rgba(46, 122, 187, 0.2);
}

.primary-btn {
  width: 100%;
  padding: 12px;
  background-color: #2e8bdc;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.primary-btn:hover {
  background-color: #236aaf;
  transform: translateY(-2px);
}

.primary-btn:active {
  transform: translateY(1px);
}
</style>