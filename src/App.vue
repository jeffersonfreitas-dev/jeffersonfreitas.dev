<template>
  <header>
    <main-nav />
  </header>
  <main>
    <section>
      <section-hello />
    </section>

    <section>
      <section-about />
    </section>

    <section>
      <section-projects />
    </section>

    <section>
      <section-skills />
    </section>

    <section>
      <section-contact />
    </section>

    <footer>
      <footer-page/>
    </footer>
  </main>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import FooterPage from '@/pages/Footer.vue';
import SectionHello from "@/pages/SectionHello.vue"
import SectionAbout from "@/pages/SectionAbout.vue"
import SectionProjects from "@/pages/SectionProjects.vue"
import SectionContact from "@/pages/SectionContact.vue"
import SectionSkills from './pages/SectionSkills.vue';

export default {
  name: "App",
  components: {
    MainNav,
    FooterPage,
    SectionHello,
    SectionAbout,
    SectionProjects,
    SectionContact,
    SectionSkills
  }
}
</script>
