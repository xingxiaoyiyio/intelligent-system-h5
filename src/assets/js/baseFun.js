
import Vue from 'vue'
import stores from '../../store/store'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

let browser={
versions:function(){
var  u = navigator.userAgent,
   app = navigator.appVersion;
    return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
        iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
        qq: u.match(/\sQQ/i) == " qq" //是否QQ
             };
          }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
  }

  let IOS=browser.versions.ios;
  let ANDROID=browser.versions.android;

//区分开发或者生产环境
  let isProduction=process.env.NODE_ENV=='production'?true:false

// 用于全局的公共函数
const baseFun={
     // 本地存储
        localSet(obj,key){
            var newObj = obj;
            var str = JSON.stringify(newObj);
            localStorage.setItem(key,str);
        },
        localGet(key){
            var str = localStorage.getItem(key);
            return JSON.parse(str);
        },
        localClear(key){
            localStorage.removeItem(key);
        },
        getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        },
        setTitle(title){
          if(!isProduction)  return;
          var obj={
            action:0,
            title:title
          }
          var objStr = JSON.stringify(obj);
          if(IOS) {
           window.webkit.messageHandlers.JSBridge.postMessage(objStr);
          } else if(ANDROID) {
            window.JSBridge.msgToApp(objStr);
          }
        }
}

// 用于全局的ajax请求
const baseAjax=function(param){
//----------------------------------全局请求路径
    let token=baseFun.getQueryString("token");
    let baseURL='/api';
   
    let defaultParam={
        baseURL:param.baseURL || baseURL,
        data:param.data || {},
        params:param.params||{},
        url:param.url,
        type:param.type || 'post',
        headers:{},
        timeout: param.timeout || 5000,
        showLoading:false
    }

    if(param.showLoading){
        stores.commit('UPDATE_LOADING', true)
    }

    AjaxPlugin.$http.request({
      baseURL: defaultParam.baseURL,
      method:defaultParam.type,
      url:defaultParam.url,
      data:defaultParam.data,
      params:defaultParam.params,
      timeout:defaultParam.timeout,
      headers: defaultParam.headers
    }).then(function(response) {

        console.log(response)
         stores.commit('UPDATE_LOADING', false)
         if(param.showError){
            param.success(response.data);
            return;
         }

        if(response.data.status){
            param.success(response.data.data)
        }

        if(!response.data.status){
            stores.commit('UPDATE_MSG',{type:true,msg:response.data.msg})
            setTimeout(function(){
                stores.commit('UPDATE_MSG',{type:false,msg:''})
            },3000)
        }
    }).catch(function(erro){
        stores.commit('UPDATE_LOADING', false)
        stores.commit('UPDATE_MSG',{type:true,msg:'请求出错！'})
    })
}


//导出模块
export default {
  baseFun,
  baseAjax
}


