<template>
  <NavbarComponent />
<router-view/>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'



export default {
  name: 'App',
  components: {
    NavbarComponent,
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
@font-face {
  font-family: 'Inter_18pt-Regular';
  src: url('@/assets/fonts/static/Inter_18pt-Regular.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
#app {
  font-family: 'Inter_18pt-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
