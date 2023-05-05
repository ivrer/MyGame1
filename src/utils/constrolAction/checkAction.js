import { getMinMaxXY } from '../getMinMaxXY'

export let checkDown = (nextPoints,pointsList) => {
    let { x: [minX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)

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

export let checkLeft = (nextPoints,pointsList) => {
    let { x: [minX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)

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

export let checkRight = (nextPoints,pointsList) => {
    let { x: [minX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)

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

export let checkRotate = (nextPoints,pointsList) => {

    let { x: [minX, maxX], y: [minY, maxY] } = getMinMaxXY(nextPoints)

    if (maxX > 9 || minX < 0) {
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