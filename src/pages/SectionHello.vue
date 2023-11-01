<template>
  <div class="w-full h-screen" id="hello">
    <div class="left-10 h-full bg-default-dark-1 py-16">
      
      <div class="grid grid-rows-2 grid-flow-col gap-y-32 content-start">
        <div class="row-start-1 row-span-1">
          <div class="h-44 grid grid-cols-2  content-center">
            <h1 class="text-default-green-1 text-5xl font-bold">Full Cycle Developer</h1>
            <p class="text-white mt-2">Atuando em todos os estágios de um projeto. Desde o desenvolvimento ao deploy!!</p>
          </div>
        </div>

        <div class="row-start-2 row-span-3">
          <div class="h-full grid grid-cols-2  content-start">
            <div class="px-16 text-slate-50">
              <h2 class="text-3xl font-medium text-default-green-1">Bem-vindo(a) ao meu Portfólio!</h2>
      
              <div class="text-justify">
                <p class="text-lg font-medium mt-10"><strong class="text-white">Sou um desenvolvedor de software FullCycle apaixonado por criar soluções inovadoras e eficientes para os meus clientes.</strong></p>
                <p class="text-lg font-medium mt-10">Com anos de experiência em desenvolvimento web, estou sempre buscando novas tecnologias e tendências para garantir que minhas soluções stejam sempre atualizadas e atendam às necessidades dos usuários.</p>
              </div>
              <div class="mt-16">
                <a class="rounded-xl bg-slate-500 py-4 px-6 hover:bg-slate-700" href="#projects">Meus Projetos</a>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHello"
}
</script>