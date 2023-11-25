<template>
  <header>
    <main-nav />
  </header>
  <main >
    <section class="tw-bg-default-dark-1 tw-mt-4 tw-lg:mt-0 tw-lg:pt-0">
      <section-hello />
    </section>

    <section class="tw-bg-default-dark-1">
      <section-contact />
    </section>

    <footer>
      <footer-page/>
    </footer>
  </main>
</template>

    <!-- <section class="container" id="projects">
      <section-projects />
    </section>
    
    <section class="container" id="about">
      <section-about />
    </section>

    <section class="container" id="contact">
      <section-contact />
    </section> -->

    <!-- <footer>
      <footer-page/>
    </footer> -->

<script>
import MainNav from '@/components/MainNav.vue';
import FooterPage from '@/pages/Footer.vue';
import SectionHello from "@/pages/SectionHello.vue"
// import SectionAbout from "@/pages/SectionAbout.vue"
// import SectionProjects from "@/pages/SectionProjects.vue"
import SectionContact from "@/pages/SectionContact.vue"

export default {
  name: "App",
  components: {
    MainNav,
    FooterPage,
    SectionHello,
    // SectionAbout,
    // SectionProjects,
    SectionContact
  }
}
</script>
