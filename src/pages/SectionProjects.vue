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
      
      <div class="row col-lg-8 col-md-12 col-sm-12 col-xs-12 px-5">

        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/foto_avatar2.jpg" alt="..." style="max-width: 50%;">
              <div class="carousel-caption d-none d-md-block">
                <h5>Simed3 - Controle e Gerenciamento</h5>
                <p>Sistema integrado que unifica controle financeiro, gestão de estoque, atendimento aos cooperados e fortalecendo a administração 
                        interna, melhorando a experiência, a confiabilidade e agilidade nas prestações de serviços.</p>
                <button class=" btn btn-secondary active p-3 rounded-4" @click="handleVaParaProjetos">Mais Detalhes</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/foto_avatar2.jpg" alt="..." style="max-width: 50%;">
              <div class="carousel-caption d-none d-md-block">
                <h5>MotoGestor - Gestão de Oficinas</h5>
                <p>Um sistema completo de gestão para oficinas mecânicas, unindo controle de clientes, veículos, ordens de serviço, estoque e finanças. 
                        Otimiza a operação da oficina, proporcionando gestão integrada para atendimento eficiente e satisfatório aos clientes.</p>
                <button class=" btn btn-secondary active p-3 rounded-4" @click="handleVaParaProjetos">Mais Detalhes</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/foto_avatar2.jpg" alt="..." style="max-width: 50%;">
              <div class="carousel-caption d-none d-md-block">
                <h5>Cartão Saúde PET</h5>
                <p>Cartão saúde para pets, oferecendo assinaturas de planos, agendamento de consultas, realização de pagamento e muito mais. 
                        Proporcionando aos tutores uma maneira conveniente e abrangente de cuidar da saúde de seus animais de estimação.</p>
                <button class=" btn btn-secondary active p-3 rounded-4" @click="handleVaParaProjetos">Mais Detalhes</button>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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