<template>
  <div class="container-fluid">
    <div class="row p-5">
      <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace">
        <h1 class="text-center fs-1">Contato </h1>
        <div class="text-center">
          <font-awesome-icon :icon="['fa', 'comment']" class="fa-2x" color="white"/>
        </div>
      </div>
    </div> 

    <div class="row font-monospace text-white">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
        <div class="row p-3">
          <blockquote class="fs-5 text-justify text-start text-wrap text-break">
            <p class="pt-3">Se você busca um desenvolvedor de software experiente para concretizar seus projetos, estou pronto para ajudar. Posso transformar suas ideias em soluções tecnológicas inovadoras.</p>
            <p class="mt-3">Estou comprometido em oferecer qualidade e resultados excepcionais.</p>
            <p class="mt-3 font-weight-bold" >Entre em contato para discutirmos como posso contribuir para o sucesso do seu projeto.</p>
          </blockquote>
        </div>
      </div>
             
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center text-start">
        <div class="flex-column">
          <div class="row mt-3">
            <div class="flex-row">
              <span class="fs-6 px-4 fw-bolder">E-mail:</span>
            </div>
            <div class="row" style="margin-left: 2rem;">
              <span class="fs-5 px-3">contato@jeffersonfreitas.dev</span>
            </div>
          </div>
            
          <div class="row mt-3">
            <div class="flex-row">
              <span class="fs-6 px-4 fw-bolder">Fone/Whatsapp:</span>
            </div>
            <div class="row" style="margin-left: 2rem;">
              <span class="fs-5 px-3">+55 (85) 9.8172-1585</span>
            </div>
          </div>
          </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SectionContact"
}
</script>


<style scoped>
.container-fluid {
  width: 100%;
  background-image: url('@/assets/backoff4.png');
  background-size: cover;
}
</style>