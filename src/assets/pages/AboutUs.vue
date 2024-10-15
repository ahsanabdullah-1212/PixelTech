<template>
    <div>
        <AboutHeroSection />
        <CreationCards />
        <TalkToUs />
        <FooterContainer />
    </div>
</template>

<script>

import AboutHeroSection from '@/components/AboutHeroSection.vue'
import TalkToUs from '@/components/TalkToUs.vue'
import CreationCards from '@/components/CreationCards.vue'
import FooterContainer from '@/components/FooterContainer.vue'

export default {
    name: 'LandingPage',
    components: {
    AboutHeroSection,
    TalkToUs,
    CreationCards,
    FooterContainer,
    }
}
</script>
