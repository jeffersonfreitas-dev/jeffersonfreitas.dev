<template>
  <div class="container-fluid flex-column text-white" style="background-color: #30302a;">
    <div class="row d-flex flex-row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
        
        <div class="row flex-column justify-content-center align-items-center">
          <div class="row p-5">
            <h1 class="text-center fs-3">Desenvolvedor de Software</h1>
            <p class="text-center">Seja bem-vindo(a) ao meu portfólio.</p>
          </div>

          <div class="row p-3">
            <blockquote class="fs-3 text-justify text-start text-wrap text-break font-monospace">
              Como desenvolvedor de software, <span class="">estou aqui para criar soluções eficientes e escaláveis e </span>juntos podemos transformar desafios em oportunidades. Explore e conheça meu trabalho.
            </blockquote>
          </div>

          <div class="row p-3 mb-3">
            <div class="d-flex flex-row justify-content-center align-items-center">
              <button class=" btn btn-secondary active p-3 rounded-4" @click="handleVaParaProjetos">Meus projetos</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="row mt-4">
          <h1 class="text-center fs-3">Olá!!!</h1>
        </div>
        <div class="row mt-2">
          <p class="text-center">Meu nome é Jefferson Freitas</p>
        </div>
        <div class="row mt-3 d-flex d-column">
          <div class="col-3">
          </div>
          <div class="col-6">
            <img src="../assets/foto_avatar.jpg" alt="Foto Jefferson" class="img-fluid rounded-5">
          </div>
          <div class="col-3">
          </div>
        </div>
        <div class="row mt-5">
        </div>
      </div>
    </div>
  </div>
</template>
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