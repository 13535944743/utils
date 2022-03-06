// 数组差集
function difference(arr1, arr2 = []) {
  if (arr1.length === 0) {
    return []
  }
  if (arr2.length === 0) {
    return arr1.slice()
  }

  let ret = arr1.filter(item => !arr2.includes(item))
  return ret
}

// console.log(difference([1, 2, 3, 4], [3, 4, 5]))