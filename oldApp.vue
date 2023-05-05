<template>
  
</template>

<script setup>

import { produce } from 'immer'

let points
let container = ref(null)
let curPoints
let nextPoints
let downTiming
let flag = false
let pointsList = new Set()

const box_shape = {
    "0": [[1, 1, 1, 1]],
    "1": [
      [0, 0, 1],
      [1, 1, 1]
    ],
    "2": [
      [0, 1, 0],
      [1, 1, 1]
    ],
    "3": [
      [1, 1, 0],
      [0, 1, 1]
    ],
    "4": [
      [1, 1],
      [1, 1]
    ]
  }


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


let getCurrentXY = (item = []) => {
  let x = item[0]
  let y = item[1]
  if (y < 0) {
    return false
  }
  let yList = Array.from(container.value.children)
  let xList = Array.from(yList[y].children)
  let currentElement = xList[x]
  return currentElement
}



let renderBlock = (item = []) => {
  item.forEach((item, index) => {
    let curEl = getCurrentXY(item)
    if (!curEl) {
      return false
    } else {
      curEl.classList.add("c")
    }

  })
}

let clearBlock = (oldPoints) => {
  oldPoints.forEach((item, index) => {
    let curEl = getCurrentXY(item)
    if (!curEl) {
      return false
    } else {
      curEl.classList.remove("c")
    }
  })
}

let addPoints = (params) => {
  params.forEach((item, index) => {
    pointsList.add(item)
  })
  let tmp = {} //统计格子

  for(const value of pointsList){
    let y = value[1]
    let key = String(y)
    if(!tmp[key]){
      tmp[key] = []
      tmp[key].push(value)
    }else{
      tmp[key].push(value)
    }
  }
  let distoryBox = []

  for(let item in tmp){
    if(tmp[item].length>9){
      distoryBox.push(item)
    }
  }
  if(distoryBox.length!==0){

    clearBlock(pointsList)

    for(const value of distoryBox){
      for(const secValue of pointsList){
        let number  =Number(value)
        if(number==secValue[1]){
          pointsList.delete(secValue)
        }
      }
    }

    let newPointList = new Set()

    pointsList.forEach ((item) => {
   
      let increaseNum = distoryBox.length
      let check = distoryBox.find((el) => {
        if(item[1]<Number(el)){
          return true
        }      
      }) 
      if(check){
        item = [item[0],item[1]+increaseNum]
        newPointList.add(item)
      }else{
        newPointList.add(item)
      }
    })

    pointsList = newPointList
    renderBlock(pointsList)
  }
}

let down = () => {

  if (flag) {
    oldPoints = produce(curPoints, (draft) => {

    })
    let nextPoints = produce(curPoints, (draft) => {
      draft.forEach((item, index) => {
        item[1] = item[1] + 1
      })
    })
    let { x: [mixX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)

    let judge = checkDown(nextPoints, maxY)

    if (judge) {
      clearBlock(oldPoints)
      renderBlock(nextPoints)
      curPoints = produce(nextPoints, () => {
      })

    } else {
      addPoints(curPoints)
      loading()
    }

  }
}

let checkLeft = (nextPoints, minX) => {

  if (minX < 0) {
    return false
  }
  for (const value of pointsList) {
    for (let item of nextPoints) {
      if (value.join() == item.join()) {
        return false
      }
    }
  }

  return true
}

let checkDown = (nextPoints, maxY) => {
  if (maxY > 17) {
    return false
  }
  for (const value of pointsList) {
    for (let item of nextPoints) {
      if (value.join() == item.join()) {
        return false
      }
    }
  }
  return true
}

let checkRight = (nextPoints, maxX) => {

  if (maxX > 9) {
    return false
  }
  for (const value of pointsList) {
    for (let item of nextPoints) {
      if (value.join() == item.join()) {
        return false
      }
    }
  }

  return true

}

let right = () => {

  if (flag) {
    oldPoints = produce(curPoints, (draft) => {
    })

    let nextPoints = produce(curPoints, (draft) => {
      draft.forEach((item, index) => {
        item[0] = item[0] + 1
      })
    })

    let { x: [minX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)

    let judge = checkRight(nextPoints, maxX)

    if (judge) {
      clearBlock(oldPoints)
      renderBlock(nextPoints)
      curPoints = produce(nextPoints, () => {
      })
    }
  }
}
let left = () => {

  if (flag) {
    oldPoints = produce(curPoints, (draft) => {

    })
    let nextPoints = produce(curPoints, (draft) => {
      draft.forEach((item, index) => {
        item[0] = item[0] - 1
      })
    })

    let { x: [minX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)


    let judge = checkLeft(nextPoints, minX)


    if (judge) {
      clearBlock(oldPoints)
      renderBlock(nextPoints)
      curPoints = produce(nextPoints, () => {
      })
    }

  }




  //左右
  //如果左右两边都有已经存在的格子那么左右移动无效或者抵达边界值
  //旋转
  //如果旋转后的坐标和已经存在的坐标有一个重叠那么旋转无效
  //下落
  //如果下落后的下一个坐标和任意已知坐标相同，则下落无效并添加当前坐标到坐标库中，并生成新的box




}

let checkRotate = (nextPoints,minX,maxX) => {
  if(maxX>9||minX<0){
    return false
  }

  for (const value of pointsList) {
    for (let item of nextPoints) {
      if (value.join() == item.join()) {
        return false
      }
    }
  }

  return true

}

let rotate = () => {
  if(flag){



  }
  oldPoints = produce(curPoints, (draft) => {
  })

  let nextPoints = produce(curPoints, (draft) => {
    let centerRotate = curPoints[1]
    draft.forEach((item, index) => {
      let x = (item[1] - centerRotate[1]) + centerRotate[0]
      let y = (item[0] - centerRotate[0]) * -1 + centerRotate[1]
      item[0] = x
      item[1] = y
    })
  })
  let { x: [minX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)


  let judge = checkRotate(nextPoints,minX,maxX)


  if (judge) {
      clearBlock(oldPoints)
      renderBlock(nextPoints)
      curPoints = produce(nextPoints, () => {
      })
    }


}

let getMinMaxXY = (nextPoints = []) => {

  let borderXY = nextPoints.reduce((previousValue, currentValue) => {
    if (currentValue[0] < previousValue.x[0]) {
      previousValue.x[0] = currentValue[0]
    }
    if (currentValue[0] > previousValue.x[1]) {
      previousValue.x[1] = currentValue[0]
    }
    if (currentValue[1] < previousValue.y[0]) {
      previousValue.y[0] = currentValue[1]
    }
    if (currentValue[1] > previousValue.y[1]) {
      previousValue.y[1] = currentValue[1]
    }
    return previousValue
  }, { x: [nextPoints[0][0], nextPoints[0][0]], y: [nextPoints[0][1], nextPoints[0][1]] })

  return borderXY
}





let getBoxShape = (box_shape) => {
  let index = String(Math.floor(Math.random(0, 1) * 10 * 0.5))
  return box_shape[index]
}

</script>

<style>

</style>