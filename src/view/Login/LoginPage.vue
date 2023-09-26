<template>
    <div class="login-container">
        <div class="login-image"></div>
        <div class="login-side-container">
          <div class="login-side-wrapper">
            <div class="gt-logo-container">
              <img class="gt-logo-img" src="logo.png" alt="logo">
              <h1 class="gt-logo-title">GameTrack</h1>
            </div>
            <EasyForm />
          </div>
        </div>
    </div>
</template>
<script setup>
import EasyForm from "../../components/EasyForm/EasyForm.vue";

</script>
<style>
    @font-face {
      font-family: 'Caveat';
      //font-family: 'Bungee Spice';
      //font-family: 'Nabla';
      src: url('../../assets/fonts/Caveat-Bold.ttf');
    }

    .login-container {
      display: flex;
      height: 100vh;
      width: 100vw;
    }

    .login-side-wrapper {
      width: 100%;
      margin-top: 64px;
      padding: 20px;
    }
    .login-image {
      flex: 2;
      background-image: url('../../assets/login-bg-image.jpg');
      background-size:cover;
      background-position: center;
    }

    @media (max-width: 550px) {
      .login-image{
        display: none;
      }
    }

    .login-side-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      /* background: linear-gradient(0.5turn, #000,#212121); */
      min-width: 400px;
      box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
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
      //font-family: 'Bungee Spice', cursive;
      //font-family: 'Nabla', cursive;
      text-align: center;
      margin-left: 10px;
    }

    .easy-form {
      margin-top: 30px;
      width: 100%;
    }
</style>
