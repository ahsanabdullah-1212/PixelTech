<template>
    <div class="add-blog-container">
        <h1>Add New Service</h1>
        <form @submit.prevent="createPage" class="blog-form">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" placeholder="Enter Service name" required />

            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" placeholder="Enter Service title" />
            <label for="image">Image</label>
            <input type="file" id="image" @change="handleImageUpload" required />

            <div v-if="imagePreview" class="image-preview">
                <img :src="imagePreview" alt="Image Preview" />
            </div>
            <label for="description">Description</label>
            <textarea id="description" v-model="description" placeholder="Enter Service description" rows="5"
                style="resize: vertical;"></textarea>

            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
</template>

<script>
import apiClient from "@/Config/apiClient.js";

export default {
    data() {
        return {
            title: "",
            name: "",
            description: "",
            image: null,
            imagePreview: null,

        };
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            this.image = file;
            // Create a preview URL
            this.imagePreview = URL.createObjectURL(file);
        },
        createPage() {
            const formData = new FormData();
            formData.append("title", this.title);
            formData.append("name", this.name);
            formData.append("description", this.description);
            formData.append("image", this.image);
            console.log("Sending:", {
                title: this.title,
                name: this.name,
                description: this.description,
            });

            apiClient
                .post("/api/service?paginate=false", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(() => {
                    this.$router.push({ name: "PageList" });
                });
        },
    },
};
</script>

<style scoped>
.add-blog-container {
    margin-top: 30px !important;
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

.image-preview {
    margin-top: 15px;
    text-align: center;
}

.image-preview img {
    max-width: 100%;
    max-height: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 10px;
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