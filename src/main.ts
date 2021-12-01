import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// Create and mount the root instance.
const app = createApp(App)

// Use router
app.use(router)

// Mount app
app.mount('#app')
