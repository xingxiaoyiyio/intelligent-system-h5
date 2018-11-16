// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/index'
import Base from './assets/js/baseFun.js'         //---------自定义的公共函数和公共请求方法
import store from './store/store'                //---------自定义的全局变量
import './assets/css/base.less'                    //---------引入的全局公共css
import './assets/css/bgstyle.less'

//注册全局函数和全局常量
Vue.prototype.baseFun=Base.baseFun;  //-----注册到vue的全局，方便各个组件和页面js调用公共函数
Vue.prototype.baseAjax=Base.baseAjax;//-----将封装的ajax请求函数注册到vue的全局 
Vue.prototype.constData=Base.constData;//-----全局常量 

Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
