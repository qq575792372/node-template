const axios = require('axios')
const env = require('../../env')

// 创建axios请求实例
const service = axios.create({
  baseURL: env.BASE_URL, // 将自动加在url前面
  timeout: 3 * 60 * 1000, // 请求超时时间，默认3分钟
  withCredentials: true, // 表示跨域请求时是否需要使用凭证
})

// axios的请求拦截
service.interceptors.request.use(httpRequest => {
  httpRequest.headers['lognToken'] = '3333333'
  httpRequest.headers['Content-Type'] = 'application/json;charset=utf-8'
  return httpRequest
}, error => {
  Promise.reject(error)
})

// axios的返回拦截
service.interceptors.response.use(httpResponse => {
  return httpResponse
}, error => {
  return Promise.reject(error);
})

module.exports = service;