// 深拷贝2: 通过递归实现：使用map来存取拷贝过的数据，每次调用函数时判断有无拷贝过，有的话，直接返回之前拷贝的数据就行了。
function deepClone(target, map = new Map()) {
  if (typeof target === 'object' && target !== null) {
    const cache = map.get(target)
    if (cache) {
      return cache    // 有拷贝过的话，直接返回之前拷贝过的数据
    }

    const ret = Array.isArray(target) ? [] : {}

    map.set(target, ret)      // 键为拷贝的目标，值为拷贝的结果

    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        ret[key] = deepClone(target[key], map) // 递归调用函数实现深拷贝，直接赋值的话则只是浅拷贝，因为是引用数据类型时只是复制了引用地址而已
      }
    }

    return ret
  } else {
    return target
  }
}

// const obj = { x: 'clz', y: { age: 21 }, z: { name: 'clz' }, f: function () { } }

// obj.y.z = obj.z
// obj.z.y = obj.y  // 循环引用可能会造成死循环

// const cloneObj = deepClone(obj)

// obj.y.age = 111
// console.log(obj, cloneObj)



