<template>
    <div class="main-article">
        <div class="article-head">
            <h2>News & <span class="animated-2">Articles</span></h2>
        </div>
        <div class="Article-card-container">
            <div class="Article-card" v-for="(card, index) in cards" :key="index">
                <img :src="card.imageUrl" alt="Card Image">
                <div class="Article-card-content">
                    <p class="Article-card-date">{{ card.date }}</p>
                    <h3 class="Article-card-title">{{ card.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          imageUrl: require('@/assets/images/3d-1.png'),
          date: 'September 7, 2024',
          title: 'The Process of Creating a 3D Animation from Start to Finish',
        },
        {
          imageUrl: require('@/assets/images/3d-2.png'),
          date: 'September 7, 2024',
          title: 'The Process of Creating a 3D Animation from Start to Finish',
        },
        {
          imageUrl: require('@/assets/images/3d-3.png'),
          date: 'September 7, 2024',
          title: 'The Process of Creating a 3D Animation from Start to Finish',
        },
      ],
    };
  },
};
</script>