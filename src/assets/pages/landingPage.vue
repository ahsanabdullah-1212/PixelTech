<template>
    <div>
        <NavbarComponent />
        <HeroSection />
        <PixelTech />
        <SpecialCards />
        <WorkSection />
        <NewsArticles />
        <ReviewSection />
        <TalkToUs />
        <FooterContainer />
    </div>
</template>

<script> 
import NavbarComponent from '@/components/NavbarComponent.vue'
import TalkToUs from '@/components/TalkToUs.vue'
import ReviewSection from '@/components/ReviewSection.vue'
import PixelTech from '@/components/PixelTech.vue'
import NewsArticles from '@/components/NewsArticles.vue'
import HeroSection from '@/components/HeroSection.vue'
import SpecialCards from '@/components/SpecialCards.vue'
import WorkSection from '@/components/WorkSection.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import { useMetaTags } from '@/Hooks/useMetaTags';

export default {
    name: 'LandingPage',
    components: {
        ReviewSection,
        TalkToUs,
        NavbarComponent,
        PixelTech,
        NewsArticles,
        HeroSection,
        FooterContainer,
        WorkSection,
        SpecialCards,
    },
    setup() {
        useMetaTags('Landing Page'); 
    },
   
}
</script>
