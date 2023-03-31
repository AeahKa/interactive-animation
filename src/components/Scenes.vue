<template>
  <swiper class="myswiper">
    <swiper-slide class="item"><img @click="play('PS')" src="../assets/PS.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('XBox')" src="../assets/XBox.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('Switch')" src="../assets/Switch.png"></swiper-slide>
  </swiper>
</template>

<script lang="js">
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    play(name) {
      import(`../assets/audio/${name}.mp3`).then(url => {
        const audio = new Audio(url.default);
        audio.play();
      });
    }
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