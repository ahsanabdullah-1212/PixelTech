<template>
    <div class="edit-meta-tag">
        <h2>{{ editMode ? 'Edit Meta Tag' : 'Add New Meta Tag' }}</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label>Page Name:</label>
                <select v-model="formData.page_name" required>
                    <option v-for="page in predefinedPages" :key="page" :value="page">
                        {{ page }}
                    </option>
                </select>
            </div>
            <div>
                <label>Title:</label>
                <input type="text" v-model="formData.title" placeholder="Title" required />
            </div>
            <div>
                <label>Description:</label>
                <textarea v-model="formData.description" placeholder="Description"></textarea>
            </div>
            <div class="buttons">
                <button type="submit">{{ editMode ? 'Update' : 'Create' }}</button>
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
            formData: {
                id: null,
                page_name: '',
                title: '',
                description: ''
            },
            predefinedPages: ['Landing Page', 'Services Page', 'Portfolio', 'Blogs', 'Our Team', 'Contact'],
            editMode: false
        };
    },
    methods: {
        fetchMetaTagData(id) {
            apiClient.get(`/api/meta-tags/${id}`).then(response => {
                // console.log("API Response:", response.data);
                const metaTag = response.data; // Assumes data is an array with at least one element
                if (!metaTag) {
                    console.error("Meta tag not found.");
                    this.$router.push('/error-page'); // Redirect if no meta tag is found
                    return;
                }
                this.formData.id = metaTag.id;
                this.formData.page_name = metaTag.page_name;
                this.formData.title = metaTag.title || '';
                this.formData.description = metaTag.description || '';
                this.editMode = true;
            }).catch(error => {
                console.error("Error fetching meta tag data:", error);
                this.$router.push('/error-page'); // Redirect on error
            });
        },
        handleSubmit() {
    if (this.editMode && this.formData.id) {
        apiClient.put(`/api/meta-tags/${this.formData.id}/edit`, this.formData)
            .then(() => {
                this.navigateBack();
            })
            .catch(error => {
                console.error("Error updating meta tag:", error);
            });
    } else {
        apiClient.post('/api/meta-tags', this.formData)
            .then(() => {
                this.navigateBack();
            })
            .catch(error => {
                console.error("Error creating meta tag:", error);
            });
    }
},
        navigateBack() {
            this.$router.push({ name: 'meta-tags', params: { id: this.formData.id } });
        }
    },
    mounted() {
        const id = this.$route.params.id;
        // console.log("Fetched ID from route:", id); // Debug log
        if (!id) {
            console.error("No ID provided in the route.");
            this.$router.push('/error-page'); // Redirect if ID is missing
            return;
        }
        this.fetchMetaTagData(id);
    }

};
</script>

<style scoped>
option {
    color: white;
    font-size: 20px
}

.edit-meta-tag {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f4f4f4;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

form div {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #00bcd4;
    color: white;
    cursor: pointer;
    margin-right: 10px;
}

button:hover {
    background-color: #00bcd4;
}

.buttons {
    display: flex;
    justify-content: space-between;
}
</style>
