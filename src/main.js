import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import request from './util/request';
import vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible';
import CompositionApi from '@vue/composition-api';

Vue.config.productionTip = false;
Vue.prototype.$axios = request;
Vue.use(vant);
Vue.use(CompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
