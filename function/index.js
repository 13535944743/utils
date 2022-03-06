const call = require('./call.js')

function add(a, b) {
  console.log(this)
  return a + b + this.c
}

let obj = {
  c: 3
}

// 添加全局属性
global.c = 100

console.log(call(add, obj, 1, 2)) // 6：1 + 2 + obj.c
console.log(obj) // {c: 3}

console.log(call(add, null, 1, 2)) // 103：1 + 2 + window.c