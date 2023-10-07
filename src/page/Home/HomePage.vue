<script setup>
import NavBar from "./components/NavBar.vue";
import SideMenu from "./components/SideMenu.vue";

const scrollLength = ref(0);
const showTitle = ref(false);
const handleScroll = (event) => {
  console.log(window.scrollY);
  scrollLength.value += event.deltaY;
}



</script>

<template>
  <div class="home-container" @wheel="handleScroll">
    <div class="overlay"></div>
    <NavBar :title="showTitle"></NavBar>
    <Transition name="menu">
      <SideMenu></SideMenu>
    </Transition>
    <div class="title-container">
      <span class="main-title">GameTrack</span>
      <div class="main-article">
        Welcome to the future of sports performance analysis! Our Player Data Analysis Platform is your
        key to unlocking a world of insights, improving your performance, and dominating your competition.
      </div>
    </div>

    <div class="index-1"></div>
    <div class="text-column">
      <h1>Unlock Your Full Potential with Player Data Insights</h1>
      <p>
        Are you ready to take your game to the next level? Welcome to the ultimate player data analysis platform, your secret weapon for success on the field!
      </p>
    </div>

    <div class="content-container">
      <div class="content">
        <div class="right-content">
          <img class="football-1-img" src="../../assets/football-1.jpg" alt="football field">
        </div>
      <div class="left-content article" style="color: #fff">
        <h1>Unlock Your Full Potential with Player Data Insights</h1>
      </div>
      </div>
    </div>

    <div class="content-container">
      <div class="left-content" style="color: #fff">
        <h1>Unlock Your Full Potential with Player Data Insights</h1>
      </div>
      <div class="right-content article" >
        <img class="football-2-img" src="../../assets/football-2.jpg" alt="football field">
      </div>
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
  background:url("../../assets/Old-Trafford.jpg") no-repeat center fixed;
  background-size: cover;

  .menu-enter-active,
  .menu-leave-active {
    transition: width 0.5s ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    width: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)); /* 半透明黑色蒙层 */
  }
  .title-container {
    position: absolute;
    margin-left: 60px;
    margin-top: 80px;
    .main-title {
      font-size:160px;
      color:#fff;
      font-family: 'Caveat',sans-serif;
    }
    .main-article {
      width: 550px;
      font-size: 24px;
      color: #fff;
      padding-left: 20px;
    }
  }
  .index-1 {
    width: 100vw;
    height: 100vh;
  }

  .text-column {
    height: 300px;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
  }
  .content-container {
    width:100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .content {
      width: 100%;
      height: 45vh;
      display: flex;
    }
    .football-1-img {
      width: 45vw;
    }
  }
}
</style>
