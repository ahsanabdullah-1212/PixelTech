<template>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>


/* Smooth scroll behavior */
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
