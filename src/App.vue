<template>
  <div>
    <LoginPage></LoginPage>
  </div>
</template>
<script setup>
  import LoginPage from './view/Login/LoginPage.vue';
  import http from './utils/api.js';

  onMounted(()=>{
    http.get('/')
        .then(_=>{
      console.log('http get',document.cookie);
    })
  })
</script>
<style lang="">
  
</style>