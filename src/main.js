import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import 'v-calendar/dist/style.css';
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLock, faAt } from '@fortawesome/free-solid-svg-icons'
library.add(faLock)
library.add(faAt)
import VCalendar from 'v-calendar';

// Use plugin with defaults

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(VCalendar, {}).mount('#app')
