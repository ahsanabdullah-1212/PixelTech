<template>
  <div class="meta-tag-details">
    <h2>Meta Tag Details</h2>
    <form>
      <div>
        <label>Id:</label>
        <input type="text" v-model="metaTag.id" readonly />
      </div>
      <div>
        <label>Page Name:</label>
        <input type="text" v-model="metaTag.page_name" readonly />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" v-model="metaTag.title" readonly />
      </div>
      <div>
        <label>Description:</label>
        <textarea v-model="metaTag.description" readonly></textarea>
      </div>
      <div>
        <button class="btn black-bg" @click.prevent="navigateBack">
          Back
        </button>
      </div>

    </form>
  </div>
</template>


<script>
import apiClient from '@/Config/apiClient.js';

export default {
  data() {
    return {
      metaTag: {
        id: '',
        page_name: '',
        title: '',
        description: ''
      }
    };
  },
  methods: {
    // Fetch meta tag details
    fetchMetaTagDetails(id) {
      apiClient.get(`/api/meta-tags/${id}`)
        .then(response => {
          this.metaTag = response.data;
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            console.error("Meta tag not found.");
            this.$router.push('/not-found'); // Redirect to 'not found' page
          } else {
            console.error("Error fetching meta tag details:", error);
            this.$router.push('/error-page'); // Redirect to a generic error page
          }
        });
    },
    navigateBack() {
            this.$router.push({ name: 'meta-tags'});
        }

    ,
  },
  mounted() {
    const id = this.$route.params.id;
    // console.log("Fetched ID from route:", id); // Debug log
    if (!id) {
      console.error("No ID provided in the route.");
      this.$router.push('/error-page'); // Redirect if ID is missing
      return;
    }
    this.fetchMetaTagDetails(id);
  }


};
</script>

<style scoped>
.meta-tag-details {
  margin: 40px auto;
  padding: 30px;
  max-width: 600px;
  border-radius: 8px;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

/* Glowing effect for input fields */
input:focus,
textarea:focus {
  outline: none;
  border-color: #00bcd4;
  /* Sea blue color */
  box-shadow: 0 0 10px #00bcd4;
}

/* Styling for the 'Close' button */
button {
  padding: 12px 20px;
  background-color: #00bcd4;
  /* Sea blue color */
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: #008c91;
  /* Darker sea blue on hover */
  box-shadow: 0 0 15px rgba(0, 188, 212, 0.6);
}

/* Spacing and better readability for textarea */
textarea {
  min-height: 100px;
  resize: vertical;
}

/* Responsive Design */
@media (max-width: 768px) {
  .meta-tag-details {
    padding: 20px;
    margin: 20px;
    max-width: 90%;
  }
}
</style>