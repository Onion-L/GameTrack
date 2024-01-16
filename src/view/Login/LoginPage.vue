<script setup>
import EasyForm from "./components/EasyForm/EasyForm.vue";
import { Moon, Sunny } from "@element-plus/icons-vue";
import http from "../../utils/api.js";
import Cookie from 'js-cookie';
import { useRouter } from "vue-router";

const router = useRouter();
const remember = ref(false);

const switchTheme = () => {
  console.log(remember.value)
}

const submitHandle = (formData, userStored) => {
  console.log(formData)
  /**{TODO}*/
  http.post('/login', formData)
    .then(response => {
      console.log(response);
      if (response.data.code === 200) {
        if (userStored) {
          // document.cookie =`username=${response.data.data.username}; expires=Thu, 31 Dec 2023 23:59:59 UTC; path=/`;
          Cookie.set('username', response.data.data.username, { expires: 7 });
        }
        router.replace({
          path: '/'
        });
      }
    });
};
</script>

<template>
  <div class="login-container">
    <div class="login-image"></div>
    <div :class="[remember?'login-side-container--dark':'login-side-container--light']">
      <el-switch v-model="remember" :active-action-icon="Moon" :inactive-action-icon="Sunny" @click="switchTheme"/>
      <div class="login-side-wrapper">
        <div class="gt-logo-container">
          <img class="gt-logo-img" src="../../assets/images/logo.png" alt="logo">
          <h1 class="gt-logo-title">GameTrack</h1>
        </div>
        <EasyForm :submitHandle="submitHandle" />
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "../../style/variable.scss";
%tip-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;

    .el-switch {
      position: absolute;
      top: 20px;
      right: 30px;
    }

    .gt-logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
    }

    .gt-logo-img {
      width: 50px;
      height: auto;
    }

    .gt-logo-title {
      font-family: 'Caveat', cursive;
      text-align: center;
      margin-left: 10px;
    }

    .easy-form {
      margin-top: 30px;
      width: 100%;
    }
  }

@font-face {
  font-family: 'Caveat';
  //font-family: 'Bungee Spice';
  //font-family: 'Nabla';
  src: url('../../assets/fonts/Caveat-Bold.ttf');
}

.login-container {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;

  .login-side-wrapper {
    width: 100%;
    margin-top: 58px;
    padding: 20px;
  }

  .login-image {
    flex: 2;
    background-image: url('../../assets/images/login-bg-image.jpg');
    background-size: cover;
    background-position: center;

    @media (max-width: 550px) {
      .login-image {
        display: none;
      }
    }
  }

  .login-side-container--dark {
    @extend %tip-line;
    background: url("../../assets/images/login-bg-dark.png");
    color:#fff;
  }

  .login-side-container--light {
    @extend %tip-line;
    background-color: $gt-website-theme--light;
  }
}

</style>
