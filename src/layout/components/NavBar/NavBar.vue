<script setup>
import Hamburger from "./components/Hamburger.vue";
import { useAppStore } from '../../../stores/appStore.js'
import { storeToRefs } from 'pinia';
import { SwitchButton } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const activeIndex2 = ref('1');
const router = useRouter();
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);

const toggleIcon = () => {
  appStore.toggleSidebarStatus();
}

const handleLogOut = () => {
  localStorage.clear();
  router.replace('/auth/login');

};
</script>

<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect" router>
    <Hamburger :isCollapse="sideStatus" @click="toggleIcon" />
    <div class="flex-grow"></div>
    <el-sub-menu>
      <template #title>
        <img style="width: 32px;" src="../../../assets/images/user.png" alt="profile" />
      </template>
      <el-menu-item @click="handleLogOut">
        <el-icon>
          <SwitchButton />
        </el-icon>
        Log out
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

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
