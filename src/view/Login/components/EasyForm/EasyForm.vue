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
      <el-checkbox v-model="userStored">Remember me</el-checkbox>
    </el-form-item>
    <el-button type="primary" @click="loginHandle">Sign In</el-button>
  </el-form>
</template>

<script setup>
import http from "../../../../utils/api.js";

const props = defineProps(["submitHandle"]);

const formInfoData = reactive({
  username: '',
  password: '',
})
const userStored = ref(false);
const loginHandle = () => {
  props.submitHandle(formInfoData,userStored);
}

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
