<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="container">

  
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</div>
</template>

<style scoped>
.container {
            position: absolute;
            /* display: flex; */
            /* 내부 요소의 절대 위치를 기준으로 설정 */
            /* width: 300px; */
            /* 컨테이너의 너비 */
            /* height: 400dvh; */
            /* 컨테이너의 높이 */
            /* background-color: #f4f4f4; */
            /* 연한 회색 배경 */
            border: 1px solid red;
            /* 테두리 설정 */
            overflow: hidden;
            /* SVG가 컨테이너를 넘어가는 것을 숨김 */
        }
.read-the-docs {
  color: #888;
}
</style>
