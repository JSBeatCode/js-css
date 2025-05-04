<template>
    <div class="SFcontainer2">
        <div>
            <h2>Test</h2>
        </div>
        <div class="section2">
            <svg id="arrowSVG2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16"> 
                <path d="M8 1.5a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z" />
                <path
                d="M6.354 4.854a.5.5 0 1 1-.708-.708L8.293 2.5a.5.5 0 0 1 .707 0l2.647 2.646a.5.5 0 0 1-.707.708L8 3.207l-1.646 1.647z" />
            </svg>
        </div>
    </div>
</template>

<script setup>
    // import { onMounted } from 'vue';

    // onMounted(() => {
    //     // console.log('on mounted');
    //             // JavaScript로 스크롤에 따라 SVG의 위치를 조정

    //     // 1. 필요한 요소 가져오기
    //     const svgElement = document.querySelector("#arrowSVG2"); // SVG 요소 선택
    //     // const SFcontainer = document.querySelector(".SFcontainer"); // 컨테이너 요소 선택
    //     const section1 = document.querySelector(".section2"); // 컨테이너 요소 선택


    //     // 2. 컨테이너와 SVG의 크기 계산
    //     // const section1Height = section1.offsetHeight; // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
    //     // const section1Height = (section1.getBoundingClientRect().bottom - section1.getBoundingClientRect().top); // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
    //     const section1Height = (section1.getBoundingClientRect().bottom); // 컨테이너 높이 가져오기. SFcontainer 요소의 **높이(Height)**를 픽셀 단위로 가져옵니다.
    //     console.log('jsdno0 debug2-2 section1Height: ' + section1Height + '/ section1Height getBound top: ' + section1.getBoundingClientRect().top + '/ section1Height getBound bottom: ' + section1.getBoundingClientRect().bottom);
    //     const svgHeight = svgElement.getBoundingClientRect().height; // SVG 높이 가져오기. svgElement 요소의 뷰포트 내의 높이를 픽셀 단위로 가져옵니다.

    //     const starterY = section1.getBoundingClientRect().top
    //     // 3. 스크롤 이벤트 처리
    //     window.addEventListener("scroll", () => {
    //         if (starterY <= window.scrollY) {
    //             /*
    //             1. window.scrollY
    //             의미: 현재 문서의 세로 스크롤 위치.
    //             문서의 상단부터 현재 뷰포트의 시작 위치까지의 픽셀 값을 반환합니다.
    //             값 범위: 0부터 시작하며, 문서가 길 경우 최대 값은 document.body.scrollHeight - window.innerHeight입니다.
    //             브라우저에서 스크롤이 움직일 때마다 이 값이 업데이트됩니다.
    //             2. document.body.scrollHeight
    //             의미: 문서 전체의 높이.
    //             문서의 스크롤 가능한 전체 높이를 픽셀 단위로 반환합니다.
    //             포함 요소:
    //             문서의 모든 콘텐츠(스크롤 가능한 부분 포함).
    //             콘텐츠가 overflow로 숨겨지지 않았다면 문서의 실제 높이를 나타냅니다.
    //             예시:
    //             문서가 길다면, 브라우저 창 높이를 초과하는 모든 부분도 포함합니다.
    //             3. window.innerHeight
    //             의미: 브라우저 창(뷰포트)의 현재 높이.
    //             브라우저 창에서 콘텐츠가 표시되는 영역의 높이(픽셀 단위)를 반환합니다.
    //             스크롤바, 도구 모음 등의 요소는 포함되지 않습니다.
    //             이 값은 창의 크기를 조정할 때마다 변경될 수 있습니다.
    //             */
    //             // 전체 문서에서 현재 스크롤 위치를 0 ~ 1 사이의 비율로 계산
    //             // const section1 = document.getElementsByClassName("section1")
    //             // const section1 = document.querySelector(".section1")
    //             // const scrollHeight = section1.offsetHeight;
    //             // const scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    //             // const scrollY = window.scrollY / (section1Height - window.innerHeight);
    //             const scrollY = window.scrollY / (section1Height);
    //             console.log('debug2-1 window.scrollY: ' + window.scrollY + ' / section1Height: ' + section1Height + ' / scrollY :' + scrollY);

    //             /*
    //             const svgArrow = document.querySelector('#arrowSVG1')
    //             console.log('svgArrow  ', svgArrow);
    //             const svgHeight = svgArrow.offsetHeight
    //             console.log('svgHeight  ', svgHeight);
    //             */
    //             // console.log('translateY ', (section1Height - svgHeight) * scrollY);
    //             if (scrollY <= 0.45) {
                    
    //                 // SVG가 이동할 수 있는 최대 거리 계산 (컨테이너 높이 - SVG 높이)
    //                 const maxTranslateY = section1Height - svgHeight;
        
    //                 // 스크롤 비율에 따라 SVG의 Y축 이동 값 계산
    //                 const translateY = maxTranslateY * scrollY;
    //                 // console.log('translateY ', translateY);
    //                 // 계산된 값을 CSS transform 속성에 적용
    //                 if (translateY <= (section1Height / 2.5)) {
    //                     svgElement.style.transform = `translate(-50%, ${translateY}px)`;
    //                 }

    //             } else {
    //                 svgElement.style.transform = `translate(-50%, ${(section1Height / 2.5)}px)`;
    //             }
    //         }
    //     });
    // })
</script>

<style lang="scss" scoped>
        .SFcontainer2 {
            // position: absolute;
            // display: flex;
            /* 내부 요소의 절대 위치를 기준으로 설정 */
            // width: 300px;
            /* 컨테이너의 너비 */
            height: 100dvh;
            /* 컨테이너의 높이 */
            // background-color: #f4f4f4;
            /* 연한 회색 배경 */
            border: 1px solid #ccc;
            /* 테두리 설정 */
            // overflow: hidden;
            /* SVG가 컨테이너를 넘어가는 것을 숨김 */
        }
        /* SVG 아이콘의 스타일 */
        #arrowSVG2 {
            // position: absolute;
            position: relative;
            /* 컨테이너를 기준으로 위치를 설정 */
            top: 50%;
            /* 초기 위치를 컨테이너의 상단으로 설정 */
            left: 50%;
            /* 수평으로 중앙 정렬 */
            transform: translate(-50%, 0);
            /* 정확히 중앙에 배치 (X축 -50%) */
            transition: transform 0.1s ease-out;
            /* 움직임을 부드럽게 만듦 */
        }
        .section2 {
            border: 5px solid blue;
            height: 87%;
            // height: 25%;
            // width: 95vw;
            // display: flex;
            /* 컨테이너를 화면 중앙에 정렬하기 위해 flex 사용 */
            justify-content: center;
            /* 가로 방향으로 중앙 정렬 */
            align-items: center;
            /* 세로 방향으로 중앙 정렬 */
            // position: relative;
            /* 내부 요소의 절대 위치를 기준으로 설정 */
            /* overflow: hidden;*/
            /* SVG가 컨테이너를 넘어가는 것을 숨김 */
        }

</style>