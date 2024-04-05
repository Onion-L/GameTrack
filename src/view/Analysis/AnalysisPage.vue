<script setup>
import { ref } from 'vue';
import { usePlayerStore } from "../../stores/playerStore.js";
const { player_data, analysis_key } = usePlayerStore();

const player1 = ref('');
const player2 = ref('');
const startAnalyse = ref(false);
const customColor = ref('#bccce0');

const handleAnalyseClick = () => {
  console.log(player1.value, 'vs', player2.value);

  setTimeout(() => {
    startAnalyse.value = true;
  }, 1000);
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
      <img src="https://assets.manutd.com/AssetPicker/images/0/0/18/253/1244668/22-Tom-Heaton1693930126989.png" alt="">
    </div>
    <div class="analysis-wrap">
      <div class="analysis-content" v-for="key in analysis_key" :key="key.name">
        <div class="progress-container">
          <el-progress :percentage="50" style="transform:rotate(180deg); height: 7%;" show-text="false">
            <span></span>
          </el-progress>
        </div>
        <div class="data-wrap">
          <span>{{ key.label }}</span>
        </div>
        <div class="progress-container">
          <el-progress :percentage="50" show-text="false" :color="customColor">
            <span></span>
          </el-progress>
        </div>
      </div>
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
      height: 7%;
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