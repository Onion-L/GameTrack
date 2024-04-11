<script setup>
import { nextTick } from 'vue';
import { storeToRefs } from "pinia";
import { useRoute } from 'vue-router';
import RadarChart from './components/RadarChart.vue';
import ChartOption from '../../utils/ChartOption';
import { useAppStore } from '../../stores/appStore';
import { usePlayerStore } from "../../stores/playerStore.js";
import * as echarts from 'echarts';

const gauge = ref();
let gaugeChart;
let chartOption;
const { player_data, normalizedRating } = usePlayerStore();
const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);
const route = useRoute();
const value1 = ref(3)
const { id } = route.params;
const { stats } = player_data[id];
const contributeRating = ref(0);

onMounted(() => {
    sideStatus.value = true;
    const playerKey = `${player_data[id].position.toUpperCase()}S`;
    normalizedRating[playerKey].forEach(player => {
        if (player.name === player_data[id].name) {
            contributeRating.value = player.normalizedRating * 0.01;
        }
    });
    chartOption = new ChartOption(contributeRating.value);

    console.log(contributeRating.value);
});

nextTick(() => {
    const gaugeOption = chartOption.getGaugeOption();
    gaugeChart = echarts.init(gauge.value);
    gaugeChart.setOption(gaugeOption);
});
</script>

<template>
    <div class="player-detail_header">
        <div class="player-detail-content">
            <div class="player-shirt-number">
                <span>{{ player_data[id].number }}</span>
            </div>
            <span>{{ player_data[id].position }}</span>
            <el-rate v-model="value1" disabled />
            <div class="player-detail-name">{{ player_data[id].name }}</div>
            <div class="detail-stats">
                <ul>
                    <li>
                        <div class="stats-text">AGE</div>
                        <div class="stats-number">{{ stats.age }}</div>
                    </li>
                    <li>
                        <div class="stats-text">APPERANCE</div>
                        <div class="stats-number">{{ stats.appearance }}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="player-profile">
            <img :src='player_data[id].detail_image' alt="player" />
        </div>
        <div class="chart-group">
            <div ref="gauge" class="gauge-chart"></div>

            <RadarChart />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.player-detail_header {
    display: flex;
    width: 100%;
    background-color: #3232321c;
    padding: 0 20px;

    .player-detail-content {
        display: flex;
        width: 20%;
        margin-left: 20px;
        flex-direction: column;

        .player-shirt-number {
            display: inline-block;
            font-size: 61px;
        }

        .player-detail-name {
            display: inline-block;
            font-size: 40px;
        }
    }

    .detail-stats {
        ul {
            list-style: none;
            height: 30vh;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .stats-text {
                font-size: 16px;
            }

            .stats-number {
                font-size: 42px;
            }
        }
    }

    .player-profile {
        display: inline-block;
        width: 30%;
    }

    .chart-group {
        width: 48%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .gauge-chart {
            width: 35vw;
            height: 40vh;
        }
    }
}

.match-stats {
    .stats-header {
        font-size: 40px;
        color: #717171;
    }

    hr {
        width: 100%;
    }
}
</style>