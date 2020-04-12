import axios from 'axios'
import { Toast } from 'vant'
import store from '@store'
import { getToken } from '@utils/auth'

const SUCCESS_CODE = 1

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_HOST,
  timeout: 5000,
})

// 拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 配置请求头相关
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  (error) => {
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== SUCCESS_CODE) {
      Toast({
        message: res.message || 'Error',
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    // console.log('err' + error) // for debug
    Toast({
      message: error.message,
    })
    return Promise.reject(error)
  }
)

export default axiosInstance
