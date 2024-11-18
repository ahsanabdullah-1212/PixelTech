<template>
  <div class="blogs-container">
    <h1>Blogs</h1>
    <div class="blog-b">
      <button class="add-blog-btn" @click="navigateToAddBlog"><i class="fa-solid fa-plus"></i></button>
    </div>
    <table class="blogs-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>Text</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in blogs" :key="blog.id">
          <td>{{ blog.id }}</td>
          <td>{{ blog.title }}</td>
          <!-- Use /storage/ to access the image in the public directory -->
          <td><img :src="baseURL + blog.image" alt="Blog Image" width="50" /></td>
          <td class="content-cell">{{ blog.text }}</td>
          <td>
            <button @click="navigateToView(blog.id)"><i class="fa-solid fa-eye"></i></button>
            <button @click="navigateToEdit(blog.id)"><i class="fa-solid fa-pen-to-square"></i></button>
            <button @click="deleteBlog(blog.id)"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import apiClient from '@/Config/apiClient.js';
import { baseURL } from '@/Config/apiClient.js';

export default {
  data() {
    return {
      blogs: [], // Holds the list of blogs for the current page
      baseURL,
      currentPage: 1,
      totalPages: 1,
    };
  },
  methods: {
    fetchBlogs(page = 1) {
      apiClient.get(`/api/blogs?page=${page}`).then((response) => {
        this.blogs = response.data.data; // Blogs for the current page
        this.currentPage = response.data.current_page; // Current page number
        this.totalPages = response.data.last_page; // Total number of pages
      });
    },
    navigateToAddBlog() {
      this.$router.push({ name: 'AddBlog' });
    },
    navigateToView(id) {
      this.$router.push({ name: 'ViewBlog', params: { id } });
    },
    navigateToEdit(id) {
      this.$router.push({ name: 'EditBlog', params: { id } });
    },
    deleteBlog(id) {
      apiClient.delete(`/api/blogs/${id}`).then(() => {
        this.fetchBlogs(this.currentPage); // Reload the current page
      });
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchBlogs(page); // Fetch blogs for the selected page
      }
    },
  },
  mounted() {
    this.baseURL = baseURL + '/storage/uploads/';
    this.fetchBlogs();
  },
};
</script>


<style scoped>
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
  justify-content: flex-end
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
  /* margin-top: 20px; */
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
  border-bottom: 1px solid #ddd;
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

button {
  margin-right: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

button:last-child {
  margin-right: 0;
}
</style>