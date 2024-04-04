<script setup>
import { ref } from 'vue';
import { usePlayerStore } from "../../stores/playerStore.js";
const { player_data } = usePlayerStore();

const player1 = ref('');
const player2 = ref('');

</script>

<template>
  <div class="select-wrap">
    <el-select v-model="player1" placeholder="Select" style="width: 240px">
      <el-option v-for="player in player_data" :key="player.id" :label="player.name" :value="player.name">
        <span style="float: left">{{ player.name }}</span>
        <span style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;
        ">{{ player.position }}</span>
      </el-option>
    </el-select>
    vs
    <el-select v-model="player2" placeholder="Select" style="width: 240px;">
      <el-option v-for="player in player_data" :key="player.id" :label="player.name" :value="player.name">
        <span style="float: left">{{ player.name }}</span>
        <span style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;
        ">{{ player.position }}</span>
      </el-option>
    </el-select>
    <el-button type="primary" style="height: 100%; margin-left: 10px;">Start</el-button>
  </div>
  <div class="analysis-container">
    <div class="left-wrap">
      <img src="https://assets.manutd.com/AssetPicker/images/0/0/18/253/1244668/22-Tom-Heaton1693930126989.png" alt="">
    </div>
    <div class="analysis-wrap">
      <div class="left-data"></div>
      <ul class="data-list">
        <li>Appearance</li>
        <li>Minutes</li>
        <li>Save</li>
        <li v-if="false">Goal</li>
        <li>Assist</li>
        <li>Yellow Card</li>
        <li>Red Card</li>
        <li>Key Passes</li>
        <li>Pass Success Rate</li>
        <li>Player Rating</li>
        <li>Tackles Won</li>
        <li>Interception</li>
        <li>Clearance</li>
        <li>Dribble Success Rate</li>
        <li>Distance Covered</li>
      </ul>
      <div class="right-data"></div>
    </div>
    <div class="right-wrap">
      <img src="https://assets.manutd.com/AssetPicker/images/0/0/18/253/1244669/24-Andre-Onana1693833901146.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select-wrap {
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}

.analysis-container {
  height: 75vh;
  margin-top: 5vh;
  display: flex;

  .left-wrap {
    height: 100%;
    flex: 1;
  }

  .analysis-wrap {
    height: 100%;
    flex: 2;
    display: flex;

    .left-data {
      height: 100%;
      flex: 1;
    }

    .data-list {
      height: 100%;
      list-style: none;
      width: 50%;
      margin-top: 2%;

      li {
        text-align: center;
        height: 7%;
      }
    }

    .right-data {
      height: 100%;
      flex: 1;
    }
  }

  .right-wrap {
    height: 100%;
    flex: 1;
  }
}
</style>