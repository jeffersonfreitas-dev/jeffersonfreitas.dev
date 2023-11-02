<template>
  <div class="h-screen">
    <div class=" h-full grid grid-cols-1 lg:grid-cols-2 gap-3" >
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <!-- Coluna esquerda -->
      <!-- <div class="grid grid-rows-1">
          <div class="row-span-1 hello-principal">
            <h1>Olá bom dia!!!</h1> 
            <h2>Este é o meu Portfólio</h2>
            <h3>Aqui você irá encontrar mais informações sobre mim e sobre os meus projetos.</h3>
            <p>Bem vindo(a), meu nome é Jefferson e sou um entusiasta da tecnologia apaixonado por Desenvolvimento de Software (Frontend e Backend), com uma dedicação
            diária à aquisição de conhecimentos e habilidades. Sou movido pela persistência e dedicação...</p>
          
            <button>Clique aqui para saber mais sobre mim</button>
          </div>

        </div> -->

        <!-- Coluna direita -->
        <!-- <div class="grid grid-rows-2 hello-projetos">
            <h1>Confira Meus Projetos:</h1>
            <div class="projeto-lista">
                <div class="projetos">
                  <a href="">Simed</a>
                  <a href="">Central Notificações</a>
                  <a href="">Aplicação Jobs</a>
                  <a href="">MotoManager</a>
                  <a href="">Colaborativa</a>
                </div>
            </div>
            icones redes sociais
        </div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "SectionHello"
}
</script>

<style scoped>

.hello-principal{
  display: flex;
  padding: 12px;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
}

.hello-principal h1 {
  padding-left: 50px;
  font-size: 85px;
}

.hello-principal h2 {
  margin-top: 15px;
  padding-left: 65px;
  font-size: 45px;
}

.hello-principal h3 {
  margin-top: 15px;
  padding-left: 65px;
  font-size: 25px;
}

.hello-principal p {
  margin-top: 15px;
  padding-left: 65px;
}

.hello-principal button {
  margin-top: 15px;
}

.hello-projetos{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hello-projetos h1 {
  display: flex;
  justify-content: center;
  font-size: 30px;
  align-content: center;
  margin-top: 30px;
}

.projeto-lista {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.projetos {
  display: flex;
  flex-direction: column;
}
</style>