// find函数的封装实现
function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return arr[i]
    }
  }

  return undefined
}