// 函数节流
function throttle(callback, wait) {
  // 定义开始时间
  let start = 0

  // 返回结果是一个函数
  return function (event) {
    // 获取当前时间戳
    let now = Date.now()

    if (now - start >= wait) {
      callback.call(this, event)   // 满足条件，执行回调函数

      // 修改开始时间
      start = now
    }
  }
}


// // 之前青训营时，月影老师教的版本：通过定义一个计时器，当计时器到期时，清除之前的计时器，而清除计时器的时候才可以再次调用回调函数
// function throttle(fn, time = 500) {
//   let timer;
//   return function (...args) {
//     if (timer == null) {
//       fn.apply(this, args);
//       timer = setTimeout(() => {
//         timer = null;	/* 到期的话，清除之前的计时器 */
//       }, time)
//     }
//   }
// }
