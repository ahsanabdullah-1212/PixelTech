<template>
    <div>
        <NavbarComponent />
        <TeamHeroSection/>
        <TeamMembers />
        <TalkToUs />
        <FooterContainer />
    </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import TeamMembers from '@/components/TeamMembers.vue'
import TalkToUs from '@/components/TalkToUs.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import TeamHeroSection from '@/components/TeamHeroSection.vue'

export default {
    name: 'LandingPage',
    components: {
    TeamHeroSection,
    TalkToUs,
    TeamMembers,
    NavbarComponent,
    FooterContainer,
    }
}
</script>
