<script setup>
import TodoList from "../../components/TodoList/TodoList.vue";
import ClubCard from './components/ClubCard.vue';
import PerfChart from './components/PerfChart.vue';
import TeamInfoCharts from './components/TeamInfoCharts.vue';
import PlayerTable from './components/PlayerTable.vue';
import { usePlayerStore } from "../../stores/playerStore.js";
import { useMatchStore } from "../../stores/matchStore.js";

const { PLAYER_POSITION } = usePlayerStore();
const { fetchMatchData, winRateByMonth } = useMatchStore();

onMounted(() => {
  fetchMatchData();
});
</script>

<template>
  <div class="dashboard">
    <div class="row-line">
      <PerfChart :monthlyRate="winRateByMonth" />
    </div>
    <div class="club-info-row">
      <ClubCard v-for="(position, index) in PLAYER_POSITION" :Position="position" :index="index" />
    </div>
    <div class="match-info">
      <TeamInfoCharts />
    </div>
    <div class="row-task">
      <TodoList class="todo-list" />
      <div class="player-table">
        <PlayerTable />
      </div>
    </div>
    <div class="dashboard-footer"></div>
  </div>
</template>

<style scoped lang="scss">
@import "../../style/variable.scss";

.row-line {
  width: 100%;
  height: 50vh;
  padding: 10px 20px;
  overflow: hidden;
}

.club-info-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 10px;
}

.match-info {
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    box-shadow: $gt-container-box-shadow;
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

.dashboard-footer {
  width: 100%;
  height: 5vh;
}
</style>
