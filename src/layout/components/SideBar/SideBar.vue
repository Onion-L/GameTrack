<template>
  <div class="sidebar-wrapper">
    <Logo :isCollapse="props.isCollapse"/>
  <el-row class="tac">
    <el-col>
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :collapse="props.isCollapse"
          background-color="#001428"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><House /></el-icon>
            <span>Home</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Odometer /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Grid /></el-icon>
          <span>Teams</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><User /></el-icon>
          <span>Players</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><DataLine /></el-icon>
          <span>Analysis</span>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon><More /></el-icon>
          <span>More</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>

<script lang="ts" setup>
import {Odometer, House, More, User, DataLine, Grid,} from '@element-plus/icons-vue'
import Logo from "../Logo/Logo.vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const props = defineProps(['isCollapse']);
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
