import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import request from './util/request';
import vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible';
import CompositionApi from '@vue/composition-api';
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false;
Vue.prototype.$axios = request;
Vue.use(vant);
Vue.use(CompositionApi);
Vue.use(new VueSocketIO({
  debug: true,
  // 服务器端地址
  connection: 'http://localhost:8888/',
  vuex: {
  }
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
