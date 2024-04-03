<script setup>
const props = defineProps({
    statsValue: Object
});
</script>

<template>
    <el-row>
        <el-col :span="3">
            <el-statistic title="Total Goal" :value="props.statsValue.totalGoals" />
        </el-col>
        <el-col :span="3">
            <el-statistic :value="props.statsValue.totalWinNum">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                        Number of Win
                    </div>
                </template>
                <template #suffix>/38</template>
            </el-statistic>
        </el-col>
        <el-col :span="3">
            <el-statistic title="Points" :value="props.statsValue.totalWinNum * 3 + props.statsValue.totalDrawNum" />
        </el-col>
        <el-col :span="3">
            <el-statistic title="Pass Average" :value="props.statsValue.averagePassNum" />
        </el-col>
        <el-col :span="3">
            <el-statistic title="Pass Accuracy" :value="props.statsValue.averagePassAccuracy">
                <template #suffix>%</template>
            </el-statistic>
        </el-col>
        <el-col :span="3">
            <el-statistic title="Yellow Card" :value="props.statsValue.totalYellowCards" />
        </el-col>
        <el-col :span="3">
            <el-statistic title="Red Card" :value="props.statsValue.totalRedCards" />
        </el-col>

    </el-row>
</template>


<style scoped>
.el-col {
    text-align: center;
}
</style>