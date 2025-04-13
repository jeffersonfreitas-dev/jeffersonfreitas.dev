<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center justify-content-between h-100 w-100">
    <div class="text-start mb-4 mb-lg-0 animate-name">
      <h1 class="display-3 fw-bold">Jefferson Freitas</h1>
      <p class="display-6 lead mt-3">{{ $t('my_title') }}</p>
      <p class="lead ">{{ $t('quick_description') }}</p>

      <a href="https://github.com/jeffersonfreitas-dev?tab=repositories" class="mx-2">
        <font-awesome-icon  :icon="['fab', 'github']" class="fa-xl" color="white"/>
      </a>
      <button  @click="changeLinkedinLink()" class="btn btn-link mx-2">
        {{ linkedinLink }}
        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="fa-xl" color="white"/>
      </button>


            <!-- Certificação AWS -->
      <a class="d-flex flex-column align-items-center mt-4 text-decoration-none" target="_blank" style="color: #fff;" >
        <img src="/images/aws.png" alt="Certificação AWS" style="width: 130px; height: auto;" />
        <span class="mt-2 ">AWS Developer</span>
      </a>
    </div>

    <!-- Lottie com animação de entrada -->
    <motion
      :initial="{ opacity: 0, x: 100 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 1 } }"
    >
      <div ref="lottieContainer" style="width: 600px; height: 600px;"></div>
    </motion>
    
  </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  mounted() {
    const urls = [
      'https://assets1.lottiefiles.com/packages/lf20_kkflmtur.json',
      'https://assets1.lottiefiles.com/packages/lf20_0yfsb3a1.json'
    ];

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
</style>
