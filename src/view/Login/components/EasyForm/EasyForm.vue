<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps(["submitHandle"]);
const formInfoData = reactive({
  username: '',
  password: '',
});
const userStored = ref(false);

const loginHandle = () => {
  props.submitHandle(formInfoData, userStored.value);
};

const registerLink = () => {
  router.push('register');
};
</script>

<template>
  <el-form :model="formInfoData" style="max-width: 460px" class="easy-form">
    <el-form-item>
      <el-input v-model="formInfoData.username" placeholder="Username" />
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="formInfoData.password" placeholder="Password" />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="userStored">Remember me</el-checkbox>
    </el-form-item>
    <div class="btn-container">
      <el-button type="primary" @click="loginHandle">Sign In</el-button>
      <el-button @click="registerLink" plain>Sign Up</el-button>
    </div>
  </el-form>
</template>

<style lang="scss">
.btn-container {
  width: 100%;
  height: 42px;
  display: flex;
}

.el-input {
  height: 60px;
  width: 100%;
}
</style>
