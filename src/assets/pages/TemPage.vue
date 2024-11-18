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
import { useMetaTags } from '@/Hooks/useMetaTags';


export default {
    name: 'LandingPage',
    components: {
    TeamHeroSection,
    TalkToUs,
    TeamMembers,
    NavbarComponent,
    FooterContainer,
    },
    setup() {
        useMetaTags('Our Team'); // Replace 'landing-page' with the actual page_name in your database
    },
}
</script>
