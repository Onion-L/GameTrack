<script setup>

import NavBar from "./components/NavBar/NavBar.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import Logo from "./components/Logo/Logo.vue";
</script>

<template>
  <div class="app-wrapper">
  <div class="side-bar">
    <SideBar />
  </div>
  <div class="right-side">
    <div class="nav-bar">
      <NavBar />
    </div>
    <div class="content">
    </div>
  </div>
  </div>
</template>

<style scoped lang="less">
@import "../style/variable";
  .app-wrapper {
    display: flex;
    .side-bar {

      display: inline-block;
    }

    .right-side {
      width: @gt-right-width--expend;
    }

    .nav-bar {
      width: 100%;
      display: inline-block;
    }
    .content{
      background-color:#000;
      width:100%;


    }
  }
</style>