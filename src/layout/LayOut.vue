<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import AppMain from "./components/AppMain/AppMain.vue";
import Cookie from "js-cookie";
onMounted(()=>{
  console.log(Cookie.get('username'))
})
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
      <AppMain />
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
    }


    .content{
      width:100%;
    }

</style>
