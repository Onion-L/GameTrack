<script setup>
import { storeToRefs } from "pinia";
import { usePlayerStore } from "../../../stores/playerStore";

const { PLAYER_POSITION, PLAYER_NUMBER, player_data, playerCounts, playersByPosition } = usePlayerStore();

const tableData = player_data;
</script>

<template>
    <el-table :data="tableData" height="100%" table-layout="auto">
        <el-table-column prop="profile" label="#">
            <template #default="scope">
                <img style="width: 30px;height: 30px;" :src="scope.row.image" alt="">
            </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" sortable />
        <el-table-column prop="position" label="Position" sortable />
        <el-table-column prop="salary_pre" label="Salary(%)" sortable>
            <template #default="scope">
                <el-progress :text-inside="true" :stroke-width="14" :percentage="scope.row.salary_pre" />
            </template>
        </el-table-column>
        <el-table-column prop="salary_num" label="Salary(￡)" sortable />
        <el-table-column label="More">
            <template #default>
                <div class="action-btn">
                    <el-icon>
                        <InfoFilled />
                    </el-icon>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped lang="scss">
.action-btn {
    display: flex;
}
</style>
  