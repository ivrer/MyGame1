/**
 * 
 * @param {*} nextPoints [] 接受一组坐标数据，语义是格子下一步的坐标 
 * @returns 返回下一步坐标中，横纵坐标的最大最小值
 */

export const getMinMaxXY = (nextPoints = []) => {

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