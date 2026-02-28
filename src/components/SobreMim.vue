<template>
  <div class="about-container text-white">
    <div class="container">
      <div class="decorative-line animate-width"></div>

      <div class="row align-items-center g-5">
        <div class="col-lg-7 col-12">
          <div class="about-content animate-slide-right">

            <h1 class="display-2 fw-bold mb-3">
              {{ $t('about_me') }}
            </h1>
            
            <div class="animated-subtitle mb-4">
              <span class="static-text">{{ $t('quick_about_me') }}</span>
              <span class="dynamic-text" :class="{ 'typing': isTyping }">
                {{ currentLang.language == 'pt' ? currentRole : currentRoleEn }}
              </span>
            </div>

            <div class="description-text">
              <p class="lead mb-4 fade-in" style="animation-delay: 0.3s">
                <span class="highlight">{{ $t('about_me_1') }}</span> 
                <strong class="text-gradient-blue">backend</strong> 
                {{ $t('and') }} 
                <strong class="text-gradient-blue">{{ $t('about_me_2') }}</strong> 
                {{ $t('about_me_3') }}
              </p>

              <p class="lead mb-4 fade-in" style="animation-delay: 0.5s">
                {{ $t('about_me_4') }} 
                <strong class="text-gradient-purple">{{ $t('about_me_5') }}</strong>,
                <strong class="text-gradient-purple">{{ $t('about_me_6') }}</strong> 
                {{ $t('and') }} 
                <strong class="text-gradient-purple">{{ $t('about_me_7') }}</strong>,
                {{ $t('about_me_8') }} 
                <span class="certification-badge mt-3">
                  <font-awesome-icon :icon="['fab', 'aws']" class="me-1" />
                  AWS Certified Developer
                </span>
              </p>

              <p class="lead mb-4 fade-in" style="animation-delay: 0.7s">
                <font-awesome-icon :icon="['fa', 'quote-left']" class="quote-icon me-2" />
                {{ $t('about_me_9') }}
                <font-awesome-icon :icon="['fa', 'quote-right']" class="quote-icon ms-2" />
              </p>
            </div>

            <div class="quick-stats fade-in" style="animation-delay: 0.9s">
              <div class="stat-item">
                <span class="stat-value">5+</span>
                <span class="stat-label">{{ $t('years_experience') || 'Anos de experiência' }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">30+</span>
                <span class="stat-label">{{ currentLang.language == 'pt' ? 'Projetos completos' : 'Projects completed' }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">2</span>
                <span class="stat-label">{{ currentLang.language == 'pt' ? 'certificações' : 'certifications' }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <div class="right-column animate-slide-left">
            <div class="profile-card">
              <div class="lottie-container" ref="lottieContainer"></div>
              
              <div class="profile-card-content">
                <h3 class="fw-bold mb-2">{{ $t('about_more_me') }}</h3>
                <p class="mb-4">{{ $t('down_cv') }}</p>

                <div class="actions-grid">
                  <div class="action-item">
                    <div class="btn-group w-100">
                      <button
                        type="button"
                        class="btn btn-outline-light custom-btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style="padding: 15px;"
                      >
                        <font-awesome-icon :icon="['fa', 'file-pdf']" class="me-2" />
                        {{ $t('btn_down_cv') }}
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark glass-effect">
                        <li>
                          <a class="dropdown-item" :href="LINK_CURRICULO_PT" download target="_blank">
                            <font-awesome-icon :icon="['fa', 'file-lines']" class="me-2" />
                            {{ $t('cv_pt') }}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" :href="LINK_CURRICULO_EN" download target="_blank">
                            <font-awesome-icon :icon="['fa', 'file-lines']" class="me-2" />
                            {{ $t('cv_en') }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="action-item mt-2">
                    <a
                      :href="LINK_LINKEDIN"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-outline-light w-100"
                      style="padding: 15px;"
                    >
                      <font-awesome-icon :icon="['fab', 'linkedin-in']" class="me-2" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div class="quick-contact mt-4">
                  <div class="contact-item">
                    <font-awesome-icon :icon="['fa', 'envelope']" class="contact-icon" />
                    <span>jefferson.dev21@gmail.com</span>
                  </div>
                  <div class="contact-item">
                    <font-awesome-icon :icon="['fa', 'location-dot']" class="contact-icon" />
                    <span>Fortaleza, Brasil</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="favorite-tech mt-4">
              <h5 class="text-center mb-3">{{ $t('tech_i_love') || 'Tecnologias que amo' }}</h5>
              <div class="tech-icons">
                <div class="tech-icon-item" v-for="tech in favoriteTechs" :key="tech.name">
                  <font-awesome-icon :icon="tech.icon" class="fa-2x" />
                  <small>{{ tech.name }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Linha decorativa inferior -->
      <div class="decorative-line reverse mt-5 animate-width"></div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import { LINK_LINKEDIN, LINK_RESUME } from '@/constants.js'
import { useLangStore } from '@/stores/Lang'

export default {
  data() {
    return {
      LINK_RESUME,
      LINK_LINKEDIN,
      LINK_CURRICULO_PT: LINK_RESUME + '?lang=pt',
      LINK_CURRICULO_EN: LINK_RESUME + '?lang=en',
      isTyping: true,
      currentRole: 'Engenheiro de Software',
      currentRoleEn: 'Software Engineer',
      favoriteTechs: [
        { name: 'Java', icon: ['fab', 'java'] },
        { name: 'Spring', icon: ['fa', 'leaf'] },
        { name: 'Golang', icon: ['fab', 'golang'] },
        { name: 'Angular', icon: ['fab', 'angular'] },
        { name: 'AWS', icon: ['fab', 'aws'] },
        { name: 'Docker', icon: ['fab', 'docker'] }
      ]
    }
  },

  computed: {
    useLangStore() {
      return useLangStore()
    },
    currentLang() {
      return this.useLangStore.currentLang
    },
    roles() {
      if (this.currentLang.language === 'en') {
        return [
          'Software Architect',
          'Software Engineer', 
          'Cloud Specialist',
          'FullCycle Developer',
          'Backend Engineer',
          'Data Engineer'
        ]
      }
      
      return [
        'Arquiteto de Software',
        'Engenheiro de Software',
        'Especialista Cloud', 
        'Desenvolvedor FullCycle',
        'Backend Engineer',
        'Engenheiro de Dados'
      ]
    }    
  },

  mounted() {
    this.initLottie()
    this.initTypingEffect()
    this.initIntersectionObserver()
  },

  methods: {
    initLottie() {
      if (this.$refs.lottieContainer) {
        lottie.loadAnimation({
          container: this.$refs.lottieContainer,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://assets2.lottiefiles.com/packages/lf20_p1qiuawe.json' // Animação de desenvolvedor
        })
      }
    },

    initTypingEffect() {
      let roleIndex = 0
      setInterval(() => {
        roleIndex = (roleIndex + 1) % this.roles.length
        this.isTyping = false
        setTimeout(() => {
          this.currentRole = this.roles[roleIndex]
          this.isTyping = true
        }, 200)
      }, 2000)
    },

    initIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2, rootMargin: '0px' }
      )

      // Observar elementos que precisam de animação ao scroll
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    }
  }
}
</script>

<style scoped>
.about-container {
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

/* Linhas decorativas */
.decorative-line {
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  margin: 20px 0;
  opacity: 0.5;
}

.decorative-line.reverse {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.animate-width {
  animation: expandWidth 1.5s ease-out forwards;
}

@keyframes expandWidth {
  to { width: 100%; }
}

/* Animações */
.animate-slide-right {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideRight 1s ease-out forwards;
}

.animate-slide-left {
  opacity: 0;
  transform: translateX(30px);
  animation: slideLeft 1s ease-out forwards;
}

.animate-pop {
  opacity: 0;
  transform: scale(0.9);
  animation: popIn 0.6s ease-out forwards;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.in-view {
  opacity: 1;
  transform: translateY(0);
}

@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes popIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Badge de saudação */
.greeting-badge .badge {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

/* Título com gradiente */
.title-gradient {
  background: linear-gradient(135deg, #fff 0%, #c4c6c7 50%, #fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

/* Subtítulo animado */
.animated-subtitle {
  font-size: 1.5rem;
  min-height: 3rem;
}

.static-text {
  margin-right: 10px;
}

.dynamic-text {
  color: #c4c6c7;
  font-weight: 600;
  position: relative;
}

.dynamic-text.typing::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Highlights de texto */
.text-gradient-blue {
  background: #c4c6c7;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.text-gradient-purple {
  background: #c4c6c7;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.highlight {
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
}

.highlight:hover {
  background-size: 100% 100%;
}

/* Badge de certificação */
.certification-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 153, 0, 0.2);
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 153, 0, 0.3);
  transition: all 0.3s ease;
}

.certification-badge:hover {
  background: rgba(255, 153, 0, 0.3);
  transform: scale(1.05);
}

/* Ícones de citação */
.quote-icon {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
}

/* Estatísticas rápidas */
.quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.stat-item {
  text-align: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Card de perfil */
.profile-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.lottie-container {
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.02);
}

.profile-card-content {
  padding: 24px;
}

/* Botões com gradiente */
.btn-gradient {
  background: linear-gradient(135deg, #4a90e2, #357abd);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(74, 144, 226, 0.3);
}

.btn-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn-gradient:hover::before {
  left: 100%;
}

.btn-outline-gradient {
  background: transparent;
  border: 2px solid;
  border-image: linear-gradient(135deg, #4a90e2, #9b59b6) 1;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-gradient:hover {
  background: linear-gradient(135deg, #4a90e2, #9b59b6);
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(74, 144, 226, 0.2);
}

/* Dropdown menu */
.dropdown-menu {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 8px;
}

.dropdown-item {
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateX(5px);
}

/* Contato rápido */
.quick-contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: white;
  transform: translateX(5px);
}

.contact-icon {
  width: 20px;
  color: #c4c6c7;
}

/* Tecnologias favoritas */
.favorite-tech {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.tech-icon-item {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.tech-icon-item:nth-child(2) { animation-delay: 0.2s; }
.tech-icon-item:nth-child(3) { animation-delay: 0.4s; }
.tech-icon-item:nth-child(4) { animation-delay: 0.6s; }
.tech-icon-item:nth-child(5) { animation-delay: 0.8s; }

.tech-icon-item:hover {
  transform: scale(1.2);
  color: #4a90e2;
}

.tech-icon-item small {
  display: block;
  font-size: 0.7rem;
  margin-top: 4px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Responsividade */
@media (max-width: 768px) {
  .about-container {
    padding: 30px 0;
  }

  .display-2 {
    font-size: 2.5rem !important;
  }

  .quick-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .lottie-container {
    height: 150px;
  }

  .animated-subtitle {
    font-size: 1.2rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .btn-gradient, .btn-outline-gradient {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  .profile-card-content {
    padding: 16px;
  }

  .quick-contact {
    font-size: 0.8rem;
  }
}

/* Efeitos de glassmorphism */
.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.8);
}
</style>
