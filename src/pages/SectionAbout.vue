<template>
<div class="container-fluid flex-column text-black" style="background-color: #a3a3a2;">
    <div class="row py-5">
      <div class="row p-5 ">
        <div class="d-flex flex-row">
          <h1 class="text-center fs-1">Sobre Mim</h1>
          <div class="text-center" style="margin-left: 1rem;">
            <font-awesome-icon :icon="['fa', 'address-card']" class="fa-2x" color="black"/>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column">
        <div class="row p-3 mt-3">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../assets/foto_avatar2.jpg" alt="Foto Jefferson" class="img-fluid rounded-5">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <blockquote class="fs-5 text-justify text-start text-wrap text-break font-monospace">
              <p class="pt-3">Sou um Desenvolvedor Fullstack especializado em Java e Spring Framework, com uma sólida experiência como freelancer desde 2016. Minha paixão pela tecnologia me impulsiona a buscar constante aprimoramento, refletindo em minha versatilidade e atuação em diversas fases do projeto de desenvolvimento de software (Backend, Frontend e Devops).</p>
            </blockquote>
          </div>
        </div>

        <div class="row p-3 mb-3">
            <div class="d-flex flex-row justify-content-center align-items-center">
              <button class=" btn btn-secondary active p-3 rounded-4" @click="openPdfInNewTab">Meu Currículo</button>
            </div>
          </div>
      </div>
      
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column ">
        <div id="chart">
          <apexchart  type="bar" height="380" :options="chartOptions" :series="series"></apexchart >
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import 'apexcharts';
import pdfUrl from "../assets/Curriculo02.pdf";

export default {
  name: "SectionAbout",
  components: {
    apexchart: VueApexCharts,
  },
  methods: {
    openPdfInNewTab() {
      window.open(pdfUrl, '_blank');
    },
  },
  data: function() {
  return {
      series: [{
        data: [95, 90, 15, 85, 70, 80, 50, 70, 85, 70, 60, 30]
      }],

      chartOptions: {
        chart: {
          type: 'bar',
          height: 'auto'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 5,
          }
        },
        fill: {
          colors: ['#30302a']
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['JAVA', 'SPRING BOOT', 'PYTHON', 'POSTGRESQL/MYSQL', 'ORACLE', 'HIBERNATE JPA', 'ANGULAR', 'VUE.JS', 'DOCKER', 'CI/CD', 'AWS/OCI', 'MESSAGERIA'],
          labels: {
            show: false
          }
        },
        title: {
            text: 'Tecnologias e Skills',
            align: 'center',
            floating: true
        },
        subtitle: {
            text: 'Linguagens, Stacks e Conhecimentos',
            align: 'center',
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          reversed: false,
          axisTicks: {
            show: false
          }
        }
      },
    };
  }
}
</script>