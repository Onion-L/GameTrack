<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
<!--      <button>Expand</button>-->
    <Hamburger />
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {Expand} from "@element-plus/icons-vue";
import Hamburger from "./components/Hamburger.vue";

const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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
