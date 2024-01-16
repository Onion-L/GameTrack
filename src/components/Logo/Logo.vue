<template>
  <div class="gt-logo-container">
    <img class="gt-logo-img" src="../../assets/images/logo.png" alt="logo">
    <h1 class="gt-logo-title">GameTrack</h1>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.gt-logo-img {
  width: 40px;
}

@import "../../style/variable.scss";

@font-face {
  font-family: 'Caveat';
  src: url('../../assets/fonts/Caveat-Bold.ttf');
}


.gt-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc($gt-side-bar-width--expend - 1px);
  height: $gt-nav-bar-height;
  background-color: transparent;

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