<template>
    <div>
        <NavbarComponent />
        <portfolioHeroSection />
        <CreationCards />
        <TalkToUs />
        <FooterContainer />
    </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import portfolioHeroSection from '@/components/portfolioHeroSection.vue'
import TalkToUs from '@/components/TalkToUs.vue'
import CreationCards from '@/components/CreationCards.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import { useMetaTags } from '@/Hooks/useMetaTags';



export default {
    name: 'LandingPage',
    components: {
        portfolioHeroSection,
        NavbarComponent,
        TalkToUs,
        CreationCards,
        FooterContainer,
    },
    setup() {
        useMetaTags('Portfolio'); // Replace 'landing-page' with the actual page_name in your database
    },
}
</script>
