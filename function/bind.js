// bind函数封装实现
function bind(fn, obj, ...args1) {
  return function (...args2) {
    return fn.call(obj, ...args1, ...args2)      // 如果传两次参数，则只有第一次的参数会起作用。如果只传一次，则那一次的参数就会起作用
  }
}