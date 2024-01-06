<template>

  <footer class="d-flex justify-content-center">
    <div class="row container">
      <div class="col-12 d-flex align-items-center justify-content-center mt-4">
        <a href="https://github.com/jeffersonfreitas-dev?tab=repositories" class="mx-2">
            <font-awesome-icon  :icon="['fab', 'github']" class="fa-xl" color="white"/>
          </a>
          <a href="https://www.linkedin.com/in/jefferson-freitas/" class="mx-2">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="fa-xl" color="white"/>
          </a>
      </div>
      <div class="col-12 d-flex justify-content-center align-items-center text-white">
        <p class="tw-text-xs fs-8 tw-font-bold"> @2023 Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
}
</script>

<style scoped>
footer {
  width: 100%;
  background-color: #2E8B57;
}
.container {
  width: 100%;
  height: 15vh;
}
</style>