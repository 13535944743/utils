// 创建对象

function newInstance(fn, ...args) {
  const obj = {}

  const ret = fn.call(fn.call(obj, ...args))

  obj.__proto__ = fn.prototype    // 修改新对象的原型对象

  return ret instanceof Object ? ret : obj    // 如果ret是对象则直接返回ret，不是则返回新创建的对象
}