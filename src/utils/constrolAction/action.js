import { produce } from 'immer'
import { clearBlock,renderBlock } from '../renderBlock'
import { addPoints } from '../addPoints'
import { getMinMaxXY } from '../getMinMaxXY'
import { checkDown,checkLeft,checkRight,checkRotate } from './checkAction'

export  const down = (curPoints) => {
      let nextPoints = produce(curPoints, (draft) => {
        draft.forEach((item, index) => {
          item[1] = item[1] + 1
        })
      })

      return nextPoints
  
  }

export let left = (curPoints) => {

        let nextPoints = produce(curPoints, (draft) => {
            draft.forEach((item, index) => {
                item[0] = item[0] - 1
            })
        })

        return nextPoints

    
}

export let right = (curPoints) => {



        let nextPoints = produce(curPoints, (draft) => {
            draft.forEach((item, index) => {
                item[0] = item[0] + 1
            })
        })

        return nextPoints
    
}


export let rotate = (curPoints) => {
        let nextPoints = produce(curPoints, (draft) => {
            let centerRotate = curPoints[1]
            draft.forEach((item, index) => {
                let x = (item[1] - centerRotate[1]) + centerRotate[0]
                let y = (item[0] - centerRotate[0]) * -1 + centerRotate[1]
                item[0] = x
                item[1] = y
            })
        })

        return nextPoints
}