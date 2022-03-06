// Promise笔记：https://clz.vercel.app/tags/Promise/
class Promise {
  constructor(executor) {
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callbacks = []

    // resolve函数
    const resolve = (data) => {
      if (this.PromiseState !== 'pending') {
        return
      }

      // 1. 修改对象的状态(promiseState)
      this.PromiseState = 'fulfilled'

      // 2. 设置对象结果值(promiseResult)
      this.PromiseResult = data

      setTimeout(() => {
        this.callbacks.forEach(item => {
          item.onResolved(data)
        })
      })

    }

    // reject函数
    const reject = (data) => {
      if (this.PromiseState !== 'pending') {
        return
      }

      // 1. 修改对象的状态(promiseState)
      this.PromiseState = 'rejected'

      // 2. 设置对象结果值(promiseResult)
      this.PromiseResult = data

      setTimeout(() => {
        this.callbacks.forEach(item => {
          item.onRejected(data)
        })
      })

    }

    // 实现抛出异常改变promise状态
    try {
      // 同步调用执行器函数executor
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onResolved, onRejected) {

    if (typeof onRejected !== 'function') {
      onRejected = reason => {
        throw reason
      }
    }

    if (typeof onResolved !== 'function') {
      onResolved = value => value
    }

    return new Promise((resolve, reject) => {
      const self = this

      function callback(type) {
        try {
          // 获取回调函数的执行结果
          const result = type(self.PromiseResult)

          if (result instanceof Promise) {
            // 结果是Promise类型对象 
            result.then(v => {
              resolve(v)
            }, r => {
              reject(r)
            })
          } else {
            resolve(result)
          }

        } catch (e) {
          reject(e)
        }
      }

      if (this.PromiseState === 'fulfilled') {
        setTimeout(() => {
          callback(onResolved)
        })
      }
      else if (this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onRejected)
        })
      } else {
        this.callbacks.push({
          onResolved: function () {
            callback(onResolved)
          },
          onRejected: function () {
            callback(onRejected)
          }
        })
      }
    })

  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  // resolve方法(静态方法，属于类而不是属于实例对象)
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      } else {
        resolve(value)
      }
    })
  }

  // reject方法
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  // all方法
  static all(promises) {
    return new Promise((resolve, reject) => {
      let arr = []
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          arr[i] = v
          if (arr.length === promises.length) {
            resolve(arr)
          }
        }, r => {
          reject(r)
        })
      }
    })
  }

  // race方法
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          resolve(v)
        }, r => {
          reject(r)
        })
      }
    })
  }
}

