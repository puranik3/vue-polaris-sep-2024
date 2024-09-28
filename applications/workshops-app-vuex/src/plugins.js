import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// add Vuex functionality
Vue.use(Vuex);

// add routing functionality
Vue.use(VueRouter);

// add validation functionality
Vue.use(Vuelidate);