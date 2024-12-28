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
import { useMetaTags } from '@/Hooks/useMetaTags';

export default {
    name: 'LandingPage',
    components: {
        BlogHeroSection,
        TalkToUs,
        BlogCards,
        NavbarComponent,
        FooterContainer,
    },
    setup() {
        useMetaTags('Blogs'); 
    },

}
</script>
