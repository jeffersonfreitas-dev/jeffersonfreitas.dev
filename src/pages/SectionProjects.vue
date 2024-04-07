<template>
<div class="container-fluid flex-column text-white"> 
  <div class="row p-5">

    <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace py-5">
      <h1 class="text-center fs-1">Meus Projetos</h1>
      <div class="text-center">
        <font-awesome-icon :icon="['fa', 'diagram-project']" class="fa-2x" color="white"/>
      </div>
    </div>
    
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 d-flex">
        <div class="row p-3">
          <blockquote class="fs-5 text-justify text-start text-wrap text-break font-monospace">
            <p class="pt-3 fs-3"><strong style="color: #2e8b57;">Simed3 Financeiro</strong></p>
          </blockquote>
        </div>
      </div>
      
      <div class="row col-lg-8 col-md-12 col-sm-12 col-xs-12 px-5 py-5">

        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" data-interval="5000">
          <div class="carousel-inner rounded-4">
            <div class="carousel-item active">
              <img src="../assets/simed/simed-back-01.png" alt="..." style="max-width: 100%;">
              <div class="carousel-caption d-none d-md-block mt-5">
                <h5><strong>Simed3 - Controle e Gerenciamento</strong></h5>
                <p>Sistema financeiro para controle de contas a pagar, receber, transferências, extratos bancários, controle de caixa, relatórios, impostos e muito mais!</p>
                <button class=" btn btn-primary active p-3 rounded-4" style="background-color: #30302a; border-color: #30302a;" @click="handleVaParaProjetos">Mais Detalhes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: "SectionProjects"
}
</script>


<style scoped>
.container-fluid {
  width: 100%;
  background-image: url('@/assets/backoff5.png');
  background-size: cover;
}
</style>