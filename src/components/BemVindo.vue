<template>
  <div class="hero-container text-white">
    <div class="particles-background" ref="particlesContainer"></div>
    
    <div class="container position-relative">
      <div class="row min-vh-100 align-items-center">
        <div class="col-lg-7 col-12">
          <div 
            class="greeting-wrapper mb-4 animate-slide-down"
            :style="{ animationDelay: '0.2s' }"
          >
            <span class="greeting-badge">
              <span class="wave-emoji">👋</span>
              {{ $t('hello_world') }}
            </span>
          </div>

          <div 
            class="animate-slide-left"
            :style="{ animationDelay: '0.5s' }"
          >
            <h1 class="hero-title">
              <span class="static-text">{{ $t('i_am') }}</span>
              <span class="name-gradient">Jefferson Freitas</span>
            </h1>
          </div>

          <div 
            class="professional-title mb-4 animate-fade-in"
            :style="{ animationDelay: '0.10s' }"
          >
            <div class="typewriter-container">
              <font-awesome-icon :icon="['fa', 'code']" class="title-icon" />
              <span class="typewriter-text">{{ displayedTitle }}</span>
              <span class="cursor" :class="{ 'blinking': !isTyping }"></span>
            </div>
          </div>

          <div 
            class="description-wrapper mb-4 animate-slide-up"
            :style="{ animationDelay: '1.2s' }"
          >
            <p class="hero-description">
              {{ $t('quick_description') }}
            </p>
          </div>

          <div 
            class="social-section animate-slide-up"
            :style="{ animationDelay: '1.6s' }"
          >
            <div class="d-flex align-items-center flex-wrap gap-3">
              <div class="social-links">
                <a :href="LINK_GITHUB" class="social-link github" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fab', 'github']" class="fa-lg" />
                  <span class="social-tooltip">GitHub</span>
                </a>
                <a :href="LINK_LINKEDIN" class="social-link linkedin" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" class="fa-lg" />
                  <span class="social-tooltip">LinkedIn</span>
                </a>
              </div>

              <div class="vertical-divider"></div>

              <a 
                :href="LINK_CERTIFICADO_AWS" 
                class="aws-certification" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div class="aws-badge" :class="{ 'mobile': isMobile }">
                  <img src="/images/aws.png" alt="AWS Certified Developer" />
                  <div class="aws-info" v-if="!isMobile">
                    <strong>AWS Certified</strong>
                    <span>Developer</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12 position-relative">
          <div 
            class="hero-visual animate-scale-in"
            :style="{ animationDelay: '0.5s' }"
          >
            <div ref="lottieContainer" class="lottie-container"></div>

            <div class="floating-elements">
              <div class="floating-element code-symbol" :style="{ top: '10%', left: '0', animationDelay: '0s' }">
                <font-awesome-icon :icon="['fa', 'code']" />
              </div>
              <div class="floating-element cloud-symbol" :style="{ bottom: '20%', right: '0', animationDelay: '1s' }">
                <font-awesome-icon :icon="['fa', 'cloud']" />
              </div>
              <div class="floating-element database-symbol" :style="{ top: '50%', left: '-10%', animationDelay: '2s' }">
                <font-awesome-icon :icon="['fa', 'database']" />
              </div>
            </div>

            <div class="experience-badge">
              <div class="badge-content">
                <span class="years">5+</span>
                <span class="label">{{ $t('years_experience') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        class="scroll-indicator"
        :style="{ animationDelay: '2s' }"
      >
        <span class="scroll-text">{{ $t('scroll_down') }}</span>
        <div class="scroll-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import { LINK_LINKEDIN, LINK_GITHUB, LINK_CERTIFICADO_AWS } from '@/constants.js'
import { useLangStore } from '@/stores/Lang'

export default {
  data() {
    return {
      LINK_GITHUB,
      LINK_LINKEDIN,
      LINK_CERTIFICADO_AWS,
      isMobile: window.innerWidth < 768,
      displayedTitle: '',
      currentTitleIndex: 0,
      isTyping: true,
      typingTimeout: null,
    }
  },

  computed: {
    useLangStore() {
      return useLangStore()
    },
    currentLang() {
      return this.useLangStore.currentLang
    },
    
    titles() {
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
  

  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    },

    initTypingEffect() {
      this.typeTitle(0)
    },

    typeTitle(index) {
      if (index >= this.titles.length) index = 0
      
      const title = this.titles[index]
      let charIndex = 0
      this.displayedTitle = ''
      
      const typeNextChar = () => {
        if (charIndex <= title.length) {
          this.displayedTitle = title.substring(0, charIndex)
          charIndex++
          this.typingTimeout = setTimeout(typeNextChar, 100)
        } else {
          this.isTyping = false
          setTimeout(() => {
            this.isTyping = true
            this.currentTitleIndex = (index + 1) % this.titles.length
            this.typeTitle(this.currentTitleIndex)
          }, 2000)
        }
      }
      
      typeNextChar()
    },

    initParticles() {
      if (!this.$refs.particlesContainer) return
      
      const particles = 20
      for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 5 + 's'
        particle.style.animationDuration = 10 + Math.random() * 10 + 's'
        this.$refs.particlesContainer.appendChild(particle)
      }
    },

    loadRandomLottie() {
      const urls = [
        'https://assets2.lottiefiles.com/packages/lf20_p1qiuawe.json',
        'https://assets1.lottiefiles.com/packages/lf20_kkflmtur.json'
      ]
      
      const selectedUrl = urls[Math.floor(Math.random() * urls.length)]
      
      lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: selectedUrl
      })
    }
  },

  mounted() {
    window.addEventListener('resize', this.checkMobile)
    this.loadRandomLottie()
    this.displayedTitle = this.titles[0]
    this.initTypingEffect()
    this.initParticles()
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout)
    }
  }
}
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Animações de entrada */
.animate-slide-down {
  opacity: 0;
  transform: translateY(-30px);
  animation: slideDown 0.8s ease-out forwards;
}

.animate-slide-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideLeft 0.8s ease-out forwards;
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease-out forwards;
}

.animate-scale-in {
  opacity: 0;
  transform: scale(0.9);
  animation: scaleIn 0.8s ease-out forwards;
}

@keyframes slideDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Partículas de fundo */
.particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

/* Container principal */
.container {
  position: relative;
  z-index: 2;
}

/* Badge de saudação */
.greeting-wrapper {
  display: inline-block;
}

.greeting-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.wave-emoji {
  animation: wave 2s infinite;
  display: inline-block;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  75% { transform: rotate(-15deg); }
}

/* Título principal */
.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.static-text {
  display: block;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.name-gradient {
  display: block;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #c4c6c7 50%,
    #ffffff 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shine 3s linear infinite;
  font-size: 4rem;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

/* Título profissional com efeito typewriter */
.professional-title {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
}

.typewriter-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-icon {
  color: #c4c6c7;
  opacity: 0.8;
}

.typewriter-text {
  font-weight: 600;
}

.cursor {
  width: 3px;
  height: 1.8rem;
  background: #c4c6c7;
  margin-left: 5px;
}

.cursor.blinking {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Descrição */
.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
}

.highlight-text {
  background: linear-gradient(120deg, rgba(74, 144, 226, 0.2) 0%, rgba(74, 144, 226, 0.2) 100%);
  padding: 0 5px;
  margin: 0 5px;
  border-radius: 4px;
}

.tech-tags {
  display: inline-flex;
  gap: 5px;
  margin-left: 5px;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: #4a90e2;
  transform: translateY(-2px);
}

/* Redes sociais */
.social-section {
  margin-top: 2rem;
}

.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-link {
  position: relative;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  overflow: hidden;
}

.social-link:hover {
  transform: translateY(-5px);
  border-color: transparent;
}

.social-link.github:hover {
  background: #333;
  box-shadow: 0 5px 20px rgba(51, 51, 51, 0.4);
}

.social-link.linkedin:hover {
  background: #0077b5;
  box-shadow: 0 5px 20px rgba(0, 119, 181, 0.4);
}

.social-link.twitter:hover {
  background: #1da1f2;
  box-shadow: 0 5px 20px rgba(29, 161, 242, 0.4);
}

.social-link.medium:hover {
  background: #00ab6c;
  box-shadow: 0 5px 20px rgba(0, 171, 108, 0.4);
}

.social-tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.social-link:hover .social-tooltip {
  bottom: -25px;
  opacity: 1;
}

/* Divisor vertical */
.vertical-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
}

/* Certificação AWS */
.aws-certification {
  text-decoration: none;
  color: white;
}

.aws-badge {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 153, 0, 0.1);
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid rgba(255, 153, 0, 0.3);
  transition: all 0.3s ease;
}

.aws-badge:hover {
  background: rgba(255, 153, 0, 0.2);
  transform: scale(1.05);
  border-color: #ff9900;
  box-shadow: 0 5px 20px rgba(255, 153, 0, 0.2);
}

.aws-badge img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.aws-info {
  display: flex;
  flex-direction: column;
}

.aws-info strong {
  color: #c4c6c7;
  font-size: 0.9rem;
}

.aws-info span {
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Badge de disponibilidade */
.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(39, 174, 96, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid rgba(39, 174, 96, 0.3);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #27ae60;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

.status-text {
  color: #27ae60;
  font-size: 0.9rem;
}

/* Lottie e elementos visuais */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lottie-container {
  width: 500px;
  height: 500px;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
}

/* Elementos flutuantes */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  color: rgba(255, 255, 255, 0.1);
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

/* Badge de experiência */
.experience-badge {
  position: absolute;
  bottom: 0px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: glow 3s ease-in-out infinite;
}

.badge-content {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.years {
  font-size: 2rem;
  font-weight: 800;
  color: #c4c6c7;
}

.label {
  font-size: 0.9rem;
  opacity: 0.8;
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(74, 144, 226, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(74, 144, 226, 0.4);
  }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.5);
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.scroll-text {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-line {
  width: 2px;
  height: 50px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0% {
    transform: scaleY(0.3);
    transform-origin: top;
    opacity: 0.3;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleY(0.3);
    transform-origin: bottom;
    opacity: 0.3;
  }
}

/* Responsividade */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .name-gradient {
    font-size: 3rem;
  }
  
  .professional-title {
    font-size: 1.5rem;
  }
  
  .lottie-container {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 80px 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .static-text {
    font-size: 1.2rem;
  }
  
  .name-gradient {
    font-size: 2.2rem;
  }
  
  .professional-title {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .lottie-container {
    width: 300px;
    height: 300px;
    margin-top: 30px;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .vertical-divider {
    display: none;
  }
  
  .aws-badge {
    margin-top: 10px;
  }
  
  .floating-element {
    font-size: 1.5rem;
  }
  
  .experience-badge {
    bottom: 0;
    right: 0;
    padding: 8px 16px;
  }
  
  .years {
    font-size: 1.5rem;
  }
  
  .scroll-indicator {
    display: none;
  }
}
</style>