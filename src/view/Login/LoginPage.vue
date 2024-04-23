<script setup>
import EasyForm from "./components/EasyForm/EasyForm.vue";
import { Moon, Sunny } from "@element-plus/icons-vue";
import $http from "../../utils/http.js";
import { useRouter } from "vue-router";
import { usePlayerStore } from "../../stores/playerStore.js";
import { useMatchStore } from "../../stores/matchStore.js";


const { fetchPlayerData } = usePlayerStore();
const { fetchMatchData } = useMatchStore();
const router = useRouter();
const switchTheme = ref(false);
const errorMessage = ref("");
const isError = ref(false);

onMounted(() => {
  localStorage.clear();
});

const submitHandle = (formData) => {
  isError.value = false;
  errorMessage.value = "";
  $http.post('/auth/login', formData)
    .then(response => {
      if (localStorage.getItem("gt-user")) {
        localStorage.clear();
      }
      if (response.data.code === 200) {
        router.replace('/dashboard');
        localStorage.setItem('gt-user', response.data.token);
        localStorage.setItem('gt-username', response.data.username);
      }
    })
    .then(_ => {
      fetchMatchData();
      fetchPlayerData();
    })
    .catch(error => {
      isError.value = true;
      errorMessage.value = error.response.data.message;
      console.error(error.response);
    });
};
</script>

<template>
  <div class="alert-container" v-if="isError" style="max-width: 600px">
    <el-alert :title="errorMessage" type="error" />
  </div>
  <div class="login-container">
    <div class="login-image"></div>
    <div :class="[switchTheme ? 'login-side-container--dark' : 'login-side-container--light']">
      <el-switch v-model="switchTheme" :active-action-icon="Moon" :inactive-action-icon="Sunny" />
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
  src: url('../../assets/fonts/Caveat-Bold.ttf');
}

.alert-container {
  position: absolute;
  width: 30%;
  left: 50%;
  transform: translate(-50%, 20%);
}

.login-container {
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
    color: #fff;
  }

  .login-side-container--light {
    @extend %tip-line;
    background-color: $gt-website-theme--light;
  }
}
</style>
../../utils/http.js