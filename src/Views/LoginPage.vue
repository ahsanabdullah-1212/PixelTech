<template>
    <div class="login-page">
        <div class="login-box">
            <h2>Login</h2>
            <form @submit.prevent="login">
                <div class="input-group">
                    <input type="text" v-model="email" placeholder="Email" />
                </div>
                <div class="input-group">
                    <input type="password" v-model="password" placeholder="Password" />
                </div>
                <button type="submit" class="login-btn">Login</button>
            </form>
            <div class="forgot-pass">
                <router-link to="/forgot-password">Forgot Password?</router-link>
            </div>
            <!-- <div class="new-account">
                <router-link to="/register">Create New Account</router-link>
            </div> -->
        </div>
    </div>
</template>

<script>
import apiClient from '@/Config/apiClient.js';

export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async login() {
            if (this.email && this.password) {
                try {
                    const response = await apiClient.post('/api/login', {
                        email: this.email,
                        password: this.password
                    });

                    if (response.data.data.token) {
                        localStorage.setItem('authToken', response.data.data.token);

                        if (response.data.data.type === 'admin') {
                            this.$router.push("/admin/dashboard");
                        } else {
                            this.$router.push("/user/dashboard");
                        }
                    } else {
                        alert('Login failed: Invalid credentials.');
                    }
                } catch (error) {
                    if (error.response && error.response.status === 422) {
                        alert('Validation error: Please check your email and password.');
                    } else if (error.response && error.response.status === 401) {
                        alert('Invalid credentials.');
                    } else if (error.response && error.response.status === 429) {
                        alert('Too many login attempts. Please try again later.');
                    } else {
                        console.error("Error logging in:", error);
                        alert('Error logging in. Please try again later.');
                    }
                }
            } else {
                alert('Please enter both email and password');
            }
        }
    }
};
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1abc9c, #16a085);
}

.login-box {
    background: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    width: 350px;
    text-align: center;
    position: relative;
    overflow: hidden;
    animation: fadeIn 0.5s ease-in-out;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
}

.input-group {
    margin-bottom: 15px;
    position: relative;
}

input {
    width: 100%;
    padding: 12px;
    border: none;
    color: var(--dark-color);
    border-radius: 6px;
    background: #f3f4f6;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease;
}

input:focus {
    background: #e1f0f4;
    outline: none;
    box-shadow: 0 0 0 2px rgba(26, 188, 156, 0.2);
}

.login-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #1abc9c, #16a085);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

.login-btn:hover {
    background: linear-gradient(135deg, #16a085, #1abc9c);
    transform: translateY(-2px);
}

.forgot-pass, .new-account {
    margin-top: 15px;
    font-size: 13px;
}

.forgot-pass a, .new-account a {
    color: #7a7a7a;
    transition: color 0.3s ease;
}

.forgot-pass a:hover, .new-account a:hover {
    color: #1abc9c;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
