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
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0, rgba(27, 31, 35, 0.15) 0 0 0 1px;
  @media (max-width: 600px) {
    display: none;
  }
}

.flex-grow {
  flex: 1;
}
</style>
