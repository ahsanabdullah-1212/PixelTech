<template>
    <div class="edit-blog-container">
        <h1 class="page-title">Edit Service</h1>
        <form @submit.prevent="updatePage" class="blog-form">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="title" placeholder="Enter Service title" maxlength="255" required
                    class="form-input" />
                <div v-if="title.length === 255" class="text-warning">
                    <span class="fa fa-exclamation-circle" style="color: red; margin-right: 5px;">You have reached the
                        maximum character limit (255).</span>

                </div>
            </div>
            <div class="form-group">
                <label for="title">Name</label>
                <input type="text" id="name" v-model="name" placeholder="Enter Service Name" maxlength="255" required
                    class="form-input" />
                <div v-if="name.length === 255" class="text-warning">
                    <span class="fa fa-exclamation-circle" style="color: red; margin-right: 5px;"> You have reached the
                        maximum character limit (255).</span>

                </div>
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" id="image" @change="handleImageChange" class="form-input" />
                <div v-if="imagePreview" class="image-preview">
                    <img :src="baseURL + imagePreview" alt="Preview" class="image-preview-img" v-if="!newImage" />
                    <img :src="imagePreview" alt="Preview" class="image-preview-img" v-else />
                </div>
            </div>
            <div class="form-group">
                <label for="title">Description</label>
                <textarea type="text" id="description" v-model="description" placeholder="Enter  Service Description"
                     class="form-input" />
            </div>
            <div class="form-footer">
                <button type="submit" class="submit-btn">Update Page</button>
                <button type="button" class="back-btn" @click="goBack">Back to Service-title List</button>
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
            name: '',
            image: '',
            imagePreview: '',
            description: '',
        };
    },
    created() {
        this.fetchPage();
        this.baseURL = baseURL + '/storage/uploads/';
    },
    methods: {
        fetchPage() {
            apiClient.get(`/api/service/${this.$route.params.id}`).then((response) => {
                this.title = response.data.title;
                this.description = response.data.description;
                this.name = response.data.name;
                this.image = response.data.image;
                if (this.image) {
                    this.imagePreview = this.image;
                }
            });
            console.log("Fetching page ID:", this.$route.params.id);

        },
        handleImageChange(event) {
            this.newImage = true;
            const file = event.target.files[0];
            if (file) {

                this.imagePreview = URL.createObjectURL(file);

                this.image = file;
            }
        },
        updatePage() {
            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('description', this.description);
            formData.append('name', this.name);
            if (this.newImage) {
                formData.append('image', this.image);
            }
            apiClient
                .post(`/api/service/${this.$route.params.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(() => {
                    this.$router.push({ name: 'PageList' });

                    this.fetchPage();
                })
                .catch(error => {
                    console.error("Error updating page:", error);
                });
        },
        goBack() {
            this.$router.push({ name: 'PageList' });
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
    background-color: #00bcd4;
}

.submit-btn:hover {
    background-color: #00bcd4;
}

.back-btn {
    background-color: #00bcd4;
}

.back-btn:hover {
    background-color: #00bcd4;
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