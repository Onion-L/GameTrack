<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, onUpdated } from 'vue';
import { useAppStore } from "../../../stores/appStore.js";
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);

const performance = ref();
let myChart;
onMounted(() => {
    myChart = echarts.init(performance.value);
    initChart(myChart);
})

watch(sideStatus, () => {
    console.log(123);
})

const initChart = (chart) => {
    let option = {
        xAxis: {
            type: 'category',
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            spitline: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            min: 50,
            spitline: {
                show: false
            }
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
                data: [100, 70, 85, 90, 65, 75, 80, 70, 62, 73, 84, 65],
                type: 'line',
                smooth: true
            }
        ]
    };
    chart.setOption(option);
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
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
}
</style>