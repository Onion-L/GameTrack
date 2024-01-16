<script setup>
import { useAppStore } from "../../../stores/appStore.js";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);

</script>

<template>
  <transition name="logo-fade">
    <div class="gt-logo-container" :class="{ 'collapse': sideStatus, 'gt-logo-container': !sideStatus }">
      <img class="gt-logo-img" src="../../../assets/images/logo.png" alt="logo">
      <h1 class="gt-logo-title">GameTrack</h1>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import "../../../style/variable.scss";

@font-face {
  font-family: 'Caveat';
  src: url('../../../assets/fonts/Caveat-Bold.ttf');
}

.gt-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc($gt-side-bar-width--expend - 1px);
  height: $gt-nav-bar-height;
  background-color: $gt-side-bar-bg-color;

  .gt-logo-img {
    width: 50px;
    height: auto;
  }

  .gt-logo-title {
    font-family: 'Caveat', cursive;
    text-align: center;
    margin-left: 10px;
    color: #fff;
  }
}

.collapse {
  width: 99%;

  .gt-logo-img {
    width: 32px;
    height: 32px;
  }

  .gt-logo-title {
    display: none;
  }
}

.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: all 0.5s ease;
}
</style>
