import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'


//引入
import {postRequest} from "./utils/api";
import {postKeyValueRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {getRequest} from "./utils/api";

// 直接添加到 Vue.prototype
// Vue 插件 部分的知识点，添加Vue的实例方法，通过把它们添加到 Vue.prototype 上来实现
// 这样，在调用的地方就不需要导入了
Vue.prototype.postKeyValueRequest = postKeyValueRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.deleteRequest = deleteRequest


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  // 这里的 router 就是负责跳转的 $touter
  router,
  render: h => h(App)
}).$mount('#app')
