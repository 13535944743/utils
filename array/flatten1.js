// 数组扁平化(1): 通过concat和forEach实现，遇到多维数组时，通过递归调用flatten实现扁平化
function flatten(arr) {
  let ret = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      ret = ret.concat(flatten(item))   // 如果是数组，继续打平
    } else {
      ret = ret.concat(item)
    }
  })

  return ret
}