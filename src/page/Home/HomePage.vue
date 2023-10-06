<script setup>

import {Menu as ElMenu} from "@element-plus/icons-vue";
</script>

<template>
  <div class="home-container">
    <div class="overlay"></div>
    <div class="nav-container">
      <div class="logo-section">
        <img class="gt-logo-img" src="../../assets/logo.png" alt="logo">
      </div>
<!--      <div class="flex-grow"></div>-->
      <div class="menu-icon" style="color:#fff; width: 50px;">
        <el-icon size="30"><ElMenu /></el-icon>
      </div>
    </div>
    <div class="title" style="position: absolute; margin-left: 60px; margin-top: 50px">
      <span style="font-size:160px;color:#fff;font-family: 'Caveat',sans-serif; ">GameTrack</span>
      <div style="width: 550px; font-size: 24px; color: #fff">
        Welcome to the future of sports performance analysis! Our Player Data Analysis Platform is your
        key to unlocking a world of insights, improving your performance, and dominating your competition.
      </div>
    </div>
    <div class="index-1">
    </div>
    <div class="index-2">

    </div>
  </div>
</template>

<style scoped lang="less">
@import "../../style/variable.less";
@font-face {
  font-family: 'Caveat';
  src: url('../../assets/fonts/Caveat-Bold.ttf');
}

.home-container {
  position: relative;
  overflow: hidden;
  background:url("../../assets/home-bg-image.png") no-repeat center fixed;
  //filter: blur(5px);
  background-size: cover;
  .nav-container {
    //background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    position: fixed;
    display: flex;
    padding: 5px 20px;
    .logo-section {
      flex: 1;
    }
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
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)); /* 半透明黑色蒙层 */
  }
  .index-1 {
    width: 100vw;
    height: 100vh;
  }
  .index-2 {
    width:100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    margin: 0 auto;
  }
}

</style>
