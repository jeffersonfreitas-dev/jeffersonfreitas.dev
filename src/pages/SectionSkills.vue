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
    
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-column text-white">
          <div class="row mt-3">
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'java']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">Java</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'python']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">Python</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fa', 'database']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">PostgreSQL, MySQL, Oracle</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fa', 'leaf']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">Spring Framework</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'angular']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">Angular</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'vuejs']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">VueJs</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-column text-white">
          <div class="row mt-3">
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'docker']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">Docker</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fa', 'envelope']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">Kafka, RabbitMQ</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'aws']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">AWS/OCI</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'bootstrap']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">Bootstrap</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fa', 'code']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">JavaScript</h5>
                </div>
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="card text-center">
                <div class="card-body">
                  <font-awesome-icon :icon="['fab', 'html5']" class="fa-5x mb-3"></font-awesome-icon>
                  <h5 class="card-title">HTML/CSS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SectionAbout"
}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/backoff3.png');
  background-size: cover;
}
</style>