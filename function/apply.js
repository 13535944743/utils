// apply函数封装实现
function apply(fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = globalThis
  }
  obj.temp = fn

  let result = obj.temp(...args)

  delete obj.temp

  return result
}