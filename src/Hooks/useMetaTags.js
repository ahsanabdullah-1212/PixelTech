import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import apiClient from '@/Config/apiClient.js';

export function useMetaTags(pageName) {
    const metaData = ref([]);

    onMounted(async () => {
        try {
            const response = await apiClient.post('/api/meta-tags/page', {
                page_name: pageName,
            });

            // console.log("Meta tags response:", response.data);
            if (Array.isArray(response.data)) {
                metaData.value = response.data;
                useHead({
                    title: pageName,
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
