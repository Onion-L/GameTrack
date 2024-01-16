<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router
  >
    <Hamburger :isCollapse="sideStatus" @click="toggleIcon"/>
    <div class="flex-grow" />

    <el-menu-item>
        <img style="width: 32px;" src="../../../assets/images/github-mark.svg" alt="github" />
    </el-menu-item>

    <el-sub-menu>
      <template #title>
        <img style="width: 32px;" src="../../../assets/images/user.png" alt="profile" />
      </template>
      <el-menu-item>
        <el-icon><Setting /></el-icon>
        Setting
      </el-menu-item>
      <el-menu-item @click="handleLogOut">
        <el-icon><SwitchButton /></el-icon>
        Log out
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="js" setup>
import Hamburger from "./components/Hamburger.vue";
import {useAppStore} from '../../../stores/appStore.js'
import {storeToRefs} from 'pinia';
import {Setting, SwitchButton} from "@element-plus/icons-vue";
import {removeCookie} from "../../../utils/cookie.js";
import {useRouter} from "vue-router";

const activeIndex2 = ref('1');
const router = useRouter();
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const appStore = useAppStore();
const {sideStatus} = storeToRefs(appStore);

const toggleIcon = () => {
  appStore.toggleSidebarStatus();
}

const handleLogOut = () => {
  removeCookie('username').then(_=> {
    router.replace('/login');
  });
}
</script>

<style lang="scss">
@import "../../../style/variable.scss";
.el-menu-demo {
  height: $gt-nav-bar-height;
  border: none;
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;
  @media (max-width: 600px) {
    display: none;
  }
}

.flex-grow {
  flex: 1;
}
</style>
