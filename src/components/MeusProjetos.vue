<template>
  <div class="container text-white">
    <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 animate-name mb-5">
      <div class="col-lg-4 col-12 text-start mt-5 mt-lg-0 mb-lg-4 mb-lg-0 mr-lg-md">
        <h1 class="display-3 fw-bold mt-5 mt-lg-0">{{ $t('my_projects') }}</h1>
        <p class="display-6 lead mt-3">{{ $t('quick_projects') }}</p>
      </div>
        <div class="col-12 col-lg-8">
        <p class="lead text-start">
          {{ $t('quick_projects_2') }}
        </p>

      </div>
    </div>

    <div class="col-12 mt-5 div-projetos" v-for="(p) in projetos" :key="p.name">
      <a class="text-decoration-none text-white" :href="p.link" target="_blank">

        <div class="project-card d-flex flex-column flex-md-row align-items-center text-center text-md-start gap-3" style="cursor: pointer;">
          <div class="d-flex align-items-center justify-content-center flex-shrink-0 project-image" style="width: 260px; height: 260px;">
            <img :src="`/images/${p.imageFolder}/0.png`" :alt="p.name" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
  
          <div class="d-flex flex-column flex-grow-1 w-100 mt-3 justify-content-between">
            <div class="text-start gap-5">
              <h4 class="fw-bold mb-1">{{ p.name }}</h4>
              <p class="mb-3 text-justify">
                {{ currentLang.language === 'pt' ? p.description : p.descriptionEng }}
              </p>
            </div>
  
            <div class="d-flex flex-wrap justify-content-center gap-2">
              <span class="tech-badge" v-for="(s) in p.stacks" :key="s">{{ s }}</span>
            </div>
  
            <div class="d-flex flex-wrap justify-content-end gap-2 mt-3">
              <a class=" px-2" data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor: pointer;" data-bs-placement="top" :title="$t('btn_more_details')" @click="selecionarProjeto(p)"> 
                  <font-awesome-icon :icon="['fa', 'info-circle']" :class="isMobile ? 'fa-lg' : 'fa-2x'" color="#fff"/>
              </a>
              <a v-if="p.youtubeCode" class=" px-2" target="_blank" :href="`https://www.youtube.com/watch?v=${p.youtubeCode}`" style="cursor: pointer;" data-bs-placement="top" :title="$t('btn_see_apresentation_video')"> 
                  <font-awesome-icon :icon="['fab', 'youtube']" :class="isMobile ? 'fa-lg' : 'fa-2x'" color="#fff"/>
              </a>
              <a  v-if="p.link" class="px-2" target="_blank" :href="p.link" data-bs-placement="top" style="cursor: pointer;" :title="$t('btn_try_application')">
                <font-awesome-icon :icon="['fa', 'eye']" :class="isMobile ? 'fa-lg' : 'fa-2x'" color="#fff"/> 
              </a>
              <a v-if="p.github" class="px-2" target="_blanck" :href="p.github" data-bs-placement="top" style="cursor: pointer;" :title="$t('btn_see_source')">
                <font-awesome-icon :icon="['fab', 'github']" :class="isMobile ? 'fa-lg' : 'fa-2x'" color="#fff"/> 
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="row mb-5">
      <div class="col-12 d-flex align-items-center justify-content-center mt-3">
        <a href="#" class="btn btn-outline-light custom-btn">
          {{ $t('btn_check_all_projects') }}
        </a>
      </div>
    </div>


    <div class="modal fade text-start" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog text-black modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ projetoSelected.name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="row modal-body">
          <div class="col-lg-3 "></div>
          <div class="col-lg-6 col-12 mb-3">
            <div id="carouselExampleSlidesOnly" class="carousel slide d-flex justify-content-center align-items-center" data-bs-ride="carousel">
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
          </div>
          <div class="col-lg-3 "></div>

         <p class="mt-2">{{ currentLang.language === 'pt' ? projetoSelected.detailDescription : projetoSelected.detailDescriptionEng }}</p>
          
         <div v-if="projetoSelected.acessoProjeto">
           <p><strong>{{ $t('access_project') }}</strong></p>
           <p v-if="projetoSelected.link">
            {{ $t('click') }} <a target="_blank" class="link-opacity-75 mr-5" :href="projetoSelected.link">{{ $t('here') }}</a> {{ $t('text_001') }} </p> 
         </div>
         
         <div v-if="projetoSelected.github">
          <p><strong>{{ $t('access_source')}}</strong></p>
          <p >
            {{ $t('text_002') }}<a target="_blank" class="link-opacity-75 mr-5" :href="projetoSelected.github">Github</a>.</p>
        </div>

         <p><strong>{{ $t('features')}}</strong></p>
         <p>{{ currentLang.language === 'pt' ? projetoSelected.functions : projetoSelected.functionsEng }}</p>

         <p><strong>{{ $t('tech_used')}}</strong></p>
         <p>{{ projetoSelected.stacks.join('; ') }};</p>

        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: #fff; color: black; border-color: #fff;">{{ $t('close')}}</button>
        </div>
      </div>
    </div>
  </div>

    
  </div>
</template>

<script>
import projetos from '../projetos';
import { useLangStore } from '@/stores/Lang'

export default {
  data() {
    return {
      projetos: projetos,
      projetoSelected: projetos[0],
      isMobile: window.innerWidth < 768
    };
  },
  methods: {
    selecionarProjeto(projeto) {
      this.projetoSelected = projeto;
    },
      checkMobile() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  computed: {
    useLangStore() {
      return useLangStore();
    },
    currentLang() {
      return this.useLangStore.currentLang
    }
  }
};
</script>

<style scoped>
.container {
  padding: 5px;
}

.animate-name {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeSlideIn 2s ease-out forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
  min-height: 140px;
}

.project-card:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.project-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #fff;
}

.tech-badge {
  border: 1px solid white;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.8rem;
  color: white;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .project-image {
    width: 230px !important;
    height: 100px !important;
  }

  .div-projetos{
    border-radius: 10px;
  }

  h1, h4 {
    font-size: 2.0rem !important;
  }

  h4 {
    font-size: 1.5rem !important;
  }

  .lead, p {
    font-size: 1.0rem !important;
  }

  .tech-badge {
    font-size: 0.7rem !important;
    padding: 2px 8px;
  }
  .container {
    padding: 0 10px;
  }

  .project-card {
    padding: 10px;
  }

  .modal .modal-body {
    font-size: 0.9rem;
  }
}
</style>
