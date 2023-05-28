<!-- <p class="text-lg font-medium mt-10">Se você estiver procurando por um desenvolvedor fullstack que possa transformar suas ideias em realidade, sinta-se à vontade para entrar em contato comigo. Vamos trabalhar juntos para construir soluções incríveis!</p> -->
<!-- <div><img src="../assets/hand-touch.jpg" /></div> -->
<!-- <p class="text-lg font-medium mt-10">Neste portfólio, você encontrará alguns dos projetos que desenvolvi, tanto em front-end quanto em back-end, utilizando diversas linguagens e ferramentas.  Além disso, você poderá conhecer um pouco mais sobre mim e minhas habilidades técnicas.</p> -->
<!-- <div class="h-44 grid grid-cols-2  content-center">
  <h1 class="text-default-green-1 text-5xl font-bold">Full Cycle Developer</h1>
  <p class="text-white mt-2">Atuando em todos os estágios de um projeto. Desde o desenvolvimento ao deploy!!</p>
</div> -->
<!-- <h2 class="text-3xl font-medium text-default-green-1">Bem-vindo(a) ao meu Portfólio!</h2>-->
<!-- <div class="row-start-2 row-span-3">
          <div class="h-full grid grid-cols-2  content-start">
            <div class="px-16 text-slate-50">
      
              <div class="text-justify">
                <p class="text-lg font-medium mt-10"><strong class="text-white">Sou um desenvolvedor de software FullCycle apaixonado por criar soluções inovadoras e eficientes para os meus clientes.</strong></p>
                <p class="text-lg font-medium mt-10">Com anos de experiência em desenvolvimento web, estou sempre buscando novas tecnologias e tendências para garantir que minhas soluções stejam sempre atualizadas e atendam às necessidades dos usuários.</p>
              </div>
              <div class="mt-16">
                <a class="rounded-xl bg-slate-500 py-4 px-6 hover:bg-slate-700" href="#projects">Meus Projetos</a>
              </div> 
            </div>
    
            <div class="px-10 text-slate-50">
              <div class="text-justify">
                <h1 class="mb-14 text-5xl font-bold tracking-tighter"><span :class="actionClasses">{{ action }} </span> </h1>
              </div>
            </div>
          </div>
        </div>       -->



<template>
  <div class="w-full h-screen py-20" id="hello" style="background-color: darkcyan;">
    <div class=" h-full grid grid-cols-1 lg:grid-cols-2 gap-3" style="background-color: burlywood;">

      <!-- Coluna esquerda -->
      <div class="grid grid-rows-3">
          <div class="row-span-2" style="background-color: white;">
            Meu nome
          </div>

          <div class="row-span-3" style="background-color: red;">
            convidando para projetos e vender peixe
          </div>

          <div class="content-center" style="background-color: black;">
            <div class="">
              <div class="">
                <a class="rounded-xl bg-slate-500  py-5 px-7 hover:bg-slate-700" href="#projects">Veja meus Projetos</a>
              </div>
              </div> 
          </div>
        </div>

        <!-- Coluna direita -->
        <div class="grid grid-rows-2" style="background-color: yellow;">
          <div>
            coluna 01
          </div>

          <div>
            coluna 02
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList';

export default {
  name: "SectionHello",
  created() {
    this.changeTitle();
  },
  data () {
    return {
      action: "Build",
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  methods: {
    changeTitle(){
      this.interval = setInterval(() => {
        this.action = nextElementInList(["Build", "Create", "Desing", "Code"], this.action);
      }, 3500)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.desing {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>