<script setup>
import { usePlayerStore } from "../../stores/playerStore.js";

const { PLAYER_POSITION, PLAYER_NUMBER } = usePlayerStore();
</script>

<template>
  <div class="position_title" v-for="(position, index) in PLAYER_POSITION">
    <h1>{{ position }}</h1>
    <hr style="width: 90%;">
    <div class="card-container">
      <div class="player-card" v-for="number in PLAYER_NUMBER[index]">
        <div class="player-title">
          <span class="player-name">Antony</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.position_title {
  width: 100%;
  padding: 0 5%;

  .card-container {
    display: flex;
    flex-wrap: wrap;

    .player-card {
      position: relative;
      width: 20%;
      height: 50vh;
      background-color: #fff;
      margin: 10px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      background-image: url('../../assets//images/profile-1.jpg');
      background-size: cover;
      background-position: center;

      .player-title {
        position: absolute;
        width: 100%;
        height: 30%;
        bottom: 0;
        display: flex;
        align-items: center;
        padding: 10px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1));

        .player-name {
          font-size: 24px;
          font-weight: bolder;
          color: #fff;
        }
      }
    }
  }

}
</style>
