<script setup>
import { nextTick } from 'vue';
import { storeToRefs } from "pinia";
import { useRoute } from 'vue-router';
import ChartOption from '../../utils/ChartOption';
import { useAppStore } from '../../stores/appStore';
import { usePlayerStore } from "../../stores/playerStore.js";
import * as echarts from 'echarts';

const route = useRoute();
const { id } = route.params;

const { player_data, normalizedRating, playerIndicators, averageData } = usePlayerStore();
const { stats } = player_data[id];
const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);

const forward = [{ text: 'Appearance', key: 'appearance' },
{ text: 'Goal' },
{ text: 'Shot On Target' },
{ text: 'Dribble Success' },
{ text: 'Offsides' }]

const gauge = ref();
const radar = ref();
let radarChart;
let gaugeChart;
let chartOption;
const starValue = ref(2.5);
const contributeRating = ref(0);
const indicatorList = ref([]);

onMounted(() => {
    sideStatus.value = true;
    const playerKey = `${player_data[id].position.toUpperCase()}S`;
    normalizedRating[playerKey].forEach(player => {
        if (player.name === player_data[id].name) {
            contributeRating.value = player.normalizedRating * 0.01;
        }
    });
    indicatorList.value = playerIndicators[playerKey];
    console.log(playerKey);
    chartOption = new ChartOption();
});

nextTick(() => {
    const playerKey = `${player_data[id].position.toUpperCase()}S`;
    starValue.value = Math.round(contributeRating.value * 5);
    const gaugeOption = chartOption.getGaugeOption(contributeRating.value);
    const value = playerIndicators[playerKey].map(indicator => {
        return player_data[id].stats[indicator.key];
    })
    const radarOption = chartOption.getRadarOption(indicatorList.value, value, averageData[playerKey]);
    gaugeChart = echarts.init(gauge.value);
    gaugeChart.setOption(gaugeOption);
    radarChart = echarts.init(radar.value);
    radarChart.setOption(radarOption);
});
</script>

<template>
    <div class="player-detail_header">
        <div class="player-detail-content">
            <div class="player-shirt-number">
                <span>{{ player_data[id].number }}</span>
            </div>
            <span>{{ player_data[id].position }}</span>
            <el-rate v-model="starValue" disabled />
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
            <div ref="radar" class="radar-chart-container"></div>
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

        .radar-chart-container {
            width: 35vw;
            height: 50vh;
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