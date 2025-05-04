<template>
    <div>
        <!-- 페이지 내용 -->
        <h2>Scroll down this window to draw a triangle.</h2>
        <p>Scroll back up to reverse the drawing.</p>

        <!-- SVG 그래픽 정의 -->
        <svg id="mySVG">
        <!-- 빨간색 삼각형을 그리는 경로 정의 -->
        <path fill="none" stroke="red" stroke-width="3" id="triangle" 
        d="M150 0 L75 200 L225 200 Z" />
        <!-- 브라우저가 SVG를 지원하지 않는 경우 표시할 메시지 -->
        Sorry, your browser does not support inline SVG.
        </svg>
    </div>
</template>

<script setup>

</script>

<style>
/* SVG 요소의 스타일 설정 */
#mySVG {
  position: fixed; /* 스크롤 시 위치 고정 */
  top: 15%; /* 화면 상단에서 15% 아래에 위치 */
  width: 400px; /* SVG의 너비 설정 */
  height: 210px; /* SVG의 높이 설정 */
  margin-left: -50px; /* 좌측으로 약간 이동 */
}
</style>