<script setup>
import { useRouter } from 'vue-router';
import { usePlayerStore } from "../../stores/playerStore.js";

const { playersByPosition } = usePlayerStore();
const router = useRouter();

const goToTragetRoute = (id) => {
  router.push(`/players/${id}`);
};
</script>

<template>
  <div class="position_title" v-for="(players, position) in playersByPosition" :key="position">
    <h1>{{ position }}</h1>
    <hr style="width: 90%;">
    <div class="card-container">
      <div @click="goToTragetRoute(player.id)" class="player-card" v-for="(player, index) in players" :key="player.name"
        :style="{ backgroundImage: 'url(' + player.image + ')' }">
        <div class="player-title">
          <span class="player-name">{{ player.name }}</span>
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
      width: 30%;
      height: 50vh;
      background-color: #fff;
      margin: 10px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      background-size: cover;
      background-position: center;
      transition: background-size 0.8s ease-in;

      .player-title {
        position: absolute;
        width: 100%;
        height: 30%;
        bottom: 0;
        display: flex;
        align-items: center;
        padding: 10px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1));
        border-radius: 10px;

        .player-number {
          font-size: 24px;
          font-weight: bolder;
          color: #fff;
        }

        .player-name {
          font-size: 24px;
          font-weight: bolder;
          color: #fff;
        }
      }
    }

    .player-card:hover {
      background-size: 120%;
    }
  }

}
</style>
