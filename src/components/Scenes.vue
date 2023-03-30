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
  
  .scenes-items{
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    display: flex;
    text-align: center;

    img{
      width: 200px;
      align-self:center
    }
  }
}
</style>