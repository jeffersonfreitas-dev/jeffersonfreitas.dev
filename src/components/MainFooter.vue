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
          <a href="#" class="mx-2">
            <font-awesome-icon :icon="['fab', 'instagram']" class="fa-xl" color="white"/>
          </a>
          <a href="#" class="mx-2">
            <font-awesome-icon :icon="['fas', 'envelope']" class="fa-xl" color="white"/>
          </a>
      </div>
      <div class="col-12 d-flex justify-content-center align-items-center text-white">
        <p class="tw-text-xs tw-font-bold"> @2023 Todos os direitos reservados</p>
      </div>
    </div>
  </footer>

<!--   
<div class="tw-h-36">
  <hr class="tw-h-1 tw-bg-default-green-1">
    <div class="tw-h-full tw-bg-default-dark-1 tw-text-white tw-flex tw-flex-col tw-justify-center tw-items-center">

      <div class="tw-mt-0">
          <a href="https://github.com/jeffersonfreitas-dev?tab=repositories" class=" tw-rounded-full tw-p-2 lg:tw-p-3 tw-mx-2 tw-bg-default-green-1">
            <font-awesome-icon  :icon="['fab', 'github']" size="16px"/>
          </a>
          <a href="https://www.linkedin.com/in/jefferson-freitas/" class=" tw-rounded-full tw-p-2 lg:tw-p-3 tw-mx-2 tw-bg-default-green-1">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" size="16px"/>
          </a>
          <a href="#" class=" tw-rounded-full tw-p-2 lg:tw-p-3 tw-mx-2 tw-bg-default-green-1">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class=" tw-rounded-full tw-p-2 lg:tw-p-3 tw-mx-2 tw-bg-default-green-1">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
      </div>
      <div class="tw-mt-6">
        <p class="tw-text-xs tw-font-bold"> @2023 Todos os direitos reservados</p>
      </div>
    </div>
  </div> -->
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