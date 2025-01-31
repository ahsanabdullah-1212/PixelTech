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
          <br>
          <!-- <p>{{ card.description2 }}</p> -->
          <div class="creation-btn">
            <button class="gradient-btn-2">See more</button>
          </div>
        </div>
      </div>


    </div>
    <div v-if="hasMore" class="load-more">
      <button @click="LoadMorePortfolios">Load More</button>
    </div>
    <div class="specail-cards-btns">
      <router-link to="/services">
        <button class="gradient-btn">See our Plans</button>
      </router-link>
      <router-link to="/portfolio">
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
  methods: {
    fetchPortfolio() {
      apiClient.get(`/api/portfolios?page=${this.currentPage}`).then((response) => {
        const portfolios = response.data.data || [];
        if (portfolios.length) {
          const newPortfolio = portfolios.map((portfolio) => ({
            imageUrl: portfolio.image ? `${this.baseURL}/storage/uploads/${portfolio.image}` : "",
            title: portfolio.title,
            text: portfolio.text,
          }));
          // console.log("Image URLs:", newPortfolio.map((p) => p.imageUrl));
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
        })
    },
    LoadMorePortfolios() {
      const startIndex = this.creationCards.length;
      const endIndex = startIndex + this.itemsPerPage;

      if (startIndex < this.cards.length) {
        this.creationCards = this.cards.slice(0, endIndex);
      }
      if (this.creationCards.length >= this.cards.length || this.hasMore) {
        this.fetchPortfolio();
      }
    }
  },
};
</script>
<style>
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