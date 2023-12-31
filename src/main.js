import { createApp } from 'vue'

import pinia from './stores'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'nprogress/nprogress.css'

import 'normalize.css'
import './assets/css/index.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.use(ElementPlus)

app.mount('#app')
