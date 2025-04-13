<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center justify-content-between">
    <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
      <!-- Textos "Sobre mim" -->
      <div class="text-start mt-4 animate-name px-3 px-lg-0 ">
        <h1 class="display-3 fw-bold">{{ $t('about_me') }}</h1>
        <p class=" lead display-6 mt-3">{{ $t('quick_about_me') }}</p>
        <p class="lead mb-3">
          {{ $t('about_me_1') }} <strong>backend</strong> {{ $t('and') }} <strong>{{ $t('about_me_2') }}</strong> {{ $t('about_me_3') }}
        </p>
        <p class="lead mb-3">
          {{ $t('about_me_4') }} <strong>{{ $t('about_me_5') }}</strong>, <strong>{{ $t('about_me_6') }}</strong> {{ $t('and') }} <strong>{{ $t('about_me_7') }}</strong>, {{ $t('about_me_8') }} <strong>AWS Certified Developer</strong>.
        </p>
        <p class="lead mb-3">
          {{ $t('about_me_9') }}
        </p>
      </div>
    </div>

    <!-- Coluna direita -->
    <div class="col-12 col-lg-5 d-flex flex-column align-items-center text-start px-3 px-lg-5 mt-4 mt-lg-0">
      <p class="lead display-6">{{ $t('about_more_me') }}</p>
      <p class="lead mb-4">{{ $t('down_cv') }}</p>

      <div class="d-flex flex-column flex-md-row gap-3">
        <a :href="LINK_CURRICULO" download class="btn btn-outline-light custom-btn" target="_blank">
          {{ $t('btn_down_cv') }} 
        </a>
        <a
          :href="LINK_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-light custom-btn d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-linkedin me-2"></i> LinkedIn
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import lottie from 'lottie-web'
import { LINK_LINKEDIN, LINK_CURRICULO } from '@/constants.js'

export default {
  data() {
    return {
      LINK_CURRICULO,
      LINK_LINKEDIN
    }
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets1.lottiefiles.com/packages/lf20_tfb3estd.json',
    });
    // Intersection Observer para animação
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-slide-in');
            observer.unobserve(entry.target); // anima só 1x
          }
        });
      },
      { threshold: 0.2 } // ativa quando 20% visível
    );

    if (this.$refs.animateSection) {
      observer.observe(this.$refs.animateSection);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 40px 20px;
}

.animate-name {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 1.5s ease-out forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
}
</style>
