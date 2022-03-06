// 数组去重方法2：forEach() + 对象容器
function unique(arr) {
  const ret = []
  const obj = {}      // 键是数组之前出现过的元素，值是是否有出现过。
  // 出现过值是true，没出现过只是undefined

  arr.forEach(item => {
    if (obj[item]) {
      return
    }

    obj[item] = true
    ret.push(item)
  })


  return ret
}