import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import AOS from "aos";
import "aos/dist/aos.css"


const app = createApp(App);

app.use(AOS);

app.mount('#app')
