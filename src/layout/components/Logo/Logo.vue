<script setup>

</script>

<template>
  <div class="gt-logo-container">
    <img class="gt-logo-img" src="../../../assets/logo.png" alt="logo">
    <h1 class="gt-logo-title">GameTrack</h1>
  </div>
</template>

<style scoped lang="less">
@import "../../../style/variable";
@font-face {
  font-family: 'Caveat';
  src: url('../../../assets/fonts/Caveat-Bold.ttf');
}

.gt-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: @gt-side-bar-width--expend;
  height: @gt-nav-bar-height;
  background-color: #001428;
  .gt-logo-img {
    width: 50px;
    height: auto;
  }

  .gt-logo-title {
    font-family: 'Caveat', cursive;
    text-align: center;
    margin-left: 10px;
    color: #fff;
  }
}
</style>