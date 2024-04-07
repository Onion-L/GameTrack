<script setup>
const props = defineProps({
    loading: Boolean,
    matchResult: Array,
});

const dialogVisible = ref(false);
const statsResult = ref({});
const statsKey = ref([]);

const handleRowClick = (row) => {
    statsKey.value = Object.keys(row.stats);
    dialogVisible.value = true;
    statsResult.value = row.stats;
};
</script>

<template>
    <div class="match-container">
        <el-scrollbar height="80vh" v-loading="loading">
            <el-table :data="matchResult" height="80vh" stripe style="width: 100%" @row-click="handleRowClick">
                <el-table-column prop="date" label="Date" width="180" sortable />
                <el-table-column prop="name.home" label="Home" width="240" sortable />
                <el-table-column prop="name.away" label="Away" width="240" sortable />
                <el-table-column prop="stats.goals" label="Goal" width="240" sortable />
                <el-table-column label="Result">
                    <template #default="scope">
                        <el-tag v-if="scope.row.result === 'win'" type="success">{{
            scope.row.result }}</el-tag>
                        <el-tag v-else-if="scope.row.result === 'draw'" type="warning">{{ scope.row.result
                            }}</el-tag>

                        <el-tag v-else type="danger">{{ scope.row.result }}</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </el-scrollbar>
    </div>
    <el-dialog v-model="dialogVisible" title="Detail" width="450">
        <div class="detail-text" v-for="key in statsKey">
            <span>{{ key }}</span>
            :
            <span>
                {{ statsResult[key] }}
            </span>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Cancel</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<style lang="scss" scoped>
@import "../../../style/variable.scss";

.match-container {
    width: 96%;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: $gt-container-box-shadow;
    margin-top: 10px
}

.el-dialog__body {
    font-size: 20px;
}
</style>