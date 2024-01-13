import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope, faPhone, faComment, faCode, faHandshake, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import { faGithub,faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faGithub, faInstagram, faEnvelope, faPhone, faWhatsapp, faCode, faComment, faLinkedinIn, faHandshake, faAddressCard);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
