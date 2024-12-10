<template>
  <div class="meta-tags-management">
    <h2>Active Meta Tags</h2>


    <!-- Table to display meta tags -->
    <div class="table-container">
      <table v-if="metaTags.length" class="meta-table">
        <thead>
          <tr>
            <th>UID</th>
            <th>Page Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <!-- <th>Actions</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="metaTag in metaTags" :key="metaTag.id">
            <td>{{ metaTag.id }}</td>
            <td>{{ metaTag.page_name }}</td>
            <td>{{ metaTag.title }}</td>
            <td>{{ metaTag.description }}</td>
            <td>
              <button
                @click="toggleMetaTagStatus(metaTag.id)"
                :class="{ active: metaTag.is_active, inactive: !metaTag.is_active }"
                class="status-button"
              >
                {{ metaTag.is_active ? "Active" : "Inactive" }}
              </button>
            </td>
            <!-- <td class="actions">
              <router-link :to="{ name: 'MetaTagDetails', params: { id: metaTag.id } }">
                <button><i class="fa-solid fa-eye"></i></button>
              </router-link>
              <router-link :to="{ name: 'EditMetaTag', params: { id: metaTag.id } }">
                <button><i class="fa-solid fa-pen-to-square"></i></button>
              </router-link>
              <button @click="deleteMetaTag(metaTag.id)"><i class="fa-solid fa-trash"></i></button>
            </td> -->
          </tr>
        </tbody>
      </table>
      <p v-else class="no-records">No Records Found</p>
    </div>

    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="pagination">
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="page-button"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="page-button"
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
    // Fetch paginated meta tags
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
    // Toggle active/inactive status of a meta tag
    toggleMetaTagStatus(id) {
      apiClient
        .post(`/api/meta-tags/${id}/toggle-active`)
        .then((response) => {
          alert(response.data.message);
          this.fetchMetaTags(this.currentPage); // Refresh listing on current page
        })
        .catch((error) => {
          console.error("Error toggling status:", error);
        });
    },
    // Delete a meta tag
    // deleteMetaTag(id) {
    //   if (confirm("Are you sure you want to delete this meta tag?")) {
    //     apiClient
    //       .delete(`/api/meta-tags/${id}`)
    //       .then(() => {
    //         this.fetchMetaTags(this.currentPage);
    //       })
    //       .catch((error) => {
    //         console.error("Error deleting meta tag:", error);
    //       });
    //   }
    // },
    // Handle page changes
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.fetchMetaTags(page);
      }
    },
  },
  mounted() {
    this.fetchMetaTags(); // Fetch meta tags on mount
  },
};
</script>

<style scoped>
.meta-tags-management {
  margin-top: 50px!important;
  margin: 20px;
  font-family: Arial, sans-serif;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.add-button {
  padding: 10px 15px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #218838;
}

.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

.meta-table {
  width: 100%;
  border-collapse: collapse;
}

.meta-table th,
.meta-table td {
  border: 1px solid #ddd;
  text-align: left;
  padding: 20px;
}

.meta-table th {
  background-color: #f4f4f4;
}

.actions button {
  margin-right: 5px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.status-button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.status-button.active {
  background-color: #28a745;
  color: white;
}

.status-button.inactive {
  background-color: #dc3545;
  color: white;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.page-button {
  padding: 8px 12px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.page-button:disabled {
  background-color: #d6d6d6;
  cursor: not-allowed;
}

.page-button:not(:disabled):hover {
  background-color: #0056b3;
}

.no-records {
  text-align: center;
  font-size: 16px;
  color: #888;
  margin-top: 20px;
}
</style>
