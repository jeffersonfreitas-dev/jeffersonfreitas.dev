<template>
  <header class="d-flex justify-content-center">
    <div class="row container">
      <div class="col-lg-3 col-md-4 col-sm-10 col-10 d-flex align-items-center">
        <a href="#hello" class="company_name fs-3 fw-bold text-decoration-none">{{ company }}</a>
      </div>
      
      <div class="col-lg-1 col-md-1 col-sm-2 col-2 d-flex flex-row align-items-center justify-content-center">
        <!-- Botão para acionar o menu em dispositivos móveis -->
        <button
        class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false" 
          aria-label="Toggle navigation"
          @click="toggleMenu"
          >
          <font-awesome-icon :icon="['fas', 'bars']" color="white" class="fa-xl" v-if="isMobile"/>
        </button>
      </div>
      
      <div class="col-lg-8 col-md-7 col-sm-12 d-flex align-items-center">
        <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0 list-unstyled d-flex flex-row justify-content-center align-items-center flex-md-row gap-2 menu_container">
            <li v-for="item in menuItems" :key="item">
              <a href="#" class="text-decoration-none menu_items">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Jefferson Freitas",
      menuItems: [
        { name: "Sobre", link: "#about" },
        { name: "Projetos", link: "#projects" },
        { name: "Contato", link: "#contact" },
      ],
      isMobile: false,
      isMenuOpen: false
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    if(this.isMobile){
      this.isMenuOpen = false;
    }else {
      this.isMenuOpen = true;
    }
    window.addEventListener('resize', this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
      if(this.isMobile) {
        this.isMenuOpen = false;
      }else {
        this.isMenuOpen = true;
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: #2E8B57;
}
.container {
  width: 100%;
  height: 10vh;
}
.company_name {
  color: azure;
  font-size: 16;
}
.menu_items {
  color: azure;
  padding-left: 3rem;
}
.menu_container {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>