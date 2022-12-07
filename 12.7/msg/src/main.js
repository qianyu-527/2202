import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import http from '../untils/http'
Vue.prototype.$http=http
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
