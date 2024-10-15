<template>
    <div>
        <BlogHeroSection />
        <BlogCards />
        <TalkToUs />
        <FooterContainer />
    </div>
</template>

<script>

import BlogHeroSection from '@/components/BlogHeroSection.vue'
import TalkToUs from '@/components/TalkToUs.vue'
import BlogCards from '@/components/BlogCards.vue'
import FooterContainer from '@/components/FooterContainer.vue'

export default {
    name: 'LandingPage',
    components: {
    BlogHeroSection,
    TalkToUs,
    BlogCards,
    FooterContainer,
    }
}
</script>
