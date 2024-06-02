<template>
  <div class="container-fluid">
    <div class="row p-5">
      <div class="d-flex flex-row align-items-center justify-content-center text-black font-monospace">
        <h1 class="text-center fs-1">Skills</h1>
        <div class="text-center">
          <font-awesome-icon :icon="['fa', 'code']" class="fa-2x" color="black"/>
        </div>
      </div>
    </div>
    
    <div class="row p-5">
      <div class="row">
        <div class="col-12 mb-3 d-flex d-row">
          <font-awesome-icon :icon="['fa', 'code']" class="fa-2x mx-2" color="#30302a"></font-awesome-icon>
          <h2>Linguagens</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="(item, index) in languagens" :key="index">
          <div class="card text-center mb-3 ">
            <div class="card-body text-white d-flex d-row" style="background-color: #30302a;">
              <font-awesome-icon :icon="item.icon" class="fa-4x mb-3" color="white"></font-awesome-icon>
              <h4 class="card-title mt-4 mx-4">{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row p-5">
      <div class="row">
        <div class="col-12 mb-3 d-flex d-row">
          <font-awesome-icon :icon="['fa', 'database']" class="fa-2x mx-2" color="#30302a"></font-awesome-icon>
          <h2>Banco de Dados</h2>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="(item, index) in databases" :key="index">
        <div class="card text-center mb-3 ">
          <div class="card-body text-white d-flex d-row" style="background-color: #30302a;">
            <font-awesome-icon :icon="item.icon" class="fa-4x mb-3" color="white"></font-awesome-icon>
            <h4 class="card-title mt-4 mx-4">{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="row p-5">
      <div class="row">
        <div class="col-12 mb-3 d-flex d-row">
          <font-awesome-icon :icon="['fa', 'leaf']" class="fa-2x mx-2" color="#30302a"></font-awesome-icon>
          <h2>Frameworks & Web</h2>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="(item, index) in frameworksWebs" :key="index">
        <div class="card text-center mb-3 ">
          <div class="card-body text-white d-flex d-row" style="background-color: #30302a;">
            <font-awesome-icon :icon="item.icon" class="fa-4x mb-3" color="white"></font-awesome-icon>
            <h4 class="card-title mt-4 mx-4">{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="row p-5">
      <div class="row">
        <div class="col-12 mb-3 d-flex d-row">
          <font-awesome-icon :icon="['fa', 'cloud']" class="fa-2x mx-2" color="#30302a"></font-awesome-icon>
          <h2>Cloud</h2>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="(item, index) in clouds" :key="index">
        <div class="card text-center mb-3 ">
          <div class="card-body text-white d-flex d-row" style="background-color: #30302a;">
            <font-awesome-icon :icon="item.icon" class="fa-4x mb-3" color="white"></font-awesome-icon>
            <h4 class="card-title mt-4 mx-4">{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="row p-5">
      <div class="row">
        <div class="col-12 mb-3 d-flex d-row">
          <font-awesome-icon :icon="['fab', 'docker']" class="fa-2x mx-2" color="#30302a"></font-awesome-icon>
          <h2>Devops & Outros</h2>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="(item, index) in devops" :key="index">
        <div class="card text-center mb-3 ">
          <div class="card-body text-white d-flex d-row" style="background-color: #30302a;">
            <font-awesome-icon :icon="item.icon" class="fa-4x mb-3" color="white"></font-awesome-icon>
            <h4 class="card-title mt-4 mx-4">{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SectionAbout",
  data() {
    return {
      languagens: [
        { title: 'Java', icon: ['fab', 'java'] },
        { title: 'Python', icon: ['fab', 'python'] },
        { title: 'JavaScript', icon: ['fa', 'code'] },
      ],
      databases: [
        { title: 'PostgreSQL', icon: ['fa', 'database'] },
        { title: 'MySQL', icon: ['fa', 'database'] },
        { title: 'Oracle', icon: ['fa', 'database'] },
        { title: 'MongoDB', icon: ['fa', 'database'] },
        { title: 'DynamoDB', icon: ['fa', 'database'] }
      ],
      frameworksWebs: [
        { title: 'Spring Framework', icon: ['fa', 'leaf'] },
        { title: 'Angular', icon: ['fab', 'angular'] },
        { title: 'VueJs', icon: ['fab', 'vuejs'] },
        { title: 'Thymeleaf', icon: ['fa', 'leaf'] },
        { title: 'Bootstrap', icon: ['fab', 'bootstrap'] },
        { title: 'HTML/CSS', icon: ['fab', 'html5'] },
      ],
      clouds: [
        { title: 'AWS Cloud', icon: ['fab', 'aws'] },
        { title: 'OCI Oracle', icon: ['fa', 'database'] },
        { title: 'Google Cloud', icon: ['fab', 'google'] },
        { title: 'Firebase', icon: ['fab', 'google-plus-square'] },
        { title: 'Spring Cloud', icon: ['fa', 'leaf'] },

      ] ,
      devops: [
        { title: 'Docker', icon: ['fab', 'docker'] },
        { title: 'Kafka', icon: ['fa', 'envelope'] },
        { title: 'CI/CD Pipeline', icon: ['fab', 'github'] },
        { title: 'RabbitMQ', icon: ['fa', 'envelope'] },

      ]     
    }
  }
}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  background-image: url('@/assets/backoff3.png');
  background-size: cover;
}
</style>