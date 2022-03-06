// 深拷贝3
function deepClone(target, map = new Map()) {
  if (typeof target === 'object' && target !== null) {
    const cache = map.get(target)
    if (cache) {
      return cache    // 有拷贝过的话，直接返回之前拷贝过的数据
    }

    const ret = Array.isArray(target) ? [] : {}

    map.set(target, ret)      // 键为拷贝的目标，值为拷贝的结果

    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        ret[index] = deepClone(item, map)
      })
    } else {
      Object.keys(target).forEach(key => {
        ret[key] = deepClone(target[key], map)
      })
    }

    return ret
  } else {
    return target
  }
}

const obj = { x: 'clz', y: { age: 21 }, z: { name: 'clz' }, f: function () { } }

obj.y.z = obj.z
obj.z.y = obj.y  // 循环引用可能会造成死循环

const cloneObj = deepClone(obj)

obj.y.age = 111
console.log(obj, cloneObj)



