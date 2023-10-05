<script setup>
import http from '../../utils/api.js';
import NewsList from "./components/NewsList.vue";
import TrendList from "./components/TrendList.vue";
import Logo from "../../layout/components/Logo/Logo.vue";

const newsList = ref([]);
onMounted(() => {
  http.get('/mock/news')
      .then(res => {
        newsList.value = res.data.list;
      })
})
</script>

<template>
  <nav>
    <Logo></Logo>
  </nav>
  <el-scrollbar height="92vh">
    <div class="block text-center">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 5" :key="item">
          <h3 class="small justify-center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <div class="news-container">
    <div v-for="list in newsList">
      <NewsList :news="list" :key="list.id"></NewsList>
    </div>
      </div>
    <div class="trend-list">
      <TrendList></TrendList>
    </div>
    </div>
  </el-scrollbar>
</template>

<style scoped>
nav {
  height: 54px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.main {
  display: flex;
  flex-direction: row;

}

.trend-list {
  width: 100%;
  padding: 20px 10px 0;
}
</style>

