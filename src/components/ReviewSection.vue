<template>
  <div class="main-review-section">
    <div class="review-context">
      <h2>What our clients think of <span class="animated-2">Pixel Tech.</span></h2>
      <p>We take pride in being transparent about our expertise and — we’re thrilled that our clients appreciate it too.
      </p>
    </div>
    <swiper ref="mySwiper" :slides-per-view="1" :space-between="10" :loop="true" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :modules="modules" :breakpoints="breakpoints" class="mySwiper">
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <div class="review">
          <div class="review-row">
            <div class="review-col-1">
              <div class="reviewer-img">
                <img :src="review.image" alt="reviewer image">
              </div>
            </div>
            <div class="review-col-2">
              <div class="review-col-2-1">
                <p>{{ review.text }}</p>
              </div>
              <div class="review-col-2-2">
                <h3 class="animated-3">{{ review.name }}</h3>
                <p>{{ review.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
      return {
        modules: [Autoplay],
      };
    },
  data() {
    return {
      reviews: [
        {
          image: require('@/assets/images/rev-1.png'),
          text: "The automated organization and secure cloud storage save me a lot of time each week...",
          name: "Mark Devis",
          role: "Professional User"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "This tool helps me organize client data easily, and the interface is very user-friendly...",
          name: "Sarah Johnson",
          role: "Business Analyst"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "I've used this tool for several months, and it has become an essential part of my workflow...",
          name: "Emily Clarke",
          role: "Freelancer"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "The automated organization and secure cloud storage save me a lot of time each week...",
          name: "Mark Devis",
          role: "Professional User"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "This tool helps me organize client data easily, and the interface is very user-friendly...",
          name: "Sarah Johnson",
          role: "Business Analyst"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "I've used this tool for several months, and it has become an essential part of my workflow...",
          name: "Emily Clarke",
          role: "Freelancer"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "The automated organization and secure cloud storage save me a lot of time each week...",
          name: "Mark Devis",
          role: "Professional User"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "This tool helps me organize client data easily, and the interface is very user-friendly...",
          name: "Sarah Johnson",
          role: "Business Analyst"
        },
        {
          image: require('@/assets/images/rev-1.png'),
          text: "I've used this tool for several months, and it has become an essential part of my workflow...",
          name: "Emily Clarke",
          role: "Freelancer"
        },
        // Add more reviews as needed
      ],
      breakpoints: {
        1036: {
          slidesPerView: 3,
        },
        720: {
          slidesPerView: 2,
        },
      },
      autoSlideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.autoSlideInterval);
  },
  methods: {
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        const swiper = this.$refs.mySwiper.swiper;
        if (swiper) {
          swiper.slideNext();
        }
      }, 3000); // Adjust the interval time as needed (3000ms = 3 seconds)
    },
  }
};
</script>

<style scoped></style>