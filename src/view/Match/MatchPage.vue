<script setup>
import $http from "../../utils/http.js";
import MatchStatistics from './components/MatchStatistics.vue';
import MatchTable from './components/MatchTable.vue';
import { DocumentAdd } from '@element-plus/icons-vue';
import { useMatchStore } from "../../stores/matchStore";

const loading = ref(false);
const matchResult = ref([]);
const dialogFormVisible = ref(false);
const uploadRef = ref();
const formLabelWidth = '60px';
const { fetchMatchData } = useMatchStore();
const formData = new FormData();

const statsValue = reactive({
    totalGoals: 0,
    totalWinNum: 0,
    totalDrawNum: 0,
    averagePassNum: 0,
    averagePassAccuracy: 0,
    totalYellowCards: 0,
    totalRedCards: 0,
});

const matchForm = reactive({
    home: '',
    away: '',
    date: '',
    result: '',
    possession: 0
});

onMounted(() => {
    $http.get('/api/matches').then(response => {
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

const handleFileChange = (file) => {
    if (!file) return;
    formData.append('match', file.raw, file.raw.name);
};

const handleSubmit = () => {
    Object.keys(matchForm).forEach(key => {
        formData.append(key, matchForm[key]);
    });
    $http.post('/api/upload', formData).then(response => {
        console.log(response.data);
        ElMessage({
            message: 'Congrats, this is a success message.',
            type: 'success',
        });
    }).then(_ => {
        fetchMatchData();
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }).catch(error => {
        ElMessage({
            message: error.response.message,
            type: 'error',
        });
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

                <el-form-item label="Result" :label-width="formLabelWidth">
                    <el-radio-group v-model="matchForm.result">
                        <el-radio label="win">Win</el-radio>
                        <el-radio label="draw">Draw</el-radio>
                        <el-radio label="lost">Lose</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Posession" :label-width="formLabelWidth">
                    <el-input v-model="matchForm.possession" type="number" autocomplete="off" max="100" min="0"
                        style="width: 180px;height: 32px;">
                        <template #append>%</template>
                    </el-input>
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
        <MatchTable :loading="loading" :matchResult="matchResult" />


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
</style>
