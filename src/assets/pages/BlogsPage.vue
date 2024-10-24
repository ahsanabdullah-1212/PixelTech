<template>
    <div>
        <NavbarComponent />
        <BlogHeroSection />
        <BlogCards />
        <TalkToUs />
        <FooterContainer />
    </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
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
    NavbarComponent,
    FooterContainer,
    }
}
</script>
