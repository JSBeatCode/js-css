<script setup>
import ScrollFollow from './components/ScrollFollow.vue'
import HelloWorld from './components/HelloWorld.vue'
import HeightPercentage from './components/HeightPercentage.vue'
</script>

<template>
  <div class="container">
    <div>
      <ScrollFollow />
    </div>
    <div>
      <HeightPercentage />
    </div>
    <!-- <HelloWorld msg="Test"/> -->
  </div>
</template>

<style scoped>
/* .container {  */
  /* position: absolute; */
  /* margin: 0; */
  /* display: flex; */
  /* place-items: center; */
  /* min-width: 320px; */
  /* min-height: 100vh; */
    /* 기본 margin 제거 */
    /* height: 400vh; */
    /* 문서의 높이를 2배로 설정하여 스크롤 가능하게 함 */
    /* display: flex; /* 컨테이너를 화면 중앙에 정렬하기 위해 flex 사용 */
    /* justify-content: center; /* 가로 방향으로 중앙 정렬 */
    /* align-items: center; /* 세로 방향으로 중앙 정렬 */
/* } */
</style>
