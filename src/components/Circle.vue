<template>
<div class="bottom-div">
    <div class="svg-container">
    <svg class="svg-circle" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r="100" />
    </svg>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {

})
</script>

<style>
    .bottom-div {
        margin: 0;
        height: 300vh; /* 긴 페이지 */  
        border: 3px solid green;
    }

    .svg-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      z-index: 1000;
    }

    .svg-circle {
      width: 100%;
      height: 100%;
    }

    circle {
      fill: none;
      stroke: #3498db;
      stroke-width: 8;
      stroke-dasharray: 628; /* 2 * PI * r (r = 100) */
      stroke-dashoffset: 628;
      transition: stroke-dashoffset 0.1s linear;
    }
</style>