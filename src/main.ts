import './assets/css/material-dashboard.min.css'
import './assets/css/sweetalert2.min.css'
import './assets/js/material-dashboard.min.js'
import 'datatables.net-bs4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'sweetalert2/dist/sweetalert2.css'

import { createApp } from 'vue'

import VueSweetalert2 from 'vue-sweetalert2'

import App from './App.vue'
import router from './app/routes'

const app = createApp(App) 

app.use(VueSweetalert2)
app.use(router).mount('#app')
