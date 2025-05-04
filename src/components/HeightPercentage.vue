<template>
    <div class="HPcontainer"
        id="HPcontainerId">
        <div class="HPtarget">1234</div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

    onMounted(() => {
        const container = document.querySelector('.container')
        const containerEC = document.getElementsByClassName('HPcontainer')
        const containerEI = document.getElementById('HPcontainerId')
        const HPtarget = document.querySelector('.HPtarget')

        const containerRect = container.getBoundingClientRect()
        const targetRect = HPtarget.getBoundingClientRect()
        console.log('containerEC', containercontainerEC);
        console.log('containerEI', containerEI);

        console.log(containerRect);
        console.log(targetRect);

        const targetCenterY = targetRect.top + targetRect.height / 2;
        console.log(targetCenterY);

        const containerTop = containerRect.top < 0 ? 0 : containerRect.top;
        const relativePositionY = (targetCenterY - containerTop) / containerRect.height;
        console.log(relativePositionY);

        const percentage = (relativePositionY * 100).toFixed(2)
        console.log(percentage);
    })
</script>

<style>
.HPcontainer {
    position: absolute;
    height: 400px;
    width: 100%;
    border: 1px solid #000;
    overflow: hidden;
    border: 1px solid green
}
.HPtarget {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: red
}
</style>