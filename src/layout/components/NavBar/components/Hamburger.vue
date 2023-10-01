<script setup>
import {Expand, Fold} from "@element-plus/icons-vue";
const props = defineProps(['isCollapse']);
</script>

<template>
  <div class="hamburger">
      <el-icon v-if="props.isCollapse" size="20" class="icon"><Expand /></el-icon>
      <el-icon v-else size="20" class="icon"><Fold /></el-icon>
  </div>
</template>
<style scoped lang="less">
.hamburger {
  width: 50px;
  line-height: 56px;
  padding-left: 10px;
  cursor: pointer;
}
</style>



