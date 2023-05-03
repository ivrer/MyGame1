<script setup>
import { onMounted, ref } from "vue"
import {produce} from 'immer'

let box_shape = [
  [1,1,0],
  [0,1,1]
]

let getPoints = (box_shape) => {
  let temp = []
  if(box_shape.length>1){
    box_shape[0].map((item,index) => {
      if(item==1){
        temp.push([index+4,-1])
      }
    })

    box_shape[1].map((item,index) => {
      if(item==1){
        temp.push([index+4,0])
      }
    })
    
  }

  if(box_shape.length=1){
    box_shape.map((item,index) => {
      if(item==1){
        temp.push([index+4,0])
      }
    })
  }
  return temp
}

let points

let container = ref(null)

let getCurrentXY = (item=[]) => {
  let x = item[0]
  let y = item[1]
  if(y<0){
    return false
  }
  let yList = Array.from(container.value.children)
  let xList = Array.from(yList[y].children)
  let currentElement = xList[x]
  return currentElement
}

let oldPoints 
let curPoints

let renderBlock= (item=[]) => {
  item.forEach((item,index) => {
    let curEl = getCurrentXY(item)
    if(!curEl){
      return false
    }else{
      curEl.classList.add("c")
    }
   
  })
}

let clearBlock = (oldPoints) => {
  oldPoints.forEach((item,index) => {
    let curEl = getCurrentXY(item)
    if(!curEl){
      return false
    }else{
      curEl.classList.remove("c")
    }
  })
}

let down = () => {
  oldPoints = produce(curPoints,(draft) => {
    
  })
 let nextPoints  = produce(curPoints,(draft) => {
    draft.forEach((item,index) => {
     item[1] = item[1] + 1
    })
  })

    
  let flag = checkXY(nextPoints)
  if(flag){
    clearBlock(oldPoints)
    renderBlock(nextPoints)
    curPoints =produce(nextPoints,() => {
    })
  }

}

let right = () => {

  oldPoints = produce(curPoints,(draft) => {
    
  })
 let nextPoints  = produce(curPoints,(draft) => {
    draft.forEach((item,index) => {
     item[0] = item[0] + 1
    })
  })


  let flag = checkXY(nextPoints)
  if(flag){
    clearBlock(oldPoints)
    renderBlock(nextPoints)
    curPoints =produce(nextPoints,() => {
    })
  }
  
}
let left = () => {
  oldPoints = produce(curPoints,(draft) => {
    
  })
 let nextPoints  = produce(curPoints,(draft) => {
    draft.forEach((item,index) => {
     item[0] = item[0] -1 
    })
  })


  let flag = checkXY(nextPoints)
  if(flag){
    clearBlock(oldPoints)
    renderBlock(nextPoints)
    curPoints =produce(nextPoints,() => {
    })
  }
  
}

let rotate = () => {
  oldPoints = produce(curPoints,(draft) => {
  })

  let nextPoints = produce(curPoints,(draft) => {
    let centerRotate = curPoints[1]
    draft.forEach((item,index) => {
      let x = (item[1] - centerRotate[1]) + centerRotate[0]
      let y = (item[0]-centerRotate[0])*-1 + centerRotate[1]
      item[0] = x
      item[1] = y
    })
  })
  let flag = checkXY(nextPoints)
  if(flag){
    clearBlock(oldPoints)
    renderBlock(nextPoints)
    curPoints =produce(nextPoints,() => {
    })
  }

  console.log(nextPoints);
}

let checkXY = (nextPoints=[]) => {

  let borderXY = nextPoints.reduce((previousValue,currentValue) => {
    if(currentValue[0]<previousValue.x[0]){
      previousValue.x[0] = currentValue[0]
    }
    if(currentValue[0]>previousValue.x[1]){
      previousValue.x[1] = currentValue[0]
    }
    if(currentValue[1]<previousValue.y[0]){
      previousValue.y[0] = currentValue[1]
    }
    if(currentValue[1]>previousValue.y[1]){
      previousValue.y[1] = currentValue[1]
    }
    return previousValue
  },{x:[nextPoints[0][0],nextPoints[0][0]],y:[nextPoints[0][1],nextPoints[0][1]]})
  if(borderXY.x[1]>9||borderXY.x[0]<0){
    return false
  }
  if(borderXY.y[1]>17){
    return false
  }

  return true
}

onMounted(() => {
 
  points  = getPoints(box_shape)

  curPoints = produce(points,(draft) => {
    
  })
  console.log(points,curPoints);
 renderBlock(curPoints)

 
})


</script>

<template>
  <div class="containner-wrap">
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
    <button @click="right">右移动</button>
    <button @click="down">向下</button>
    <button @click="left">向左</button>
    <button @click="rotate">旋转</button>
  </div>
</template>

<style scoped lang="scss">

@mixin myblock {
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
  border-color: #879372;
  font-weight: bold;
  &::after{
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      overflow: hidden;
      background-color: #ccc;
  }
}
  .containner-wrap{

   position: absolute;
    width: 700px;
    height: 800px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:0 auto;

    .containner{
      width: 220px;
      border: solid 1px black;
      height: 400px ;
    }
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  p{
    width: 220px;
    height: 22px;
  }

  b{
    @include myblock();
  }
  b.c{
    &::after{
      background-color:black;
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
