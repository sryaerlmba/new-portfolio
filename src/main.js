import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import i18n from './i18n'

NProgress.configure({
  showSpinner: false,
})

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
