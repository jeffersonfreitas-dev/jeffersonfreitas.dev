<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center justify-content-between">
    <!-- Coluna esquerda -->
    
    
    <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
      <!-- Textos "Sobre mim" -->
      <div class="text-start mt-4 animate-name px-3 px-lg-0 ">
        <h1 class="display-3 fw-bold">Sobre mim</h1>
        <p class=" lead display-6 mt-3">Profissional com foco em tecnologia, inovação e resultados</p>
        <p class="lead mb-3">
          Desenvolvedor com forte atuação em <strong>backend</strong> e <strong>arquitetura de sistemas em nuvem.</strong> Acumulo ampla experiência em projetos robustos e soluções escaláveis.
        </p>
        <p class="lead mb-3">
          Graduado em <strong>Administração</strong>, <strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong> e <strong>pós-graduado em Aplicações Cloud Computing</strong>, também possuo certificação <strong>AWS Certified Developer</strong>.
        </p>
        <p class="lead mb-3">
          Tenho sólida vivência em todas as etapas do ciclo de desenvolvimento, com foco em qualidade, performance e segurança.
        </p>
      </div>
    </div>

    <!-- Coluna direita -->
    <div class="col-12 col-lg-5 d-flex flex-column align-items-center text-start px-3 px-lg-5 mt-4 mt-lg-0">
      <p class="lead display-6">Quer conhecer mais sobre minha trajetória e projetos?</p>
      <p class="lead mb-4">Baixe meu currículo ou conecte-se comigo no LinkedIn.</p>

      <div class="d-flex flex-column flex-md-row gap-3">
        <a href="/curriculo.pdf" download class="btn btn-outline-light custom-btn">
          Baixar Currículo
        </a>
        <a
          href="https://www.linkedin.com/in/seu-usuario"
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

export default {
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
