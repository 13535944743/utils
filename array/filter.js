// filter函数的封装实现
function filter(arr, callback) {
  let ret = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      ret.push(arr[i])
    }
  }

  return ret
}