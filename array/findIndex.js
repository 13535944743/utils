// findIndex函数的封装实现
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return i
    }
  }

  return -1
}