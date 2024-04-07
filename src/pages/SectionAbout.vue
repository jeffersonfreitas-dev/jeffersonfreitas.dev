<template>
  <div class="container-fluid">
    <div class="row p-5">
      <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace">
        <h1 class="text-center fs-1">Sobre Mim</h1>
        <div class="text-center">
          <font-awesome-icon :icon="['fa', 'address-card']" class="fa-2x" color="white"/>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="d-flex flex-column text-white">
          
          <div class="row mt-3">
            <div class="col-md-12 d-flex justify-content-center">
              <img src="../assets/foto_avatar2.jpg" alt="Foto Jefferson" class="img-fluid rounded-5 mb-3">
            </div>
          </div>



          <div class="row mt-3">
            <div class="col-md-12 d-flex justify-content-center">
              <button class="btn btn-secondary active p-3 rounded-4" style="background-color: #2e8b57; border-color: #2e8b57;" @click="openPdfInNewTab">Veja Meu Currículo</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 d-none d-lg-block px-5 py-5 d-flex justify-content-center align-items-center font-monospace">
        <div class="row">
            <div class="col-md-12">
              <blockquote class="fs-5 text-justify">
                <p class="pt-3">Sou um Desenvolvedor Fullstack especializado em Java e Spring Framework, com uma sólida experiência como freelancer desde 2018 e atuo atualmente no time de Inovações da Unimed do Ceará.</p>
                <p class="pt-3">Sou graduado em Administração de Empresas, Tecnólogo em Análise e Desenvolvimento de Sistemas e Pós Graduado em Arquitetura de Sistemas para Cloud e outra em Segurança da Informação.
                  Possuo vários certificados e cursos na área de Desenvolvimento de DevOps. Você pode ver mais detalhes <a target="'_blank'" href="https://www.linkedin.com/in/jefferson-freitas/details/certifications/
">clicando aqui!</a> </p>
                <p class="pt-3">Minha paixão pela tecnologia me impulsiona a buscar constante aprimoramento, refletindo em minha versatilidade e atuação em diversas fases do projeto de desenvolvimento de software.</p>
              </blockquote>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import pdfUrl from "../assets/Curriculo02.pdf";

export default {
  name: "SectionAbout",
  methods: {
    openPdfInNewTab() {
      window.open(pdfUrl, '_blank');
    },
  }
}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/backoff2.png');
  background-size: cover;
}
</style>