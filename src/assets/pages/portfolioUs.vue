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

export default {
    name: 'LandingPage',
    components: {
        portfolioHeroSection,
        NavbarComponent,
        TalkToUs,
        CreationCards,
        FooterContainer,
    }
}
</script>
