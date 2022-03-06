// 自定义instanceof

function myInstanceof(obj, fn) {
  let prototype = fn.prototype  // 获取函数的显示原型

  let proto = obj.__proto__   // 获取obj的隐式原型对象

  // 遍历原型链
  while (proto) {
    if (prototype === proto) {
      return true
    }
    proto = proto.__proto__
  }
  return false
}