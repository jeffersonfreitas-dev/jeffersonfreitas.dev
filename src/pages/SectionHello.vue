<template>
  <div class="tw-h-screen tw-px-0 lg:tw-px-16">
    <div class="tw-h-full tw-bg-default-dark-2 tw-text-white lg:tw-flex lg:tw-flex-row tw-flex-col">




      <!-- Conteúdo da primeira div -->
      <!-- <div class="lg:tw-w-1/2 lg:tw-h-full tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center">
        <h1 class="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mt-2 lg:tw-mt-16">Desenvolvedor de Software</h1>
        <p class="tw-mt-3 tw-text-md">Seja bem-vindo(a) ao meu portfólio.</p>
        <img src="../assets/foto_avatar.jpg" alt="Foto Avatar Jefferson" class="tw-w-120 tw-h-60 lg:tw-h-80 tw-rounded-full tw-mt-8 lg:tw-mt-5">
        
        <blockquote class="tw-text-sm lg:tw-text-lg tw-px-12 lg:tw-px-16 tw-text-justify tw-mt-6">
          Como desenvolvedor de software, <span class="font-bold">estou aqui para criar soluções eficientes e escaláveis</span>. Juntos, podemos transformar desafios em oportunidades. Explore e conheça meu trabalho.
        </blockquote>

        <button class="tw-bg-default-gold-1 tw-rounded-xl tw-text-white tw-px-6 tw-py-3 tw-font-thin hover:tw-default-dark-1 tw-mt-8 lg:tw-mt-16" @click="handleVaParaProjetos">Conheça meus projetos</button>
      </div> -->

      <!-- Conteúdo da segunda div -->
      <!-- <div class=" tw-hidden sm:tw-block lg:tw-w-1/2 lg:tw-h-full tw-h-screen lg:tw-mt-0 tw-mt-0 lg:tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-default-dark-2 tw-text-white">
        <ul class="tw-text-md tw-text-white tw-list-none tw-mt-4 tw-px-16 tw-max-w-prose tw-text-justify">
          <li
            class="tw-mb-4"
            v-for="(item, index) in listItems"
            :key="index"
            v-show="showItems[index]"
          >
            {{ item }}
          </li>
          <br>
        </ul>
      </div> -->
      <div class="tw-h-16">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
            <div class="col">
              Column
            </div>
          </div>
        </div>
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
    handleVaParaProjetos() {
      alert("Ainda em Desenvolvimento")
    },
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