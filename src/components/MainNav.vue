<template>
  <header class="d-flex justify-content-center">
    <div class="row container">
      <div class="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
        <a href="#hello" class="company_name fs-3 fw-bold text-decoration-none">{{ company }}</a>
      </div>
      
      <div class="col-lg-8 col-md-8 col-sm-12 d-flex align-items-center">
        <ul class="list-unstyled d-flex flex-column justify-content-end align-items-center flex-md-row gap-2 menu_container">
          <li v-for="item in menuItems" :key="item">
            <a href="#" class="text-decoration-none menu_items">{{ item.name }}</a>
          </li>
        </ul>
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
        { name: "Blog", link: "#hello" }
      ],
      isMobile: false,
      mobileMenuVisible: false
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    showMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
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