<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center mt-5 justify-content-between h-100 w-100">
    <div class="col-4 text-start mb-4 mb-lg-0 animate-name">
      <h1 class="display-3 fw-bold">{{ $t('my_skills') }}</h1>
      <p class="display-6 lead mt-3">{{ $t('quick_my_skills') }}</p>
      <p class="lead">
        {{ $t('quick_my_skills_2') }}
      </p>
    </div>

    <div class="row col-12 col-lg-6">
      <div class="row">
        <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
          <div class="text-start gap-5">
            <h4 class="fw-bold mb-1">{{ $t('languagens') }}</h4>
            <p class="mb-3 text-justify">
              {{ $t('languagens_1') }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-start gap-3 flex-wrap">
          <span
            class="tech-badge d-flex align-items-center gap-2"
            v-for="(item, index) in languagens"
            :key="index">
            <font-awesome-icon :icon="item.icon" class="fa-1x" color="white" />
            {{ item.title }}
          </span>
        </div>
      </div>

      <div class="row mt-4">
        <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
          <div class="text-start gap-5">
            <h4 class="fw-bold mb-1">{{ $t('database') }}</h4>
            <p class="mb-3 text-justify">
              {{ $t('database_2') }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-start gap-3 flex-wrap">
          <span
            class="tech-badge d-flex align-items-center gap-2"
            v-for="(item, index) in databases"
            :key="index">
            <font-awesome-icon :icon="item.icon" class="fa-1x" color="white" />
            {{ item.title }}
          </span>
        </div>
      </div>

      <div class="row mt-4">
        <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
          <div class="text-start gap-5">
            <h4 class="fw-bold mb-1">Frameworks & Web</h4>
            <p class="mb-3 text-justify">
              {{ $t('framework_2') }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-start gap-3 flex-wrap">
          <span
            class="tech-badge d-flex align-items-center gap-2"
            v-for="(item, index) in frameworksWebs"
            :key="index">
            <font-awesome-icon :icon="item.icon" class="fa-1x" color="white" />
            {{ item.title }}
          </span>
        </div>
      </div>

      <div class="row mt-4">
        <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
          <div class="text-start gap-5">
            <h4 class="fw-bold mb-1">Cloud</h4>
            <p class="mb-3 text-justify">
              {{ $t('cloud_2') }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-start gap-3 flex-wrap">
          <span
            class="tech-badge d-flex align-items-center gap-2"
            v-for="(item, index) in clouds"
            :key="index">
            <font-awesome-icon :icon="item.icon" class="fa-1x" color="white" />
            {{ item.title }}
          </span>
        </div>
      </div>

      <div class="row mt-4">
        <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
          <div class="text-start gap-5">
            <h4 class="fw-bold mb-1">DevOps</h4>
            <p class="mb-3 text-justify">
              {{ $t('devops_2') }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-start gap-3 flex-wrap">
          <span
            class="tech-badge d-flex align-items-center gap-2"
            v-for="(item, index) in devops"
            :key="index">
            <font-awesome-icon :icon="item.icon" class="fa-1x" color="white" />
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
        { title: 'AWS', icon: ['fab', 'aws'] },
        { title: 'OCI Oracle', icon: ['fa', 'database'] },
        { title: 'GCP Google', icon: ['fab', 'google'] },
        { title: 'Firebase', icon: ['fab', 'google-plus-square'] },
        { title: 'Spring Cloud', icon: ['fa', 'leaf'] },

      ] ,
      devops: [
        { title: 'Docker', icon: ['fab', 'docker'] },
        { title: 'Kafka', icon: ['fa', 'envelope'] },
        { title: 'CI/CD', icon: ['fab', 'github'] },
        { title: 'RabbitMQ', icon: ['fa', 'envelope'] },
        { title: 'Github Actions', icon: ['fab', 'github'] },
      ]     
    }
  },
  mounted() {
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.animate-name {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 2s ease-out forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tech-badge {
  border: 1px solid white;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.8rem;
  color: white;
  white-space: nowrap;
}
</style>
