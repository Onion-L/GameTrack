<script setup>
import { ref } from 'vue';
import { usePlayerStore } from "../../stores/playerStore.js";
import { useClubStore } from '../../stores/clubStore';
import { normalizeValue } from '../../utils/utils';

const { player_data } = usePlayerStore();
const { analysis_key } = useClubStore();
const player1 = ref('');
const player2 = ref('');
const player1_value = ref({});
const player2_value = ref({});
const startAnalyse = ref(false);
const customColor = ref('#bccce0');

const handleAnalyseClick = () => {
  console.log(player1.value, 'vs', player2.value);
  player1_value.value = player_data.filter(player => {
    if (player.name === player1.value) {
      return player;
    }
  })[0];
  player2_value.value = player_data.filter(player => {
    if (player.name === player2.value) {
      return player;
    }
  })[0]
  startAnalyse.value = true;
};
const getNormalizedValue = (player, key) => {
  const values = player_data.map(player => player.stats[key]);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  return normalizeValue(player.stats[key], minValue, maxValue);
};

const blueColor = '#3399FF';
const greyColor = '#CCCCCC';

const determineColor = (player1Stat, player2Stat) => {
  console.log(player1Stat, player2Stat);
  if (player1Stat > player2Stat) {
    return blueColor;
  } else if (player1Stat < player2Stat) {
    return greyColor;
  } else {
    return blueColor;
  }
};
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
    <el-button @click="handleAnalyseClick" type="primary" style="height: 100%; margin-left: 10px;">Start</el-button>
  </div>
  <div class="analysis-container" v-if="startAnalyse">
    <div class="left-wrap">
      <img :src="player1_value.detail_image" alt="">
    </div>
    <div class="analysis-wrap">
      <div class="analysis-content" v-for="key in analysis_key" :key="key.name">
        <template v-if="player1_value.stats[key.name] !== 0 || player1_value.stats[key.name] !== 0">
          <div class="progress-container">
            <el-progress :percentage="getNormalizedValue(player1_value, key.name)"
              :color="determineColor(player1_value.stats[key.name], player2_value.stats[key.name])"
              style="transform:rotate(180deg); height: 7%;">
              <span></span>
            </el-progress>
          </div>
          <div class="data-wrap">
            <span>{{ key.label }}</span>
          </div>
          <div class="progress-container">
            <el-progress :percentage="getNormalizedValue(player2_value, key.name)"
              :color="determineColor(player2_value.stats[key.name], player1_value.stats[key.name])">
              <span></span>
            </el-progress>
          </div>
        </template>

      </div>
    </div>
    <div class="right-wrap">
      <img :src="player2_value.detail_image" alt="">
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
  height: 78vh;
  margin-top: 5vh;
  display: flex;

  .left-wrap {
    height: 100%;
    flex: 1;
  }

  .analysis-wrap {
    flex: 2;
    display: flex;
    flex-direction: column;

    .analysis-content {
      width: 100%;
      display: flex;

      .progress-container {
        flex: 1;
        padding-top: 10px;
      }

      .data-wrap {
        flex: 1;
        text-align: center;
        font-size: 18px;
      }
    }


  }

  .right-wrap {
    height: 100%;
    flex: 1;
  }
}
</style>