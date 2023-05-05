/**
 * 添加格子，并更加已有的格子，判断是否需要销毁，并对销毁后的坐标进行更改
 * @param {*} params 要添加的格子
 */

import { clearBlock } from "./renderBlock"

export const addPoints = (params,pointsList,element) => {
    //参数添加至格子库中
    params.forEach((item, index) => {
        pointsList.add(item)
    })


    //遍历库，统计各行数据存储在tmp
    let tmp = {} 

    for (const value of pointsList) {
        let y = value[1]
        let key = String(y)
        if (!tmp[key]) {
            tmp[key] = []
            tmp[key].push(value)
        } else {
            tmp[key].push(value)
        }
    }

    //需要销毁数据
    let distoryBox = []

    for (let item in tmp) {
        if (tmp[item].length > 9) {
            distoryBox.push(item)
        }
    }

    //存在销毁即格子库删除
    if (distoryBox.length !== 0) {

        clearBlock(pointsList,element)
        for (const value of distoryBox) {
            for (const secValue of pointsList) {
                let number = Number(value)
                if (number == secValue[1]) {
                    pointsList.delete(secValue)
                }
            }
        }

        let newPointsList = new Set()

        //对保留数据进行坐标平移
        pointsList.forEach((item) => {

            let increaseNum = distoryBox.length
            let check = distoryBox.find((el) => {
                if (item[1] < Number(el)) {
                    return true
                }
            })
            if (check) {
                item = [item[0], item[1] + increaseNum]
                newPointsList.add(item)
            } else {
                newPointsList.add(item)
            }
        })


        return newPointsList
        
    }

    return null
}
  