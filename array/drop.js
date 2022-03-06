// 获取数组某些元素
function drop(arr, size) {
  return arr.filter((value, index) => index >= size)
}

console.log(drop([1, 3, 5, 7, 3], 2))