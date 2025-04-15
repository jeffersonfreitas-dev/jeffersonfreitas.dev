<template>
  <div class="container text-white d-flex flex-column flex-lg-row align-items-center justify-content-between  ">
    <div class="col-12 col-lg-5 text-start mb-4 mb-lg-0 animate-name">
      <h1 class="display-3 fw-bold ">{{ $t('contacts') }}</h1>
      <p class="display-6 lead mt-3">{{ $t('tel') }} +55 (85) 9.8172-1585</p>
      <p class="lead ">contato@jeffersonfreitas.dev</p>
      <p class="lead ">jefferson.dev21@gmail.com</p>
      <a :href="LINK_LINKEDIN" target="_blank" class="mx-2">
        <font-awesome-icon  :icon="['fab', 'github']" class="fa-xl" color="white"/>
      </a>
      <a :href="LINK_LINKEDIN" target="_blank" class="mx-2">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="fa-xl" color="white"/>
      </a>
    </div>

    <div class="col-12 col-lg-6 mt-5">
      <p class="mb-5 text-start">{{ $t('same_posts_lbl') }}</p>

      <div class="mb-5" v-if="posts.length > 0">
        <a class="text-decoration-none mb-5" v-for="(p, idx) in posts" :key="idx" :href="p.url" target="_blank" style="color: #fff;">
          <div class="project-card d-flex flex-row gap-3" style="cursor: pointer;">
            <div class="d-flex align-items-center justify-content-center project-image" style="width: 150px; height: 150px; flex-shrink: 0;">
              <img :src="p.image" alt="Blog Post" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
    
            <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
              <div class="text-start gap-5">
                <p class="fw-bold mb-1 mb-3">{{ p.title }}</p>
                <p class="mb-3 text-justify">
                  {{ p.content }}
                </p>
              </div>
    
              <div class="d-flex flex-wrap justify-content-end gap-2">
                <a  class="px-2" target="_blank" :href="p.url" data-bs-placement="top" style="cursor: pointer;" title="Ver blog">
                  <font-awesome-icon :icon="['fa', 'eye']" class="fa-2x" color="#fff"/> 
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="col-12 mt-3" v-else>
        <a class="text-decoration-none" :href="LINK_BLOG" target="_blank" style="color: #fff;">
          <div class="project-card d-flex flex-row gap-3" style="cursor: pointer;">
            <div class="d-flex align-items-center justify-content-center project-image" style="width: 150px; height: 150px; flex-shrink: 0;">
              <img src="/images/rededown.png" alt="Erro network" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
    
            <div class="d-flex flex-column flex-grow-1 mt-3 justify-content-between">
              <div class="text-start gap-5">
                <p class="fw-bold mb-1 mb-3">{{ $t('post_problem_title') }}</p>
                <p class="mb-3 text-justify">
                  {{ $t('post_problem_body') }}
                </p>
              </div>
    
              <div class="d-flex flex-wrap justify-content-end gap-2">
                <a  class="px-2" target="_blank" :href="LINK_BLOG" data-bs-placement="top" style="cursor: pointer;" title="Ver blog">
                  <font-awesome-icon :icon="['fa', 'eye']" class="fa-2x" color="#ccc"/> 
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>


      <div class="row mt-3">
        <a class="fw-bold mb-1 mb-3 text-decoration-none text-white " target="_blank" :href="LINK_BLOG">{{ $t('visit_my_blog') }}</a>
      </div>     
    </div>



  </div>


</template>

<script>
import axios from 'axios';
import { LINK_LINKEDIN, LINK_GITHUB, LINK_BLOG } from '@/constants.js'

export default {
  data() {
    return {
      posts: [],
      LINK_GITHUB,
      LINK_LINKEDIN,
      LINK_BLOG
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
        return text[0].slice(0, 130) + "...";
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


.project-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  margin-top: 3%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
  min-height: 140px;
}

.project-card:hover {
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.project-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #fff;
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
