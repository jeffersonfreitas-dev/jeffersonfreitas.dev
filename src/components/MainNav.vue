<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full bg-default-green-1">
      <div class="mx-auto flex flex-col mt-3 md:flex-row justify-between items-center h-full border-b border-solid border-green-900 px-8">
        <div class="text-center flex items-center">
          <a href="#hello" class="text-2xl text-slate-50">{{ company }}</a>
          <div v-if="isMobile" class="ml-auto">
            <i @click="showMobileMenu()" class="flex w-24 items-center justify-center h-full text-2xl">
              <font-awesome-icon fixed-width inverse icon="bars" size="24px"/>
            </i>
          </div>
        </div>

        <ul :class="isMobile ? 'list-none flex items-center h-full mt-4' : 'list-none flex items-center ml-20 h-16'">
          <li v-for="item in menuItems" :key="item">
            <a v-if="isMobile && mobileMenuVisible" :href="item.link" class="flex items-justify py-2.5 text-slate-50 ml-10 hover:font-bold">{{ item.name }}</a>
            <a v-else-if="!isMobile" :href="item.link" class="flex items-center py-2.5 text-slate-50 ml-14 hover:font-bold">{{ item.name }}</a>
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