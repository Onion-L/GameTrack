<script setup>
import { Odometer, More, User, DataLine, Grid, } from '@element-plus/icons-vue'
import Logo from "../Logo/Logo.vue";
import { useAppStore } from "../../../stores/appStore.js";
import { storeToRefs } from "pinia";

const handleOpen = (key, keyPath) => {
  console.log('open', key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log('close', key, keyPath)
}

const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);

</script>

<template>
  <div class="sidebar-wrapper">
    <Logo />
    <el-row class="tac">
      <el-col>
        <el-menu default-active="dashboard" class="el-menu-vertical-demo" :collapse="sideStatus"
          background-color="#001428" text-color="#fff" @open="handleOpen" @close="handleClose" router>
          <el-menu-item index="dashboard">
            <el-icon>
              <Odometer />
            </el-icon>
            <span>Dashboard</span>
          </el-menu-item>
          <el-menu-item index="matches">
            <el-icon>
              <Grid />
            </el-icon>
            <span>Match</span>
          </el-menu-item>
          <el-menu-item index="players">
            <el-icon>
              <User />
            </el-icon>
            <span>Players</span>
          </el-menu-item>
          <el-menu-item index="analysis">
            <el-icon>
              <DataLine />
            </el-icon>
            <span>Analysis</span>
          </el-menu-item>
          <el-menu-item index="team">
            <el-icon>
              <Tools />
            </el-icon>
            <span>Team</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
@import "../../../style/variable.scss";

.sidebar-wrapper {
  height: $gt-side-bar-height;
}

.tac {
  height: calc(100vh - $gt-nav-bar-height);
  width: 100%;

  .el-menu-vertical-demo {
    height: 100%;
    width: 100%;
  }
}
</style>
