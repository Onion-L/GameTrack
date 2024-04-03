<script setup>
import $http from "../../utils/http.js";
import { useRouter } from "vue-router";
import { passwordRule, emailRule } from "../../utils/valid";

const registerInfo = reactive({
    username: '',
    password: '',
    confirmPwd: '',
    email: ''
});

const router = useRouter();
const errorMessage = ref("");
const isError = ref(false);
const FormEl = ref();

const rules = reactive({
    username: [{ required: true, message: 'Please provide a username', trigger: 'blur' }],
    password: [
        { required: true, message: 'Please provide a password', trigger: 'blur' },
        {
            validator: passwordRule, trigger: 'blur'
        }
    ],
    confirmPwd: [
        { required: true, message: 'Please confirm your password', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== registerInfo.password) {
                    callback(new Error('Password and confirm password do not match'));
                } else {
                    callback();
                }
            }, trigger: 'blur'
        }
    ],
    email: [
        { required: true, message: 'Please input your email', trigger: 'blur' },
        {
            validator: emailRule, trigger: 'blur'
        }
    ]
});

const registerHandle = (formEl, registerInfo) => {
    isError.value = false;
    errorMessage.value = "";
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            console.log(registerInfo);
            $http.post('/auth/register', registerInfo)
                .then(_ => {
                    router.push('/auth/login');
                })
                .catch(error => {
                    isError.value = true;
                    errorMessage.value = error.response.data.message;
                    console.error(error.response.data.message);
                });
        } else {
            console.log('error submit!');
            return false;
        }
    });
};
</script>

<template>
    <div class="alert-container" v-if="isError" style="max-width: 600px">
        <el-alert :title="errorMessage" type="error" />
    </div>
    <div class="register-container">
        <div class="title-container">
            <img class="title-img" src="../../assets/images/logo.png" />
            <h1>GameTrack</h1>
        </div>
        <div class="form-container">
            <el-form :model="registerInfo" class="easy-form" :rules="rules" ref="FormEl">
                <el-form-item prop="username">
                    <el-input v-model="registerInfo.username" placeholder="Username" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="registerInfo.password" placeholder="Password" />
                </el-form-item>
                <el-form-item prop="confirmPwd">
                    <el-input type="password" v-model="registerInfo.confirmPwd" placeholder="Confirm Password" />
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="registerInfo.email" placeholder="Email" />
                </el-form-item>
                <el-button type="primary" @click="registerHandle(FormEl, registerInfo)">Submit</el-button>
            </el-form>
        </div>
    </div>
</template>


<style lang="scss">
@import "../../style/variable.scss";

.alert-container {
    position: absolute;
    width: 30%;
    left: 50%;
    transform: translate(-50%, 20%);
}

.register-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    background-image: url('../../assets/images/register-background.webp');
    background-position: center;
    background-size: cover;
}

.title-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-img {
        width: 10vw;
    }
}

.form-container {
    width: 35%;
    margin-top: 20px;

    .el-button {
        width: 100%;
        height: 42px;
    }

    .el-input {
        height: 60px;
        width: 100%;
    }
}
</style>