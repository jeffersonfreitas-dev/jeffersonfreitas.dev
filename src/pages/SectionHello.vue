<template>
  <div class="h-screen">
    <div class="h-full grid grid-rows-3 bg-default-dark-2 text-white lg:grid-rows-1 lg:grid-cols-2 gap-1">
      
      <div class="row-span-2 lg:row-span-1 lg:col-span-1 w-70 h-full flex flex-col justify-center items-center">
        <!-- Conteúdo da primeira div (70% de largura, 70% de altura) -->
        <h1 :class="isMobile ? 'text-xl font-bold mt-28' : 'text-4xl font-bold'">Desenvolvedor de Software</h1>
        <p class="mt-6 text-md">Seja bem-vindo(a) ao meu portfólio.</p>
        <img src="../assets/foto_avatar.jpg" alt="Sua Foto" class="w-120 h-60 rounded-full mb-4 mt-8">
      </div>
      
      
      <div class="lg:col-span-1 w-30 h-full flex flex-col justify-center items-center">
        <blockquote class="text-sm px-6 text-justify">
          Como desenvolvedor de software, <span class="font-bold">estou aqui para criar soluções eficientes e escaláveis</span>. Juntos, podemos transformar desafios em oportunidades. Explore e conheça meu trabalho.
        </blockquote>
        <button class="bg-default-gold-1 rounded-xl text-white px-6 py-3 font-thin hover:default-dark-1 mt-8">Conheça meus projetos</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SectionHello",
  data() {
    return {
      phrases: ["Backend", "Frontend", "Devops"],
      currentPhraseIndex: 0,
      isMobile: false
    };
  },
  mounted() {
    this.displayPhrases();
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    displayPhrases() {
      const phrasesElement = this.$refs.phrases;
      setInterval(() => {
        phrasesElement.textContent = this.phrases[this.currentPhraseIndex];
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      }, 1500);
    }
  }
};
</script>