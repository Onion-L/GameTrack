<script setup>

const props = defineProps(['news']);
const {news} = props;

onMounted(()=>{
  // console.log('hess',props.news);
})
</script>

<template>
  <div class="news-wrapper">
    <div class="news-image">
      <img style="height: 80px" :src="news.image" alt="news-image"/>
    </div>
    <div class="news-content">
      <div class="news-title">
        <img class="alarm-icon" src="../../../assets/alarm.png" alt="alarm">
        <div class="title-content">{{news.title}}</div>
      </div>
      <p style=" display: inline-block; overflow: hidden;
    text-overflow: ellipsis;">{{news.content}}</p>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../../../style/variable";
.news-wrapper {
  display: flex;
  align-items: center;
  width: @gt-right-width--expend * 0.6;
  height: 200px;
  background-color: #fff;
  border:1px solid #ececec;
  //box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  .news-title {
    display: flex;
    height: 36px;
    .title-content {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 24px;
      font-weight: bolder;
    }
  }
  .news-content{
    padding-left: 20px;
    flex: 1;

  }
}
  .alarm-icon {
    width: 36px;
  }
</style>
