// 数组扁平化(2): 通过concat函数和扩展运算符...实现
function flatten(arr) {
  let ret = [...arr]

  while (ret.some(item => Array.isArray(item))) {
    ret = [].concat(...ret)
    // 举例：arr = [1, 2, 3, 4, [5, 6]]
    // 则ret = [].concat(1, 2, 3, 4, [5, 6]) = [1, 2, 3, 4, 5, 6]
  }

  return ret
}