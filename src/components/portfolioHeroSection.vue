<template>
  <div class="main-service-hero-section">
    <div class="hero-details">
      <div class="service-hero-texting">
        <h1 class="hero-text">Explain our <span class="animated">{{ service.title }} </span></h1>
      </div>
      <div class="hero-stars">

        <div class="star" style="top: 10%; left: 20%;"></div>
        <div class="star" style="top: 30%; left: 80%;"></div>
        <div class="star" style="top: 50%; left: 50%;"></div>
        <div class="star" style="top: 70%; left: 10%;"></div>
        <div class="star" style="top: 95%; left: 40%;"></div>
        <div class="star" style="top: 85%; left: 60%;"></div>
        <div class="star" style="top: 135%; left: 88%;"></div>
        <div class="hero-paragraph">
          <p>{{ service.description }}</p>
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
      service: {
        title: 'creations',
        description: 'This is the page we’re most proud of. If you’d like more details on a specific project, want to know more about the thinking behind a design decision, or just want to tell us we’re awesome,get in touch.'
      }
    }
  },
  mounted() {
    this.fetchService(); // Use a method so we can reuse it in the watcher
  },
  watch: {
    '$route.params.id': 'fetchService' // 👈 this is all you need to fix the update issue
  },
  methods: {
    fetchService() {
      const id = this.$route.params.id;
      if (id) {
        apiClient.get(`api/service/${id}`)
          .then(response => {
            this.service = response.data;
          })
          .catch(error => {
            console.error('Error fetching service:', error);
          });
      } else {
        console.log('No service ID found in route, using default content.');
      }
    }
  }
}
</script>
