import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faGithub, faInstagram, faEnvelope, faLinkedinIn);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
