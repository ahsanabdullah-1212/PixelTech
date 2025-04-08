<template>
  <div class="blogs-container">
    <h1>Services</h1>

    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Search porfolios..." class="search-input" />
      <button class="search-btn" @click="searchPages">
        Search
      </button>
    </div>

    <div class="blog-b">
      <button class="add-blog-btn" @click="navigateToAddPages">
        Add New <i class="fa-solid fa-plus"></i>
      </button>
    </div>

    <table class="blogs-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="pages.length === 0">
          <td colspan="5" class="no-records">No Records Found</td>
        </tr>
        <tr v-for="page in pages" :key="page.id">
          <td>{{ page.id }}</td>
          <td class="content-cell">{{ page.name }}</td>
          <td class="content-cell">{{ page.title }}</td>
          <td><img :src="baseURL + page.image" alt="Blog Image" width="50" /></td>
          <td class="content-cell">{{ page.description }}</td>
          <td>
            <button @click="navigateToView(page.id)"><i class="fa-solid fa-eye"></i></button>
            <button @click="navigateToEdit(page.id)"><i class="fa-solid fa-pen-to-square"></i></button>
            <button @click="deletePages(page.id)"><i class="fa-solid fa-trash"></i></button>
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
      pages: [],
      baseURL,
      currentPage: 1,
      totalPages: 1,
      searchQuery: "",
    };
  },
  methods: {
    fetchPages(page = 1) {
      apiClient.get(`/api/service?paginate=4&page=${page}`).then((response) => {
        this.pages = response.data.data;
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
      });
    },
    navigateToAddPages() {
      this.$router.push({ name: "AddPage" });
    },
    navigateToView(id) {
      this.$router.push({ name: "ViewPage", params: { id } });
    },
    navigateToEdit(id) {
      this.$router.push({ name: "EditPage", params: { id } });
    },
    deletePages(id) {
      if (window.confirm('Are you sure you want to delete this Service?')) {
        apiClient.delete(`/api/service/${id}`).then(() => {
          this.fetchPages(1);
        }).catch((error) => {
          console.error('Failed to delete the Service:', error);
          alert('Failed to delete the Service. Please try again.');
        });
      } else {
        console.log('Service deletion canceled.');
      }
    }
    ,
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.fetchPages(page);
      }
    },
    searchPages() {
      if (this.searchQuery.trim()) {
        apiClient
          .get(`/api/service/search`, { params: { query: this.searchQuery } })
          .then((response) => {
            this.pages = response.data;
            this.currentPage = 1;
            this.totalPages = 1;
          });
      } else {
        this.fetchPages();
      }
    },
  },
  mounted() {
    this.fetchPages();
    this.baseURL = baseURL + "/storage/uploads/";
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