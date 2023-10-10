<template>
  <div class="sidebar-wrapper">
    <Logo/>
  <el-row class="tac">
    <el-col>
      <el-menu
          default-active="dashboard"
          class="el-menu-vertical-demo"
          :collapse="sideStatus"
          background-color="#001428"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          router
      >
        <el-menu-item index="dashboard">
          <el-icon><Odometer /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="teams">
          <el-icon><Grid /></el-icon>
          <span>Teams</span>
        </el-menu-item>
        <el-menu-item index="players">
          <el-icon><User /></el-icon>
          <span>Players</span>
        </el-menu-item>
        <el-menu-item index="analysis">
          <el-icon><DataLine /></el-icon>
          <span>Analysis</span>
        </el-menu-item>
        <el-menu-item index="more">
          <el-icon><More /></el-icon>
          <span>More</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>

<script lang="ts" setup>
import {Odometer, More, User, DataLine, Grid,} from '@element-plus/icons-vue'
import Logo from "../Logo/Logo.vue";

import {useAppStore} from "../../../stores/appStore.js";
import {storeToRefs} from "pinia";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const appStore = useAppStore();
const {sideStatus} = storeToRefs(appStore);

</script>

<style lang="less">
@import "../../../style/variable";
.sidebar-wrapper {
  //width: @gt-side-bar-width--expend;
  height: @gt-side-bar-height;
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
}
.tac {
  height: calc(100vh - @gt-nav-bar-height);
  width: 100%;
  .el-menu-vertical-demo {
    height: 100%;
    width: 100%;
  }
}

</style>
