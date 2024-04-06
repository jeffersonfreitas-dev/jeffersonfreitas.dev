<template>
  <div class="container-fluid flex-column text-black" style="background-color: #a3a3a2;">
    <div class="row py-5">
      <div class="row p-5 ">
        <div class="d-flex flex-row">
          <h1 class="text-center fs-1">Fale comigo</h1>
          <div class="text-center" style="margin-left: 1rem;">
            <font-awesome-icon :icon="['fa', 'comment']" class="fa-2x" color="black"/>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">
        <div class="row p-3">
          <blockquote class="fs-5 text-justify text-start text-wrap text-break font-monospace">
            <p class="pt-3">Se você busca um desenvolvedor de software experiente para concretizar seus projetos, estou pronto para ajudar. Posso transformar suas ideias em soluções tecnológicas inovadoras.</p>
            <p class="mt-3">Estou comprometido em oferecer qualidade e resultados excepcionais.</p>
            <p class="mt-3 font-weight-bold" >Entre em contato para discutirmos como posso contribuir para o sucesso do seu projeto.</p>
          </blockquote>
        </div>
      </div>
      
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center px-4">
        <div class="flex-column">
          <div class="row mt-3">
            <div class="flex-row">
              <font-awesome-icon :icon="['fa', 'envelope']" class="fa-2x" color="black"/>
              <span class="fs-3 px-4">E-mail:</span>
            </div>
            <div class="row" style="margin-left: 2rem;">
              <span class="fs-4 px-3">contato@jeffersonfreitas.dev</span>
            </div>
          </div>

          <div class="row mt-3">
            <div class="flex-row">
              <font-awesome-icon :icon="['fa', 'phone']" class="fa-2x" color="black"/>
              <span class="fs-3 px-4">Telefone:</span>
            </div>
            <div class="row" style="margin-left: 2rem;">
              <span class="fs-4 px-3">+55 (85) 9.8172-1585</span>
            </div>
          </div>

          <div class="row mt-3 mb-5">
            <div class="flex-row">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="fa-2x" color="black"/>
              <span class="fs-3 px-4">Whatsapp:</span>
            </div>
            <div class="row" style="margin-left: 2rem;">
              <span class="fs-4 px-3">+55 (85) 9.8172-1585</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionContact"
}
</script>