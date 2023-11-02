import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
