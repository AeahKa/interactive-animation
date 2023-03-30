<template>
  <div class="scenes-wrapper">
    <div class="scenes-items">
      <img src="../assets/PS.png">
    </div>
    <div class="scenes-items">
      <img src="../assets/XBox.png">
    </div>
    <div class="scenes-items">
      <img src="../assets/Switch.png">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.scenes-wrapper{
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: auto;

  .scenes-items{
    box-sizing: border-box;
    // border: 1px solid black;
    min-width: 100vw;
    text-align: center;

    img{
      height: 144px;
      align-self: center;
    }
  }
}
</style>