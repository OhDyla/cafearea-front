import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import router from './router'
import './index.scss'
import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')