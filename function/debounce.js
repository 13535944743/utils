// 函数防抖
function debounce(callback, time) {
  let timer = null  // 定时器变量

  return function (e) {
    clearTimeout(timer)   // 每一次新的触发都会把前一次的定时器给清除掉，直到没有新的触发且时间经过time毫秒后才调用callback

    // 启动计时器
    timer = setTimeout(() => {
      callback.call(this, e)
    }, time)
  }
}