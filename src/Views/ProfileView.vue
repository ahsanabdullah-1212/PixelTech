<template>
    <div class="analytics-container">
      <!-- Header -->
      <header class="analytics-header">
        <h1>Analytics Overview</h1>
        <input type="text" class="analytics-search-input" placeholder="Search Analytics...">
      </header>
  
      <!-- Analytics Content -->
      <main class="analytics-main">
        <!-- Cards for Key Metrics -->
        <section class="analytics-cards">
          <div class="analytics-card">
            <h2>Total Visits</h2>
            <p>8,234</p>
            <i class="fas fa-eye analytics-icon"></i>
          </div>
          <div class="analytics-card">
            <h2>Bounce Rate</h2>
            <p>34%</p>
            <i class="fas fa-sign-out-alt analytics-icon"></i>
          </div>
          <div class="analytics-card">
            <h2>New Users</h2>
            <p>1,234</p>
            <i class="fas fa-user-plus analytics-icon"></i>
          </div>
          <div class="analytics-card">
            <h2>Conversions</h2>
            <p>456</p>
            <i class="fas fa-chart-line analytics-icon"></i>
          </div>
        </section>
   
        <section class="analytics-graph">
          <canvas ref="analyticsGraph"></canvas>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js/auto';  
  
  export default {
    name: "ProfileView",
    mounted() {
       
      const ctx = this.$refs.analyticsGraph.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'User Growth',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#3b82f6',
            fill: false,
            tension: 0.1,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
          }]
        },
        options: {
          animation: {
            duration: 2000,
          },
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: true
            }
          }
        }
      });
    }
  };
  </script>
  <style scoped>

  
  .analytics-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;
  }
  
  /* Header */
  .analytics-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .analytics-header h1 {
    font-size: 24px;
    color: #333;
    margin: 0;
  }
  
  .analytics-search-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
  }
  
  /* Analytics Main Content */
  .analytics-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  /* Analytics Cards */
  .analytics-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .analytics-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
    transition: transform 0.3s ease;
  }
  
  .analytics-card:hover {
    transform: translateY(-10px);
  }
  
  .analytics-card h2 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
  
  .analytics-card p {
    font-size: 24px;
    color: #3b82f6;
    margin-top: 10px;
  }
  
  .analytics-icon {
    font-size: 40px;
    color: #3b82f6;
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
  
  /* Graph Section */
  .analytics-graph {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  canvas {
    width: 100%;
    height: 400px;
  }
  </style>
  