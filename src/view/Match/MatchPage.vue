<script setup>
import $http from "../../utils/http.js";
import MatchStatistics from './components/MatchStatistics.vue';
import { Delete, Edit, DocumentAdd, Share, Upload } from '@element-plus/icons-vue';

const loading = ref(false);
const matchResult = ref([]);
const dialogVisible = ref(false);
const dialogFormVisible = ref(false);
const statsResult = ref({});
const statsKey = ref([]);
const uploadRef = ref();

const formLabelWidth = '60px';
const formData = new FormData();

const statsValue = reactive({
    totalGoals: 0,
    totalWinNum: 0,
    totalDrawNum: 0,
    averagePassNum: 0,
    averagePassAccuracy: 0,
    totalYellowCards: 0,
    totalRedCards: 0,
})

const matchForm = reactive({
    home: '',
    away: '',
    date: ''
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
};

const handleFileChange = (file) => {
    if (!file) return;
    formData.append('match', file.raw, file.raw.name);
    for (let [key, value] of formData.entries()) {
        console.log(123, key, value);
    }
}

const handleSubmit = () => {
    console.log(matchForm);
    Object.keys(matchForm).forEach(key => {
        formData.append(key, matchForm[key]);
    });
    $http.post('/api/upload', formData).then(response => {
        console.log(response.data);
        window.location.reload();
    }).catch(error => {
        console.error(error);
    })
    dialogFormVisible.value = false;
};
</script>

<template>
    <div class="team-card">
        <div class="stats-container">
            <MatchStatistics :statsValue="statsValue" />
        </div>
        <div style="width: 96%; ">
            <el-button type="primary" :icon="DocumentAdd" @click="dialogFormVisible = true">New Data</el-button>
        </div>

        <el-dialog v-model="dialogFormVisible" title="Match Data" width="700">
            <el-form :model="matchForm">
                <el-form-item label="Date" :label-width="formLabelWidth">
                    <el-date-picker v-model="matchForm.date" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD"
                        placeholder="Pick a day" />
                </el-form-item>
                <el-form-item label="Match" :label-width="formLabelWidth">
                    <el-input placeholder="Home" v-model="matchForm.home" autocomplete="off"
                        style="width: 180px;height: 32px;" />
                    vs
                    <el-input placeholder="Away" v-model="matchForm.away" autocomplete="off"
                        style="width: 180px;height: 32px;" />
                </el-form-item>
                <el-form-item>
                    <el-upload ref="uploadRef" class="upload-demo" drag :on-change="handleFileChange"
                        accept=".xlsx, .xls" :auto-upload="false">
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                        </div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handleSubmit">
                        Confirm
                    </el-button>
                </div>
            </template>
        </el-dialog>

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

.upload-demo {
    width: 100%;
    margin-top: 10px;
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
