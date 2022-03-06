// 封装axios
function axios({ url, method = 'GET', params = {}, data = {} }) {

  return new Promise((resolve, reject) => {

    method = method.toUpperCase()

    let queryString = ''
    Object.keys(params).forEach(key => {
      queryString += `${key}=${params[key]}&`       // 查询参数以key1=value1&key2=value2的形式连接起来
    })

    queryString = queryString.slice(0, -1)    // 去掉后面可能出现的&
    url += `?${queryString}`

    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    if (method === 'GET') {
      xhr.send()
    } else {
      xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8')
      xhr.send(JSON.stringify(data))          // 只能发送字符串形式的数据
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {

        const { status } = xhr
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = {
            status,
            data: JSON.parse(xhr.response)
          }

          resolve(response)
        } else {
          reject(`${status}`)
        }
      }
    }
  })
}



axios.get = (url, options) => {
  return axios(Object.assign(options, { url, method: 'GET' }));     // 把methods和url合并到options中去
}

axios.post = (url, options) => {
  return axios(Object.assign(options, { url, method: 'POST' }));
}

axios.put = (url, options) => {
  return axios(Object.assign(options, { url, method: 'PUT' }));
}

axios.delete = (url, options) => {
  return axios(Object.assign(options, { url, method: 'DELETE' }));
}