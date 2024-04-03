<script setup>
import $http from "../../utils/http.js";
import MatchStatistics from './components/MatchStatistics.vue';

const matchResult = ref([]);
const dialogVisible = ref(false);
const statsResult = ref({});
const statsKey = ref([]);
const statsValue = reactive({
    totalGoals: 0,
    totalWinNum: 0,
    totalDrawNum: 0,
    averagePassNum: 0,
    averagePassAccuracy: 0,
    totalYellowCards: 0,
    totalRedCards: 0,
})

onMounted(() => {
    $http.get('/api/matches', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("gt-user")}`,
        },
    }).then(response => {
        matchResult.value = response.data.match;
        for (const key in response.data.summary) {
            if (statsValue.hasOwnProperty(key)) {
                statsValue[key] = response.data.summary[key];
            } else {
                console.log(key);
            }
        }
        console.log(statsValue.averagePassNum);
    }).catch(e => {
        console.error(e.message);
    })
});

const handleRowClick = (row) => {
    statsKey.value = Object.keys(row.stats);
    dialogVisible.value = true;
    statsResult.value = row.stats;
}
</script>

<template>
    <div class="team-card">

        <div class="stats-container">
            <MatchStatistics :statsValue="statsValue" />
        </div>

        <el-dialog v-model="dialogVisible" title="Tips" width="500">
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

        <div class="match-container">
            <el-scrollbar height="80vh">
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
    </div>
</template>

<style scoped lang="scss">
@import "../../style/variable.scss";

.team-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    .input-container {
        display: flex;
        align-items: center;
        width: 96%;
        height: 8vh;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: $gt-container-box-shadow;
        padding: 0 10px;
        margin: 20px 0;
    }
}

.detail-text {
    span {
        font-size: larger;
    }
}

.stats-container {
    width: 100%;
    height: 10vh;
    margin-top: 20px;
}

.match-container {
    width: 96%;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: $gt-container-box-shadow;
}
</style>
