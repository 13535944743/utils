// call函数封装实现
function call(fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    // 如果call函数的第二个参数undefined(包括不传参)或null时，让obj等于全局对象
    obj = globalThis  // 浏览器下globalThis是window，而node环境下则是global
  }

  // 为obj添加临时方法
  obj.temp = fn

  // 调用temp方法，此时方法中的this就是指向obj
  let result = obj.temp(...args)

  // 删除temp方法
  delete obj.temp

  return result
}

module.exports = call