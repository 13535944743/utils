// reduce函数的封装实现
function reduce(arr, callback, initValue) {
  let ret = initValue
  for (let item of arr) {
    ret = callback(ret, item)   // 每次调用都把最新的值重新赋给ret
  }

  return ret
}