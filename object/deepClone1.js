// 深拷贝1: 通过JSON转换
function deepClone(target) {
  let str = JSON.stringify(target)    // 转换为字符串

  return JSON.parse(str)    // 再把字符串转换为对象
}

const obj = { x: 'clz', y: { age: 21 }, z: { name: 'clz' }, f: function () { } }

// obj.y.z = obj.z
// obj.z.y = obj.y  // 循环引用会报错

const cloneObj = deepClone(obj)

obj.y.age = 111
console.log(obj, cloneObj)


