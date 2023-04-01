<template>
  <swiper class="myswiper">

    <swiper-slide class="item"><img @click="play('ps')" src="../assets/ps.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('xbox')" src="../assets/xbox.png"></swiper-slide>
    <swiper-slide class="item"><img @click="play('ns')" src="../assets/ns.png"></swiper-slide>
    <swiper-slide class="item">
      <puppet @click="play('puppet')" />
    </swiper-slide>
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
      const [ps, xbox, ns, puppet] = await Promise.all([
        import(`../assets/audio/ps.mp3`),
        import(`../assets/audio/xbox.mp3`),
        import(`../assets/audio/ns.mp3`),
        import(`../assets/audio/puppet.mp3`),
      ]);
      this.psAudio = new Audio(ps.default);
      this.xboxAudio = new Audio(xbox.default);
      this.nsAudio = new Audio(ns.default);
      this.puppetAudio = new Audio(puppet.default);
    },
    play(name) {
      console.log('点了');
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
  height: 300px;
  .item{
    text-align: center;
    img{
      height: 120px;
      margin-top: 90px;
    }
    .puppet{
      width: 100px;
      border: 1px solid 1px;
    }
  }
}
</style>