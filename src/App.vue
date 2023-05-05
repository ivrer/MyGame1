<script setup>
import { ref } from "vue"
import box_shape from "./assets/box_shape";
import { produce } from 'immer'
import getBoxShape from "./utils/getBoxShape"
import {getPoints} from "./utils/getPoints"
import {renderBlock,clearBlock} from "./utils/renderBlock"
import {down,rotate,left,right} from "./utils/constrolAction/action"
import { checkDown,checkLeft,checkRight,checkRotate } from './utils/constrolAction/checkAction'
import { addPoints } from "./utils/addPoints";

let points
let container = ref(null)
let curPoints
let nextPoints
let downTiming
let flag = false
let pointsList = new Set()

let loading = () => {
  flag = true
  clearInterval(downTiming)
  downTiming = null
  let box = getBoxShape(box_shape)
  points = getPoints(box)
  curPoints = produce(points, (draft) => {
  })
  renderBlock(curPoints,container)
  downTiming = setInterval(move,1000,"down")
}

function move(action = "") {
  let judge = false

  if(flag){
    return 
  }
  switch (action) {
    case "down":
      nextPoints = down(curPoints)
      judge = checkDown(nextPoints, pointsList)
      if (judge) {
        clearBlock(curPoints, container)
        renderBlock(nextPoints, container)
        curPoints = produce(nextPoints, () => {
        })
      } else {
        let check = addPoints(curPoints,pointsList,container)
        if(check){
          pointsList = check
          renderBlock(pointsList,container)
        }
        loading()
      }
      break;
    case "left":
      nextPoints = left(curPoints)
      judge = checkLeft(nextPoints, pointsList)
      if (judge) {
        clearBlock(curPoints, container)
        renderBlock(nextPoints, container)
        curPoints = produce(nextPoints, () => {
        })
      }
      break;
    case "right":
      nextPoints = right(curPoints)
      judge = checkRight(nextPoints, pointsList)
      if (judge) {
        clearBlock(curPoints, container)
        renderBlock(nextPoints, container)
        curPoints = produce(nextPoints, () => {
        })
      }
      break;
    case "rotate":
      nextPoints = rotate(curPoints)
      judge = checkRotate(nextPoints, pointsList)
      if (judge) {
        clearBlock(curPoints, container)
        renderBlock(nextPoints, container)
        curPoints = produce(nextPoints, () => {
        })
      }
      break;

    default:
      break
  }
}

let start = () => {
  loading()
}

let body = document.querySelector('body')
body.addEventListener("keydown",(e) => {
  e.preventDefault()

 if(e.key=="ArrowRight"){
  move(`right`)
 }
 if(e.key=="ArrowLeft"){
  move(`left`)
 }
 if(e.key=="ArrowDown"){
  move(`down`)
 }
 if(e.key=="ArrowUp"){
  move(`rotate`)
 }
})


//暂停还没解决完整
let pause = () => {
  clearInterval(downTiming)
  downTiming=null
}
</script>

<template>
  <div class="containner-wrap" @keydown.down="down" @keydown.right="right">
    <div class="containner" ref="container">
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
      <p>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
      </p>
    </div>
  </div>
  <div class="button">
    <button @click="move(`right`)" >右移动</button>
    <button @click="move(`down`)" >向下</button>
    <button @click="move(`left`)">向左</button>
    <button @click="move(`rotate`)">旋转</button>
    <button @click="start">开始</button>
    <button @click="pause">暂停</button>
  </div>
</template>

<style scoped lang="scss">
@mixin myblock {
  font: 20px/1 HanHei SC, PingHei, PingFang SC, STHeitiSC-Light, Helvetica Neue, Helvetica, Arial, sans-serif;
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
  border-color: #879372;
  font-weight: bold;

  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    overflow: hidden;
    background-color: #ccc;
  }
}

.containner-wrap {

  position: absolute;
  width: 700px;
  height: 800px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  .containner {
    width: 220px;
    border: solid 1px black;
    height: 400px;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}

p {
  width: 220px;
  height: 22px;
}

b {
  @include myblock();
}

b.c {
  &::after {
    background-color: black;
  }
}

.clear {
  clear: both;
}

.space {
  font: 20px/1 HanHei SC, PingHei, PingFang SC, STHeitiSC-Light, Helvetica Neue, Helvetica, Arial, sans-serif;
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
}</style>
