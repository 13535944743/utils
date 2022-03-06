// 事件总线
// on(eventName, listener): 绑定事件监听
// emit(eventName, data): 分发事件
// off(eventName): 解绑指定事件名的事件监听, 如果没有指定解绑所有

class EventBus {
  constructor() {
    this.callbacks = {}
  }

  on(eventName, fn) {
    if (this.callbacks[eventName]) {
      this.callbacks[eventName].push(fn)
    } else {
      this.callbacks[eventName] = [fn]
    }
  }

  emit(eventName, data) {
    let callbacks = this.callbacks[eventName]
    if (callbacks && this.callbacks[eventName].length !== 0) {
      callbacks.forEach(callback => {
        callback(data)
      })
    }
  }

  off(eventName) {
    if (eventName) {
      if (this.callbacks[eventName]) {
        delete this.callbacks[eventName]
      }
    } else {
      this.callbacks = {}
    }
  }
}