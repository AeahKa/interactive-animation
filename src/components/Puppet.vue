<template>
  <div class="puppet">
    <div class="puppet-head"></div>
    <div class="puppet-body"></div>
    <div class="puppet-arm">
      <div class="puppet-arm-left"></div>
      <div class="puppet-arm-right"></div>
    </div>
    <div class="puppet-leg">
      <div class="puppet-leg-left"></div>
      <div class="puppet-leg-right"></div>
    </div>

  </div>
</template>

<script lang="js">
export default {

}
</script>

<style lang="scss" scoped>
.puppet{
  width: 200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  // top: 30px;
  .puppet-head{
    background-color: #e1b382;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    height: 36px;
    width: 36px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .puppet-body{
    background-color: #e1b382;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    height: 72px;
    width: 48px;
    border-radius: 10px 10px 80px 80px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(36px);
  }
  .puppet-arm{
    width: 68px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 36px;
    .puppet-arm-left,.puppet-arm-right{
      width: 10px;
      height: 60px;
      background-color: #e1b382;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      position: absolute;
    }
    .puppet-arm-left{
      transform:rotate(18deg);
      transform-origin: top left;
    }
    .puppet-arm-right{
      transform: rotate(-18deg);
      transform-origin: top right;
      position: absolute;
      right: 0;
    }
  }
  .puppet-leg{
    width: 40px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 104px;
    .puppet-leg-left,.puppet-leg-right{
      width: 10px;
      height: 80px;
      background-color: #e1b382;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      position: absolute;
    }
    .puppet-leg-left{}
    .puppet-leg-right{
      right: 0;
    }
  }
}
</style>