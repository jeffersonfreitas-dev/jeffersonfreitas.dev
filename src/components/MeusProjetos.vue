<template>
  <div class="container text-white">
    <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 animate-name mb-5">
      <div class="col-lg-4 col-12 text-start mt-5 mt-lg-0 mb-lg-4 mb-lg-0 mr-lg-md">
        <h1 class="display-3 fw-bold mt-5 mt-lg-0">{{ $t('my_projects') }}</h1>
        <p class="display-6 lead mt-3">{{ $t('quick_projects') }}</p>
      </div>
      <div class="col-12 col-lg-8">
        <p class="lead text-start">{{ $t('quick_projects_2') }}</p>
      </div>
    </div>

    <div class="carrossel-container animate-fade-in">
      <div class="row g-4">
        <div class="col-lg-4 col-12">
          <div class="project-list">
            <h3 class="mb-4 fw-bold">{{ $t('project_list') }}</h3>
            <div class="list-group">
              <button 
                v-for="(projeto, index) in projetos" 
                :key="projeto.name"
                @click="selectedProject = projeto"
                :class="[
                  'list-group-item list-group-item-action text-start project-list-item',
                  { active: selectedProject?.name === projeto.name }
                ]"
              >
                <div class="mini-group-project">
                  <div class="project-list-image">
                    <img 
                      :src="`/images/${projeto.imageFolder}/0.png`" 
                      :alt="projeto.name"
                      class="rounded-2"
                    >
                  </div>
                  <div class="mini-name-project">
                    <h6 class="mb-1" style="font-size: large;">{{ projeto.name }}</h6>
                    <small class="opacity-75" style="font-size: small;">{{ projeto.stacks.slice(0, 3).join(' • ') }}</small>
                  </div>
                  <div>
                    <a 
                      v-if="selectedProject.youtubeCode" 
                      :href="`https://www.youtube.com/watch?v=${selectedProject.youtubeCode}`"
                      target="_blank"
                      class="action-btn youtube-btn"
                      data-bs-toggle="tooltip"
                      :title="$t('btn_see_apresentation_video')"
                    >
                      <font-awesome-icon :icon="['fab', 'youtube']" class="me-1" />
                    </a>
                  </div>

                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-8 col-12" v-if="selectedProject">
          <div class="project-carousel-card animate-slide-in">
            <div class="carousel-container mb-4">
              <div id="projectCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner rounded-4">
                  <div 
                    v-for="(image, index) in 5" 
                    :key="index"
                    :class="['carousel-item', { active: index === 0 }]"
                  >
                    <img 
                      :src="`/images/${selectedProject.imageFolder}/${index}.png`" 
                      class="d-block w-100 carousel-image"
                      :alt="`${selectedProject.name} - Imagem ${index + 1}`"
                      style="object-fit: contain; background-color: rgba(0,0,0,0.5);"
                    >
                  </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Próximo</span>
                </button>
              </div>
            </div>

            <!-- Informações do projeto -->
            <div class="project-info">
              <h2 class="fw-bold mb-3">{{ selectedProject.name }}</h2>
              
              <p class="lead mb-4 text-start" dir="ltr">
                {{ currentLang.language === 'pt' ? selectedProject.description : selectedProject.descriptionEng }}
              </p>

              <!-- Stacks -->
              <div class="stacks-container mb-4">
                <h5 class="fw-bold mb-3">{{ $t('tech_used')}}</h5>
                <div class="d-flex flex-wrap gap-2 stacks-used">
                  <span class="tech-badge" v-for="stack in selectedProject.stacks" :key="stack">
                    {{ stack }}
                  </span>
                </div>
              </div>

              <!-- Ações -->
              <div class="actions-container d-flex flex-wrap gap-3 mb-4">
                <a 
                  v-if="selectedProject.youtubeCode" 
                  :href="`https://www.youtube.com/watch?v=${selectedProject.youtubeCode}`"
                  target="_blank"
                  class="action-btn youtube-btn"
                  data-bs-toggle="tooltip"
                  :title="$t('btn_see_apresentation_video')"
                >
                  <font-awesome-icon :icon="['fab', 'youtube']" class="me-2" />
                  <span>Vídeo</span>
                </a>

                <a 
                  v-if="selectedProject.link" 
                  :href="selectedProject.link"
                  target="_blank"
                  class="action-btn demo-btn"
                  data-bs-toggle="tooltip"
                  :title="$t('btn_try_application')"
                >
                  <font-awesome-icon :icon="['fa', 'eye']" class="me-2" />
                  <span>Demo</span>
                </a>

                <a 
                  v-if="selectedProject.github" 
                  :href="selectedProject.github"
                  target="_blank"
                  class="action-btn github-btn"
                  data-bs-toggle="tooltip"
                  :title="$t('btn_see_source')"
                >
                  <font-awesome-icon :icon="['fab', 'github']" class="me-2" />
                  <span>GitHub</span>
                </a>

                <!-- <button 
                  @click="openDetailsModal(selectedProject)"
                  class="action-btn details-btn"
                  data-bs-toggle="tooltip"
                  :title="$t('btn_more_details')"
                >
                  <font-awesome-icon :icon="['fa', 'info-circle']" class="me-2" />
                  <span>{{ $t('btn_more_details') || 'Detalhes' }}</span>
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão "Ver todos os projetos" -->
    <!-- <div class="row mb-5 mt-5">
      <div class="col-12 d-flex align-items-center justify-content-center">
        <a href="#" class="btn btn-outline-light custom-btn animate-pulse">
          {{ $t('btn_check_all_projects') }}
        </a>
      </div>
    </div> -->

    <!-- Modal de detalhes -->
    <!-- <div class="modal fade" id="detailsModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-secondary">
            <h5 class="modal-title fw-bold">{{ selectedProject?.name }}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div class="modal-body">
            <div class="row">
              <div class="col-12 mb-4">
                <div class="modal-carousel-container">
                  <div id="modalCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner rounded-4">
                      <div 
                        v-for="(image, index) in 5" 
                        :key="index"
                        :class="['carousel-item', { active: index === 0 }]"
                      >
                        <img 
                          :src="`/images/${selectedProject?.imageFolder}/${index}.png`" 
                          class="d-block w-100 modal-carousel-image"
                          :alt="`${selectedProject?.name} - Imagem ${index + 1}`"
                        >
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#modalCarousel" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#modalCarousel" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="col-12">
                <p class="lead mb-4">
                  {{ currentLang.language === 'pt' ? selectedProject?.detailDescription : selectedProject?.detailDescriptionEng }}
                </p>

                <div class="row g-4">
                  <div class="col-md-6" v-if="selectedProject?.link">
                    <h6 class="fw-bold mb-2">{{ $t('access_project') }}</h6>
                    <a :href="selectedProject.link" target="_blank" class="text-info">
                      {{ selectedProject.link }}
                    </a>
                  </div>

                  <div class="col-md-6" v-if="selectedProject?.github">
                    <h6 class="fw-bold mb-2">{{ $t('access_source') }}</h6>
                    <a :href="selectedProject.github" target="_blank" class="text-info">
                      {{ selectedProject.github }}
                    </a>
                  </div>

                  <div class="col-12">
                    <h6 class="fw-bold mb-2">{{ $t('features') }}</h6>
                    <p>{{ currentLang.language === 'pt' ? selectedProject?.functions : selectedProject?.functionsEng }}</p>
                  </div>

                  <div class="col-12">
                    <h6 class="fw-bold mb-2">{{ $t('tech_used') }}</h6>
                    <p>{{ selectedProject?.stacks.join(' • ') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modal-footer border-secondary">
            <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">
              {{ $t('close') }}
            </button>
            <a href="#projetos" class="btn btn-light" data-bs-dismiss="modal">
              {{ $t('back_to_projects') }}
            </a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { Modal } from 'bootstrap'
import projetos from '../projetos'
import { useLangStore } from '@/stores/Lang'

export default {
  data() {
    return {
      projetos: projetos,
      selectedProject: projetos[0],
      isMobile: window.innerWidth < 768,
      // detailsModal: null
    }
  },
  
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    },
    
    // openDetailsModal(project) {
    //   this.selectedProject = project
    //   if (this.detailsModal) {
    //     this.detailsModal.show()
    //   }
    // }
  },
  
  // mounted() {
  //   window.addEventListener('resize', this.checkMobile)
  //   this.detailsModal = new Modal(document.getElementById('detailsModal'))
  // },
  
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  
  computed: {
    useLangStore() {
      return useLangStore()
    },
    currentLang() {
      return this.useLangStore.currentLang
    }
  }
}
</script>

<style scoped>
.container {
  padding: 5px;
  max-width: 1400px;
}

/* Animações */
.animate-name {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeSlideIn 2s ease-out forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
}

.animate-slide-in {
  opacity: 0;
  transform: translateX(20px);
  animation: slideIn 0.8s ease-out 0.8s forwards;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Lista de projetos */
.project-list {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 20px;
  height: fit-content;
  max-height: 600px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.project-list::-webkit-scrollbar {
  width: 6px;
}

.project-list::-webkit-scrollbar-track {
  background: transparent;
}

.project-list::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
}

.list-group {
  background: transparent;
  border: none;
}

.list-group-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  margin-bottom: 8px;
  border-radius: 12px !important;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 12px;
}

.list-group-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
  border-color: rgba(255, 255, 255, 0.3);
}

.list-group-item.active {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
}

.project-list-image {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-list-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.list-group-item:hover .project-list-image img {
  transform: scale(1.1);
}

/* Card do carrossel */
.project-carousel-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-carousel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
}

.carousel-container {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.carousel-image {
  height: 300px;
  object-fit: cover;
}

/* .modal-carousel-image {
  height: 250px;
  object-fit: cover;
} */

/* Botões de ação */
.actions-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

.youtube-btn:hover {
  background: #ff0000;
  border-color: #ff0000;
}

.demo-btn:hover {
  background: #00ff88;
  border-color: #00ff88;
  color: black;
}

.github-btn:hover {
  background: #333;
  border-color: #333;
}

.details-btn:hover {
  background: #4a90e2;
  border-color: #4a90e2;
}

/* Tech badges */
.tech-badge {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 0.9rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

/* Modal */
/* .modal-content {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

.modal-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-carousel-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
} */

/* Responsividade */
@media (max-width: 768px) {
  .project-list {
    max-height: 300px;
    margin-bottom: 20px;
  }
  
  .carousel-image {
    height: 200px;
  }
  
  .modal-carousel-image {
    height: 180px;
  }
  
  .actions-container {
    justify-content: center;
  }
  
  .action-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  h1 {
    font-size: 2rem !important;
  }
  
  h2 {
    font-size: 1.5rem !important;
  }
  
  .lead {
    font-size: 1rem !important;
  }
  
  .tech-badge {
    font-size: 0.8rem;
    padding: 4px 10px;
  }
  
  .container {
    padding: 0 15px;
  }
}

/* Animações de hover para os itens da lista */
.project-list-item {
  position: relative;
  overflow: hidden;
}

.project-list-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.project-list-item:hover::after {
  left: 100%;
}

/* Efeito de brilho no card selecionado */
.project-carousel-card {
  position: relative;
  overflow: hidden;
}

.project-carousel-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.project-carousel-card:hover::before {
  opacity: 1;
}

.stacks-used {
  display: flex;
  justify-content: center;
}

.mini-group-project{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mini-name-project {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
