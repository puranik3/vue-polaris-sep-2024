import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import router from './routes'

import PolarisPagination from './components/utils/PolarisPagination';

import './services/configureAxios'; // just running the file and not specifically importing anything

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// add routing functionality
Vue.use(VueRouter);
Vue.component('PolarisPagination', PolarisPagination)

Vue.config.productionTip = false;

new Vue({
  router, // add the router with routes configuration
  render: h => h(App),
}).$mount('#app')
