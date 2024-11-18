<template>
  <div class="main-article">
    <div class="Article-card-container">
      <div class="Article-card" v-for="(card, index) in cards" :key="index">
        <!-- Display the image -->
        <img :src="card.imageUrl" alt="Card Image" class="article-image" />
        <div class="Article-card-content">
          <p class="Article-card-date">{{ card.title }}</p>
          <h3 class="Article-card-title">{{ card.text }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/Config/apiClient.js";
import { baseURL } from "@/Config/apiClient.js";

export default {
  data() {
    return {
      cards: [], 
      baseURL: baseURL + "/storage/uploads", // Base URL for images
    };
  },
  created() {
    this.fetchAllBlogs(); // Fetch all blogs from the database
  },
  methods: {
    fetchAllBlogs(page = 1, accumulatedBlogs = []) {
      apiClient
        .get(`/api/blogs?page=${page}`)
        .then((response) => {
          const blogs = response.data.data || []; // Adjust for API response structure
          const currentBlogs = accumulatedBlogs.concat(blogs);

          if (response.data.next_page_url) {
            // Fetch the next page
            this.fetchAllBlogs(page + 1, currentBlogs);
          } else {
            // All pages fetched
            this.cards = currentBlogs.map((blog) => ({
              imageUrl: blog.image ? `${this.baseURL}/${blog.image}` : "", // Construct full image URL
              title: blog.title,
              text: blog.text,
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching blogs:", error);
        });
    },
  },
};
</script>

<style scoped>
</style>
