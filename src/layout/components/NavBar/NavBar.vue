<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <Hamburger :isCollapse="sideStatus" @click="toggleIcon"/>
  </el-menu>
</template>

<script lang="js" setup>
import Hamburger from "./components/Hamburger.vue";
import {useAppStore} from '../../../stores/app.js'
import {storeToRefs} from 'pinia';

const activeIndex2 = ref('1');
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const appStore = useAppStore();
const {sideStatus} = storeToRefs(appStore);

const toggleIcon = () => {
  appStore.toggleSidebarStatus();
}
</script>

<style lang="less">
@import "../../../style/variable";
.el-menu-demo {
  height: @gt-nav-bar-height;
  border: none;
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
  @media (max-width: 600px) {
    display: none;
  }
}
</style>
