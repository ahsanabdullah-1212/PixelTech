<template>
    <div class="view-blog-container">
      <h1 class="page-title">View Blog</h1>
      <div class="Article-card" v-if="blog">
        <img :src="baseURL + blog.image" alt="Blog Image" class="article-image" />
        <div class="Article-card-content">
          <p class="Article-card-date">{{ blog.title }}</p>
          <h3 class="Article-card-title">{{ blog.text }}</h3>
        </div>
      </div>
      <!-- <div v-if="blog">
        <div class="blog-header">
          <img :src="baseURL + blog.image" alt="Blog Image" class="blog-image" />
          <h2 class="blog-title">{{ blog.title }}</h2>
        </div>
        <div class="blog-content">
          <p><strong>Text:</strong></p>
          <p class="content-text">{{ blog.text }}</p>
        </div>
        <div class="blog-footer">
          <button @click="goBack" class="back-btn">Back to Blog List</button>
        </div>
      </div> -->
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '@/Config/apiClient.js';
  import { baseURL } from '@/Config/apiClient.js';
  
  export default {
    data() {
      return {
        blog: null, 
        image: '',
        imagePreview: '',// Holds the fetched blog data
      };
    },
    created() {
      this.fetchBlog();
      this.baseURL = baseURL+'/storage/uploads/';
    },
    methods: {
      // Fetch the blog data using the blog ID from the URL parameters
      fetchBlog() {
        apiClient.get(`/api/blogs/${this.$route.params.id}`).then((response) => {
          this.blog = response.data;
          this.image = response.data.image;
        });
      },
      // Navigate back to the blog list
      goBack() {
        this.$router.push({ name: 'BlogList' });
      },
    },
  };
  </script>
  
  <style scoped>
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
  </style>
  