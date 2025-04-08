<template>
    <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
        <router-link to="/" exact-active-class="nav-active" active-class="nav-active">
            <div class="logo">
                <img src="@/assets/images/logo.png" alt="Pixeltech Logo">
            </div>
        </router-link>
        <ul class="nav-links" :class="{ 'nav-active': isNavOpen }">
            <router-link to="/" exact-active-class="nav-active" active-class="nav-active">
                <li>Home</li>
            </router-link>
            <!-- <router-link to="/services" exact-active-class="nav-active" active-class="nav-active">
                <li>Services</li>
            </router-link> -->
            <ul style="padding: 0px; list-style-type: none;">
                <!-- Portfolio with Dropdown -->
                <li class="nav-item" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
                    <router-link to="/portfolio" exact-active-class="nav-active" active-class="nav-active">
                        Portfolio
                    </router-link>

                    <!-- Dropdown Menu -->
                    <transition name="fade">
                        <ul v-if="showDropdown" class="dropdown-menu">
                            <li v-for="(service, index) in services" :key="index">
                                <router-link :to="'/portfolio/' + service.id">
                                    {{ service.name }}
                                </router-link>
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>
            <router-link to="/blogs" exact-active-class="nav-active" active-class="nav-active">
                <li>Blogs</li>
            </router-link>
            <router-link to="/team" exact-active-class="nav-active" active-class="nav-active">
                <li>Team</li>
            </router-link>
            <router-link to="/contact" exact-active-class="nav-active" active-class="nav-active">
                <li>Contact Us</li>
            </router-link>
            <router-link to="/contact">
                <div class="btn-nav"><button class="gradient-btn-3">Get a quote</button></div>
            </router-link>

        </ul>
        <div class="hamburger" @click="toggleNav">
            <span :class="{ 'bar-top-cross': isNavOpen }"></span>
            <span :class="{ 'bar-hidden': isNavOpen }"></span>
            <span :class="{ 'bar-bottom-cross': isNavOpen }"></span>
        </div>
        <transition name="slide">
            <div :class="['sidebar', { 'sidebar-active': isNavOpen }]">
                <ul>
                    <div class="side-info">
                        <router-link to="/" exact-active-class="nav-active" active-class="nav-active">
                            <li>
                                <img src="@/assets/images/logo.png" alt="Pixeltech Logo">
                            </li>
                        </router-link>

                    </div>
                    <router-link to="/" exact-active-class="nav-active" active-class="nav-active" @click="closeNav">
                        <li>Home</li>
                    </router-link>
                    <!-- <router-link to="/services" exact-active-class="nav-active" active-class="nav-active"
                        @click="closeNav">
                        <li>Services</li>
                    </router-link> -->
                    <!-- <router-link to="/portfolio" exact-active-class="nav-active" active-class="nav-active"
                        @click="closeNav; sidebarDropdownOpen = false">
                        <li>Portfolio</li>
                    </router-link> -->
                    <li @click="sidebarDropdownOpen = !sidebarDropdownOpen" class="sidebar-dropdown-toggle">
                        Portfolio
                        <span :class="{ 'rotate-arrow': sidebarDropdownOpen }">▼</span>
                        <transition name="fade">
                            <ul v-if="sidebarDropdownOpen" class="sidebar-dropdown-list">
                                <li v-for="(service, index) in services" :key="'sidebar-' + index">
                                    <router-link :to="'/portfolio/' + service.id" @click="closeNav">
                                        {{ service.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </transition>
                    </li>

                    <router-link to="/blogs" exact-active-class="nav-active" active-class="nav-active"
                        @click="closeNav">
                        <li>Blogs</li>
                    </router-link>
                    <router-link to="/team" exact-active-class="nav-active" active-class="nav-active" @click="closeNav">
                        <li>Team</li>
                    </router-link>
                    <router-link to="/contact" exact-active-class="nav-active" active-class="nav-active"
                        @click="closeNav">
                        <li>Contact Us</li>
                    </router-link>
                </ul>
            </div>
        </transition>
    </nav>


</template>

<script>
import apiClient from "@/Config/apiClient.js";
export default {
    data() {
        return {
            services: [],
            isNavOpen: false,
            isScrolled: false,
            showDropdown: false,
            sidebarDropdownOpen: false,
        };
    },
    created() {
        this.fetchServices();
    },
    methods: {

        closeNav() {
            this.isNavOpen = false;
        },
        fetchServices() {
            apiClient.get("/api/service")
                .then((response) => {
                    this.services = response.data.data ? response.data.data : response.data;
                })
                .catch((error) => {
                    console.error("Error fetching Services:", error);
                });
        }
        ,
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        },
        handleScroll() {
            if (window.scrollY > 50) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>
<style>
.sidebar-dropdown-toggle {
    cursor: pointer;
    padding: 12px 20px;
    position: relative;
}

.sidebar-dropdown-toggle span {
    float: right;
    color: white;
    transition: transform 0.3s ease;
}

.rotate-arrow {
    transform: rotate(180deg);
}

.sidebar-dropdown-list {
    list-style: none;
    padding-left: 20px;
    margin-top: 5px;
}

.sidebar-dropdown-list li {
    padding: 8px 0;
}

.dropdown-menu {
    position: absolute;
    top: 20px;
    left: -65px;
    background: #111111;
    border-radius: 8px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    list-style: none;
    padding: 10px 0;
    min-width: 200px;
    z-index: 100;
    overflow: hidden;
}

/* Dropdown Items */
.dropdown-menu li {
    padding: 12px 20px;
    transition: 0.3s ease-in-out;
}


/* Smooth Dropdown Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>