// 数组去重方法1：forEach() + indexOf()
function unique(arr) {
  const ret = []

  arr.forEach(item => {
    if (ret.indexOf(item) === -1) {   // 如果数组中不存在当前值，则存进去
      ret.push(item)
    }
  })

  return ret
}