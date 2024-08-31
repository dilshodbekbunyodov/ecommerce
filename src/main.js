import {createApp} from 'vue'
import App from './App.vue'

import './style.css'
import './tailwind.css'

import Vue3Toasity, {toast} from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import {createPinia} from "pinia";
import router from './router/index.js'

const app = createApp(App)
app.use(Vue3Toasity, {
    autoClose: 1000,
    hideProgressBar: true,
    newestOnTop: true,
    position: toast.POSITION.TOP_RIGHT,
    theme: "colored",
});
app.use(createPinia());
app.use(router);
app.mount('#app')
