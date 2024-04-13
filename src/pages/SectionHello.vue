<template>
  <div class="container-fluid flex-column text-white justify-content-center align-items-start">
    <div class="row col-12 d-flex flex-row">
      <div class="col-6  d-flex">
        
        <div class="row flex-column justify-content-center align-items-center font-monospace">
          <div class="row p-5">
            <p class="text-start">Olá... Meu nome é</p>
            <h1 class="text-start" style="font-size: 4em;"><strong style="color: #2E8B57;">Jefferson</strong> Freitas</h1>
          </div>
          <div class="row p-5">
            <h1 class="text-center fs-3"><strong style="color: #2E8B57;">Desenvolvedor de Software</strong></h1>
            <p class="text-center">Seja bem-vindo(a) ao meu portfólio.</p>
            <font-awesome-icon :icon="['fa', 'code']" class="fa-3x" color="white"/>
          </div>

        </div>
      </div>

      <div class="col-6 d-flex justify-content-center align-items-center">
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

<style scoped>
.container-fluid {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/backoff.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>