import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faPhone, faComment, faCode, faHandshake, faAddressCard, faDiagramProject, faThumbsUp, faDatabase, faLeaf, faEnvelope, faCloud} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faWhatsapp, faJava, faPython, faAngular, faVuejs, faDocker, faAws, faBootstrap, faHtml5} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(
  faBars, 
  faGithub, 
  faJava,
  faPython, 
  faPhone, 
  faWhatsapp, 
  faCode, 
  faLeaf,
  faHtml5,
  faComment, 
  faDatabase,
  faAngular,
  faAws,
  faBootstrap,
  faVuejs,
  faCloud,
  faDocker,
  faEnvelope,
  faLinkedinIn, 
  faHandshake, 
  faAddressCard, 
  faDiagramProject, 
  faThumbsUp);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
