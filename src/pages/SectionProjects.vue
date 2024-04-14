<template>
<div class="container-fluid flex-column text-white"> 
  <div class="row">

    <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace py-5">
      <h1 class="text-center fs-1">Meus Projetos</h1>
      <div class="text-center">
        <font-awesome-icon :icon="['fa', 'diagram-project']" class="fa-2x" color="white"/>
      </div>
    </div>
    
    <div class="row col-lg-3 col-md-4 col-sm-12 col-xs-12 d-flex">
      <div class="row text-center justify-content-center align-items-center">
        <p class="pt-3 fs-3"><strong style="color: #2e8b57;">Simed3 Financeiro</strong></p>
      </div>
    </div>
      
    <div class="row col-lg-9 col-md-8 col-sm-12 col-xs-12">
      <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace">
        <p >Sistema financeiro para controle de contas a pagar, receber, transferências, extratos bancários, controle de caixa, 
          relatórios, impostos e muito mais!</p>
      </div>

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner rounded-4">
          <div class="carousel-item active">
            <img src="../assets/simed/simed01.png" class="d-block w-100" alt="Simed01">
          </div>
          <div class="carousel-item">
            <img src="../assets/simed/simed02.png" class="d-block w-100" alt="Simed02">
          </div>
          <div class="carousel-item">
            <img src="../assets/simed/simed03.png" class="d-block w-100" alt="Simed03">
          </div>
          <div class="carousel-item">
            <img src="../assets/simed/simed04.png" class="d-block w-100" alt="Simed04">
          </div>
          <div class="carousel-item">
            <img src="../assets/simed/simed05.png" class="d-block w-100" alt="Simed05">
          </div>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace mt-3">
        <button class=" btn btn-primary active p-3 rounded-4 mb-4" style="background-color: #2e8b57; border-color: #2e8b57;" 
          data-bs-toggle="modal" data-bs-target="#exampleModal">Mais Detalhes</button>
      </div>
    </div>

  </div>   

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog text-black modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Simed3 Financeiro</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <p>Sistema criado para automatizar, controlar e melhorar os processos financeiros de um cliente que realizava todas as rotinas financeiras de forma manual e através de planilhas eletrônicas (Excell).</p>
         
         <p><strong>Experimente</strong></p>
         <p>Você pode experimentar uma amostra da aplicação clicando <a target="_blank" class="link-opacity-75 mr-5" href="https://jeffersonfreitas.dev/simed3">aqui</a> ou no link abaixo.</p>

         <p><strong>Funcionalidades</strong></p>
         <p>O Simed3 realiza o controle de contas a pagar, contas a receber, realiza os pagamentos com emissão de ordem para autorização junto ao banco, realiza transferências entre as contas,
          cadastra empresas, contas bancárias, fornecedores, clientes, movimentações com abertura e fechamento com bloqueio, extratos das movimentações com emissão de 
          relatórios simplificado e detalhado. Possui opção para realizar upload das notas fiscais das contas a pagar e opção de visualização e impressão das mesmas. 
         </p>
         <p>Atualmente o simed3 possui outros módulos solicitados pelos clientes como: Estoque com Solicitações, Pesquisa de Satisfação, Produção/Controles e outros.</p>
         <p><strong>Tecnologias Usadas no Projeto</strong></p>
         <ul>
          <li>Java com Spring Framework</li>
          <li>MySQL Database</li>
          <li>Thymeleaf</li>
          <li>Docker</li>
         </ul>
        </div>
        <div class="modal-footer">
          <a target="_blank" class="link-opacity-75 mr-5" href="https://jeffersonfreitas.dev/simed3">Clique aqui para experimentar</a>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background-color: #30302a; border-color: #30302a;">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: "SectionProjects",
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.checkIsMobile);
  },
}
</script>


<style scoped>
.container-fluid {
  width: 100%;
  background-image: url('@/assets/backoff5.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>