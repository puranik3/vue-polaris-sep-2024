// import './assets/main.css'
import vuetify from '@/plugins/vuetify'
import Vuelidate from '@vuelidate/core'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppSpinner from '@/components/utils/Spinner.vue'
import AppVotingWidget from '@/components/utils/VotingWidget.vue'

import './services/configureAxios' // just running the file and not specifically importing anything

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(Vuelidate)

app.component('AppSpinner', AppSpinner)
app.component('AppVotingWidget', AppVotingWidget)

app.mount('#app')
