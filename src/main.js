import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// ✅ Import Bootstrap (CSS + JS)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// ✅ Create app instance first
const app = createApp(App)

// ✅ Then use Pinia and Router
app.use(createPinia())
app.use(router)

// ✅ Finally mount app
app.mount('#app')
