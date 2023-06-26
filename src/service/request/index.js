// 对axios二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { BASE_URL, TIMEOUT } from './config'
import NProgress from 'nprogress'

class HttpRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout })

    // 设置请求拦截器
    this.instance.interceptors.request.use(config => {
      // 在请求拦截器中展示进度条
      NProgress.start()
      return config

    }, err => {
      return err
    })

    // 设置响应拦截器
    this.instance.interceptors.response.use(res => {
      // 在响应拦截器中隐藏进度条
      NProgress.done()
      return res.data
    }, err => {
      // 在响应拦截器中隐藏进度条
      NProgress.done()
      // 判断错误是否是超时错误
      ElMessage.error('网络出现错误，请刷新重试')
      return err
    })
  }

  // 发起请求
  request(config){
    return new Promise((resolve, reject) => {
      this.instance(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  /**
   * 发送get请求
   * @param {*} url 请求url地址
   * @param {*} config  请求配置
   * @returns 
   */
  get(url, config = {}){
    return this.request({ url, method: 'get', ...config })
  }

  /**
   * 发送post请求
   * @param {*} url  请求url地址
   * @param {*} data  请求参数
   * @param {*} config 请求配置
   * @returns 
   */
  post(url, data, config = {}){
    return this.request({ url, data, method: 'post', ...config })
  }
}

export default new HttpRequest(BASE_URL, TIMEOUT)