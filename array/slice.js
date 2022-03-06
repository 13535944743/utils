// slice函数实现
function slice(arr, begin, end) {
  if (arr.length === 0) {
    return []
  }

  begin = begin || 0    // 如果begin没有传，则从0开始切
  if (begin >= arr.length) {
    return []
  }

  end = end || arr.length

  const ret = []
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      ret.push(arr[i])
    }
  }

  return ret
}