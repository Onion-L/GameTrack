<script setup>
import $http from "../../utils/http.js";
import Cookie from 'js-cookie';
import { useRouter } from "vue-router";
import { usePlayerStore } from "../../stores/playerStore.js";

const registerInfo = reactive({
    username: '',
    password: '',
    email: ''
});

const registerHandle = (formData, userStored) => {
    console.log(formData)
    /**{TODO}*/
    $http.post('/auth/register', formData)
        .then(response => {
            if (response.data.code === 200) {
                if (userStored) {
                    // document.cookie =`username=${response.data.data.username}; expires=Thu, 31 Dec 2023 23:59:59 UTC; path=/`;
                    // Cookie.set('username', response.data.data.username, { expires: 7 });
                }
                router.replace({
                    path: '/'
                });
            }
        })
        .then(_ => {
            fetchPlayerData();
        })
        .catch(_ => {
            console.error('Login Error');
        });
};
</script>

<template>
    <div class="register-container">
        <div class="title-container">
            <img class="title-img" src="../../assets/images/logo.png" />
            <h1>GameTrack</h1>
        </div>
        <el-form :model="formInfoData" style="max-width: 460px" class="easy-form">
            <el-form-item>
                <el-input v-model="registerInfo.username" placeholder="Username" />
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="registerInfo.password" placeholder="Password" />
            </el-form-item>
            <el-form-item>
                <el-input v-model="registerInfo.email" placeholder="Email" />
            </el-form-item>
            <el-button type="primary" @click="registerHandle">Submit</el-button>
        </el-form>
    </div>
</template>


<style lang="scss">
@import "../../style/variable.scss";

.register-container {
    width: 30vw;
}

.title-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-img {
        width: 10vw;
    }
}

.el-button {
    width: 100%;
    height: 42px;
}

.el-input {
    height: 60px;
    width: 100%;
}
</style>