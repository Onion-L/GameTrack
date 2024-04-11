<script setup>
import * as echarts from 'echarts';

const radar = ref();
let radarChart;

const option = {
    color: ['#67F9D8', '#FFE434'],

    legend: {},
    radar: [
        {
            indicator: [
                { text: 'Appearance' },
                { text: 'Appearance' },
                { text: 'Indicator3' },
                { text: 'Indicator4' },
                { text: 'Indicator5' }
            ],
            center: ['50%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            axisName: {
                formatter: '【{value}】',
                color: '#428BD4'
            },
            splitArea: {
                areaStyle: {
                    color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            }
        }
    ],
    series: [
        {
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: [100, 8, 0.4, -80, 2000],
                    name: 'Data A'
                },
                {
                    value: [60, 5, 0.3, -100, 1500],
                    name: 'Data B',
                    areaStyle: {
                        color: 'rgba(255, 228, 52, 0.6)'
                    }
                }
            ]
        }
    ]
};


onMounted(() => {
    radarChart = echarts.init(radar.value);
    radarChart.setOption(option);
})
</script>
<template>
    <div ref="radar" class="radar-chart-container">

    </div>
</template>
<style lang="scss" scoped>
.radar-chart-container {
    width: 35vw;
    height: 50vh;
}
</style>