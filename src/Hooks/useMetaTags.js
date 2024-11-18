import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import apiClient from '@/Config/apiClient.js';

export function useMetaTags(pageName) {
    const metaData = ref([]);

    onMounted(async () => {
        try {
            // Backend API call to fetch meta tags based on page name using POST
            const response = await apiClient.post('/api/meta-tags/page', {
                page_name: pageName,
            });

            // Log the response data
            // console.log("Meta tags response:", response.data);

            // Check if response data is an array and assign it directly
            if (Array.isArray(response.data)) {
                metaData.value = response.data;

                // Set all meta tags in a single call to useHead
                useHead({
                    // Optional: concatenate all titles for a single page title if needed
                    title: pageName,

                    // Add all meta tags at once in the meta array
                    meta: metaData.value.map(tag => ({
                        name: tag.title,
                        content: tag.description,
                    })),
                });
            } else {
                console.error("Expected an array of meta tags, received:", response.data);
            }
        } catch (error) {
            console.error('Error fetching meta tags:', error);
        }
    });

    return {
        metaData,
    };
}
