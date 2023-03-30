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
.scenes-wrapper{
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: auto;
  .scenes-wrapper::-webkit-scrollbar {
  display: none;
}

  .scenes-items{
    box-sizing: border-box;
    border: 1px solid black;
    min-width: 100vw;
    text-align: center;

    img{
      height: 144px;
      align-self: center;
    }
  }
}
.scenes-wrapper::-webkit-scrollbar {
  display: none;
}

.swiper {
  width: 100vw;
  .item{
    text-align: center;
    img{
      height: 144px;
    }
  }
}
</style>