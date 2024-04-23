<template>
<div class="container-fluid"> 
  <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace py-5">
    <h1 class="text-center fs-1">Meus Projetos</h1>
    <div class="text-center">
      <font-awesome-icon :icon="['fa', 'diagram-project']" class="fa-2x" color="white"/>
    </div>
  </div>
  
  <div class="row d-flex justify-content-center">
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5" v-for="(p) in projetos" :key="p.name">
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" :src="`./src/assets/${p.imageFolder}/0.png`" :alt="projetoSelected.name">
          <div class="card-body">
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="card-text">{{ p.description }}</p>
          </div>
          <div class="card-footer">
            <button class=" btn btn-primary active p-3 rounded-4" style="background-color: #2e8b57; border-color: #2e8b57;" 
              data-bs-toggle="modal" data-bs-target="#exampleModal" @click="selecionarProjeto(p)">Mais Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>  
  </div>   

  <div class="modal fade text-start" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog text-black modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ projetoSelected.name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="modal-body">
          <div class="row d-flex col-12 d-flex justify-content-center align-items-center">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner rounded-4">
                <div class="carousel-item active">
                  <img :src="`./src/assets/${projetoSelected.imageFolder}/0.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`./src/assets/${projetoSelected.imageFolder}/1.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`./src/assets/${projetoSelected.imageFolder}/2.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`./src/assets/${projetoSelected.imageFolder}/3.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`./src/assets/${projetoSelected.imageFolder}/4.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
              </div>
            </div>
          </div>

         <p class="mt-5">{{ projetoSelected.detailDescription }}</p>

         
         <p><strong>Acesso ao Projeto</strong></p>
         <p v-if="projetoSelected.tests">
            Você pode conferir o projeto rodando em um ambiente de teste. Para isso, basta clicar no link ao lado <a target="_blank" class="link-opacity-75 mr-5" :href="projetoSelected.link">{{ projetoSelected.name }}</a> e explorar todas as funcionalidades da aplicação. 
            As credenciais de acesso estão descritas na tela de login, caso existam.</p>
          
          <p v-if="projetoSelected.code">
            Você pode conferir o código fonte do projeto no meu github. Para isso, basta clicar no link ao lado <a target="_blank" class="link-opacity-75 mr-5" href="{{ projetoSelected.link }}">{{ projetoSelected.name }}</a>.</p>

         <p><strong>Funcionalidades</strong></p>
         <p>{{ projetoSelected.functions }}</p>

          <ul class="list-group text-center">
            <li class="list-group-item active">Tecnologias utilizadas no projeto</li>
            <li class="list-group-item" v-for="s in stacksItems" :key="s">{{ s }}</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: #2e8b57; border-color: #2e8b57;">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import projetos from '../projetos';

export default {
  name: "SectionProjects",
  data() {
    return {
      isMobile: false,
      projetos: projetos,
      projetoSelected: projetos[0],
      stacksItems: []
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
  },
  methods: {
    selecionarProjeto(projeto) {
      this.projetoSelected = projeto;
      this.stacksItems = this.projetoSelected.stacks.split(";")
    }
  }
}
</script>


<style scoped>
.container-fluid {
  width: 100%;
  background-image: url('@/assets/backoff5.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>