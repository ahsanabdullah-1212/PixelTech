<template>
    <div>
        <NavbarComponent />
        <ContactHeroSection />
        <ContactUs />
        <BrandingContainer />
        <ReviewSection />
        <FooterContainer />
    </div>
</template>

<script>

import ContactHeroSection from '@/components/ContactHeroSection.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import ContactUs from '@/components/ContactUs.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import ReviewSection from '@/components/ReviewSection.vue';
import BrandingContainer from '@/components/BrandingContainer.vue';
import { useMetaTags } from '@/Hooks/useMetaTags';

export default {
    name: 'LandingPage',
    components: {
        NavbarComponent,
        ContactHeroSection,
        BrandingContainer,
        ContactUs,
        ReviewSection,
        FooterContainer,
    },
    setup() {
        useMetaTags('Contact'); // Replace 'landing-page' with the actual page_name in your database
    },
}
</script>
