

import Vue from 'vue';
import App from './App.vue'
import router from './router/index'
import '../src/mock/mockServer'
import store from '../src/store'

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
