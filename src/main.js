import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'

import {Message} from 'element-ui'
import "./assets/scss/element-variables.scss";
// import 'element-ui/lib/theme-chalk/index.css';

import 'swiper/css/swiper.css'
import './assets/iconfont.css';

Vue.use(VueAxios,axios)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-spinning-bubbles.svg'
})
Vue.use(VueCookie)
Vue.use(Message)
Vue.prototype.$message = Message

Vue.config.productionTip = false

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res= response.data;
  let hashpath = location.hash;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    // 在其它页面未登录 ，跳转到登录页面
    if(hashpath!='#/index'){
      window.location.href = '/#/login'; 
    }  
    Message.warning(res.msg);
    return Promise.reject(res);
  }else{
    // this.$message({
    //   showClose:true,
    //   type:'warning',
    //   message:`${res.msg}` 
    // })
    // alert(res.msg)
    Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  // 拦截 http异常
  console.log(error)
  Message.error(error);
  // 抛出异常，不会再次进入到then 中
  return Promise.reject(error);
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
