<script setup>

</script>

<template>
  <div class="news-wrapper">
    <div class="news-image">
      <img style="height: 80px" src="../../../../assets/news-image.jpg" alt="news-image"/>
    </div>
    <div class="news-content">
      <div class="news-title">
        <img class="alarm-icon" src="../../../../assets/alarm.png" alt="alarm">
        <h3>BREAKING:</h3>
      </div>
      <p>Antony back to training and available for selection, Manchester United statement confirms.</p>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../../../../style/variable";
.news-wrapper {
  display: flex;
  align-items: center;
  width: @gt-right-width--expend * 0.6;
  background-color: #fff;
  border:1px solid #ececec;
  //box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  .news-content{
    padding-left: 20px;
  }
}
  .alarm-icon {
    width: 36px;
  }
</style>
