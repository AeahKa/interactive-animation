import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import 'swiper/scss'

import { router } from './router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
