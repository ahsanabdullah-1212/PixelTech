<template>
  <div class="main-article">
    <div class="Article-card-container">
      <!-- Display the cards -->
      <div class="Article-card" v-for="(card, index) in displayedCards" :key="index">
        <img :src="card.imageUrl" alt="Card Image" class="article-image" />
        <div class="Article-card-content">
          <p class="Article-card-date">{{ card.date }}</p>
          <h3 class="Article-card-title">{{ card.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div v-if="hasMore" class="load-more">
      <button @click="loadMoreBlogs">Load More</button>
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
      displayedCards: [],
      baseURL: baseURL , 
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
          const blogs = response.data.data || []; // Adjust for API response structure
          if (blogs.length) {
            const newCards = blogs.map((blog) => ({
              imageUrl: blog.image ? `${this.baseURL}/storage/uploads/${blog.image}` : "",
              title: blog.title,
              date : blog.formatted_date,
            }));

            this.cards.push(...newCards);

            // Update displayed cards
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            this.displayedCards = this.cards.slice(0, endIndex);

            // Check if there are more blogs
            this.hasMore = !!response.data.next_page_url;

            this.currentPage++; // Increment the page number for the next fetch
          } else {
            this.hasMore = false; // No more blogs to fetch
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
        // Display more cards from the already fetched list
        this.displayedCards = this.cards.slice(0, endIndex);
      }

      // If there are fewer cards fetched than displayed, fetch more
      if (this.displayedCards.length < this.cards.length || this.hasMore) {
        this.fetchBlogs();
      }
    },
  },
};
</script>

<style scoped>
/* Add styles for the button and layout */
.load-more {
  margin: 20px 0;
  text-align: center;
}

.load-more button {
  border: none;
  width: 120px;
  padding: 15px 15px;
  color: var(--white-color);
  cursor: pointer;
  border-radius: 25px;
  background: linear-gradient(90deg, #29DFFD 0%, #245AF8 100%);
}
</style>
