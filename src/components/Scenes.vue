<template>
  <swiper class="myswiper">
    <swiper-slide class="item"><img @click="play('ps')" src="../assets/ps.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('xbox')" src="../assets/xbox.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('ns')" src="../assets/ns.png"></swiper-slide>
  </swiper>
</template>

<script lang="js">
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    // 在组件加载后加载音频
    this.loadAudio();
  },
  methods: {
    async loadAudio() {
      const [ps, xbox, ns] = await Promise.all([
        import(`../assets/audio/ps.mp3`),
        import(`../assets/audio/xbox.mp3`),
        import(`../assets/audio/ns.mp3`),
      ]);

      this.psAudio = new Audio(ps.default);
      this.xboxAudio = new Audio(xbox.default);
      this.nsAudio = new Audio(ns.default);
    },
    play(name) {
      switch (name)
      {
        case 'ps':
          this.psAudio.play();
          break;
        case 'xbox':
          this.xboxAudio.play();
          break;
        case 'ns':
          this.nsAudio.play();
          break;
        default:
          break;
      }
    },
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