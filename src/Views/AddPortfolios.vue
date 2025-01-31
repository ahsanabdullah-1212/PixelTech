<template>
    <div class="add-blog-container">
        <h1>Add New Portfolio</h1>
        <form @submit.prevent="createPortfolio" class="blog-form">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" placeholder="Enter Portfolio title" required />

            <label for="image">Image</label>
            <input type="file" id="image" @change="handleImageUpload" required />

            <div v-if="imagePreview" class="image-preview">
                <img :src="imagePreview" alt="Image Preview" />
            </div>
            <label for="text">Text</label>
            <textarea id="text" v-model="text" placeholder="Enter Portfolio description" required></textarea>

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
            image: null,
            imagePreview: null,
            text: ""
        };
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            this.image = file;
            // Create a preview URL
            this.imagePreview = URL.createObjectURL(file);
        },
        createPortfolio() {
            const formData = new FormData();
            formData.append("text", this.text);
            formData.append("title", this.title);
            formData.append("image", this.image);

            apiClient
                .post("/api/portfolios", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(() => {
                    this.$router.push({ name: "PortfolioList" });
                })
                .catch((error) => {
                    console.error("Failed to create portfolio:", error);
                    alert("Failed to submit the portfolio. Please try again.");
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