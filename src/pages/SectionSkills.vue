<template>
  <div class="container-fluid">
    <div class="row p-5">
      <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace">
        <h1 class="text-center fs-1">Skills</h1>
        <div class="text-center">
          <font-awesome-icon :icon="['fa', 'code']" class="fa-2x" color="white"/>
        </div>
      </div>
    </div>
    
    <div class="row p-5">
      <div class="col-md-4" v-for="(skill, index) in skills" :key="index">
        <div class="card text-center mb-3">
          <div class="card-body">
            <font-awesome-icon :icon="skill.icon" class="fa-5x mb-3"></font-awesome-icon>
            <h5 class="card-title">{{ skill.title }}</h5>
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
      skills: [
        { title: 'Java', icon: ['fab', 'java'] },
        { title: 'Python', icon: ['fab', 'python'] },
        { title: 'PostgreSQL, MySQL, Oracle', icon: ['fa', 'database'] },
        { title: 'Spring Framework', icon: ['fa', 'leaf'] },
        { title: 'Angular', icon: ['fab', 'angular'] },
        { title: 'VueJs', icon: ['fab', 'vuejs'] },
        { title: 'Docker', icon: ['fab', 'docker'] },
        { title: 'Kafka, RabbitMQ', icon: ['fa', 'envelope'] },
        { title: 'AWS/OCI', icon: ['fab', 'aws'] },
        { title: 'Bootstrap', icon: ['fab', 'bootstrap'] },
        { title: 'JavaScript', icon: ['fa', 'code'] },
        { title: 'HTML/CSS', icon: ['fab', 'html5'] },
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