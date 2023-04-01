<template>
  <swiper class="myswiper">
    <swiper-slide class="item">
      <puppet class="puppet" />
    </swiper-slide>
    <swiper-slide class="item"><img @click="play('ps')" src="../assets/ps.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('xbox')" src="../assets/xbox.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('ns')" src="../assets/ns.png"></swiper-slide>
  </swiper>
</template>

<script lang="js">
import { Swiper, SwiperSlide } from 'swiper/vue';
import Puppet from './Puppet.vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
    Puppet
  },
  mounted() {
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
      const audio = this[name + 'Audio'];
      if (audio)
      {
        audio.play();
      }
    },
  }
};
</script>

<style lang="scss" scoped>

.myswiper { 
  height: 200px;
  .item{
    text-align: center;
    img{
      height: 120px;
    }
    .puppet{
      border: 1px solid 1px;
    }
  }
}
</style>