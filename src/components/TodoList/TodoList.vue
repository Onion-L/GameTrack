<script setup>
import { CloseBold, Edit } from "@element-plus/icons-vue";

const tasks = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Tasks({{ tasks.length }})</span>
      </div>
    </template>
    <el-scrollbar height="40vh">
      <div class="todo-content" v-for="o in 20" :key="o">
        <el-checkbox style="flex:1;" />
        <div style="flex: 6">
          {{ 'List item ' + o }}
        </div>
        <div style="flex: 1;">
          <el-icon color="#409EFF" style="margin-right: 10px;">
            <Edit />
          </el-icon>
          <el-icon color="#F56C6C">
            <CloseBold />
          </el-icon>
        </div>
      </div>
    </el-scrollbar>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-content {
  display: flex;
  border-bottom: 1px solid #e4e7ed;
}
</style>
