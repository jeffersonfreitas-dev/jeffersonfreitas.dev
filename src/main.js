import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faPhone, faComment, faCode, faHandshake, faAddressCard, faDiagramProject, faThumbsUp, faDatabase, faLeaf, faEnvelope, faCloud, faInfoCircle, faEye} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faWhatsapp, faJava, faPython, faAngular, faVuejs, faDocker, faAws, faBootstrap, faHtml5} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'


library.add(
  faBars, 
  faGithub, 
  faJava,
  faPython, 
  faPhone, 
  faEye,
  faInfoCircle,
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

  const app = createApp(App)

  // Use the vue-youtube-embed plugin
  app.use(VuePlyr, {
    plyr: {}
  })
  
  // Register the font-awesome-icon component
  app.component('font-awesome-icon', FontAwesomeIcon)
  
  // Mount the app
  app.mount('#app')
