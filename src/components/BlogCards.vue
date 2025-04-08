<template>
  <div class="main-article">
    <div class="Article-card-container">
      <div class="Article-card" v-for="(card, index) in displayedCards" :key="index">
        <img :src="card.imageUrl" alt="Card Image" class="article-image" />
        <div class="Article-card-content">
          <p class="Article-card-date">{{ card.date }}</p>
          <h3 class="Article-card-title">{{ card.title }}</h3>
        </div>
      </div>
    </div>
    <div v-if="hasMore" class="load-more">
      <button @click="loadMoreBlogs">Load More</button>
    </div>
  </div>
</template>

<script>
import apiClient from "@/Config/apiClient.js";
// import { baseURL } from "@/Config/apiClient.js"; // import { createRouter, createWebHistory } from "vue-router";

export default {
  data() {
    return {
      cards: [], 
      displayedCards: [],
      // baseURL: baseURL , 
      currentPage: 1, 
      itemsPerPage: 4, 
      hasMore: true, 
    };
  },
  created() {
    this.fetchBlogs();
  },
  methods: {
    fetchBlogs() {
      apiClient
        .get(`/api/blogs?page=${this.currentPage}`)
        .then((response) => {
          const blogs = response.data.data || [];
          if (blogs.length) {
            const newCards = blogs.map((blog) => ({
              imageUrl: blog.image ? `${apiClient.defaults.baseURL}/storage/uploads/${blog.image}` : "",
              title: blog.title,
              date : blog.formatted_date,
            }));

            this.cards.push(...newCards);

            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            this.displayedCards = this.cards.slice(0, endIndex);

            this.hasMore = !!response.data.next_page_url;

            this.currentPage++;
          } else {
            this.hasMore = false;
          }
        })
        .catch((error) => {
          console.error("Error fetching blogs:", error);
        });
    },
    loadMoreBlogs() {
      const startIndex = this.displayedCards.length;
      const endIndex = startIndex + this.itemsPerPage;

      if (startIndex < this.cards.length) {
        this.displayedCards = this.cards.slice(0, endIndex);
      }

      if (this.displayedCards.length < this.cards.length || this.hasMore) {
        this.fetchBlogs();
      }
    },
  },
};
</script>

<style scoped>

</style>
