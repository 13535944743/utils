// 合并对象
function mergeObject(...objs) {
  let ret = {}

  for (const obj of objs) {
    for (const key of Object.keys(obj)) {
      if (ret.hasOwnProperty(key)) { // 检测ret中是否存在key属性
        ret[key] = [].concat(ret[key], obj[key])    // 原本就存在key属性的话，则是添加新属性
      } else {
        ret[key] = obj[key]   // 没有则添加
      }
    }
  }

  return ret
} 