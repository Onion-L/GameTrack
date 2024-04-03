<script setup>
import { useRouter } from 'vue-router';
import { passwordRule } from "../../../../utils/valid";


const router = useRouter();
const props = defineProps(["submitHandle"]);
const formInfoData = reactive({
  username: '',
  password: '',
});
const userStored = ref(false);

const rules = reactive({
  username: [{ required: true, message: 'Please provide a username', trigger: 'blur' }],
  password: [
    { required: true, message: 'Please provide a password', trigger: 'blur' },
    {
      validator: passwordRule, trigger: 'blur'
    }
  ]
});

const loginHandle = () => {
  props.submitHandle(formInfoData, userStored.value);
};

const registerLink = () => {
  router.push('register');
};
</script>

<template>
  <el-form :model="formInfoData" style="max-width: 460px" class="easy-form" :rules="rules">
    <el-form-item prop="username">
      <el-input v-model="formInfoData.username" placeholder="Username" />
    </el-form-item>
    <el-form-item prop="password">
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
