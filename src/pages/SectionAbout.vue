<template>
  <div class="container-fluid">
    <div class="row pt-5">
      
      <div class="d-flex flex-row align-items-center justify-content-center text-black font-monospace">
        <h1 class="text-center fs-1">Sobre Mim</h1>
        <div class="text-center">
          <font-awesome-icon :icon="['fa', 'address-card']" class="fa-2x" color="black"/>
        </div>
      </div>
 
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="d-flex flex-column text-white">
          
          <div class="row mt-3">
            <div class="col-md-12 d-flex justify-content-center">
              <img src="../assets/foto_avatar2.jpg" alt="Foto Jefferson" class="img-fluid rounded-5 mb-3" :class="{'img-size': isMobile}">
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-12 d-flex justify-content-center font-monospace">
              <button class="btn btn-secondary active p-3 rounded-4" style="background-color: #30302a; border-color: #30302a;" @click="openPdfInNewTab">Veja Meu Currículo</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-lg-block px-5 py-5 fw-bold d-flex justify-content-center align-items-center font-monospace"
          :class="{'text-start': !isMobile, 'text-center': isMobile}">
        <div class="row">
            <div class="col-md-12">
              <blockquote class="fs-5 text-justify">
                <p class="pt-3">Sou um Desenvolvedor Fullstack especializado em Java e Spring Framework, com uma sólida experiência como freelancer desde 2018. Atualmente, faço parte do time de Inovações da Unimed do Ceará.</p>
                <p class="pt-3">Graduei-me em Administração de Empresas e obtive um diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas. Além disso, possuo especializações em Arquitetura de Sistemas para Cloud e Segurança da Informação. Conto com diversos certificados e cursos na área de Desenvolvimento e DevOps. Para mais detalhes, você pode acessar meu perfil <a target="'_blank'" href="https://www.linkedin.com/in/jefferson-freitas/details/certifications/" style="color: #30302a;">clicando aqui.</a> </p>
                <p class="pt-3">Minha paixão pela tecnologia me impulsiona a buscar constante aprimoramento, o que se reflete em minha versatilidade e participação em diversas fases do ciclo de desenvolvimento de software.</p>
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
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
  },
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
  background-image: url('@/assets/backoff2.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.img-size {
  height: 15rem;
  width: 13rem;
}
</style>