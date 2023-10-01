<script setup>
<<<<<<< HEAD
import {Expand, Fold} from "@element-plus/icons-vue";
const props = defineProps(['isCollapse']);


=======

import {Expand} from "@element-plus/icons-vue";
>>>>>>> origin/master
</script>

<template>
  <div class="hamburger">
<<<<<<< HEAD
      <el-icon v-if="!props.isCollapse" size="20" class="icon"><Expand /></el-icon>
      <el-icon v-else size="20" class="icon"><Fold /></el-icon>
=======
    <el-icon><Expand /></el-icon>
>>>>>>> origin/master
  </div>
</template>

<style scoped lang="less">
  .hamburger {
    width: 50px;
<<<<<<< HEAD
    line-height: 56px;
    padding-left: 10px;
    cursor: pointer;
  }
</style>
=======
    height: 100%;
  }
</style>
>>>>>>> origin/master
