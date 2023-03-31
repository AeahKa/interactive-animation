<template>
  <swiper class="myswiper">
    <swiper-slide class="item"><img src="../assets/PS.png"></swiper-slide>
    <swiper-slide class="item"><img src="../assets/XBox.png"></swiper-slide>
    <swiper-slide class="item"><img src="../assets/Switch.png"></swiper-slide>
  </swiper>
</template>

<script lang="js">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/scss';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  }
};
</script>

<style lang="scss" scoped>

.myswiper { 
  .item{
    text-align: center;
    img{
      height: 120px;
    }
  }
}
</style>