<template>
  <div class="main-creation-cards">
    <div class="creation-card-row">
      <div v-for="(card, index) in creationCards" :key="index" :class="['creation-card', `creation-card-${index + 1}`]">
        <div class="creation-card-image">
          <img :src="card.imageUrl" :alt="card.title" />
        </div>
        <div class="creation-card-description">
          <h2>{{ card.title }}</h2>
          <p>{{ card.text }}</p>
          <br />
          <div class="creation-btn">
            <button class="gradient-btn-2">See more</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div v-if="hasMore" class="load-more">
      <button @click="LoadMorePortfolios">Load More</button>
    </div>

    <!-- Special Cards Button -->
    <div class="specail-cards-btns">
      <router-link to="/contact">
        <button class="gradient-btn">See our Plans</button>
      </router-link>
      <router-link to="/contact">
        <button class="simple-btn">Unique Project?</button>
      </router-link>
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
      creationCards: [],
      baseURL: baseURL,
      currentPage: 1,
      itemsPerPage: 4,
      hasMore: true,
    };
  },

  created() {
    this.fetchPortfolio();
  },

  watch: {
    '$route.params.id': 'fetchPortfolio', // Watch for route changes to refetch data
  },

  methods: {
    fetchPortfolio() {
      // Reset all on new load or route change
      this.cards = [];
      this.creationCards = [];
      this.currentPage = 1;
      this.hasMore = true;

      const serviceId = this.$route.params.id; 
      let url = '/api/portfolios'; 

      if (serviceId) {
        url = `/api/portfolios2?page=${this.currentPage}&service_id=${serviceId}`;
      } else {
        // If it's the "/portfolio" route, use the normal portfolios API
        url = `/api/portfolios?page=${this.currentPage}`;
      }

      // Fetch data from the API
      apiClient.get(url)
        .then((response) => {
          const portfolios = response.data.data || [];
          if (portfolios.length) {
            const newPortfolio = portfolios.map((portfolio) => ({
              imageUrl: portfolio.image ? `${this.baseURL}/storage/uploads/${portfolio.image}` : "",
              title: portfolio.title,
              text: portfolio.text,
            }));

            this.cards.push(...newPortfolio);

            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            this.creationCards = this.cards.slice(0, endIndex);

            this.hasMore = !!response.data.next_page_url;
            this.currentPage++;
          } else {
            this.hasMore = false;
          }
        })
        .catch((error) => {
          console.error("Error fetching portfolios:", error);
        });
    },

    // Load more portfolios when clicking the 'Load More' button
    LoadMorePortfolios() {
      const startIndex = this.creationCards.length;
      const endIndex = startIndex + this.itemsPerPage;

      if (startIndex < this.cards.length) {
        this.creationCards = this.cards.slice(0, endIndex);
      }

      // Fetch more if there's more data
      if (this.creationCards.length >= this.cards.length || this.hasMore) {
        const serviceId = this.$route.params.id;
        let url = `/api/portfolios`;

        if (serviceId) {
          url += `?page=${this.currentPage}&service_id=${serviceId}`;
        } else {
          url += `?page=${this.currentPage}`;
        }

        apiClient.get(url)
          .then((response) => {
            const portfolios = response.data.data || [];
            if (portfolios.length) {
              const newPortfolio = portfolios.map((portfolio) => ({
                imageUrl: portfolio.image ? `${this.baseURL}/storage/uploads/${portfolio.image}` : "",
                title: portfolio.title,
                text: portfolio.text,
              }));

              this.cards.push(...newPortfolio);

              const startIndex = (this.currentPage - 1) * this.itemsPerPage;
              const endIndex = startIndex + this.itemsPerPage;
              this.creationCards = this.cards.slice(0, endIndex);

              this.hasMore = !!response.data.next_page_url;
              this.currentPage++;
            } else {
              this.hasMore = false;
            }
          })
          .catch((error) => {
            console.error("Error loading more portfolios:", error);
          });
      }
    },
  },
};
</script>


<style scoped>
/* Page Container */
.portfolio-detail-container {
  max-width: 1200px;
  margin-top: 0px !important;
  margin: 40px auto;
  color: #ecf0f1;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
}

.portfolio-detail-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  position: relative;
  padding: 40px;
  border-radius: 15px;
  background-color: #1b1b1b;
  overflow: hidden;
}

@media (max-width: 990px) {
  .portfolio-detail-card {
    flex-direction: column;
  }
}

/* Image Section */
.image-container {
  width: 50%;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8);
  overflow: hidden;
}

@media (max-width: 990px) {
  .image-container {
    width: 100%;
  }
}

.portfolio-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease-out;
}

.portfolio-image:hover {
  transform: scale(1.05);
}

/* Content Section */
.detail-content {
  width: 50%;
  padding: 20px;
}

@media (max-width: 990px) {
  .detail-content {
    width: 100%;
  }
}

.portfolio-title {
  font-size: 2.6rem;
  font-weight: 700;
  background: linear-gradient(90deg, #29DFFD 0%, #245AF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: 100;
  margin-bottom: 20px;
}

.portfolio-description {
  font-size: 1.2rem;
  color: #bdc3c7;
  line-height: 1.8;
  margin-bottom: 30px;
}

.btn-group {
  display: flex;
  gap: 20px;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #bdc3c7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-detail-card {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 22px;
  }

  .image-container {
    max-width: 100%;
  }

  .detail-content {
    padding: 0px;
    text-align: center;
  }

  .portfolio-title {
    font-size: 2rem;
  }

  .portfolio-description {
    font-size: 12px;
  }

  .btn-group {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
