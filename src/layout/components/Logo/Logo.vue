<script setup>

</script>

<template>
  <div class="gt-logo-container">
    <img class="gt-logo-img" src="../../../assets/logo.png" alt="logo">
    <h1 class="gt-logo-title">GameTrack</h1>
  </div>
</template>

<style scoped lang="less">
@font-face {
  font-family: 'Caveat';
  //font-family: 'Bungee Spice';
  //font-family: 'Nabla';
  src: url('../../../assets/fonts/Caveat-Bold.ttf');
}

.gt-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  .gt-logo-img {
    width: 50px;
    height: auto;
  }

  .gt-logo-title {
    font-family: 'Caveat', cursive;
    //font-family: 'Bungee Spice', cursive;
    //font-family: 'Nabla', cursive;
    text-align: center;
    margin-left: 10px;
  }
}
</style>