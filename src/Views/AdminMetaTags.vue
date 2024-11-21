<template>
  <div class="meta-tags-management">
    <h2>Meta Tags Management</h2>
    <!-- Button to add a new meta tag -->
    <div class="add-button">
      <button @click="createMetaTags">Add New <i class="fa-solid fa-plus"></i></button>
    </div>

    <!-- Table to display meta tags -->
    <table v-if="metaTags.length">
      <thead>
        <tr>
          <th>UID</th>
          <th>Page Name</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="metaTag in metaTags" :key="metaTag.id">
          <td>{{ metaTag.id }}</td>
          <td>{{ metaTag.page_name }}</td>
          <td>{{ metaTag.title }}</td>
          <td>{{ metaTag.description }}</td>
          <td>
            <router-link :to="{ name: 'MetaTagDetails', params: { id: metaTag.id } }">
              <button><i class="fa-solid fa-eye"></i></button>
            </router-link>
            <router-link :to="{ name: 'EditMetaTag', params: { id: metaTag.id } }">
              <button><i class="fa-solid fa-pen-to-square"></i></button>
            </router-link>
            <button @click="deleteMetaTag(metaTag.id)"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- "No Records Found" message -->
    <p v-else class="no-records">No Records Found</p>

    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="pagination">
      <button
        v-if="currentPage > 1"
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        v-if="currentPage < totalPages"
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import apiClient from "@/Config/apiClient.js";

export default {
  data() {
    return {
      metaTags: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  methods: {
    // Fetch paginated meta tags from Laravel API
    fetchMetaTags(page = 1) {
      apiClient
        .get(`/api/meta-tags?page=${page}&per_page=4`)
        .then((response) => {
          this.metaTags = response.data.data;
          this.currentPage = response.data.current_page;
          this.totalPages = response.data.last_page;
        })
        .catch((error) => {
          console.error("Error fetching meta tags:", error);
        });
    },
    // Open form for adding a new meta tag
    createMetaTags() {
      this.$router.push({ name: "AddMetaTag" });
    },
    // Delete a meta tag
    deleteMetaTag(id) {
      if (confirm("Are you sure you want to delete this meta tag?")) {
        apiClient
          .delete(`/api/meta-tags/${id}`)
          .then(() => {
            // Refresh list and redirect to the first page
            this.fetchMetaTags(1);
          })
          .catch((error) => {
            console.error("Error deleting meta tag:", error);
          });
      }
    },
    // Change page and fetch meta tags for the new page
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.fetchMetaTags(page);
      }
    },
  },
  mounted() {
    this.fetchMetaTags(); // Fetch meta tags on component mount
  },
};
</script>

<style scoped>
.add-button {
  display: flex;
  justify-content: flex-end;
}

.meta-tags-management {
  margin: 20px;
  margin-top: 50px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 12px;
  background-color: rgb(214, 214, 214);
  color: black;
  margin-top: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: black;
  color: rgb(214, 214, 214);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

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

.no-records {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #888;
  margin-top: 20px;
}
</style>
