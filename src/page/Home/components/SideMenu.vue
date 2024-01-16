<script setup>

import { Close } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useAppStore } from "../../../stores/appStore.js";
const appStore = storeToRefs(useAppStore());
const showSideMenu = appStore.sideMenu;
</script>

<template>
  <div v-if="showSideMenu" class="side-menu">
    <el-icon @click="showSideMenu = !showSideMenu" size="30" color="#fff">
      <Close />
    </el-icon>
    <h2 style="color: #fff;text-align: center">GameTrack</h2>
    <div class="menu-list" style="width: 100%; height: 100%; margin-top: 20px">
      <ul style="list-style: none;display: flex; flex-direction: column;width: 100%;height:50%;align-items: center;">
        <li style="flex: 1"><router-link to="/home" style="text-decoration: none; color:#fff;">OVERVIEW</router-link></li>
        <li style="flex: 1"><router-link to="/about" style="text-decoration: none; color:#fff;">ABOUT</router-link></li>
        <li style="flex: 1"><router-link to="/login" style="text-decoration: none; color:#fff;">SIGN IN</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.side-menu {
  position: fixed;
  width: 20vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  float: right;
  right: 0;
  overflow: hidden;
}
</style>
