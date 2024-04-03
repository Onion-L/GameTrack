<script setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

const source = ref(0)
const outputValue = useTransition(source, {
    duration: 1500,
})
source.value = 450;
</script>

<template>
    <el-row>
        <el-col :span="4">
            <el-statistic title="Total Goal" :value="54" />
        </el-col>
        <el-col :span="4">
            <el-statistic :value="20">
                <template #title>
                    <div style="display: inline-flex; align-items: center">
                        Number of Win
                    </div>
                </template>
                <template #suffix>/38</template>
            </el-statistic>
        </el-col>
        <el-col :span="4">
            <el-statistic title="Total Pass" :value="outputValue" />
        </el-col>
        <el-col :span="4">
            <el-statistic title="Pass Accuracy" :value="40">
                <template #suffix>%</template>
            </el-statistic>
        </el-col>
        <el-col :span="4">
            <el-statistic title="Yellow Card" :value="24" />
        </el-col>
        <el-col :span="4">
            <el-statistic title="Red Card" :value="4" />
        </el-col>

    </el-row>
</template>


<style scoped>
.el-col {
    text-align: center;
}
</style>