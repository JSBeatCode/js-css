<template>
  <div class="container">
    <div class="svg-circle-container">
      <svg class="svg-circle" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r="100" />
      </svg>
</div>
    <!-- <div style="height: 50%;"> -->
    <ScrollFollow />
    <div style="height: 100vh">
    </div>
    <!-- <HeightPercentage /> -->
    <!-- <Circle /> -->
    <ScrollFollow2 />
    <div style="height: 100vh">
    </div>
    <!-- </div> -->
    <!-- <div style="height: 50%;">
      <HeightPercentage />
    </div> -->
  </div>
</template>

<script setup>
import ScrollFollow from './components/ScrollFollow.vue'
import ScrollFollow2 from './components/ScrollFollow2.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HeightPercentage from './components/HeightPercentage.vue'
// import Triangle from './components/Triangle.vue'
// import Circle from './components/Circle.vue'

import { onMounted, reactive } from 'vue'

const state = reactive({
  section1: {
    height: undefined,
    top: undefined,
    bottom: undefined,
    svgHeight: undefined,
    starterY: undefined,
    svgElement: undefined,
    sectionBox: undefined,
  },
  section2: {
    height: undefined,
    top: undefined,
    bottom: undefined,
    svgHeight: undefined,
    starterY: undefined,
    svgElement: undefined,
    sectionBox: undefined,
  }
})

// created
onMounted(() => {

  const circle = document.querySelector("circle");
  const totalLength = 2 * Math.PI * 100; // r = 100

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;

        const scrollProgress = scrollTop / scrollHeight;

        // 0 (처음) → 628 (끝까지 그려짐)
        const offset = totalLength * (1 - scrollProgress);
        circle.style.strokeDashoffset = offset;
    });

  // scroll arraow start
  getElementsPosition();
  // 3. 스크롤 이벤트 처리
  window.addEventListener("scroll", () => {
    onScrollEvent();
  });
  window.addEventListener('resize', () => {
    // 여기에서 원하는 함수를 호출하면 됩니다
    getElementsPosition();
    onScrollEvent();
  });
})

function getElementsPosition() {

  // JavaScript로 스크롤에 따라 SVG의 위치를 조정
  // 1. 필요한 요소 가져오기
  state.section1.svgElement = document.querySelector("#arrowSVG1"); // SVG 요소 선택
  state.section1.sectionBox = document.querySelector(".section1"); // 컨테이너 요소 선택
  // 1. 필요한 요소 가져오기
  state.section2.svgElement = document.querySelector("#arrowSVG2"); // SVG 요소 선택
  state.section2.sectionBox = document.querySelector(".section2"); // 컨테이너 요소 선택
  // 2. 컨테이너와 SVG의 크기 계산
  state.section1.top = state.section1.sectionBox.getBoundingClientRect().top + window.scrollY; // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
  state.section1.bottom = state.section1.sectionBox.getBoundingClientRect().bottom + window.scrollY; // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
  state.section1.height = state.section1.sectionBox.offsetHeight; // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
  state.section1.svgHeight = state.section1.svgElement.getBoundingClientRect().height; // SVG 높이 가져오기. svgElement 요소의 뷰포트 내의 높이를 픽셀 단위로 가져옵니다.
  // state.section1.starterY = 0
  state.section1.starterY = state.section1.sectionBox.getBoundingClientRect().top  + window.scrollY;

  state.section2.top = state.section2.sectionBox.getBoundingClientRect().top  + window.scrollY; // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
  state.section2.bottom = state.section2.sectionBox.getBoundingClientRect().bottom  + window.scrollY; // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
  state.section2.height = state.section2.sectionBox.offsetHeight;
  state.section2.svgHeight = state.section2.svgElement.getBoundingClientRect().height; // SVG 높이 가져오기. svgElement 요소의 뷰포트 내의 높이를 픽셀 단위로 가져옵니다.
  state.section2.starterY = state.section2.sectionBox.getBoundingClientRect().top  + window.scrollY;

}

function onScrollEvent() {

  // if (state.section1.starterY <= window.scrollY && window.scrollY < state.section2.starterY) {
  if (state.section1.starterY <= window.scrollY) {

    // 전체 문서에서 현재 스크롤 위치를 0 ~ 1 사이의 비율로 계산
    // const scrollY = window.scrollY / state.section1.height; // (scroll위치  0 / 500) 0.0022~0.45
    const scrollY = (window.scrollY - state.section1.top) / (state.section1.bottom - state.section1.top); // 이 두개의 처음 (scroll위치 4  / 500) 나와야됨. scrollY는 0.0022~0.45

    if (scrollY <= 0.45) {
      // if (window.scrollY <= (state.section1.height / 2)) {

      // SVG가 이동할 수 있는 최대 거리 계산 (컨테이너 높이 - SVG 높이)
      const maxTranslateY = state.section1.height - state.section1.svgHeight;

      // 스크롤 비율에 따라 SVG의 Y축 이동 값 계산
      const translateY = maxTranslateY * scrollY;
      const test1 = {
        'window.scrollY': window.scrollY, // 변동값
        'section1Height': state.section1.height, // 고정값
        'scrollY': scrollY, // 변동값
        'svgHeight': state.section1.svgHeight, // 고정값
        'maxTranslateY': maxTranslateY, // 고정값
        'translateY': translateY, // 변동값
      }
      // console.log('test1 ', test1);
      // 계산된 값을 CSS transform 속성에 적용
      if (translateY <= (state.section1.height / 2.5)) {
        state.section1.svgElement.style.transform = `translate(-50%, ${translateY}px)`;
      }
    } 
    // else {
      // 스크롤이 이제 더이상 동작 안해야 할때 max 값으로 고정함
      // state.section1.svgElement.style.transform = `translate(-50%, ${(state.section1.height / 2.5)}px)`;
    // }
  }

  if (state.section2.starterY <= window.scrollY) {
    const scrollY = (window.scrollY - state.section2.top) / (state.section2.bottom - state.section2.top); // 이 두개의 처음 (scroll위치 4  / 500) 나와야됨. scrollY는 0.0022~0.45

    // if ((window.scrollY >= (section12Bottom / 2)) ) {
    if (scrollY < 0.45) {
      // SVG가 이동할 수 있는 최대 거리 계산 (컨테이너 높이 - SVG 높이)
      const maxTranslateY = state.section2.height - state.section2.svgHeight; // 이게 450 나와야 되고

      // 스크롤 비율에 따라 SVG의 Y축 이동 값 계산
      // const translateY = maxTranslateY * (scrollY / 2); // 이게 최대 200 나와야 됨
      const translateY = maxTranslateY * (scrollY); // 이게 최대 200 나와야 됨

      const test2 = {
        'window.scrollY': window.scrollY,
        'section12Bottom': state.section2.bottom,
        'section12Top': state.section2.top,
        'scrollY': scrollY,
        'svgHeight2': state.section2.svgHeight,
        'maxTranslateY': maxTranslateY,
        'translateY': translateY,
      }
      // console.log('test2 ', test2);
      // if (translateY <= 200) {
        state.section2.svgElement.style.transform = `translate(-50%, ${translateY}px)`;
      // } else {
      // console.log('test2 ', test2);
    }
  }
  // else {
  //   console.log('else');
  //   // 스크롤이 이제 더이상 동작 안해야 할때 max 값으로 고정함
  //   // svgElement.style.transform = `translate(-50%, ${(section12Bottom / 2.5)}px)`;
  //   svgElement2.style.transform = `translate(-50%, ${(state.section2.bottom / 2.5)}px)`;
  // }      
}

</script>


<style>
.container {
  /* position: absolute; */
  /* margin: 0; */
  /* display: flex; */
  /* place-items: center; */
  /* min-width: 320px; */
  /* min-height: 100vh; */
  /* 기본 margin 제거 */
  height: 400vh;
  /* 문서의 높이를 2배로 설정하여 스크롤 가능하게 함 */
  /* display: flex; /* 컨테이너를 화면 중앙에 정렬하기 위해 flex 사용 */
  /* justify-content: center; /* 가로 방향으로 중앙 정렬 */
  /* align-items: center; /* 세로 방향으로 중앙 정렬 */
}


    .svg-circle-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      z-index: 1000;
      border: 2px solid green;
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
