<template>
  <div class="tw--h-screen tw-px-0 lg:tw-px-16">
    <div class="tw-h-full tw-bg-default-dark-3  tw-text-white lg:tw-flex lg:tw-flex-row tw-flex-col">
      <div class="lg:tw-w-1/1 lg:tw-h-full tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center tw-px-0 lg:tw-px-16">
        <h1 class="tw-text-2xl lg:tw-text-4xl tw-font-bold">Entre em contato comigo!</h1>
        <p class="tw-mt-3 tw-text-md">Telefone: +55 (85) 997525813</p>
        <p class=" tw-text-md tw-mt-2">Ou se preferir, envie um e-mail:</p>
        
        <div class="tw-max-w-md tw-mx-auto tw-text-white tw-w-full tw-mt-3">
          <form class="tw-bg-default-dark-3 tw-shadow-md tw-rounded tw-px-8 tw-pt-6 tw-pb-8 tw-mb-4">
            <div class="tw-mb-4">
              <label class="tw-block tw-text-sm tw-font-bold tw-mb-2" for="email">
                Email
              </label>
              <input class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline" id="email" type="email" placeholder="Digite seu email">
            </div>
            <div class="tw-mb-4">
              <label class="tw-block tw-text-sm tw-font-bold tw-mb-2" for="name">
                Nome
              </label>
              <input class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline" id="name" type="text" placeholder="Digite seu nome">
            </div>
            <div class="tw-mb-4">
              <label class="tw-block  tw-text-sm tw-font-bold tw-mb-2" for="subject">
                Assunto
              </label>
              <input class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline" id="subject" type="text" placeholder="Digite o assunto">
            </div>
            <div class="tw-mb-6">
              <label class="tw-block  tw-text-sm tw-font-bold tw-mb-2" for="content">
                Conteúdo
              </label>
              <textarea class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline" rows="3" id="content" placeholder="Digite o conteúdo do e-mail"></textarea>
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
              <button class="tw-bg-default-gold-1 tw-rounded-xl tw-text-white tw-px-6 tw-py-3 tw-font-thin hover:tw-default-dark-1 tw-mt-1" type="button" @click="handleEnviarEmail">
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