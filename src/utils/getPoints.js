
/**
 * 
 * @param {*} arr []传入描述格子形状的数组
 * @returns 根据形状返回初始状态下的一组坐标
 */

export const getPoints = (arr = []) => {
    let temp = []
    if (arr.length > 1) {
      arr[0].map((item, index) => {
        if (item == 1) {
          temp.push([index + 4, -1])
        }
      })
  
      arr[1].map((item, index) => {
        if (item == 1) {
          temp.push([index + 4, 0])
        }
      })
  
    }
  
    if (arr.length == 1) {
      arr[0].map((item, index) => {
        if (item == 1) {
          temp.push([index + 4, 0])
        }
      })
    }
  
    return temp
  }