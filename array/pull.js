// 删除数组中部分元素
function pull(arr, ...args) {
  const ret = []  // 保存删除的元素

  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) {
      ret.push(arr[[i]])

      arr.splice(i, 1)

      i--
    }
  }

  return ret
}


// let arr = [1, 2, 3, 4]
// console.log(pull(arr, 3, 2, 7))

// console.log(arr)