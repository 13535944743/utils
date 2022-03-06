// 数组去重方法3：Set + Array.from() 或 扩展运算符(...)
function unique(arr) {
  let set = new Set(arr)
  // return Array.from(set)      // Array.from()可以通过可迭代对象(包括数组、Set等)创建一个新的数组

  return [...set]   // 使用ES6的扩展运算符`...`
}