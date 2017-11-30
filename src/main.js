
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vuex from 'vuex'
import {store} from './store/store'

import router from './router'

Vue.use(Vuex);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
    store,
  template: '<App/>',
  components: { App }
})
