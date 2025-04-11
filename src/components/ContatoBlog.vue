<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center justify-content-between h-100 w-100">
    
    <div class="text-start mb-4 mb-lg-0 animate-name">
      <h1 class="display-3 fw-bold">Contato</h1>
      <p class="display-6 lead mt-3">Contato</p>
      <p class="lead ">Contato  </p>
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
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/2ef8971c-1a63-4052-a5eb-f28269ccfcfb/32eWy2CO1d.json', // Você pode trocar
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
