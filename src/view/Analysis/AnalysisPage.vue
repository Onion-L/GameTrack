<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')


const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<template>
  <div class="flex-wrap">
    <el-select v-model="value1" placeholder="Select" style="width: 240px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    vs
    <el-select v-model="value2" placeholder="Select" style="width: 240px;">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-button type="primary" style="height: 100%; margin-left: 10px;">Start</el-button>
  </div>
</template>

<style lang="scss" scoped>
.flex-wrap {
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}
</style>