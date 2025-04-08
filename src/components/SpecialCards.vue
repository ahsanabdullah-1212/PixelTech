<template>
    <div>
        <!-- Loader -->
        <div v-if="loading" class="loader-container">
            <div class="loader"></div>
        </div>

        <!-- Actual Content -->
        <div v-else class="main-special-cards">
            <div class="special-card-info">
                <h1><span class="animated-7">Specializing</span> in {{ services.length }} core service areas.</h1>
            </div>
            <div class="parent-special-card">
                <div class="special-cards-container-2">
                    <div class="special-card-row-2">
                        <div v-for="service in services" :key="service.id">
                            <router-link :to="'/portfolio/' + service.id">
                                <div class="special-card-2">
                                    <div class="background-zoom"
                                        :style="{ backgroundImage: `url(${baseURL + service.image})` }">
                                    </div>
                                    <h2>{{ service.name }}</h2>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="specail-cards-btns">
                    <router-link to="/contact">
                        <button class="gradient-btn">See our Plans</button>
                    </router-link>
                    <router-link to="/contact">
                        <button class="simple-btn">Unique Project?</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import apiClient, { baseURL } from "@/Config/apiClient";

export default {
    data() {
        return {
            services: [],
            baseURL: baseURL + "/storage/uploads/",
            loading: true,
        };
    },
    mounted() {
        this.fetchServices();
    },
    methods: {
        fetchServices() {
            apiClient.get("/api/service?paginate=9")
                .then((response) => {
                    this.services = response.data.data;
                })
                .catch((error) => {
                    console.error("Failed to fetch services:", error);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};
</script>

<style scoped>
.background-zoom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.4s ease;
    z-index: 0;
    border-radius: 16px;
}

.special-card-2:hover .background-zoom {
    transform: scale(1.1);
}

/* Loader styles */
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
}

.loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
