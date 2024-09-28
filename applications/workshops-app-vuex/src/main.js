import Vue from 'vue'
import App from './App.vue'
import { BIcon, BIconHandThumbsDown, BIconHandThumbsUp } from 'bootstrap-vue'

import './plugins';

import store from './stores';
import router from './routes'

// switch to this for the original one
// import PolarisPagination from './components/utils/PolarisPagination.original';

// switch to this for the modified one
import PolarisPagination from './components/utils/PolarisPagination';

import AppSpinner from '@/components/utils/Spinner';
import AppAlert from '@/components/utils/Alert';
import AppVotingWidget from '@/components/utils/VotingWidget';

import dateFilter from '@/filters/DateFilter';

import './services/configureAxios'; // just running the file and not specifically importing anything

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('PolarisPagination', PolarisPagination);

Vue.component('AppSpinner', AppSpinner);
Vue.component('AppAlert', AppAlert);
Vue.component('AppVotingWidget', AppVotingWidget);

Vue.component('BIcon', BIcon);
Vue.component('BLike', BIconHandThumbsUp);
Vue.component('BDislike', BIconHandThumbsDown);

Vue.filter('date', dateFilter);

Vue.config.productionTip = false;

new Vue({
  store,
  router, // add the router with routes configuration
  render: h => h(App),
}).$mount('#app')
