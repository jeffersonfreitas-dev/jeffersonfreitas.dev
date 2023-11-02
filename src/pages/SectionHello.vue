<template>
  <div class="h-screen">
    <div class="h-full grid grid-rows-3 bg-default-dark-2 text-white lg:grid-rows-1 lg:grid-cols-2 gap-1">
      
      <div class="row-span-2 lg:row-span-1 lg:col-span-1 w-70 h-full flex flex-col justify-center items-center">
        <!-- Conteúdo da primeira div (70% de largura, 70% de altura) -->
        <h1 :class="isMobile ? 'text-xl font-bold mt-28' : 'text-4xl md:mt-64 lg:mt-16 font-bold'">Desenvolvedor de Software</h1>
        <p class="mt-6 text-md">Seja bem-vindo(a) ao meu portfólio.</p>
        <img src="../assets/foto_avatar.jpg" alt="Sua Foto" class="w-120 h-60 rounded-full mb-4 mt-8">


        <blockquote v-if="!isMobile" class="text-sm px-12 text-justify">
          Como desenvolvedor de software, <span class="font-bold">estou aqui para criar soluções eficientes e escaláveis</span>. Juntos, podemos transformar desafios em oportunidades. Explore e conheça meu trabalho.
        </blockquote>
        <button v-if="!isMobile" class="bg-default-gold-1 rounded-xl text-white px-6 py-3 font-thin hover:default-dark-1 mt-8">Conheça meus projetos</button>

      </div>
      
      
      <div class="lg:col-span-1 w-30 h-full flex flex-col justify-center items-center">
        <ul v-if="!isMobile" class="text-md text-white list-none mt-4 px-16 max-w-prose text-justify">
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
  
        
        <div class="mt-4" v-if="!isMobile">
          <a href="https://github.com/jeffersonfreitas-dev?tab=repositories" class=" rounded-full p-4 mx-4 bg-default-gold-1">
            <font-awesome-icon  :icon="['fab', 'github']" size="16px"/>
          </a>
          <a href="https://www.linkedin.com/in/jefferson-freitas/" class=" rounded-full p-4 mx-4 bg-default-gold-1">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" size="16px"/>
          </a>
          <a href="#" class=" rounded-full p-4 mx-4 bg-default-gold-1">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class=" rounded-full p-4 mx-4 bg-default-gold-1">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
        </div>

        <blockquote v-if="isMobile" class="text-sm px-12 text-justify">
          Como desenvolvedor de software, <span class="font-bold">estou aqui para criar soluções eficientes e escaláveis</span>. Juntos, podemos transformar desafios em oportunidades. Explore e conheça meu trabalho.
        </blockquote>
        <button v-if="isMobile" class="bg-default-gold-1 rounded-xl text-white px-6 py-3 font-thin hover:default-dark-1 mt-8">Conheça meus projetos</button>
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
      setTimeout(this.showNextItem, 1000);
    }
  }
};
</script>