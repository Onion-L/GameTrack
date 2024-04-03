<script setup>
import NavBar from "./components/NavBar/NavBar.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import AppMain from "./components/AppMain/AppMain.vue";
import { useAppStore } from "../stores/appStore.js";
import { storeToRefs } from "pinia";
import Cookie from "js-cookie";

const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);

onMounted(() => {
  console.log(Cookie.get('username'))
});
</script>

<template>
  <div class="app-wrapper">
    <div class="side-bar">
      <SideBar />
    </div>
    <el-scrollbar height="100vh">
      <div :class="{ 'fixed-header': sideStatus }" class="right-side">
        <div class="nav-bar">
          <NavBar />
        </div>
        <div class="content">
          <AppMain />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
@import "../style/variable.scss";

.app-wrapper {
  display: flex;

  .side-bar {
    display: inline-block;
  }

  .right-side {
    width: $gt-right-width--expend;
  }

  .fixed-header {
    width: $gt-right-width--collapse;
  }

  .nav-bar {
    width: 100%;
    display: inline-block;
  }
}

.content {
  width: 100%;
}
</style>
