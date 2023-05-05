
/**
 * 
 * @param {*} box_shape 传入表诉多个盒子形状的数组
 * @returns 返回随机一个形状
 */



const getBoxShape = (box_shape) => {
    let index = String(Math.floor(Math.random(0, 1) * 10 * 0.5))
    return box_shape["0"]
  }
export default  getBoxShape;