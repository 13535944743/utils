// map函数的封装实现
function map(arr, callback) {
  let ret = []

  for (let i = 0; i < arr.length; i++) {
    ret.push(callback(arr[i], i))
  }

  return ret
}