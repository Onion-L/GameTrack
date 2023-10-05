<script setup>

</script>

<template>
  <div class="home-container">
    <div class="overlay"></div>
    <div class="nav-container" style="position: fixed">
      <img class="gt-logo-img" src="../../assets/logo.png" alt="logo">

      <ul>
        <li>Home</li>
        <li><router-link to="/news">News</router-link></li>
        <li>About</li>
        <li><router-link to="/login">Sign In</router-link></li>
      </ul>
    </div>
    <div class="index-1">
      <div style="position:absolute;font-size: 100px; text-align: center; color:#fff">
        GameTrack
      </div>
      <div style="width: 400px">
        Welcome to the future of sports performance analysis! Our Player Data Analysis Platform is your
        key to unlocking a world of insights, improving your performance, and dominating your competition.
      </div>
    </div>
    <div class="index-1">
      <div style=" position:absolute;font-size: 50px; margin-top: 100px; margin-left: 30px; color:#fff">
        Unlock Your Full Potential with Player Data Insights
      </div>
      <div style="width: 400px">
        Welcome to the future of sports performance analysis! Our Player Data Analysis Platform is your key to unlocking a world of insights, improving your performance, and dominating your competition.
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-container {
  position: relative;
  overflow: hidden;
  background:url("../../assets/home-bg-image.jpg") no-repeat center fixed;
  background-size: cover;
  .nav-container {
    background-color: rgba(0, 0, 0, 0.8);
    .gt-logo-img {
      width: 50px;
      height: auto;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色蒙层 */
  }
  .index-1 {
    width: 100vw;
    height: 100vh;
    padding: 10px 20px;
  }
}

</style>