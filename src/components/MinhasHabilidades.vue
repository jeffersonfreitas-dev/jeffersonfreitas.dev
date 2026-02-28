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
            <p class="small opacity-75">{{ currentLang.language === 'en' ? stat.labelEn : stat.label }}</p>
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
              <h3 class="fw-bold mb-1">{{ currentLang.language === 'en' ? category.titleEn : category.title }}</h3>
              <p class="small opacity-75 mb-0">{{ currentLang.language === 'en' ? category.descriptionEn : category.description }}</p>
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
                  <small >{{ currentLang.language === 'en' ? skill.descriptionEn : skill.description }}</small> <br>
                  <small class="opacity-75">{{ currentLang.language === 'en' ? skill.experienceEn : skill.experience }}</small>
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
          titleEn: 'Languages',
          description: 'Linguagens de programação',
          descriptionEn: 'Programming languages',
          icon: ['fab', 'java'],
          items: [
            { 
              title: 'Java', 
              icon: ['fab', 'java'], 
              level: 95, 
              tags: ['Backend', 'Enterprise'],
              description: 'Desenvolvimento Java desde 2016, com foco em Spring Boot e aplicações empresariais',
              descriptionEn: 'Java development since 2016, focusing on Spring Boot and enterprise applications',
              experience: '5+ anos',
              experienceEn: '5+ years',
              category: 'Linguagens',
              categoryEn: 'Languages'
            },
            { 
              title: 'Python', 
              icon: ['fab', 'python'], 
              level: 45, 
              tags: ['Data', 'Scripts', 'IA'],
              description: 'Automação, Inteligência artificial, análise de dados e desenvolvimento web com Django/Flask',
              descriptionEn: 'Automation, Artificial Intelligence, data analysis and web development with Django/Flask',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'Linguagens',
              categoryEn: 'Languages'
            },
            { 
              title: 'JavaScript', 
              icon: ['fa', 'code'], 
              level: 55, 
              tags: ['Frontend', 'Backend'],
              description: 'ES6+, Node.js, e desenvolvimento de aplicações interativas',
              descriptionEn: 'ES6+, Node.js, and interactive application development',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'Linguagens',
              categoryEn: 'Languages'
            },
            { 
              title: 'Golang', 
              icon: ['fab', 'golang'], 
              level: 20, 
              tags: ['Performance', 'Scalability'],
              description: 'Desenvolvimento API performáticas e seguras',
              descriptionEn: 'High-performance and secure API development',
              experience: '1+ ano',
              experienceEn: '1+ year',
              category: 'Linguagens',
              categoryEn: 'Languages'
            }
          ]
        },
        {
          title: 'Frameworks & Web',
          titleEn: 'Frameworks & Web',
          description: 'Frameworks e tecnologias web',
          descriptionEn: 'Frameworks and web technologies',
          icon: ['fa', 'leaf'],
          items: [
            { 
              title: 'Spring Boot', 
              icon: ['fa', 'leaf'], 
              level: 95, 
              tags: ['Microservices', 'API REST'],
              description: 'Conhecimento de vários projetos Spring Framework (Security, Cloud e etc)',
              descriptionEn: 'Knowledge of various Spring Framework projects (Security, Cloud, etc)',
              experience: '5+ anos',
              experienceEn: '5+ years',
              category: 'Frameworks & Web',
              categoryEn: 'Frameworks & Web'
            },
            { 
              title: 'Angular', 
              icon: ['fab', 'angular'], 
              level: 70, 
              tags: ['SPA', 'RxJS'],
              description: 'Aplicações single-page com Angular 2+',
              descriptionEn: 'Single-page applications with Angular 2+',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'Frameworks & Web',
              categoryEn: 'Frameworks & Web'
            },
            { 
              title: 'Vue.js', 
              icon: ['fab', 'vuejs'], 
              level: 75, 
              tags: ['Reactive', 'Composition'],
              description: 'Desenvolvimento de componentes reativos e SPAs',
              descriptionEn: 'Development of reactive components and SPAs',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'Frameworks & Web',
              categoryEn: 'Frameworks & Web'
            },
            { 
              title: 'React', 
              icon: ['fab', 'react'], 
              level: 20, 
              tags: ['Hooks', 'Context'],
              description: 'Desenvolvimento de interfaces modernas',
              descriptionEn: 'Modern interface development',
              experience: '1+ ano',
              experienceEn: '1+ year',
              category: 'Frameworks & Web',
              categoryEn: 'Frameworks & Web'
            },
            { 
              title: 'Bootstrap', 
              icon: ['fab', 'bootstrap'], 
              level: 90, 
              tags: ['Responsive', 'UI'],
              description: 'Design responsivo e componentes UI',
              descriptionEn: 'Responsive design and UI components',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'Frameworks & Web',
              categoryEn: 'Frameworks & Web'
            },
            { 
              title: 'HTML5/CSS3', 
              icon: ['fab', 'html5'], 
              level: 95, 
              tags: ['Semantic', 'Flex/Grid'],
              description: 'Desenvolvimento de interfaces semânticas e responsivas',
              descriptionEn: 'Semantic and responsive interface development',
              experience: '5+ anos',
              experienceEn: '5+ years',
              category: 'Frameworks & Web',
              categoryEn: 'Frameworks & Web'
            }
          ]
        },
        {
          title: 'Banco de Dados',
          titleEn: 'Database',
          description: 'Bancos de dados relacionais e NoSQL',
          descriptionEn: 'Relational and NoSQL databases',
          icon: ['fa', 'database'],
          items: [
            { 
              title: 'PostgreSQL', 
              icon: ['fa', 'database'], 
              level: 85, 
              tags: ['Relational', 'Performance'],
              description: 'Modelagem de dados e otimização de queries',
              descriptionEn: 'Data modeling and query optimization',
              experience: '4+ anos',
              experienceEn: '4+ years',
              category: 'Banco de Dados',
              categoryEn: 'Database'
            },
            { 
              title: 'MySQL', 
              icon: ['fa', 'database'], 
              level: 75, 
              tags: ['Relational'],
              description: 'Banco de dados relacional amplamente utilizado',
              descriptionEn: 'Widely used relational database',
              experience: '4+ anos',
              experienceEn: '4+ years',
              category: 'Banco de Dados',
              categoryEn: 'Database'
            },
            { 
              title: 'Oracle', 
              icon: ['fa', 'database'], 
              level: 75, 
              tags: ['Enterprise', 'PL/SQL'],
              description: 'Banco de dados corporativo Oracle',
              descriptionEn: 'Oracle enterprise database',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'Banco de Dados',
              categoryEn: 'Database'
            },
            { 
              title: 'MongoDB', 
              icon: ['fa', 'database'], 
              level: 30, 
              tags: ['NoSQL', 'Documents'],
              description: 'Modelagem de dados não-relacionais',
              descriptionEn: 'Non-relational data modeling',
              experience: '1+ ano',
              experienceEn: '1+ year',
              category: 'Banco de Dados',
              categoryEn: 'Database'
            },
            { 
              title: 'DynamoDB', 
              icon: ['fa', 'database'], 
              level: 75, 
              tags: ['NoSQL', 'AWS'],
              description: 'Banco de dados NoSQL da AWS',
              descriptionEn: 'AWS NoSQL database',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'Banco de Dados',
              categoryEn: 'Database'
            }
          ]
        },
        {
          title: 'Cloud',
          titleEn: 'Cloud',
          description: 'Provedores e serviços cloud',
          descriptionEn: 'Cloud providers and services',
          icon: ['fa', 'cloud'],
          items: [
            { 
              title: 'AWS', 
              icon: ['fab', 'aws'], 
              level: 90, 
              tags: ['EC2', 'S3', 'Lambda', 'API Gateway'],
              description: 'Certificação Developer, experiência com diversos serviços',
              descriptionEn: 'Developer Certification, experience with various services',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'Cloud',
              categoryEn: 'Cloud'
            },
            { 
              title: 'GCP', 
              icon: ['fab', 'google'], 
              level: 70, 
              tags: ['Compute', 'Storage'],
              description: 'Google Cloud Platform',
              descriptionEn: 'Google Cloud Platform',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'Cloud',
              categoryEn: 'Cloud'
            },
            { 
              title: 'OCI', 
              icon: ['fa', 'cloud'], 
              level: 65, 
              tags: ['Oracle Cloud', 'Infra'],
              description: 'Certificação OCI, deploys otimizados',
              descriptionEn: 'OCI Certification, optimized deployments',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'Cloud',
              categoryEn: 'Cloud'
            },
            { 
              title: 'Firebase', 
              icon: ['fab', 'google-plus'], 
              level: 80, 
              tags: ['BaaS', 'Auth', 'Deploy'],
              description: 'Vários projetos utilizando as ferramentas Google Firebase',
              descriptionEn: 'Multiple projects using Google Firebase tools',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'Cloud',
              categoryEn: 'Cloud'
            },
            { 
              title: 'Spring Cloud', 
              icon: ['fa', 'leaf'], 
              level: 45, 
              tags: ['PaaS', 'Tools'],
              description: 'API Gateway, Eureka e outras ferramentas Spring Cloud',
              descriptionEn: 'API Gateway, Eureka and other Spring Cloud tools',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'Cloud',
              categoryEn: 'Cloud'
            }
          ]
        },
        {
          title: 'DevOps',
          titleEn: 'DevOps',
          description: 'Ferramentas e práticas DevOps',
          descriptionEn: 'DevOps tools and practices',
          icon: ['fab', 'docker'],
          items: [
            { 
              title: 'Docker', 
              icon: ['fab', 'docker'], 
              level: 90, 
              tags: ['Containers', 'Compose'],
              description: 'Containerização de aplicações e orquestração',
              descriptionEn: 'Application containerization and orchestration',
              experience: '3+ anos',
              experienceEn: '3+ years',
              category: 'DevOps',
              categoryEn: 'DevOps'
            },
            { 
              title: 'Kubernetes', 
              icon: ['fa', 'box'], 
              level: 35, 
              tags: ['Orchestration', 'K8s'],
              description: 'Orquestração de contêineres',
              descriptionEn: 'Container orchestration',
              experience: '1+ ano',
              experienceEn: '1+ year',
              category: 'DevOps',
              categoryEn: 'DevOps'
            },
            { 
              title: 'GitHub Actions', 
              icon: ['fab', 'github'], 
              level: 75, 
              tags: ['CI/CD', 'Automation'],
              description: 'Pipelines completas e automáticas',
              descriptionEn: 'Complete and automated pipelines',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'DevOps',
              categoryEn: 'DevOps'
            },
            { 
              title: 'Messaging', 
              icon: ['fa', 'envelope'], 
              level: 50, 
              tags: ['Streaming', 'Events'],
              description: 'Experiências com Apache Kafka e RabbitMQ',
              descriptionEn: 'Experience with Apache Kafka and RabbitMQ',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'DevOps',
              categoryEn: 'DevOps'
            },
            { 
              title: 'Grafana', 
              icon: ['fab', 'sketch'], 
              level: 50, 
              tags: ['Monitoring', 'Dashboards'],
              description: 'Monitoramento e visualização de métricas',
              descriptionEn: 'Monitoring and metrics visualization',
              experience: '2+ anos',
              experienceEn: '2+ years',
              category: 'DevOps',
              categoryEn: 'DevOps'
            }
          ]
        }
      ],
      stats: [
        { value: '5+', label: 'Anos de experiência', labelEn: 'Years of experience' },
        { value: '30+', label: 'Projetos entregues', labelEn: 'Projects delivered' },
        { value: '2', label: 'Certificações', labelEn: 'Certifications' },
        { value: '60+', label: 'Cursos concluídos', labelEn: 'Courses completed' }
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