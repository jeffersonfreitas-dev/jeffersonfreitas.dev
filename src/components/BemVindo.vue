<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center justify-content-between">
    <div class="col-lg-5 col-12">
      <div class="text-lg-start text-center mb-4 animate-name">
        <h1 class="display-3 fw-bold">Jefferson Freitas</h1>
        <p class="display-6 lead mt-3">{{ $t('my_title') }}</p>
        <p class="lead ">{{ $t('quick_description') }}</p>
  
        <a :href="LINK_GITHUB" class="mx-2" target="_blank">
          <font-awesome-icon  :icon="['fab', 'github']" class="fa-xl" color="white"/>
        </a>
        <a :href="LINK_LINKEDIN"  class="mx-2" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" class="fa-xl" color="white"/>
        </a>

        <a :href="LINK_CERTIFICADO_AWS"  class="mx-2" target="_blank"  v-if="isMobile">
          <img src="/images/aws.png" alt="Certificação AWS" style="width: 30px;"/>
        </a>
        
        <a class="d-flex flex-column align-items-center mt-4 text-decoration-none" target="_blank" :href="LINK_CERTIFICADO_AWS" style="color: #fff;"  v-if="!isMobile">
          <img src="/images/aws.png" alt="Certificação AWS"   style="width: 130px; height: auto" />
          <span class="mt-2 ">AWS Developer</span>
        </a>
      </div>
    </div>

    <!-- Lottie com animação de entrada -->
    <motion
      :initial="{ opacity: 0, x: 100 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 1 } }"
    >
      <div ref="lottieContainer" class="lottie"></div>
    </motion>
    
  </div>
</template>

<script>
import lottie from 'lottie-web'
import { LINK_LINKEDIN, LINK_GITHUB, LINK_CERTIFICADO_AWS } from '@/constants.js'

export default {
  data() {
    return {
      LINK_GITHUB,
      LINK_LINKEDIN,
      LINK_CERTIFICADO_AWS,
      isMobile: window.innerWidth < 768
    }
  },
  methods: {
    selecionarProjeto(projeto) {
      this.projetoSelected = projeto;
    },
      checkMobile() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  mounted() {
    const urls = [
      'https://assets1.lottiefiles.com/packages/lf20_kkflmtur.json',
      'https://assets1.lottiefiles.com/packages/lf20_0yfsb3a1.json'
    ];
    window.addEventListener('resize', this.checkMobile);
    const selectedUrl = urls[Math.floor(Math.random() * urls.length)];
    
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: selectedUrl
    });
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.lottie {
  width: 600px;
  height: 600px;
}

.animate-name {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 2s ease-out forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 992px) {
  .lottie {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .lottie {
    width: 300px;
    height: 300px;
  }
  h1, h4 {
    font-size: 2.0rem !important;
  }

  .lead, p {
    font-size: 1.0rem !important;
  }
}
</style>