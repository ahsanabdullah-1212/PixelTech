<template>
    <div class="blogs-container">
      <h1>Portfolios</h1>
   
      <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="Search porfolios..." class="search-input" />
        <button class="search-btn" @click="searchPortfolios">
          Search
        </button>
      </div>
  
      <div class="blog-b">
        <button class="add-blog-btn" @click="navigateToAddPortfolio">
          Add New <i class="fa-solid fa-plus"></i>
        </button>
      </div>
  
      <table class="blogs-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> 
          <tr v-if="portfolios.length === 0">
            <td colspan="5" class="no-records">No Records Found</td>
          </tr>
          <tr v-for="portfolio in portfolios" :key="portfolio.id">
            <td>{{ portfolio.id }}</td>
            <td class="content-cell">{{ portfolio.title }}</td>
            <td class="content-cell">{{ portfolio.text }}</td>
            <td><img :src="baseURL + portfolio.image" alt="Portfolio Image" width="50" /></td>
            <td>
              <button @click="navigateToView(portfolio.id)"><i class="fa-solid fa-eye"></i></button>
              <button @click="navigateToEdit(portfolio.id)"><i class="fa-solid fa-pen-to-square"></i></button>
              <button @click="deletePortofolios(portfolio.id)"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
   
      <div v-if="totalPages > 1" class="pagination">
        <button v-if="currentPage > 1" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button v-if="currentPage < totalPages" @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from "@/Config/apiClient.js";
  import { baseURL } from "@/Config/apiClient.js";
  
  export default {
    data() {
      return {
        portfolios: [],  
        baseURL,
        currentPage: 1,
        totalPages: 1,
        searchQuery: "",  
      };
    },
    methods: {
      fetchPortfolios(page = 1) {
        apiClient.get(`/api/portfolios?page=${page}`).then((response) => {
          this.portfolios = response.data.data;  
          this.currentPage = response.data.current_page; 
          this.totalPages = response.data.last_page;  
        });
      },
      navigateToAddPortfolio() {
        this.$router.push({ name: "AddPortfolio" });
      },
      navigateToView(id) {
        this.$router.push({ name: "ViewPorfolio", params: { id } });
      },
      navigateToEdit(id) {
        this.$router.push({ name: "EditPortfolio", params: { id } });
      },
      deletePortofolios(id) {
    if (window.confirm('Are you sure you want to delete this Portfolio?')) {
      apiClient.delete(`/api/portfolios/${id}`).then(() => {
        this.fetchPortfolios(1); 
      }).catch((error) => {
        console.error('Failed to delete the Portfolio:', error);
        alert('Failed to delete the portfolio. Please try again.');
      });
    } else {
      console.log('Portfolio deletion canceled.');
    }
  }
  ,
      changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.fetchPortfolios(page); 
        }
      },
      searchPortfolios() {
        if (this.searchQuery.trim()) {
          apiClient
            .get(`/api/portfolios/search`, { params: { query: this.searchQuery } })
            .then((response) => {
              this.portfolios = response.data; 
              this.currentPage = 1;  
              this.totalPages = 1;  
            });
        } else {
          this.fetchPortfolios();     
        }
      },
    },
    mounted() {
      this.baseURL = baseURL + "/storage/uploads/";
      this.fetchPortfolios();
    },
  };
  </script>
  
  <style scoped>
  .no-records {
    text-align: center !important;
    font-size: 24px;
    font-weight: bold;
    color: #181717;
    padding: 15px;
  }
  
  .search-container {
    display: flex;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-container input {
    background-color: #d6d6d6;
    color: black !important;
    font-size: 14px;
  }
  
  .search-input {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    outline: none;
  }
  
  .search-btn {
    padding: 10px 20px;
    background-color: #0f2564;
    color: #fff;
    margin-top: 4px;
    border: none;
    font-size: 14px;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-bottom: 0px !important;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .search-btn:hover {
    background-color: #1d4ccc;
  }
  
  /* Existing styles */
  button {
    margin-right: 5px;
    margin-bottom: 10px;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 0 5px;
    padding: 8px 12px;
  }
  
  .blog-b {
    display: flex;
    justify-content: flex-end;
  }
  
  .blogs-container {
    margin-top: 25px;
    padding: 20px;
  }
  
  button {
    padding: 10px;
    border: none;
    border-radius: 12px;
    background-color: rgb(214, 214, 214);
    color: black;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  button:hover {
    background-color: black;
    color: rgb(214, 214, 214);
  }
  
  .add-blog-btn {
    margin-top: 25px;
    margin-bottom: 10px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .blogs-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .blogs-table th,
  .blogs-table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .blogs-table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  .blogs-table img {
    border-radius: 5px;
  }
  
  .content-cell {
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  button:last-child {
    margin-right: 0;
  }
  </style>
  