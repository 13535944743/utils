// 数组分块：这里用了比较巧妙的方法。暂存分块好的数组为0时，把它push到ret数组中，然后通过数组的引用性质，给temp数组push值，从而也改变ret数组的值
export function chunk(arr, size = 1) {
  let ret = []
  let temp = [] // 暂存分块好的数组，再push到ret中

  arr.forEach(item => {
    if (temp.length === 0) {
      ret.push(temp)
      // console.log(1, ret)   // 如需测试，请在node环境测试
    }

    temp.push(item)
    // console.log(2, ret)

    if (temp.length === size) {
      temp = []
    }
  })

  return ret
}

// console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3))