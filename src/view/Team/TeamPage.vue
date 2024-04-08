<script setup>
import { useClubStore } from '../../stores/clubStore';

const { clubInfo, analysis_key } = useClubStore();
const infoKeys = Object.keys(clubInfo);

const tableData = [{ date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' }, { date: '123' },];

</script>

<template>
    <div class="team-container">
        <div class="team-info">
            <div class="team-logo">
                <img src="../../assets/images/Manchester_United_FC_crest.svg.png" alt="">
            </div>
            <div class="club-info">
                <ul class="text-list">
                    <li v-for="key in infoKeys">{{ key }}:{{ clubInfo[key] }}</li>
                </ul>
            </div>
        </div>
        <div class="player-table">
            <el-table :data="tableData" height="100%" style="width: 100%">
                <el-table-column prop="image" label="#" fixed />
                <el-table-column prop="name" label="name" fixed />
                <el-table-column v-for="key in analysis_key" :key="key.name" :prop="key.name" :label="key.label"
                    width="140" />


            </el-table>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../../style/variable.scss";

.team-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .team-info {
        width: 95%;
        height: 33vh;
        box-shadow: $gt-container-box-shadow;
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        justify-content: space-around;

        .team-logo {
            width: 200px;
        }

        .club-info {
            .text-list {
                list-style: none;
                text-transform: capitalize;
                font-size: 22px;
                display: flex;
                flex-direction: column;
            }
        }
    }

    .player-table {
        width: 95%;
        height: 54vh;
        margin-top: 20px;
    }
}
</style>
