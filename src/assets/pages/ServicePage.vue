<template>
    <div>
        <NavbarComponent />
        <ServiceHeroSection />
        <ServiceCards />
        <WorkSection />
        <TalkToUs />
        <FooterContainer />
    </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import ServiceHeroSection from '@/components/ServiceHeroSection.vue'
import TalkToUs from '@/components/TalkToUs.vue'
import ServiceCards from '@/components/ServiceCards.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import WorkSection from '@/components/WorkSection.vue';

export default {
    name: 'LandingPage',
    components: {
    ServiceHeroSection,
    TalkToUs,
    NavbarComponent,
    ServiceCards,
    WorkSection,
    FooterContainer,
    }
}
</script>
