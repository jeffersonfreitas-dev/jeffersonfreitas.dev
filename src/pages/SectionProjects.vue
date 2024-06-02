<template>
<div class="container-fluid"> 
  <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace py-5">
    <h1 class="text-center fs-1">Meus Projetos</h1>
    <div class="text-center">
      <font-awesome-icon :icon="['fa', 'diagram-project']" class="fa-2x" color="white"/>
    </div>
  </div>  
  
  <div class="row d-flex justify-content-center px-3">
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5" v-for="(p) in projetos" :key="p.name">
      <div class="card-deck">
        <div class="card">
          <a data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor: pointer;" data-bs-placement="top" @click="selecionarProjeto(p)">
            <div class="image-container">
              <img class="card-img-top image" :src="`/images/${p.imageFolder}/0.png`" :alt="projetoSelected.name">
            </div>
          </a>
          <div class="card-footer d-flex justify-content-end">
            <a class=" px-2" data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor: pointer;" data-bs-placement="top" title="Mais Detalhes" @click="selecionarProjeto(p)"> 
                <font-awesome-icon :icon="['fa', 'info-circle']" class="fa-2x" color="#2e8b57"/>
            </a>
            <a v-if="p.youtubeCode" class=" px-2" data-bs-toggle="modal" data-bs-target="#modalVideo" style="cursor: pointer;" data-bs-placement="top" title="Ver Video Apresentação" @click="selecionarProjeto(p)"> 
                <font-awesome-icon :icon="['fab', 'youtube']" class="fa-2x" color="#30302a"/>
            </a>
            <a  v-if="p.link" class="px-2" target="_blank" :href="p.link" data-bs-placement="top" style="cursor: pointer;" title="Testar a aplicação">
              <font-awesome-icon :icon="['fa', 'eye']" class="fa-2x" color="#30302a"/> 
            </a>
            <a v-if="p.github" class="px-2" target="_blanck" :href="p.github" data-bs-placement="top" style="cursor: pointer;" title="Ver código fonte">
              <font-awesome-icon :icon="['fab', 'github']" class="fa-2x" color="#30302a"/> 
            </a>
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
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" v-if="!projetoSelected.youtubeCode">
              <div class="carousel-inner rounded-4">
                <div class="carousel-item active">
                  <img :src="`/images/${projetoSelected.imageFolder}/0.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`/images/${projetoSelected.imageFolder}/1.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`/images/${projetoSelected.imageFolder}/2.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`/images/${projetoSelected.imageFolder}/3.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
                <div class="carousel-item">
                  <img :src="`/images/${projetoSelected.imageFolder}/4.png`" class="d-block w-100" :alt="projetoSelected.name">
                </div>
              </div>
            </div>
            <iframe width="560" height="420" :src="`https://www.youtube.com/embed/${projetoSelected.youtubeCode}`" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen :title="projetoSelected.name" v-if="projetoSelected.youtubeCode"></iframe>
            
          </div>

         <p class="mt-5">{{ projetoSelected.detailDescription }}</p>
          
         <div v-if="projetoSelected.acessoProjeto">
           <p><strong>Acesso ao Projeto</strong></p>
           <p v-if="projetoSelected.link">
              Você pode conferir uma amostra projeto rodando em um ambiente de teste clicando neste <a target="_blank" class="link-opacity-75 mr-5" :href="projetoSelected.link">link</a> e explorar todas as funcionalidades da aplicação. 
              Caso existam credenciais de testes pré-criadas, estará descrita na tela de login, do contrário, você poderá criar o seu próprio cadastro de acesso.</p>
         </div>
         
         <div v-if="projetoSelected.github">
          <p><strong>Acesso ao Código Fonte</strong></p>
          <p >
            Você pode conferir o código fonte do projeto no meu <a target="_blank" class="link-opacity-75 mr-5" :href="projetoSelected.github">Github</a>.</p>
        </div>

         <p><strong>Funcionalidades</strong></p>
         <p>{{ projetoSelected.functions }}</p>

          <ul class="list-group text-center">
            <li class="list-group-item active">Tecnologias utilizadas no projeto</li>
            <li class="list-group-item" v-for="s in stacksItems" :key="s">{{ s }}</li>
          </ul>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: #2e8b57; border-color: #2e8b57;">Fechar</button>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade text-start" id="modalVideo" tabindex="-1" aria-labelledby="modalVideoLabel" aria-hidden="true">
    <div class="modal-dialog text-black modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalVideoLabel">{{ projetoSelected.name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="modal-body">
          <div class="row d-flex col-12 d-flex justify-content-center align-items-center">
            <iframe width="560" height="420" :src="`https://www.youtube.com/embed/${projetoSelected.youtubeCode}`" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen :title="projetoSelected.name" v-if="projetoSelected.youtubeCode"></iframe>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
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
.card:hover {
    transform: scale(1.025);
    box-shadow: rgba(46, 139, 87, 0.24) 0px 5px 10px;
}

.image {
    width: 100%;
    height: auto;
    transition: filter 0.5s ease;
}

.image-container:hover .image {
    filter: brightness(50%);
}
</style>