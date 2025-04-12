<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center justify-content-between">
    
    
    <div class="col-4 text-start mb-4 mb-lg-0 animate-name">
      <h1 class="display-3 fw-bold">Meus Projetos</h1>
      <p class="display-6 lead mt-3">Soluções reais com foco em performance e escalabilidade</p>
      <p class="lead">
        Apresento alguns dos principais projetos em que atuei. Cada solução foi desenvolvida com foco em qualidade, segurança e eficiência, utilizando as mais diversas tecnologias presentes no mercado.
      </p>
      <a href="/curriculo.pdf" download class="btn btn-outline-light custom-btn">
          Confira Todos
        </a>
    </div>

<!-- Cards de projetos à direita -->
<div class="col-12 col-lg-8 d-flex flex-column gap-4 mt-4">
  <div class="project-card d-flex flex-row align-items-center gap-4">
    <!-- Imagem fixa -->
    <div class="d-flex align-items-center justify-content-center" style="width: 130px; height: 130px; flex-shrink: 0;">
      <img src="/projeto.jpg" alt="Imagem do Projeto" class="project-image" />
    </div>

    <!-- Conteúdo do projeto -->
    <div class="d-flex flex-column justify-content-start flex-grow-1">
      <h4 class="fw-bold mb-1">Nome do Projeto</h4>
      <p class="mb-3 text-justify">
        Uma descrição curta sobre o projeto, destacando funcionalidades principais, propósito e resultados alcançados.
      </p>

      <!-- Tecnologias -->
      <div class="d-flex flex-wrap justify-content-center gap-2">
        <span class="tech-badge">Vue</span>
        <span class="tech-badge">Spring Boot</span>
        <span class="tech-badge">PostgreSQL</span>
      </div>
    </div>
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
      path: 'https://lottie.host/6d01ce0b-0373-4635-91f0-787f6e60c191/5uY5XlAWgw.json', // Você pode trocar
    });
  },
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
