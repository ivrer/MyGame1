<template>
  <div class="z-wrap" ref="zRef">
    <b class="c"></b>
    <b class="c"></b>
    <div class="clear"></div>
    <em class="space"></em>
    <b class="c"></b>
    <b class="c"></b>
  </div>

  <div class="button">
    <button ref="buttonRef" @click="changeZ">dianji</button>
  </div>
</template>

<script setup>  
import { onMounted, ref } from "vue";

let changeZ = (e) => {
    e =e||window.event
    let keyframes = {
       transform:["rotate(0turn)","rotate(0.25turn)"]
    }
    let options = {
        duration:1000
    }
    const webAnimation = zRef.value.animate(keyframes,options)

    webAnimation.play()

}


let buttonRef = ref(null)
let zRef = ref(null)

onMounted(() => {

})

</script>

<style lang="scss" scoped>



    .z-wrap{
        float: left;
    }
    .c{
        font: 20px/1 HanHei SC,PingHei,PingFang SC,STHeitiSC-Light,Helvetica Neue,Helvetica,Arial,sans-serif;
        cursor: default;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        direction: ltr;
        text-align: left;
        box-sizing: border-box;
        user-select: none;
        display: block;
        width: 20px;
        height: 20px;
        padding: 2px;
        border: 2px solid #879372;
        margin: 0 2px 2px 0;
        float: left;
        border-color: #000;
        font-weight: bold;
        &::after{
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            overflow: hidden;
            background-color: #000;
        }
    }
    .clear{
        clear: both;
    }
    .space{
        font: 20px/1 HanHei SC,PingHei,PingFang SC,STHeitiSC-Light,Helvetica Neue,Helvetica,Arial,sans-serif;
        cursor: default;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        direction: ltr;
        text-align: left;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
        display: block;
        width: 22px;
        height: 22px;
        overflow: hidden;
        float: left;
    }
</style>