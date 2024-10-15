<template>
  <NavbarComponent />
  <HeroSection/>
  <ThreeModel />
  <PixelTech />
  <SpecialCards />
  <WorkSection />
  <NewsArticles />
  <BrandingContainer />
  <ReviewSection />
  <TalkToUs />
  <FooterContainer />
</template>

<script>
import TalkToUs from './components/TalkToUs.vue'
import ReviewSection from './components/ReviewSection.vue'
import ThreeModel from './components/ThreeModel.vue'
import PixelTech from './components/PixelTech.vue'
import NewsArticles from './components/NewsArticles.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import SpecialCards from './components/SpecialCards.vue'
import WorkSection from './components/WorkSection.vue'
import FooterContainer from './components/FooterContainer.vue'
import BrandingContainer from './components/BrandingContainer.vue'


export default {
  name: 'App',
  components: {
    ThreeModel,
    ReviewSection,
    TalkToUs,
    PixelTech,
    NewsArticles,
    HeroSection,
    NavbarComponent,
    BrandingContainer,
    FooterContainer,
    WorkSection,
    SpecialCards,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
