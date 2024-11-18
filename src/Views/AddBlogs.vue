<template>
    <div class="add-blog-container">
      <h1>Add New Blog</h1>
      <form @submit.prevent="createBlog" class="blog-form">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" placeholder="Enter blog title" required />
  
        <label for="image">Image</label>
        <input type="file" id="image" @change="handleImageUpload" required />
  
        <label for="text">Text</label>
        <textarea id="text" v-model="text" placeholder="Enter blog text" required></textarea>
  
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/Config/apiClient.js';
  
  export default {
    data() {
      return {
        title: '',
        image: null, // This will store the image file
        text: '',
      };
    },
    methods: {
      handleImageUpload(event) {
        this.image = event.target.files[0]; // Store the selected file
      },
      createBlog() {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('image', this.image); // Append the image file
        formData.append('text', this.text);
  
        apiClient
          .post('/api/blogs', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            this.$router.push({ name: 'BlogList' });
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .add-blog-container {
    margin-top: 30px!important;
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .blog-form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
  }
  
  input[type="text"],
  textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  input[type="text"]:focus,
  textarea:focus {
    outline: none;
    border-color: #66afe9;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }
  
  .submit-btn {
    padding: 10px 15px;
    font-size: 16px;
    color: white;
    background-color: #5cb85c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #4cae4c;
  }
  </style>
  