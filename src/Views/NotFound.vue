<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/" class="home-link">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  .home-link {
    padding: 10px 20px;
    background-color: #29DFFD;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .home-link:hover {
    background-color: #245AF8;
  }
  </style>
  