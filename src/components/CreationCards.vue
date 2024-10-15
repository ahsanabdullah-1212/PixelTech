<template>
    <div class="main-creation-cards">
      <div class="creation-card-row">
        <div
          v-for="(card, index) in creationCards"
          :key="index"
          :class="['creation-card', `creation-card-${index + 1}`]"
        >
          <div class="creation-card-image">
            <img :src="card.image" :alt="card.title" />
          </div>
          <div class="creation-card-description">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
            <div class="creation-btn">
              <button class="gradient-btn">See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
 <script>
 export default {
   data() {
     return {
       creationCards: [
         {
           title: 'Rich Polly',
           description:
             'Heavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponry Heavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponry...',
           image: require('@/assets/images/sp-1.png'),
         },
         {
           title: 'Heavy Metal Arsenal',
           description:
             'Heavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponry..',
           image: require('@/assets/images/sp-2.png'),
         },
         {
           title: 'Subaru',
           description:
             'Heavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponry..',
           image: require('@/assets/images/sp-3.png'),
         },
         {
           title: 'Natoverse',
           description:
             'Heavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponry..',
           image: require('@/assets/images/sp-4.png'),
         },
         {
           title: 'Natocombat',
           description:
             'Heavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponry..',
           image: require('@/assets/images/sp-5.png'),
         },
         {
           title: 'Heavy Metal',
           description:
             'Heavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponryHeavy Metal Arsenal is a meticulously crafted 3D animation that showcases an array of powerful, futuristic weaponry..',
           image: require('@/assets/images/sp-6.png'),
         },
         // Add more cards here as needed
       ],
     };
   },
 };
 </script>
 