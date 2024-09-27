// import './assets/main.css'
import vuetify from '@/plugins/vuetify'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './services/configureAxios' // just running the file and not specifically importing anything

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
