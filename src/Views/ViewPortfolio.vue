<template>
    <div class="view-blog-container" style="">
        <h1 class="page-title">View Portfolio</h1>
        <h1 class="page-title" v-if="portfolio">Service:{{ portfolio.service.name }} </h1>


        <div v-if="portfolio" :class="['creation-card', `creation-card-${index + 1}`]">

            <div class="creation-card-image">
                <img :src="baseURL + portfolio.image" alt="portfolio Image" />
            </div>
            <div class="creation-card-description">
                <h2>{{ portfolio.title }}</h2>
                <p>{{ portfolio.text }}</p>
                <br>
                <div class="creation-btn">
                    <button class="gradient-btn-2">See more</button>
                </div>
            </div>
        </div>

        <button class="bck-btn" @click.prevent="navigateBack">
            Back
        </button>
    </div>
</template>


<script>
import apiClient from '@/Config/apiClient.js';
import { baseURL } from '@/Config/apiClient.js';

export default {
    data() {
        return {
            portfolio: null,
            image: '',
            imagePreview: '',
            services: [],
        };
    },
    created() {
        this.fetchPortfolio();
        this.baseURL = baseURL + '/storage/uploads/';
    },
    methods: {
        
        fetchPortfolio() {
            apiClient.get(`/api/portfolios/${this.$route.params.id}`).then((response) => {
                this.portfolio = response.data;
                this.image = response.data.image;
            });
        },
        goBack() {
            this.$router.push({ name: 'PortfolioList' });
        },
        navigateBack() {
            this.$router.push({ name: 'PortfolioList' });
        }
    },
};
</script>

<style scoped>
.creation-card {
    width: 450px !important;
}

.bck-btn {
    cursor: pointer;
    border: none;
    width: 120px;
    font-size: 12px;
    padding: 10px 15px;
    color: var(--white-color);
    border-radius: 25px;
    background: linear-gradient(90deg, #29DFFD 0%, #245AF8 100%);
}
</style>