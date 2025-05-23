import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faPhone, faComment, faCode, faHandshake, faAddressCard, faDiagramProject, faThumbsUp, faDatabase, faLeaf, faEnvelope, 
  faCloud, faInfoCircle, faEye, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faWhatsapp, faJava, faPython, faAngular, faVuejs, faDocker, faAws, faBootstrap, faHtml5, faYoutube, faGoogle, faGooglePlusSquare, faDev, faConnectdevelop, faSketch} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia';

const pinia = createPinia();

const messages = {
  en,
  pt
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'pt',
  fallbackLocale: 'pt',
  messages,
})


library.add(
  faBars, 
  faYoutube,
  faGithub, 
  faJava,
  faPython, 
  faPhone, 
  faEye,
  faArrowAltCircleRight,
  faInfoCircle,
  faGooglePlusSquare,
  faWhatsapp, 
  faGoogle,
  faCode, 
  faDev,
  faSketch,
  faConnectdevelop,
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

  app.use(i18n)
  app.use(MotionPlugin)
  app.use(pinia)
  
  // Register the font-awesome-icon component
  app.component('font-awesome-icon', FontAwesomeIcon)
  
  // Mount the app
  app.mount('#app')
