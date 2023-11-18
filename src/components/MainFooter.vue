<template>
<div class="h-36">
  <hr class="h-1 bg-default-green-1">
    <div class="h-full bg-default-dark-1 text-white flex flex-col justify-center items-center">

      <div class="mt-0">
          <a href="https://github.com/jeffersonfreitas-dev?tab=repositories" class=" rounded-full p-2 lg:p-3 mx-2 bg-default-green-1">
            <font-awesome-icon  :icon="['fab', 'github']" size="16px"/>
          </a>
          <a href="https://www.linkedin.com/in/jefferson-freitas/" class=" rounded-full p-2 lg:p-3 mx-2 bg-default-green-1">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" size="16px"/>
          </a>
          <a href="#" class=" rounded-full p-2 lg:p-3 mx-2 bg-default-green-1">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class=" rounded-full p-2 lg:p-3 mx-2 bg-default-green-1">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
      </div>
      <div class="mt-6">
        <p class="text-xs font-bold"> @2023 Todos os direitos reservados</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
}
</script>