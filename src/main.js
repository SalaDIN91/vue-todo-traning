import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import store from './store';
import router from "@/router";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
