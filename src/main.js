import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import uiComponents from './ui-components'
import globals from './globals'
import VueAxios from 'vue-axios'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

axios.interceptors.request.use(
    (config) => {
      let token = sessionStorage.getItem(globals.TOKEN)
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

const app = createApp(App)

uiComponents.map(component => app.component(component.name, component))

app.config.globalProperties.$globals = globals

app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
