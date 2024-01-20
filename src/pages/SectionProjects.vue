<template>
<div class="container-fluid flex-column text-white" style="background-color: #30302a;">
  <div class="row py-5">
    
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 d-flex">
        <div class="row p-3">
          <div class="d-flex flex-row">
            <h1 class="text-center fs-1">Meus Projetos</h1>
            <div class="text-center" style="margin-left: 1rem;">
              <font-awesome-icon :icon="['fa', 'diagram-project']" class="fa-2x" color="white"/>
            </div>
          </div>
          <blockquote class="fs-5 text-justify text-start text-wrap text-break font-monospace">
            <p class="pt-3">Explore meu portfólio e mergulhe em uma jornada visual através de projetos inspiradores. Cada projeto desenvolvido conta uma história única, revelando não apenas designs excepcionais, mas também o cuidado e a paixão que dediquei na criação.</p>
            <p class="mt-3">Descubra a diversidade criativa que define meu trabalho e as soluções inovadoras que contribuíram para o sucesso de cada empreendimento.</p>
            <p class="mt-3 fs-6" >Clique nas setas para navegar entre os projetos!</p>
          </blockquote>
        </div>
      </div>
      
      <div class="row col-lg-8 col-md-12 col-sm-12 col-xs-12 px-4">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                <div class="col">
                  <div class="card h-100">
                    <img src="../assets/foto_avatar2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Simed3</h5>
                      <p class="card-text">Sistema integrado que unifica controle financeiro, gestão de estoque, atendimento aos cooperados e fortalecendo a administração 
                        interna, melhorando a experiência, a confiabilidade e agilidade nas prestações de serviços.</p>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <button class=" btn btn-secondary active p-3 rounded-4" @click="handleVaParaProjetos">Mais Detalhes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src="../assets/foto_avatar2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">MotoGestor 1.0</h5>
                      <p class="card-text">Um sistema completo de gestão para oficinas mecânicas, unindo controle de clientes, veículos, ordens de serviço, estoque e finanças. 
                        Otimiza a operação da oficina, proporcionando gestão integrada para atendimento eficiente e satisfatório aos clientes.</p>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex flex-row justify-content-center align-items-center">
                        <button class=" btn btn-secondary active p-3 rounded-4" @click="handleVaParaProjetos">Mais Detalhes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
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