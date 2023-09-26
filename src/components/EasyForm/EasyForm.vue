<template>
  <el-form
      :model="formInfoData"
      style="max-width: 460px"
      class="easy-form"
  >
    <el-form-item>
      <el-input v-model="formInfoData.username" placeholder="Username"/>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="formInfoData.password" placeholder="Password"/>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="isChecked">Remember me</el-checkbox>
    </el-form-item>
    <el-button type="primary">Sign In</el-button>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formInfoData = reactive({
  username: '',
  password: '',
})

const isChecked = ref(false);
</script>

<style lang="css">
  .el-button {
    width: 100%;
    height: 42px;
  }

  .el-input {
    height: 60px;
    width: 100%;
  }
</style>
