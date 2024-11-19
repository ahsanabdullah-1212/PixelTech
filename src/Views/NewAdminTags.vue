<template>
    <div class="add-meta-tag">
      <h2>Add New Meta Tag</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Page Name:</label>
          <select v-model="formData.page_name" required>
            <option v-for="page in predefinedPages" :key="page" :value="page">
              {{ page }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" v-model="formData.title" placeholder="Title" required />
        </div>
        <div class="form-group">
          <label>Description:</label>
          <textarea v-model="formData.description" placeholder="Description"></textarea>
        </div>
        <div class="buttons">
          <button type="submit" class="submit-btn">Create</button>
          <button type="button" class="cancel-btn" @click="navigateBack">Cancel</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import apiClient from '@/Config/apiClient.js';
  
  export default {
    data() {
      return {
        formData: {
          page_name: '',
          title: '',
          description: ''
        },
        predefinedPages: ['Landing Page', 'Services Page', 'Portfolio', 'Blogs', 'Our Team','Contact']
      };
    },
    methods: {
      handleSubmit() {
        apiClient
          .post('/api/meta-tags', this.formData)
          .then(() => {
            this.$router.push({ name: 'meta-tags' });
          })
          .catch(error => {
            console.error("Error creating meta tag:", error);
          });
      },
      navigateBack() {
        this.$router.push({ name: 'meta-tags' });
      }
    }
  };
  </script>
  
  <style scoped>
  option {
    color: white;
    font-size: 20px
}
  .add-meta-tag {
    max-width: 500px;
    margin: 50px auto;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }
  
  h2 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    color: #555;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: border-color 0.3s;
  }
  
  input[type="text"]:focus,
  textarea:focus {
    border-color: #245af8;
    outline: none;
  }
  
  textarea {
    resize: vertical;
    min-height: 80px;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .submit-btn {
    background-color: #45A049;
    color: #ffffff;
  }
  
  .submit-btn:hover {
    background-color: #2b7c2f;
  }
  
  .cancel-btn {
    background-color: #45A049;
    color: #333;
  }
  
  .cancel-btn:hover {
    background-color: #2b7c2f;
  }
  </style>
  