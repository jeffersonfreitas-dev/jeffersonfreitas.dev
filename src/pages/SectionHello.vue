<template>
  <div class="h-screen">
    <div class="h-full bg-default-dark-2 text-white lg:flex lg:flex-row flex-col">

      <!-- Conteúdo da primeira div -->
      <div class="lg:w-1/2 lg:h-full h-screen flex flex-col justify-center items-center">
        <h1 class="text-2xl lg:text-4xl font-bold">Desenvolvedor de Software</h1>
        <p class="mt-3 text-md">Seja bem-vindo(a) ao meu portfólio.</p>
        <img src="../assets/foto_avatar.jpg" alt="Foto Avatar Jefferson" class="w-120 h-60 lg:h-80 rounded-full mt-8 lg:mt-5">
        
        <blockquote class="text-sm lg:text-lg px-12 lg:px-16 text-justify mt-6">
          Como desenvolvedor de software, <span class="font-bold">estou aqui para criar soluções eficientes e escaláveis</span>. Juntos, podemos transformar desafios em oportunidades. Explore e conheça meu trabalho.
        </blockquote>

        <button class="bg-default-gold-1 rounded-xl text-white px-6 py-3 font-thin hover:default-dark-1 mt-8 lg:mt-16">Conheça meus projetos</button>
      </div>

      <!-- Conteúdo da segunda div -->
      <div class=" hidden sm:block lg:w-1/2 lg:h-full h-screen lg:mt-0 mt-0 lg:flex flex-col justify-center items-center bg-default-dark-2 text-white">
        <ul class="text-md text-white list-none mt-4 px-16 max-w-prose text-justify">
          <li
            class="mb-4"
            v-for="(item, index) in listItems"
            :key="index"
            v-show="showItems[index]"
          >
            {{ item }}
          </li>
          <br>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "SectionHello",
  data() {
    return {
      phrases: ["Backend", "Frontend", "Devops"],
      currentPhraseIndex: 0,
      isMobile: false,
      listItems: [
        "Proficiente em Java, JavaScript e amplo conhecimento com Spring Framework (Spring Boot, Security, Cloud ...)",
        "Experiência com bancos de dados relacionais, como MySQL, Oracle e PostgreSQL, e NoSQL, incluindo MongoDB e Firestore.",
        "Habilidades em HTML, CSS, JavaScript, Angular, VueJS e ReactJS.",
        "Experiência com Docker e conhecimentos em mensageria (Apache Kafka e RabbitMQ).",
        "Compreensão abrangente de redes de computadores, segurança e CI/CD."
      ],
      showItems: Array(7).fill(false),
      currentItemIndex: 0
    };
  },
  mounted() {
    this.displayPhrases();
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
    this.showNextItem();
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    displayPhrases() {
      const phrasesElement = this.$refs.phrases;
      setInterval(() => {
        phrasesElement.textContent = this.phrases[this.currentPhraseIndex];
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      }, 1500);
    },
    showNextItem() {
      this.showItems[this.currentItemIndex] = true;
      this.currentItemIndex = (this.currentItemIndex + 1) % this.listItems.length;
      setTimeout(this.showNextItem, 1);
    }
  }
};
</script>