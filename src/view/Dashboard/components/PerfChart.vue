<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';
import { storeToRefs } from 'pinia';
import { useAppStore } from "../../../stores/appStore.js";

const props = defineProps({
    monthlyRate: Array,
    seasonDate: Array
});
const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);

const performance = ref();
let myChart;
onMounted(() => {
    myChart = echarts.init(performance.value);
    initChart(myChart);
})

watch(sideStatus, () => {
    nextTick(() => {
        myChart.resize()
    })
})

const initChart = (chart) => {
    let option = {
        xAxis: {
            type: 'category',
            data: props.seasonDate,
            spitline: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            spitline: {
                show: false
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        title: {
            text: 'Performance',
            left: '5%',
            top: '2%'
        },
        grid: {
            top: '20%',
            left: '2%',
            right: '3%',
            bottom: '5%',
            containLabel: true
        },
        series: [
            {
                data: props.monthlyRate,
                type: 'line',
                smooth: true
            }
        ]
    };
    chart.setOption(option);
    window.onresize = function () {
        myChart.resize();
    }
}
</script>

<template>
    <div ref="performance" class="team-win-percent"></div>
</template>

<style scoped lang="scss">
.team-win-percent {
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
</style>