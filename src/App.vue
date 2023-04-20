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
      <section-contact />
    </section>

  </main>
  <footer>
    <main-footer/>
  </footer>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import MainFooter from '@/pages/MainFooter.vue';
import SectionHello from "@/pages/SectionHello.vue"
import SectionAbout from "@/pages/SectionAbout.vue"
import SectionProjects from "@/pages/SectionProjects.vue"
import SectionContact from "@/pages/SectionContact.vue"

export default {
  name: "App",
  components: {
    MainNav,
    MainFooter,
    SectionHello,
    SectionAbout,
    SectionProjects,
    SectionContact
  }
}
</script>
