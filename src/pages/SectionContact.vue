<template>
  <div class="h-screen px-0 lg:px-16">
    <div class="h-full bg-default-dark-3  text-white lg:flex lg:flex-row flex-col">
      <div class="lg:w-1/1 lg:h-full h-screen flex flex-col justify-center items-center px-0 lg:px-16">
        <h1 class="text-2xl lg:text-4xl font-bold">Entre em contato comigo!</h1>
        <p class="mt-3 text-md">Telefone: +55 (85) 997525813</p>
        <p class=" text-md mt-2">Ou se preferir, envie um e-mail:</p>
        
        <div class="max-w-md mx-auto text-white w-full mt-3">
          <form class="bg-default-dark-3 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Digite seu email">
            </div>
            <div class="mb-4">
              <label class="block text-sm font-bold mb-2" for="name">
                Nome
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Digite seu nome">
            </div>
            <div class="mb-4">
              <label class="block  text-sm font-bold mb-2" for="subject">
                Assunto
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Digite o assunto">
            </div>
            <div class="mb-6">
              <label class="block  text-sm font-bold mb-2" for="content">
                Conteúdo
              </label>
              <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3" id="content" placeholder="Digite o conteúdo do e-mail"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-default-gold-1 rounded-xl text-white px-6 py-3 font-thin hover:default-dark-1 mt-1" type="button" @click="handleEnviarEmail">
                Enviar E-mail
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionContact",
  methods: {
    handleEnviarEmail() {
      alert("Ainda em Desenvolvimento!")
    }
  }
}
</script>