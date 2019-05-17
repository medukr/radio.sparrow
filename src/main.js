import Vue from 'vue'
import App from './App.vue'

import {store} from './store/'
import {router} from './routers'

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://radio.sparrow.backend.loc/';
// Vue.http.options.root = 'http://test.loc/radio_sparrow/';
// Vue.http.options.root = 'http://192.168.0.104/radio_sparrow/';

//для плагина пагинации
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
