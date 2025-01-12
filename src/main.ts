import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import './style.css'
import router from './router/index'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
app.use(pinia).use(router)
app.mount('#app')
