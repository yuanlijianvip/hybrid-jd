// axios 配置
import Vue from 'vue';
import axios from  'axios';

// 设置 axios 请求 baseUrl
axios.defaults.baseURL = 'http://api.imooc.hybrid.lgdsunday.club/';

 /**
 * 设置拦截器，interceptors 响应处理，
 */
axios.interceptors.request.use( config => {
  // 当请求中存在 params 的时候，为 params 新增 token 字段
  if (config.params) {
    config.params.token = '2cd21520-9d88-11ea-ad19-03481aa896cd';
  } 
  else {
    config.params = {
      token: '2cd21520-9d88-11ea-ad19-03481aa896cd'
    }
  }
  return config;
});   

/**
 * 设置拦截器，interceptors 响应处理
 */
 axios.interceptors.response.use((response) => {
    return response.data;
 }, (error) => {
    return Promise.reject(error);
 });

//  绑定到 vue 原型中，组件中 ： this.$http -> axios 。
 Vue.prototype.$http = axios;