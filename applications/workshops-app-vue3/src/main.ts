// import './assets/main.css'
import vuetify from '@/plugins/vuetify'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppSpinner from '@/components/utils/Spinner.vue'

import './services/configureAxios' // just running the file and not specifically importing anything

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.component('AppSpinner', AppSpinner)

app.mount('#app')
