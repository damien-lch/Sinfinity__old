import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"

import infinitynodes from './stores/infinitynodes'

import './assets/styles/index.css'
import './assets/styles/commons.scss'

createApp(App).use(router).provide('nodesStore', infinitynodes).mount('#app')
