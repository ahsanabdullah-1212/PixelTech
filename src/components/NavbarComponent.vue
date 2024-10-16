<template>
    <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
        <router-link to="/">
            <div class="logo">
                <img src="@/assets/images/logo.png" alt="Pixeltech Logo">
            </div>
        </router-link>
        <ul class="nav-links" :class="{ 'nav-active': isNavOpen }">
            <router-link to="/blogs">
                <li>About Us</li>
            </router-link>
            <router-link to="/services">
                <li>Services</li>
            </router-link>
            <router-link to="/portfolio">
                <li>Portfolio</li>
            </router-link>
            <router-link to="/">
                <li>Team</li>
            </router-link>
            <router-link to="/contact">
                <li>Contact Us</li>
            </router-link>
            <li><button class="gradient-btn">Get a quote</button></li>
        </ul>
        <div class="hamburger" @click="toggleNav">
            <span :class="{ 'bar-top-cross': isNavOpen }"></span>
            <span :class="{ 'bar-hidden': isNavOpen }"></span>
            <span :class="{ 'bar-bottom-cross': isNavOpen }"></span>
        </div>

        <!-- Sidebar -->
        <transition name="slide">
            <div :class="['sidebar', { 'sidebar-active': isNavOpen }]">
                <ul>
                    <div class="side-info">
                        <li>
                            <img src="@/assets/images/logo.png" alt="Pixeltech Logo">
                        </li>
                    </div>
                    <router-link to="/blogs" @click="closeNav">
                        <li>About Us</li>
                    </router-link>
                    <router-link to="/services" @click="closeNav">
                        <li>Services</li>
                    </router-link>
                    <router-link to="/portfolio" @click="closeNav">
                        <li>Portfolio</li>
                    </router-link>
                    <router-link to="/" @click="closeNav">
                        <li>Team</li>
                    </router-link>
                    <router-link to="/contact" @click="closeNav">
                        <li>Contact Us</li>
                    </router-link>
                </ul>
            </div>
        </transition>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isNavOpen: false,  // State to track whether the navbar is open
            isScrolled: false  // State to track whether the user has scrolled down
        };
    },
    methods: {
        closeNav() {
            this.isNavOpen = false; // Sidebar ko band karne ke liye
        },
        // Toggle the navbar open/closed
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
        },
        // Check if the user has scrolled down
        handleScroll() {
            if (window.scrollY > 50) {  // Change 50 to whatever scroll threshold you want
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        }
    },
    mounted() {
        // Listen to the scroll event
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // Clean up the event listener
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>
