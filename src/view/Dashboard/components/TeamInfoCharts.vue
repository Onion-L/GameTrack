<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue'
import { useAppStore } from "../../../stores/appStore.js";
import { storeToRefs } from 'pinia';
import { usePlayerStore } from "../../../stores/playerStore.js";
import { useMatchStore } from '../../../stores/matchStore';

const props = defineProps({
    monthlyGoals: Array,
    seasonDate: Array
});

const { PLAYER_POSITION_SHORT, normalizedRatingsByPosition } = usePlayerStore();
const { summaryData } = useMatchStore();
const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);
const lineChartContainer = ref();
const barChartContainer = ref();
const radarChartContainer = ref();

let lineChart, barChart, radarChart;
// Mock data for illustration
const barSeriesData = normalizedRatingsByPosition;
const radarSeriesData = [
    { value: [summaryData.averagePossession, summaryData.averagePassNum, summaryData.totalGoals, summaryData.averageShortOnTarget, summaryData.averagePassAccuracy, summaryData.averageYellowCards], name: 'Team' },
    { value: [45, 450, 9, 8, 78, 14], name: 'League Average' }
];

// Line chart configuration
const lineChartOption = {
    title: {
        text: 'Trend of Total Goals'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.seasonDate
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: props.monthlyGoals,
            type: 'line',
            smooth: true
        }
    ]
};

// Bar chart configuration
const barChartOption = {
    title: {
        text: 'Player Contributions'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: PLAYER_POSITION_SHORT
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: barSeriesData,
            type: 'bar'
        }
    ]
};

// Radar chart configuration
const radarChartOption = {
    title: {
        text: 'Team Tactical Execution Efficiency'
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'Ball Control' },
            { name: 'Passing' },
            { name: 'Attack' },
            { name: 'Defense' },
            { name: 'Dribble' },
            { name: 'Save' }
        ]
    },
    series: [{
        name: 'Budget vs Spending',
        type: 'radar',
        data: radarSeriesData
    }]
};

// Initialize charts on mounted
onMounted(() => {
    lineChart = echarts.init(lineChartContainer.value);
    lineChart.setOption(lineChartOption);

    barChart = echarts.init(barChartContainer.value);
    barChart.setOption(barChartOption);

    radarChart = echarts.init(radarChartContainer.value);
    radarChart.setOption(radarChartOption);
    console.log(normalizedRatingsByPosition);
});

watch(sideStatus, () => {
    nextTick(() => {
        lineChart.resize();
        barChart.resize();
        radarChart.resize();
    })
});
</script>
<template>
    <div class="match-info-row">
        <div class="match-info-charts" ref="lineChartContainer"></div>
        <div class="match-info-charts" ref="barChartContainer"></div>
        <div class="match-info-charts" ref="radarChartContainer"></div>
    </div>
</template>
<style lang="scss" scoped>
.match-info-row {
    width: 100%;
    height: 90%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;

    .match-info-charts {
        width: 30%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
}
</style>