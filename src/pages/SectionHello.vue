<template>
  <div class="container-fluid flex-column text-white" style="background-color: #30302a;">
    <div class="row d-flex flex-row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
        
        <div class="row flex-column justify-content-center align-items-center font-monospace">
          <div class="row p-5">
            <h1 class="text-center fs-3">Desenvolvedor de Software</h1>
            <p class="text-center">Seja bem-vindo(a) ao meu portfólio.</p>
          </div>
          <font-awesome-icon :icon="['fa', 'code']" class="fa-3x" color="white"/>

          <div class="row p-3">
            <blockquote class="fs-3 text-justify text-start text-wrap text-break">
              Como desenvolvedor de software, <span class="">estou aqui para criar soluções eficientes e escaláveis e </span>juntos podemos transformar desafios em oportunidades. Explore e conheça meu trabalho.
            </blockquote>
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


<script>

export default {
  name: "SectionHello",
  data() {
    return {
      phrases: ["Backend", "Frontend", "Devops"],
      currentPhraseIndex: 0,
      isMobile: false,
      showItems: Array(7).fill(false),
      currentItemIndex: 0
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
  },
  methods: {
    handleVaParaProjetos() {
      alert("Ainda em Desenvolvimento")
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  }
};
</script>