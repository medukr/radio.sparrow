import Vue from 'vue'
import App from './App.vue'

import {store} from './store/'
import {router} from './routers'

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://test.loc/radio_sparrow/'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
