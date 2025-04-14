<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ $t('my_portfolio') }}</a>

        <!-- Botão sanduíche -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu que colapsa no mobile -->
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="item in menu" :key="item.id">
              <a class="nav-link" :href="'#' + item.id" :class="{ active: activeSection === item.id }">{{ savedLang.language === 'pt' ? item.label : item.labelUs }}</a>
            </li>

        <!-- Dropdown de idioma -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle d-flex align-items-center"
            
            href="#"
            id="languageDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          <country-flag :country='savedLang.country' size='normal' style="cursor: pointer; margin-right: 5px; margin-left: 5px; margin-top: -5px;"/>
          </a>
          
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
            <li v-for="item in langStore.allLangs" :key="item.language">
                <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="changeLanguage(item.language)">
                <country-flag @click="changeLanguage(item.language)" :country='item.country' size='normal' style="cursor: pointer; margin-right: 5px;"/>
                {{ item.name }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div
      v-for="item in menu"
      :key="item.id"
      :id="item.id"
      class="section text-center text-white"
    >
    <component :is="item.component" />
    </div>
  </div>
</template>

<script>
import Eu from './components/BemVindo.vue'
import Projetos from './components/MeusProjetos.vue'
import Sobre from './components/SobreMim.vue'
import Contato from './components/ContatoBlog.vue'
import Skills from './components/MinhasHabilidades.vue'
import CountryFlag from 'vue-country-flag-next'
import { useLangStore } from './stores/Lang'


export default {
  components: {
    Eu,
    Projetos,
    Sobre,
    Contato,
    Skills,
    CountryFlag
  },
  data() {
    const langStore = useLangStore();
    const savedLang = langStore.getLang();
    return {
      langStore,
      savedLang,
      menu: [
        { id: "eu", label: "Olá", labelUs: 'Hello', component: "Eu" },
        { id: "sobre", label: "Sobre", labelUs: 'About', component: "Sobre" },
        { id: "projetos", label: "Projetos", labelUs: 'Projects', component: "Projetos" },
        { id: "habilidades", label: "Habilidades", labelUs: 'Skills', component: "Skills" },
        { id: "contato", label: "Contato", labelUs: 'Contact', component: "Contato" },
      ],
      activeSection: null
    };
  },
  mounted() {
    const lang = localStorage.getItem('lang');
    this.langStore.setLang(lang);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // mais de 60% da seção visível
      }
    );

  this.menu.forEach((item) => {
    const section = document.getElementById(item.id);
    if (section) observer.observe(section);
  });
},
methods: {
  changeLanguage(lang) {
    this.$i18n.locale = lang;
      localStorage.setItem('lang', lang);
      this.langStore.setLang(lang);
      this.savedLang = this.langStore.currentLang;
    }
}
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.section {
  min-height: 100vh;
  width: 100vw;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e7c77;
  transition: background-color 0.3s ease-in-out;
}

/* .section:hover {
  background-color: #1e7c77;
} */

.navbar .nav-link.active {
  font-weight: bold;
  color: #00ffcc !important;
}
</style>
