<template>
  <NavbarComponent />
  <router-view />
  <!-- <button id="scrollToTop" class="scroll-to-top">
    <i class="fas fa-chevron-up"></i> 
  </button> -->
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
  // mounted() {
  //   window.onscroll = () => {
  //     const button = document.getElementById('scrollToTop');
  //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //       button.style.opacity = "1";
  //       button.style.visibility = "visible"; 
  //     } else {
  //       button.style.opacity = "0";
  //       button.style.visibility = "hidden"; 
  //     }
  //   };

   
  //   document.getElementById('scrollToTop').onclick = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   };
  // }
}
</script>

<style>

/* Scroll to Top Button Styles */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(90deg, #29DFFD 0%, #245AF8 100%); /* Neon purple */
  color: white;
  border: none;
  border-radius: 50%; /* Circular button */
  width: 50px;
  height: 50px;
  font-size: 32px; /* Larger icon size */
  cursor: pointer;
  transition: opacity 0.5s, visibility 0.5s, transform 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000; /* Ensure it appears above other content */
  opacity: 0; /* Hidden by default */
  visibility: hidden; /* Prevent pointer events */
  outline: none; /* Remove outline */
  backdrop-filter: blur(10px); /* Background blur effect */
  border: 2px solid transparent; /* Border for glow effect */
}

.scroll-to-top.show {
  opacity: 1; /* Fully visible */
  visibility: visible; /* Allow pointer events */
}

.scroll-to-top:hover {
  background-color: #3700b3; /* Darker purple on hover */
  border-color: #ffffff; /* Glow color */
  animation: pulse 0.6s infinite; /* Pulsing animation */
}

.scroll-to-top:active {
  animation: flip 0.4s; /* Flip animation when clicked */
}

/* Pulsing Animation */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Flip Animation */
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

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
