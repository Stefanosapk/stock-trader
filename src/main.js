import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
import { routes } from "./routes/routes";
import vuetify from './plugins/vuetify';
import store from './store/store';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios';

Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vuejs-stock-trader-7fcc0.firebaseio.com/';

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
