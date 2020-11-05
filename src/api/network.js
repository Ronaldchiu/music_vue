import axios from 'axios'
// import Vue from 'vue'

// 进行一些全局配置
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
// 请求超时时间
axios.defaults.timeout = 5000

// 封装get方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
