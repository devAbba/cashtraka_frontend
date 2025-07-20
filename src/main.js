import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './axios'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; 
import './style.css'
import App from './App.vue'

const pinia = createPinia();

pinia.use(({store}) => {
    store.router = markRaw(router)
})

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Toast);

app.mount('#app');
