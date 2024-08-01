import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/css/base.scss'

// 引入路由
import router from './router'

// 引入vuex
import store from './store/index'


import TButton from 'yuedada_test'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(TButton)

 const app =new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
