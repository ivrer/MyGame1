
/**
 * @param {item} [] 接受一组坐标
 * //并根据坐标获得对应的element，并添加样式
 */
export const renderBlock = (item = [],container) => {
    item.forEach((item, index) => {
      let curEl = getCurrentXY(item,container)
      if (!curEl) {
        return false
      } else {
        curEl.classList.add("c")
      }
  
    })
  }


  /**
   * 
   * @param {oldPoints} [] 将当前点的坐标记录成旧坐标
   * 
   * 区域清除当前所有坐标点所对应的element的样式
   */
export const clearBlock = (oldPoints,container) => {
    oldPoints.forEach((item, index) => {
        let curEl = getCurrentXY(item,container)
        if (!curEl) {
        return false
        } else {
        curEl.classList.remove("c")
        }
    })
}

/**
 * 
 * @param {*} item [] 接受一个点的坐标如【1，0】
 * @returns 返回对应页面的element
 */

export const getCurrentXY = (item = [],container) => {

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