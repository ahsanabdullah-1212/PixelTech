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
            <router-link to="/portfolio" exact-active-class="nav-active" active-class="nav-active">
                <li>Portfolio</li>
            </router-link>
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
                    <router-link to="/portfolio" exact-active-class="nav-active" active-class="nav-active"
                        @click="closeNav">
                        <li>Portfolio</li>
                    </router-link>
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
export default {
    data() {
        return {
            isNavOpen: false, 
            isScrolled: false 
        };
    },
    methods: {
        closeNav() {
            this.isNavOpen = false; 
        },
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
<style></style>