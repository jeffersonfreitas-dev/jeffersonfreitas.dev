<template>
  <div class="container-fluid">
    <div class="row p-5">
      <div class="d-flex flex-row align-items-center justify-content-center text-white font-monospace">
        <h1 class="text-center fs-1">{{ $t('contacts') }}</h1>
        <div class="text-center">
          <font-awesome-icon :icon="['fa', 'comment']" class="fa-2x" color="white"/>
        </div>
      </div>
    </div> 

    <div class="row text-white px-3">             
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex flex-column text-start">
        <div class="row d-flex justify-content-center ">
          <p> <span class="fs-3">{{ $t('last_posts') }}</span>  <a class="ml-5 text-decoration-none" style="color: #2e8b57;" href="https://jeffersonfreitas-dev.blogspot.com/"> | {{ $t('visit_my_blog') }}</a></p>
        </div>
        <div v-if="posts.length > 0">
          <a v-for="(p, idx) in posts" :key="idx" :href="p.url" target="_blank" style="color: #30302a;" class="text-decoration-none">
            <div class="row d-flex justify-content-center align-items-center rounded p-3 mb-3" style="background-color: #2e8b57">
              <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card">
                  <img :src="p.image" class="card-img" alt="Blog Post">
                </div>
              </div>
              <div class="col-md-8 text-white">
                <div class="card-body">
                  <h5 class="font-weight-bold">{{ p.title }}</h5>
                  <p class="card-text">{{ p.content }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div v-else>
          <a target="_blank" class="ml-5 text-decoration-none text-white" href="https://jeffersonfreitas-dev.blogspot.com/">
            <div class="row d-flex justify-content-center align-items-center rounded p-3 mb-3" style="background-color: #2e8b57">
              <div class="col-md-4">
                <div class="card">
                  <img src="/images/rededown.png" class="card-img" alt="Erro network">
                </div>
              </div>
              <div class="col-md-8 text-white">
                <div class="card-body">
                  <h5 class="font-weight-bold">{{ $t('post_problem_title') }}</h5>
                  <p class="card-text">{{ $t('post_problem_body') }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex font-monospace mb-5">
        <div class="row p-3">
          <blockquote class="fs-5 text-justify text-start text-wrap text-break">
            <p class="pt-3">{{ $t('contact_1') }}</p>
            <p class="mt-3 font-weight-bold" >{{ $t('contact_2') }}</p>
          </blockquote>

          <div class="flex-column">
            <div class="row mt-3">
              <div class="flex-row">
                <span class="fs-6 px-4 fw-bolder">E-mail:</span>
              </div>
              <div class="row" style="margin-left: 2rem;">
                <span class="fs-2 px-3">contato@jeffersonfreitas.dev</span>
              </div>
            </div>
              
            <div class="row mt-3 mb-5">
              <div class="flex-row">
                <span class="fs-6 px-4 fw-bolder">Fone/Whatsapp:</span>
              </div>
              <div class="row" style="margin-left: 2rem;">
                <span class="fs-2 px-3">+55 (85) 9.8172-1585</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SectionContact",
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios.get(`https://www.googleapis.com/blogger/v3/blogs/${import.meta.env.VITE_BLOG_ID}/posts`, {
      params: {key:import.meta.env.VITE_BLOG_KEY, maxResults: 2, orderBy: 'published'}
    }).then(response => {
      const posts = response.data.items;
      
      posts.forEach(item => {
        this.posts.push({
          title: item.title,
          content: this.getResumoContent(item),
          image: this.getImage(item),
          url: item.url
        })
      })
    })
  },
  methods: {
    getResumoContent(post){
      const text = this.getContent(post);
      if(text !== null || text !== ""){
        return text[0].slice(0, 150) + "...";
      }else {
        return "";
      }
    },
    getImage(post){
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = post.content;
      const anchorImg = tempDiv.querySelector('a')
      return anchorImg.getAttribute('href');
    },
    getContent(post){
      const htmlContent  = post.content;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      const paragraphs = tempDiv.querySelectorAll('p');
      const paragraphArray = [];

      paragraphs.forEach(par => {
        if(par.textContent !== "" && paragraphArray.length === 0) {
          paragraphArray.push(par.textContent);
        }
      })
      return paragraphArray;
    }
  }
}
</script>


<style scoped>
.container-fluid {
  width: 100%;
  background-image: url('@/assets/backoff4.png');
  background-size: cover;
}
</style>