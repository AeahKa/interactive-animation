<template>
  <div>
    主页
  </div>
  <div class="scenes">
    <scenes />
  </div>
</template>

<script>
import scenes from '../components/Scenes.vue'
export default {
  components: {
    scenes
  }
}
</script>

<style lang="scss" scoped>
div{
  // border: 2px solid purple;
}
</style>