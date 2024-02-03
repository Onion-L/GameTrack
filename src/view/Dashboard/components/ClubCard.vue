<script setup>
import { usePlayerStore } from '../../../stores/playerStore';

const { PLAYER_NUMBER } = usePlayerStore();
const props = defineProps(['Position', 'index'])
</script>

<template>
  <div class="card">
    <div class="card-body-row">
      <div class="player-image">
        <img src="../../../assets/images/soccer-player.png" alt="player">
      </div>
      <div class="player-number">
        <p class="card-category">{{ props.Position }}</p>
        <h3 class="card-title">{{ PLAYER_NUMBER[props.index] }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 22%;
  height: 15vh;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  display: flex;
  align-items: center;

  .card-body-row {
    width: 100%;
    display: flex;
    margin: 0 10px;

    .player-image {
      width: 64px;
      flex: 1;
    }

    .player-number {
      flex: 2;
      position: relative;
      margin: 0 10px;

      .card-category {
        font-size: 12px;
        position: absolute;
        right: 10px;
      }

      .card-title {
        font-size: 36px;
        margin-top: 10px;
        padding-right: 10px;
        text-align: right;
      }
    }


  }

}
</style>
  