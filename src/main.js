import Vue from 'vue'
import App from './App.vue'

import {store} from './store/'
import {router} from './routers'

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://get.sparrow.in.ua';
// Vue.http.options.root = 'http://172.17.30.107:3031/';


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
