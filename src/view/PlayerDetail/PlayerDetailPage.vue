<script setup>
import { useAppStore } from '../../stores/appStore';
import { storeToRefs } from "pinia";
import { usePlayerStore } from "../../stores/playerStore.js";
import GaugeChart from './components/gaugeChart.vue';
import RadarChart from './components/RadarChart.vue';
import { useRoute } from 'vue-router';

const { player_data } = usePlayerStore();
const appStore = useAppStore();
const { sideStatus } = storeToRefs(appStore);
const route = useRoute();
const { id } = route.params;
const { stats } = player_data[id];


onMounted(() => {
    sideStatus.value = true;
});

</script>
<template>
    <div>
        <div class="player-detail_header">
            <div class="player-detail-content">
                <div class="player-shirt-number">
                    <span>{{ player_data[id].number }}</span>
                </div>
                <span>{{ player_data[id].position }}</span>
                <div class="player-detail-name">{{ player_data[id].name }}</div>
                <div class="detail-stats">
                    <ul>
                        <li>
                            <div class="stats-text">AGE</div>
                            <div class="stats-number">{{ stats.age }}</div>
                        </li>
                        <li>
                            <div class="stats-text">APPERANCE</div>
                            <div class="stats-number">{{ stats.appearance }}</div>
                        </li>
                    </ul>
                </div>
                <div class="match-stats">
                    <h1 class="stats-header">MATCH</h1>
                    <hr />
                    <div>hello world</div>
                </div>
            </div>
            <div class="player-profile">
                <img :src='player_data[id].detail_image' alt="player" />
            </div>
            <div class="chart-group">
                <GaugeChart />
                <RadarChart />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.player-detail_header {
    display: flex;
    width: 100%;
    background-color: #3232321c;
    padding: 0 20px;

    .player-detail-content {
        display: flex;
        width: 20%;
        margin-left: 20px;
        flex-direction: column;

        .player-shirt-number {
            display: inline-block;
            font-size: 61px;
        }

        .player-detail-name {
            display: inline-block;
            font-size: 40px;
        }
    }

    .detail-stats {
        ul {
            list-style: none;
            height: 30vh;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .stats-text {
                font-size: 16px;
            }

            .stats-number {
                font-size: 42px;
            }
        }
    }

    .player-profile {
        display: inline-block;
        width: 30%;
    }

    .chart-group {
        width: 48%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
}

.match-stats {
    .stats-header {
        font-size: 40px;
        color: #717171;
    }

    hr {
        width: 100%;
    }
}
</style>