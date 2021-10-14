import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import router from './router'
import './index.scss'
import 'element-plus/dist/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faFont, faLaptop, faTags, faStoreAlt, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkerAlt, faFont, faLaptop, faTags, faStoreAlt, faSearch)

createApp(App)
  .use(router)
  .use(ElementPlus)
  .component('fa', FontAwesomeIcon )
  .mount('#app')