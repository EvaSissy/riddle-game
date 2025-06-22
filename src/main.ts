import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init, isTMA } from '@telegram-apps/sdk-vue';

if(isTMA()) {
  init()
}

createApp(App).mount('#app')
