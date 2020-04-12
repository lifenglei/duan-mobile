import axios from 'axios' // 引入axios
import qs from 'qs' // 引入qs
// import { tx } from "./api";
import { baseUrl } from './env'
import { Toast } from 'vant'
import { getCookie, isExist } from './mUtils'

const SUCCESS_CODE = 0 // 请求成功code
const SYSTEMERR_CODE = 999 // 系统错误code
const TOKEN_NAME = 'PET_TOKEN'

// 错误信息提示方法
function showToast(message, duration = 2000) {
  Toast({
    forbidClick: true,
    message,
    duration,
  })
}

// 创建axios实例
const axiosInstance = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API_HOST,
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true, // 表示跨域请求时是否需要使用凭证
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

// 拦截器
axiosInstance.interceptors.request.use(
  // 这里的config为请求方法传入的对象+默认参数
  (config) => {
    return config
  },
  (error) => {
    console.log(error) // 打印错误日志
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data
    // console.log(res);
    const resultMsg = res.resultMsg
    if (res.code === SUCCESS_CODE) {
      return res
    } else if (res.code === SYSTEMERR_CODE) {
      showToast('系统错误，请联系客服')
      return Promise.reject(res)
    } else {
      if (isExist(resultMsg)) {
        if (resultMsg === '未登录，请先登录！' || resultMsg === 'The token is missing or expired!') {
          // tx();
          return Promise.reject(res)
        } else {
          const leng = resultMsg.length
          if (leng >= 35 && leng <= 50) {
            showToast(resultMsg, 3500)
          } else if (leng > 51 && leng <= 70) {
            showToast(resultMsg, 4000)
          } else if (leng > 70) {
            showToast(resultMsg, 4500)
          } else {
            showToast(resultMsg)
          }
          return Promise.reject(res)
        }
      }
    }
  },
  (error) => {
    Toast({
      message: error.message,
    })
    return Promise.reject(error)
  }
)
/**
 * @description 请求方法 风格和htbb_mobile一致
 * @param { string} method 请求方法
 * @param { string } url 请求地址
 * @param { object } data 请求参数
 * @param { object} optionalParams 选填参数
 * @param { boolean } optionalParams.headersType 是否显示加载，默认不显示
 * @param { string } optionalParams.otherUrl 需要替换掉的新api地址
 * @param { boolean } optionalParams.showLoading 是否显示加载，默认不显示
 * @return { function } Promise
 */

export const fetch = (method, url, data = {}, optionalParams = {}) => {
  const requestMethod = method.toLocaleUpperCase()
  const token = getCookie(TOKEN_NAME) || ''
  const requestTime = new Date().getTime()
  data.token = token
  data.requestTime = requestTime
  const requestOption = {}
  requestOption.url = url
  requestOption.baseURL = optionalParams.otherUrl || baseUrl
  // 根据请求方法判断
  if (requestMethod === 'GET') {
    requestOption.method = 'get'
    requestOption.params = data
  } else if (requestMethod === 'POST') {
    requestOption.method = 'post'
    // 特殊请求头
    if (optionalParams.headersType) {
      if (optionalParams.headersType === 'form') {
        requestOption.headers = { 'Content-Type': 'multipart/form-data' }
      } else if (optionalParams.headersType === 'json') {
        requestOption.headers = { 'Content-Type': 'application/json;charset=UTF-8' }
        requestOption.withCredentials = false
      }
      requestOption.data = data
    } else {
      requestOption.data = qs.stringify(data)
    }
  }
  // 是否需要loading样式
  if (optionalParams.showLoading) {
    // 开启loading
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
    })
  }
  const request = axiosInstance(requestOption)
    .then((res) => {
      if (optionalParams.showLoading) {
        Toast.clear()
      }
      return Promise.resolve(res)
    })
    .catch((error) => {
      return Promise.reject(error)
    })
  return request
}
