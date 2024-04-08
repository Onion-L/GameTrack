<script setup>
import { storeToRefs } from "pinia";
import { usePlayerStore } from "../../../stores/playerStore";

const { PLAYER_POSITION, PLAYER_NUMBER, player_data, playerCounts, playersByPosition } = usePlayerStore();

const tableData = player_data;
</script>

<template>
    <el-table :data="player_data" height="100%" table-layout="auto">
        <el-table-column prop="profile" label="#">
            <template #default="scope">
                <img style="width: 30px;height: 30px;" :src="scope.row.image" alt="">
            </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" sortable />
        <el-table-column prop="position" label="Position" sortable />
        <el-table-column prop="salary_pre" label="Salary(%)" sortable>
            <template #default="scope">
                <el-progress :stroke-width="14" :percentage="scope.row.salary_pre" />
            </template>
        </el-table-column>
        <el-table-column prop="salary_num" label="Salary(￡)" sortable />
        <el-table-column label="More">
            <template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                    <template #default>
                        <div>Name: {{ scope.row.name }}</div>
                        <div>Appearance: {{ scope.row.stats.appearance }}</div>
                        <div v-if="scope.row.stats.clean">Clean: {{ scope.row.stats.clean }}</div>
                        <div v-else>Goal: {{ scope.row.stats.goal }}</div>
                    </template>
                    <template #reference>
                        <div class="action-btn">
                            <el-icon>
                                <InfoFilled />
                            </el-icon>
                        </div>
                    </template>
                </el-popover>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped lang="scss">
.action-btn {
    display: flex;
}
</style>