// 自定义消息订阅与发布
// PubSub: 包含所有功能的订阅/发布消息的管理者
// PubSub.subscribe(msg, subscriber): 订阅消息: 指定消息名和订阅者回调函数
// PubSub.publish(msg, data): 发布消息: 指定消息名和数据
// PubSub.unsubscribe(flag): 取消订阅: 根据标识取消某个或某些消息的订阅
//  1).没有传值, flag为undefined：清空全部订阅
//  2).传入token字符串: 清除唯一订阅
//  3).msgName字符串: 清除指定消息的全部订阅
export class PubSub {
  constructor() {
    this.callbacks = {}
    this.id = 0  // 订阅唯一标识
  }

  subscribe(msg, subscriber) {
    const token = 'token_' + (++this.id)

    if (this.callbacks[msg]) {    // 有过此消息的另一个订阅
      this.callbacks[msg][token] = subscriber
    } else {
      this.callbacks[msg] = {
        [token]: subscriber
      }
    }

    return token    // 返回token。用于取消唯一订阅
  }

  publish(msg, data) {
    const callbacksOfmsg = this.callbacks[msg]
    if (callbacksOfmsg) {    // 有此消息的订阅
      Object.values(callbacksOfmsg).forEach(callback => {
        callback(data)
      })
    }
  }

  unsubscribe(flag) {
    if (flag === undefined) {  // 1. 清空全部订阅
      this.callbacks = {}
    } else if (typeof flag === 'string') {
      if (flag.indexOf('token') === 0) {   // 2. 清除唯一订阅 
        const callbacks = Object.values(this.callbacks).find(callbacksOfmsg => callbacksOfmsg.hasOwnProperty(flag))    // 找到flag对应的callbacks：callbacks: {pay: {token_1: f1, token_2: f2}}
        delete callbacks[flag]
      } else {    // 3. 清除指定消息的全部订阅
        delete this.callbacks[flag]
      }
    } else {
      throw new Error('如果传入参数, 必须是字符串类型')
    }
  }
}