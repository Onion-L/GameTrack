<script setup>
import { Menu as ElMenu } from "@element-plus/icons-vue";
import { useAppStore } from "../../../stores/appStore.js";

const props = defineProps(['title']);
const appStore = useAppStore();
const showMenu = () => {
  appStore.toggleSideMenu();
}
</script>

<template>
  <div class="nav-container">
    <div class="logo-section">
      <img class="gt-logo-img" src="../../../assets/images/logo.png" alt="logo">
      <span v-show="props.title">GameTrack</span>
    </div>
    <div class="flex-grow"></div>
    <div class="menu-icon">
      <el-icon @click="showMenu" size="30" style="color:#fff">
        <ElMenu />
      </el-icon>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav-container {
  width: 100vw;
  position: fixed;
  display: flex;
  padding: 5px 20px;

  .logo-section {
    flex: 1;
    display: flex;
    line-height: 50px;
    color: #fff;
  }

  .gt-logo-img {
    width: 50px;
    height: auto;
  }

  .flex-grow {
    flex: 2;
  }

  .menu-icon {
    width: 60px;
  }
}
</style>
