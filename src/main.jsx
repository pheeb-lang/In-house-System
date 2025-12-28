import { createApp } from 'vue'
import App from './App.jsx'
import router from './router'
import './assets/theme.css'

createApp(App)
  .use(router)
  .mount('#app')
