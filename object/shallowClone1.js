// 浅拷贝1：利用扩展运算符...实现
function shallowClone(target) {
  if (typeof target === 'object' && target !== null) {
    if (Array.isArray(target)) {
      return [...target]
    } else {
      return { ...target }
    }
  } else {
    return target   // 是null或者不是引用数据类型直接返回
  }
}

// const obj = { x: 'clz', y: { age: 21 } }
// const cloneObj = shallowClone(obj)
// console.log(cloneObj)

// obj.y.age = 111
// console.log(obj, cloneObj)    // 浅拷贝，修改旧对象的引用类型会同步修改新对象

// obj.x = 'xxx'               // 修改的若不是引用数据类型的没有影响
// console.log(obj, cloneObj)  