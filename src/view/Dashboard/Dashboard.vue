<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue'
import TodoList from "../../components/TodoList/TodoList.vue";
import ClubCard from './components/ClubCard.vue';
import PerfChart from './components/PerfChart.vue';
import PlayerTable from './components/PlayerTable.vue';
import { usePlayerStore } from "../../stores/playerStore.js";

const { PLAYER_POSITION, PLAYER_NUMBER } = usePlayerStore();

const main = ref()

onMounted(() => {

})

</script>

<template>
  <div class="dashboard">
    <div class="row-line">
      <PerfChart />
    </div>
    <div class="club-info-row">
      <ClubCard v-for="(position, index) in PLAYER_POSITION" :Position="position" :index="index" />
    </div>
    <div class="row-task">
      <TodoList class="todo-list" />
      <div class="player-table">
        <PlayerTable />
      </div>
    </div>
    <div class="row-map">
      <div class="global-map"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row-line {
  width: 100%;
  height: 50vh;
  padding: 10px 20px;
}

.club-info-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 10px;
}

.row-task {
  height: 56vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .player-table {
    height: 54vh;
    flex: 1;
    display: inline-block;
    text-align: center;
    margin: 10px 20px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  }

  .todo-list {
    height: 54vh;
    flex: 0.75;
    margin: 10px 20px 0;
  }
}

.row-map {
  width: 100%;
  height: 50vh;
  padding: 10px 20px;

  .global-map {
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  }
}
</style>
