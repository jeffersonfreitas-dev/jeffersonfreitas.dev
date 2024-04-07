<template>
  <header class="d-flex justify-content-center font-monospace">
    <div class="row container">
      <div class="col-12 d-flex align-items-center justify-content-center">
        <a href="#hello" class="company_name fs-3 fw-bold text-decoration-none">{{ company }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Meu Portfólio",
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
.menu {
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