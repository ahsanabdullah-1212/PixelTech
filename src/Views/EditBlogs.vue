<template>
  <div class="edit-blog-container">
    <h1 class="page-title">Edit Blog</h1>
    <form @submit.prevent="updateBlog" class="blog-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" placeholder="Enter blog title" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="file" id="image" @change="handleImageChange" class="form-input" />
        <div v-if="imagePreview" class="image-preview">
          <img :src="baseURL+imagePreview" alt="Preview" class="image-preview-img" v-if="!newImage"/>
          <img :src="imagePreview" alt="Preview" class="image-preview-img" v-else/>
        </div>
      </div>
      <div class="form-group">
        <label for="text">Text</label>
        <textarea id="text" v-model="text" placeholder="Enter blog text" required class="form-textarea"></textarea>
      </div>
      <div class="form-footer">
        <button type="submit" class="submit-btn">Update Blog</button>
        <button type="button" class="back-btn" @click="goBack">Back to Blog List</button>
      </div>
    </form>
  </div>
</template>

<script>
import apiClient from '@/Config/apiClient.js';
import { baseURL } from '@/Config/apiClient.js';
export default {
  data() {
    return {
      title: '',
      image: '',
      text: '',
      imagePreview: '', // Holds the image preview URL
      newImage: false, // Holds the image preview URL
    };
  },
  created() {
    this.fetchBlog();
    this.baseURL = baseURL+'/storage/uploads/';
  },
  methods: {
    fetchBlog() {
  apiClient.get(`/api/blogs/${this.$route.params.id}`).then((response) => {
    this.title = response.data.title;
    this.image = response.data.image;
    this.text = response.data.text;

    // Set the imagePreview directly from the response if image exists
    if (this.image) {
      this.imagePreview = this.image;
    }
  });
},
    handleImageChange(event) {
      this.newImage = true;
      const file = event.target.files[0];
      if (file) {
        // Create a local preview URL for the image
        this.imagePreview = URL.createObjectURL(file);
        // Update the image model with the file (this will be sent to the backend)
        this.image = file;
      }
    },
    updateBlog() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('text', this.text);

      // Only append the image if a new one is selected
      if (this.newImage) {
        formData.append('image', this.image); // Append the image file
      }

      apiClient
        .post(`/api/blogs/${this.$route.params.id}`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(() => {
          this.$router.push({ name: 'BlogList' });
          // Optionally fetch the updated blog data
          this.fetchBlog();
        })
        .catch(error => {
          console.error("Error updating blog:", error);
        });
    },
    goBack() {
      this.$router.push({ name: 'BlogList' });
    },
  },
};

</script>

<style scoped>
.edit-blog-container {
  margin: 30px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.page-title {
  text-align: center;
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.blog-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #66afe9;
  box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  outline: none;
}

.submit-btn,
.back-btn {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.submit-btn {
  background-color: #5cb85c;
}

.submit-btn:hover {
  background-color: #4cae4c;
}

.back-btn {
  background-color: #f0ad4e;
}

.back-btn:hover {
  background-color: #ec971f;
}

.form-footer {
  display: flex;
  justify-text: flex-start;
}

.image-preview {
  margin-top: 10px;
  text-align: center;
}

.image-preview-img {
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>