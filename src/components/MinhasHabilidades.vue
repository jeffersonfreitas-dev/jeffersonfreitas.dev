<template>
  <div class="container text-white skills-container">
    <div class="row align-items-center mb-5 animate-name">
      <div class="col-lg-4 col-12 text-start">
        <h1 class="display-3 fw-bold">{{ $t('my_skills') }}</h1>
        <p class="display-6 lead mt-3">{{ $t('quick_my_skills') }}</p>
        <p class="lead">{{ $t('quick_my_skills_2') }}</p>
      </div>
      
      <div class="col-lg-8 col-12 mt-4 mt-lg-0">
        <div class="stats-grid">
          <div class="stat-card animate-float" v-for="stat in stats" :key="stat.label">
            <h3 class="fw-bold text-gradient">{{ stat.value }}</h3>
            <p class="small opacity-75">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="skills-grid">
      <div class="skill-category animate-slide-up" v-for="(category, index) in skillCategories" :key="category.title" :style="{ animationDelay: `${index * 0.1}s` }">
        <div class="category-header">
          <div class="d-flex align-items-center gap-3">
            <div class="category-icon">
              <font-awesome-icon :icon="category.icon" class="fa-2x" />
            </div>
            <div>
              <h3 class="fw-bold mb-1">{{ category.title }}</h3>
              <p class="small opacity-75 mb-0">{{ category.description }}</p>
            </div>
          </div>
          <button 
            class="expand-btn" 
            @click="toggleCategory(category.title)"
            :aria-expanded="expandedCategories.includes(category.title)"
          >
            <font-awesome-icon :icon="['fa', expandedCategories.includes(category.title) ? 'chevron-up' : 'chevron-down']" />
          </button>
        </div>

        <div class="skills-content" :class="{ expanded: expandedCategories.includes(category.title) }">
          <div class="skills-wrapper">
            <div 
              class="skill-card" v-for="skill in category.items" :key="skill.title" @mouseenter="showSkillDetail(skill)" @mouseleave="hideSkillDetail">
              <div class="skill-card-inner">
                <div class="skill-icon">
                  <font-awesome-icon :icon="skill.icon" class="fa-2x" />
                </div>
                <h4 class="skill-title">{{ skill.title }}</h4>
                
                <div class="skill-level" v-if="skill.level">
                  <div class="progress-bar-container">
                    <div class="progress-bar" :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
                
                <div class="skill-tags" v-if="skill.tags">
                  <span v-for="tag in skill.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>

                <div class="skill-description" v-if="hoveredSkill === skill">
                  <small >{{ skill.description || `Experiência com ${skill.title}` }}</small> <br>
                  <small class="opacity-75">{{ skill.experience || '2+ anos' }}</small>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skills-cloud mt-5 pt-4">
      <h4 class="text-center mb-4 fw-bold">{{ $t('tech_cloud')}}</h4>
      <div class="cloud-container">
        <span 
          v-for="skill in allSkills" 
          :key="skill.title"
          class="cloud-item"
          :style="getCloudItemStyle(skill)"
          @click="scrollToCategory(skill.category)"
        >
          {{ skill.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useLangStore } from '@/stores/Lang'

export default {
  data() {
    return {
      expandedCategories: ['Linguagens', 'Frameworks & Web', 'Cloud', 'DevOps', 'Banco de Dados'],
      hoveredSkill: null,
      skillCategories: [
        {
          title: 'Linguagens',
          description: 'Linguagens de programação',
          icon: ['fab', 'java'],
          items: [
            { 
              title: 'Java', 
              icon: ['fab', 'java'], 
              level: 95, 
              tags: ['Backend', 'Enterprise'],
              description: 'Desenvolvimento Java desde 2016, com foco em Spring Boot e aplicações empresariais',
              experience: '5+ anos',
              category: 'Linguagens'
            },
            { 
              title: 'Python', 
              icon: ['fab', 'python'], 
              level: 45, 
              tags: ['Data', 'Scripts', 'IA'],
              description: 'Automação, Inteligência artificial, análise de dados e desenvolvimento web com Django/Flask',
              experience: '2+ anos',
              category: 'Linguagens'
            },
            { 
              title: 'JavaScript', 
              icon: ['fa', 'code'], 
              level: 55, 
              tags: ['Frontend', 'Backend'],
              description: 'ES6+, Node.js, e desenvolvimento de aplicações interativas',
              experience: '3+ anos',
              category: 'Linguagens'
            },
            { 
              title: 'Golang', 
              icon: ['fab', 'golang'], 
              level: 20, 
              tags: ['Performace', 'Escalabilidade'],
              description: 'Desenvolvimento API performáticas e seguras',
              experience: '1+ ano',
              category: 'Linguagens'
            }
          ]
        },
        {
          title: 'Frameworks & Web',
          description: 'Frameworks e tecnologias web',
          icon: ['fa', 'leaf'],
          items: [
            { 
              title: 'Spring Boot', 
              icon: ['fa', 'leaf'], 
              level: 95, 
              tags: ['Microservices', 'API REST'],
              description: 'Conhecimento de vários projetos Spring Framework (Security, Cloud e etc)',
              experience: '5+ anos',
              category: 'Frameworks & Web'
            },
            { 
              title: 'Angular', 
              icon: ['fab', 'angular'], 
              level: 70, 
              tags: ['SPA', 'RxJS'],
              description: 'Aplicações single-page com Angular 2+',
              experience: '3+ anos',
              category: 'Frameworks & Web'
            },
            { 
              title: 'Vue.js', 
              icon: ['fab', 'vuejs'], 
              level: 75, 
              tags: ['Reativo', 'Composição'],
              description: 'Desenvolvimento de componentes reativos e SPAs',
              experience: '3+ anos',
              category: 'Frameworks & Web'
            },
            { 
              title: 'React', 
              icon: ['fab', 'react'], 
              level: 20, 
              tags: ['Hooks', 'Context'],
              description: 'Desenvolvimento de interfaces modernas',
              experience: '1+ ano',
              category: 'Frameworks & Web'
            },
            { 
              title: 'Bootstrap', 
              icon: ['fab', 'bootstrap'], 
              level: 90, 
              tags: ['Responsivo', 'UI'],
              experience: '3+ ano',
              category: 'Frameworks & Web'
            },
            { 
              title: 'HTML5/CSS3', 
              icon: ['fab', 'html5'], 
              level: 95, 
              tags: ['Semântico', 'Flex/Grid'],
              experience: '5+ ano',
              category: 'Frameworks & Web'
            }
          ]
        },
        {
          title: 'Banco de Dados',
          description: 'Bancos de dados relacionais e NoSQL',
          icon: ['fa', 'database'],
          items: [
            { 
              title: 'PostgreSQL', 
              icon: ['fa', 'database'], 
              level: 85, 
              tags: ['Relacional', 'Performance'],
              description: 'Modelagem de dados e otimização de queries',
              experience: '4+ anos',
              category: 'Banco de Dados'
            },
            { 
              title: 'MySQL', 
              icon: ['fa', 'database'], 
              level: 75, 
              tags: ['Relacional'],
              category: 'Banco de Dados'
            },
            { 
              title: 'Oracle', 
              icon: ['fa', 'database'], 
              level: 75, 
              tags: ['Enterprise', 'PL/SQL'],
              experience: '3+ anos',
              category: 'Banco de Dados'
            },
            { 
              title: 'MongoDB', 
              icon: ['fa', 'database'], 
              level: 30, 
              tags: ['NoSQL', 'Documentos'],
              description: 'Modelagem de dados não-relacionais',
              experience: '1+ ano',
              category: 'Banco de Dados'
            },
            { 
              title: 'DynamoDB', 
              icon: ['fa', 'database'], 
              level: 75, 
              tags: ['NoSQL', 'AWS'],
              experience: '2+ ano',
              category: 'Banco de Dados'
            }
          ]
        },
        {
          title: 'Cloud',
          description: 'Provedores e serviços cloud',
          icon: ['fa', 'cloud'],
          items: [
            { 
              title: 'AWS', 
              icon: ['fab', 'aws'], 
              level: 90, 
              tags: ['EC2', 'S3', 'Lambda', 'API Gateway'],
              description: 'Certificação Developer, experiência com diversos serviços',
              experience: '3+ anos',
              category: 'Cloud'
            },
            { 
              title: 'GCP', 
              icon: ['fab', 'google'], 
              level: 70, 
              tags: ['Compute', 'Storage'],
              category: 'Cloud'
            },
            { 
              title: 'OCI', 
              icon: ['fa', 'cloud'], 
              level: 65, 
              tags: ['Oracle Cloud', 'Infra'],
              description: 'Certificação OCI, deploys otimizados',
              category: 'Cloud'
            },
            { 
              title: 'Firebase', 
              icon: ['fab', 'google-plus'], 
              level: 80, 
              tags: ['BaaS', 'Auth', 'Deploy'],
              experience: '3+ anos',
              description: 'Vários projetos utilizando as ferramentas Google Firebase',
              category: 'Cloud'
            },
            { 
              title: 'SpringCloud', 
              icon: ['fa', 'leaf'], 
              level: 45, 
              tags: ['PaaS', 'Tools'],
              description: 'API Gateway, Eureka e outras ferramentas Spring Cloud',
              category: 'Cloud'
            }
          ]
        },
        {
          title: 'DevOps',
          description: 'Ferramentas e práticas DevOps',
          icon: ['fab', 'docker'],
          items: [
            { 
              title: 'Docker', 
              icon: ['fab', 'docker'], 
              level: 90, 
              tags: ['Containers', 'Compose'],
              description: 'Containerização de aplicações e orquestração',
              experience: '3+ anos',
              category: 'DevOps'
            },
            { 
              title: 'Kubernetes', 
              icon: ['fa', 'box'], 
              level: 35, 
              tags: ['Orquestração', 'K8s'],
              experience: '1+ ano',
              category: 'DevOps'
            },
            { 
              title: 'GitHub Actions', 
              icon: ['fab', 'github'], 
              level: 75, 
              tags: ['CI/CD', 'Automação'],
              description: 'Pipelines completas e automáticas',
              category: 'DevOps'
            },
            { 
              title: 'Messageria', 
              icon: ['fa', 'envelope'], 
              level: 50, 
              tags: ['Streaming', 'Eventos'],
              description: 'Experiências com Apache Kafka e RabbitMQ',
              category: 'DevOps'
            },
            { 
              title: 'Grafana', 
              icon: ['fab', 'sketch'], 
              level: 50, 
              tags: ['Monitoramento', 'Dashboards'],
              category: 'DevOps'
            }
          ]
        }
      ],
      stats: [
        { value: '5+', label: 'Anos de experiência' },
        { value: '30+', label: 'Projetos entregues' },
        { value: '2', label: 'Certificações' },
        { value: '60+', label: 'Cursos concluídos' }
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
    allSkills() {
      return this.skillCategories.flatMap(cat => 
        cat.items.map(item => ({
          ...item,
          category: cat.title
        }))
      )
    }
  },

  methods: {
    toggleCategory(categoryTitle) {
      const index = this.expandedCategories.indexOf(categoryTitle)
      if (index === -1) {
        this.expandedCategories.push(categoryTitle)
      } else {
        this.expandedCategories.splice(index, 1)
      }
    },

    showSkillDetail(skill) {
      this.hoveredSkill = skill
    },

    hideSkillDetail() {
      this.hoveredSkill = null
    },

    getCloudItemStyle(skill) {
      const sizes = ['small', 'medium', 'large']
      const colors = ['primary', 'secondary', 'accent']
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      
      return {
        fontSize: randomSize === 'small' ? '0.9rem' : randomSize === 'medium' ? '1.2rem' : '1.5rem',
        opacity: 0.6 + Math.random() * 0.4,
        animationDelay: `${Math.random() * 2}s`,
        color: `var(--${randomColor}-color)`
      }
    },

    scrollToCategory(category) {
      const element = document.querySelector(`[data-category="${category}"]`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.skills-container {
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Animações */
.animate-name {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 1s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.6s ease-out forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Estatísticas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.text-gradient {
  background: linear-gradient(135deg, #fff, #a8a8a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  margin-bottom: 5px;
}

/* Grid de Skills */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
}

.skill-category {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.skill-category:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.category-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.expand-btn {
  background: none;
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
}

.expand-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.skills-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.skills-content.expanded {
  max-height: 1000px;
  opacity: 1;
  padding: 24px;
}

.skills-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

/* Cards de Skill */
.skill-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-card-inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
}

.skill-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
}

/* Barra de progresso */
.progress-bar-container {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 10px 0;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #fff, #a8a8a8);
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Tags */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-top: 8px;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
}

.skill-description {
  bottom: 100%;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 15px;
  backdrop-filter: blur(10px);
}


.cloud-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 200px;
}

.cloud-item {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.cloud-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1) !important;
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.1);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  .category-header {
    padding: 16px;
  }

  .category-icon {
    width: 40px;
    height: 40px;
  }

  .category-icon :deep(svg) {
    width: 20px;
    height: 20px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .stat-card h3 {
    font-size: 1.5rem;
  }

  .cloud-container {
    gap: 12px;
  }

  .cloud-item {
    padding: 4px 12px;
    font-size: 0.9rem;
  }
}

/* Cores personalizadas */
:root {
  --primary-color: #4a90e2;
  --secondary-color: #50e3c2;
  --accent-color: #f5a623;
}

/* Tooltip personalizado */
.skill-card {
  position: relative;
}

.skill-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.95);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.85rem;
  width: 220px;
  text-align: center;
  z-index: 1000;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}

.skill-card:hover .skill-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-5px);
}

.skill-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 8px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.95) transparent transparent transparent;
}

.skill-tooltip p {
  margin-bottom: 8px;
  line-height: 1.4;
  font-weight: 400;
}

.skill-tooltip small {
  display: block;
  color: #4a90e2;
  font-weight: 600;
  font-size: 0.8rem;
}

/* Variações para mobile */
@media (max-width: 768px) {
  .skill-tooltip {
    width: 180px;
    font-size: 0.75rem;
    padding: 8px 12px;
  }
}
</style>