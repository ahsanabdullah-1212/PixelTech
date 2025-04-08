<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-row">
                <div class="footer-col">
                    <div class="footer-logo">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <p>Block B Gulberg Greens</p>
                    <p>Islamabad 46000, PK</p>
                    <br>
                    <p>Company Number: +92 336 535 7391</p>
                    <p>Privacy Policy | Terms & Conditions</p>
                </div>
                <div class="footer-col">
                    <ul>
                        <h2>Company</h2>
                        <router-link to="/">
                            <li>Home</li>
                        </router-link>
                        <!-- <router-link to="/services">
                            <li>Services</li>
                        </router-link> -->
                        <router-link to="/portfolio">
                            <li>Portfolio</li>
                        </router-link>
                        <router-link to="/blogs">
                            <li>Blogs</li>
                        </router-link>
                        <router-link to="/team">
                            <li>Team</li>
                        </router-link>
                        <router-link to="/contact">
                            <li>Contact Us</li>
                        </router-link>

                    </ul>
                </div>
                <div class="footer-col">
                    <ul>
                        <h2>Services</h2>
                        <template v-if="services.length">
                            <li v-for="(service, index) in services" :key="'sidebar-' + index">
                                <router-link :to="'/portfolio/' + service.id" @click="closeNav">
                                    {{ service.name }}
                                </router-link>
                            </li>
                        </template>
                        <li v-else>No services</li>
                    </ul>
                </div>

                <div class="footer-col">
                    <ul>
                        <h2>Goals & Strategy</h2>
                        <li>Our Mission</li>
                        <li>Our Vision</li>
                        <li>Our Plan</li>
                        <div class="social-icons">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            <i class="fa-brands fa-pinterest"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import apiClient from "@/Config/apiClient.js";
export default {
    data() {
        return {
            services: [],
        };
    },
    created() {
        this.fetchServices();
    },
    methods: {
        fetchServices() {
            apiClient.get("/api/service")
                .then((response) => {
                    this.services = response.data.data ? response.data.data : response.data;
                })
                .catch((error) => {
                    console.error("Error fetching Services:", error);
                });
        }
    }
};
</script>