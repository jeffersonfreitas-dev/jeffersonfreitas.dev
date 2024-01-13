<template>
  <header>
    <main-nav />
  </header>
  <main >
    <section>
      <section-hello />
    </section>

    <section>
      <section-about />
    </section>

    <section>
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
import SectionAbout from "@/pages/SectionAbout.vue"
// import SectionProjects from "@/pages/SectionProjects.vue"
import SectionContact from "@/pages/SectionContact.vue"

export default {
  name: "App",
  components: {
    MainNav,
    FooterPage,
    SectionHello,
    SectionAbout,
    // SectionProjects,
    SectionContact
  }
}
</script>
