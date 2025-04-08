<template>
    <div class="view-blog-container">
        <h1 class="page-title">View Service</h1>
        <div class="Article-card" v-if="page">
            <div class="Article-card-content">
                <span>Name</span>
                <p class="Article-card-date">{{ page.name }}</p>
                <span>Image</span>
                <img :src="baseURL + page.image" alt="Blog Image" class="article-image" />
                <span>Title</span>
                <p class="Article-card-title">{{ page.title }}</p>
                <span>Description</span>
                <p class="Article-card-title">{{ page.description }}</p>
            </div>

        </div>

        <button @click.prevent="navigateBack">
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
            page: null,
            image: '',
            imagePreview: '',
        };
    },
    created() {
        this.fetchPage();
        this.baseURL = baseURL+'/storage/uploads/';
    },
    methods: {
        fetchPage() {
            apiClient.get(`/api/service/${this.$route.params.id}`).then((response) => {
                this.page = response.data;
                this.image = response.data.image;
            });
        },
        goBack() {
            this.$router.push({ name: 'PageList' });
        },
        navigateBack() {
            this.$router.push({ name: 'PageList' });
        }
    },
};
</script>

<style scoped>
button {
    padding: 12px 20px;
    background-color: #00bcd4;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

span {
    color: black;
}

.view-blog-container {
    margin: 30px auto;
    max-width: 800px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.page-title {
    text-align: center;
    color: #333;
    font-size: 32px;
    margin-bottom: 20px;
}

.blog-header {
    text-align: center;
    margin-bottom: 20px;
}

.blog-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
}

.blog-image {
    max-width: 35%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-content {
    margin-top: 20px;
}

.content-text {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
}

.blog-footer {
    margin-top: 30px;
    text-align: center;
}

.back-btn {
    background-color: #5cb85c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-btn:hover {
    background-color: #4cae4c;
}

.view-blog-container {
    margin: 40px auto;
    max-width: 800px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.page-title {
    text-align: center;
    color: #333;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 30px;
    border-bottom: 2px solid #00bcd4;
    padding-bottom: 10px;
}

.Article-card {
    width: 100%;
    background-color: #f1f9ff;
    border: 1px solid #d0e7f9;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
}

.Article-card-content p {
    margin: 10px 0;
    font-size: 18px;
    color: #444;
}

.Article-card-date {
    color: #999;
    font-size: 14px;
    font-style: italic;
}

.Article-card-title {
    font-size: 20px;
    font-weight: 500;
    color: #222;
}

button {
    padding: 12px 24px;
    background-color: #00bcd4;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0097a7;
}
</style>