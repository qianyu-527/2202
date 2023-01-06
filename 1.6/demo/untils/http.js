import axios from 'axios'
import { MessageBox } from 'element-ui'
import { getToken } from './cooks'

const http = axios.create({
  baseURL: '/',
  // /是所有得
  timeout: 1000 * 30,
  // 超时时间变成了毫秒
  withCredentials: true,
  // 跨域是否开启凭证
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    // 请求带上token
    config.headers['Authorization'] = getToken()
    // 在发送请求之间做写什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 对响应错误做点什么
    let title = ''
    let message = ''
    if (error && error.response) {
      switch (
        error.response.status //跨域存在获取不到状态码得情况
      ) {
        case 400:
          title = '错误请求'
          break
        case 401:
          title = '资源未授权'
          break
        case 403:
          title = '禁止访问'
          break
        case 404:
          title = '未找到所请求得资源'
          break
        default:
          title = error.response.status
      }
      return MessageBox.alert(message, title, {
        type: 'warning'
      })
    } else {
      return MessageBox.alert('请联系系统管理员', '未知错误', {
        type: 'error'
      })
    }
    // return Promise.reject(error)
  }
)
// 添加一个动态请求地址
http.addorUrl = (actionName) => {
  return process.env.VUE_APP_BASE_API + actionName
}
// //封装post请求
http.send = (url, data = {}, method = 'get', contentType = 'json') => {
  return http({
    method: 'post',
    url: http.addorUrl(url),
    data,
    headers: {
      'Content-Type':
        contentType === 'json'
          ? 'application/json; charset=utf-8'
          : 'multipart/form-data;boundary=something'
    }
  })
}
export default http
