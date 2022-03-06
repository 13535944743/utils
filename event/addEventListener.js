// 自定义事件委托函数：获取真正触发事件的目标元素，若和子元素相匹配，则使用call调用回调函数(this指向，变更为target)
function addEventListener(el, type, fn, selector) { // selector是子元素
  el = document.querySelector(el)

  if (!selector) {
    el.addEventListener(type, fn)  // 没有传递子元素的选择器，则是普通的给el元素绑定事件
  } else {
    el.addEventListener(type, function (e) {
      const target = e.target   // 获取真正触发事件的目标元素

      if (target.matches(selector)) {  // 判断选择器与目标元素是否符合
        fn.call(target, e)
      }
    })
  }
}