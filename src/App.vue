<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="item in menu" :key="item.id">
              <a class="nav-link" :href="'#' + item.id">{{ item.label }}</a>
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

export default {
  components: {
    Eu,
    Projetos,
    Sobre,
    Contato,
    Skills
  },
  data() {
    return {
      menu: [
        { id: "eu", label: "Olá", component: "Eu" },
        { id: "sobre", label: "Sobre", component: "Sobre" },
        { id: "projetos", label: "Projetos", component: "Projetos" },
        { id: "habilidades", label: "Habilidades", component: "Skills" },
        { id: "contato", label: "Contato", component: "Contato" },
      ],
    };
  },
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
  background-color: #134e4a;
  transition: background-color 0.3s ease-in-out;
}

.section:hover {
  background-color: #1e7c77;
}

.navbar .nav-link.active {
  font-weight: bold;
  color: #00ffcc !important;
}
</style>
