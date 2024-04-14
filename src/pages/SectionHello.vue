<template>
  <div class="container-fluid flex-column text-white align-items-center " 
      :class="{'justify-content-center vh-100': !isMobile, 'justify-content-start': isMobile}">
    <div class="row col-12 d-flex">
      <div class="row flex-column px-5 py-5 justify-content-center align-items-center font-monospace">

          <p class="text-start">Olá... Meu nome é</p>
          <h1 class="text-start display-1"><strong style="color: #2E8B57;">Jefferson</strong> Freitas</h1>
   
            <h2 class="text-center display-6 mt-5"><strong style="color: #2E8B57;">Desenvolvedor de Software</strong></h2>
            <p class="text-center">Seja bem-vindo(a) ao meu portfólio.</p>
            <font-awesome-icon :icon="['fa', 'code']" class="fa-3x" color="white"/>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SectionHello",
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
  }
};
</script>

<style scoped>
.container-fluid {
  width: 100%;
  background-image: url('@/assets/backoff.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
</style>