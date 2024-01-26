<script setup>
import {usePlayerStore} from "../../stores/playerStore.js";

const {PLAYER_POSITION} = usePlayerStore();
</script>

<template>
  <div class="position_title"  v-for="position in PLAYER_POSITION">
    <h1>{{position}}</h1>
    <hr style="width: 90%;">
  </div>
</template>

<style scoped lang="scss">
  .position_title {
    width: 100%;
    height: 6vh;
    padding:0 5%;
  }
</style>
