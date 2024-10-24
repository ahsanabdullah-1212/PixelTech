<template>
    <div class="login-page">
        <div class="login-box">
            <h2>Login</h2>
            <form @submit.prevent="login">
                <div class="input-group">
                    <input type="text" v-model="username" placeholder="Username" />
                </div>
                <div class="input-group">
                    <input type="password" v-model="password" placeholder="Password" />
                </div>
                <button type="submit" class="login-btn">Login</button>
            </form>
            <div class="forgot-pass">
                <a href="#">Forgot Password?</a>
            </div>
            <div class="new-account">
                <a href="#">Create New Account</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
  login() {
    // Hardcoded temporary credentials
    const tempUsername = 'admin';
    const tempPassword = 'password123';

    // Check if both username and password fields are filled
    if (this.username && this.password) {
      // Check credentials
      if (this.username === tempUsername && this.password === tempPassword) {
        // Set a token in local storage
        localStorage.setItem('authToken', 'temporary_token');
        // Redirect to admin dashboard
        this.$router.push("/admin/dashboard");
      } else {
        // Show error message for invalid credentials
        alert('Invalid username or password');
      }
    } else {
      alert('Please enter both username and password');
    }
  }
}

};
</script>

<style scoped>
.forgot-pass a{
    margin-top: 10px;
    text-align: right;
    font-size: 12px;
    color: #7a7a7a;
}
.new-account a{
    margin-top: 10px;
    text-align: right;
    font-size: 12px;
    color: #7a7a7a;
}

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1abc9c, #16a085);
}

.login-box {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
    color: #2c3e50;
}

.input-group {
    margin-bottom: 15px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.login-btn {
    width: 100%;
    padding: 10px;
    background-color: #1abc9c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-btn:hover {
    background-color: #16a085;
}
</style>