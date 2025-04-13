<template>
  <div class="container text-white">
    <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 animate-name mb-5">
      <div class="col-4 text-start mb-4 mb-lg-0 mr-md">
        <h1 class="display-3 fw-bold">{{ $t('my_projects') }}</h1>
        <p class="display-6 lead mt-3">{{ $t('quick_projects') }}</p>
      </div>
        <div class="col-12 col-lg-8">
        <p class="lead text-start">
          {{ $t('quick_projects_2') }}
        </p>

      </div>
    </div>

    <div class="col-12 col-lg-12 mt-5" v-for="(p) in projetos" :key="p.name">
      <div class="project-card d-flex flex-row gap-5" style="cursor: pointer;">
        <div class="d-flex align-items-center justify-content-center project-image" style="width: 260px; height: 260px; flex-shrink: 0;">
          <img :src="`/images/${p.imageFolder}/0.png`" :alt="p.name" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
          <div class="text-start gap-5">
            <h4 class="fw-bold mb-1">{{ p.name }}</h4>
            <p class="mb-3 text-justify">
              {{ currentLang.language === 'pt' ? p.description : p.descriptionEng }}
            </p>
          </div>

          <div class="d-flex flex-wrap justify-content-center gap-2">
            <span class="tech-badge" v-for="(s) in p.stacks" :key="s">{{ s }}</span>
          </div>

          <div class="d-flex flex-wrap justify-content-end gap-2">
            <a class=" px-2" data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor: pointer;" data-bs-placement="top" :title="$t('btn_more_details')" @click="selecionarProjeto(p)"> 
                <font-awesome-icon :icon="['fa', 'info-circle']" class="fa-2x" color="#fff"/>
            </a>
            <a v-if="p.youtubeCode" class=" px-2" data-bs-toggle="modal" data-bs-target="#modalVideo" style="cursor: pointer;" data-bs-placement="top" :title="$t('btn_see_apresentation_video')" @click="selecionarProjeto(p)"> 
                <font-awesome-icon :icon="['fab', 'youtube']" class="fa-2x" color="#fff"/>
            </a>
            <a  v-if="p.link" class="px-2" target="_blank" :href="p.link" data-bs-placement="top" style="cursor: pointer;" :title="$t('btn_try_application')">
              <font-awesome-icon :icon="['fa', 'eye']" class="fa-2x" color="#fff"/> 
            </a>
            <a v-if="p.github" class="px-2" target="_blanck" :href="p.github" data-bs-placement="top" style="cursor: pointer;" :title="$t('btn_see_source')">
              <font-awesome-icon :icon="['fab', 'github']" class="fa-2x" color="#fff"/> 
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-12 d-flex align-items-center justify-content-center mt-3">
        <a href="/curriculo.pdf" download class="btn btn-outline-light custom-btn">
          {{ $t('btn_check_all_projects') }}
        </a>
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
    };
  },
  computed: {
    useLangStore() {
      return useLangStore();
    },
    currentLang() {
      console.log(this.useLangStore.currentLang)
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
</style>
