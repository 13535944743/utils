// concat函数的封装实现
function concat(arr, ...args) {
  const ret = [...arr]

  args.forEach(item => {
    if (Array.isArray(item)) {   // 如果是数组，则通过扩展运算符把数组中的元素push到新数组中
      ret.push(...item)
    } else {
      ret.push(item)
    }
  })

  return ret
}