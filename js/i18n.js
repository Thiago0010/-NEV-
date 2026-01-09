// Internationalization System
const translations = {
  pt: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.projects": "Projetos",
    "nav.software": "Softwares",
    "nav.plans": "Planos",
    "nav.team": "Equipe",
    "nav.testimonials": "Avaliações",
    "nav.contact": "Contato",

    // Hero
    "hero.badge": "Inovação em Tecnologia",
    "hero.title1": "Criamos tecnologia que",
    "hero.title2": "eleva negócios",
    "hero.title3": "ao próximo nível.",
    "hero.description":
      "Desenvolvemos soluções digitais sob medida que transformam ideias em produtos de alto impacto. Software, sites e aplicativos com a qualidade que sua empresa merece.",
    "hero.cta1": "Ver Projetos",
    "hero.cta2": "Falar com a Equipe",
    "hero.stat1": "Projetos Entregues",
    "hero.stat2": "Satisfação",
    "hero.stat3": "Suporte",

    // Services
    "services.label": "O que fazemos",
    "services.title": "Soluções completas para sua transformação digital",
    "services.item1.title": "Desenvolvimento de Software",
    "services.item1.desc": "Sistemas robustos e escaláveis, desenvolvidos com as melhores tecnologias do mercado.",
    "services.item2.title": "Criação de Sites",
    "services.item2.desc": "Sites modernos, responsivos e otimizados para conversão e experiência do usuário.",
    "services.item3.title": "Aplicativos Mobile",
    "services.item3.desc": "Apps nativos e híbridos para iOS e Android com performance excepcional.",
    "services.item4.title": "Soluções Personalizadas",
    "services.item4.desc": "Automações, integrações e sistemas sob medida para suas necessidades específicas.",
    "services.cta": "Ver todos os serviços",

    // Why Us
    "why.label": "Por que a [NEV]²",
    "why.title": "Excelência técnica aliada a visão de negócio",
    "why.description":
      "Combinamos expertise técnica de ponta com uma compreensão profunda das necessidades do seu negócio. Cada linha de código é escrita pensando no impacto que vai gerar.",
    "why.feature1": "Código limpo e documentado",
    "why.feature2": "Arquitetura escalável",
    "why.feature3": "Performance otimizada",
    "why.feature4": "Segurança em primeiro lugar",

    // CTA
    "cta.title": "Pronto para transformar sua ideia em realidade?",
    "cta.description": "Entre em contato e descubra como podemos ajudar seu negócio a alcançar o próximo nível.",
    "cta.button": "Iniciar Conversa",

    // Footer
    "footer.description": "Transformando ideias em soluções digitais de alto impacto.",
    "footer.navigation": "Navegação",
    "footer.company": "Empresa",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",

    // About Page
    "about.header.title": "Sobre a [NEV]²",
    "about.header.desc": "Conheça nossa história, missão e os valores que guiam cada projeto que desenvolvemos.",
    "about.story.title": "Nossa História",
    "about.story.p1":
      "A [NEV]² nasceu da paixão por tecnologia e da vontade de criar soluções que realmente fazem a diferença. Fundada por desenvolvedores com anos de experiência em grandes empresas de tecnologia, nossa missão é democratizar o acesso a software de alta qualidade.",
    "about.story.p2":
      "Acreditamos que cada negócio, independente do tamanho, merece ter acesso às melhores práticas de desenvolvimento e às tecnologias mais modernas do mercado.",
    "about.mission.title": "Missão",
    "about.mission.desc":
      "Transformar ideias em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.",
    "about.vision.title": "Visão",
    "about.vision.desc":
      "Ser referência em desenvolvimento de software, reconhecidos pela excelência técnica e pelo impacto positivo nos negócios.",
    "about.values.title": "Valores",
    "about.values.desc":
      "Qualidade, inovação, transparência e compromisso com resultados guiam todas as nossas decisões.",

    // Services Page
    "servicesPage.header.title": "Nossos Serviços",
    "servicesPage.header.desc": "Soluções tecnológicas completas para impulsionar seu negócio ao próximo nível.",
    "servicesPage.software.title": "Desenvolvimento de Software",
    "servicesPage.software.desc":
      "Criamos sistemas robustos e escaláveis utilizando as tecnologias mais modernas do mercado. Do planejamento à entrega, cada etapa é executada com excelência.",
    "servicesPage.software.f1": "Arquitetura moderna e escalável",
    "servicesPage.software.f2": "Código limpo e documentado",
    "servicesPage.software.f3": "Testes automatizados",
    "servicesPage.software.f4": "Deploy automatizado (CI/CD)",
    "servicesPage.sites.title": "Criação de Sites Profissionais",
    "servicesPage.sites.desc":
      "Sites modernos, responsivos e otimizados para SEO. Design exclusivo que converte visitantes em clientes e fortalece sua presença digital.",
    "servicesPage.sites.f1": "Design responsivo e moderno",
    "servicesPage.sites.f2": "Otimização para SEO",
    "servicesPage.sites.f3": "Alta performance",
    "servicesPage.sites.f4": "Integração com CMS",
    "servicesPage.mobile.title": "Aplicativos Mobile",
    "servicesPage.mobile.desc":
      "Apps nativos e híbridos para iOS e Android. Experiência do usuário excepcional com performance de ponta.",
    "servicesPage.mobile.f1": "iOS e Android",
    "servicesPage.mobile.f2": "React Native / Flutter",
    "servicesPage.mobile.f3": "UI/UX otimizado",
    "servicesPage.mobile.f4": "Publicação nas lojas",
    "servicesPage.systems.title": "Sistemas Personalizados",
    "servicesPage.systems.desc":
      "Sistemas sob medida para suas necessidades específicas. ERPs, CRMs, painéis administrativos e muito mais.",
    "servicesPage.systems.f1": "Análise de requisitos",
    "servicesPage.systems.f2": "Desenvolvimento ágil",
    "servicesPage.systems.f3": "Integrações API",
    "servicesPage.systems.f4": "Suporte contínuo",
    "servicesPage.automation.title": "Automação & Integrações",
    "servicesPage.automation.desc":
      "Automatize processos repetitivos e integre sistemas para aumentar a produtividade da sua equipe.",
    "servicesPage.automation.f1": "Automação de processos",
    "servicesPage.automation.f2": "Integração entre sistemas",
    "servicesPage.automation.f3": "APIs personalizadas",
    "servicesPage.automation.f4": "Webhooks e triggers",
    "servicesPage.enterprise.title": "Soluções Empresariais",
    "servicesPage.enterprise.desc":
      "Soluções completas para grandes empresas. Consultoria, desenvolvimento e suporte especializado.",
    "servicesPage.enterprise.f1": "Consultoria técnica",
    "servicesPage.enterprise.f2": "Arquitetura enterprise",
    "servicesPage.enterprise.f3": "Segurança avançada",
    "servicesPage.enterprise.f4": "SLA garantido",

    // Projects Page
    "projectsPage.header.title": "Nossos Projetos",
    "projectsPage.header.desc": "Conheça alguns dos projetos que desenvolvemos com excelência e dedicação.",
    "projectsPage.filter.all": "Todos",
    "projectsPage.filter.web": "Web",
    "projectsPage.filter.mobile": "Mobile",
    "projectsPage.filter.software": "Software",
    "projectsPage.status.completed": "Finalizado",
    "projectsPage.status.progress": "Em andamento",

    // Software Page
    "softwarePage.header.title": "Nossos Softwares",
    "softwarePage.header.desc": "Produtos próprios desenvolvidos pela [NEV]² para resolver problemas reais.",
    "softwarePage.btn": "Saiba mais",

    // Plans Page
    "plansPage.header.title": "Planos & Serviços",
    "plansPage.header.desc": "Escolha o plano ideal para as necessidades do seu negócio.",
    "plansPage.basic": "Básico",
    "plansPage.pro": "Profissional",
    "plansPage.enterprise": "Enterprise",
    "plansPage.recommended": "Recomendado",
    "plansPage.cta": "Começar agora",
    "plansPage.contact": "Fale conosco",

    // Team Page
    "teamPage.header.title": "Nossa Equipe",
    "teamPage.header.desc": "Conheça os profissionais por trás das soluções da [NEV]².",

    // Testimonials Page
    "testimonialsPage.header.title": "Avaliações",
    "testimonialsPage.header.desc": "O que nossos clientes dizem sobre nosso trabalho.",

    // Contact Page
    "contactPage.header.title": "Entre em Contato",
    "contactPage.header.desc": "Estamos prontos para ajudar seu negócio a alcançar o próximo nível.",
    "contactPage.info.title": "Vamos conversar?",
    "contactPage.info.desc":
      "Preencha o formulário ao lado ou utilize um dos nossos canais de contato. Responderemos o mais rápido possível.",
    "contactPage.email": "E-mail",
    "contactPage.phone": "Telefone",
    "contactPage.location": "Localização",
    "contactPage.form.name": "Nome completo",
    "contactPage.form.email": "E-mail",
    "contactPage.form.company": "Empresa (opcional)",
    "contactPage.form.message": "Mensagem",
    "contactPage.form.submit": "Enviar mensagem",
    "contactPage.form.success": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    "contactPage.form.error": "Erro ao enviar mensagem. Por favor, tente novamente.",
    "contactPage.form.namePlaceholder": "Seu nome",
    "contactPage.form.emailPlaceholder": "seu@email.com",
    "contactPage.form.companyPlaceholder": "Nome da sua empresa",
    "contactPage.form.messagePlaceholder": "Como podemos ajudar?",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.software": "Software",
    "nav.plans": "Plans",
    "nav.team": "Team",
    "nav.testimonials": "Reviews",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Technology Innovation",
    "hero.title1": "We create technology that",
    "hero.title2": "elevates businesses",
    "hero.title3": "to the next level.",
    "hero.description":
      "We develop custom digital solutions that transform ideas into high-impact products. Software, websites, and apps with the quality your company deserves.",
    "hero.cta1": "View Projects",
    "hero.cta2": "Talk to the Team",
    "hero.stat1": "Projects Delivered",
    "hero.stat2": "Satisfaction",
    "hero.stat3": "Support",

    // Services
    "services.label": "What we do",
    "services.title": "Complete solutions for your digital transformation",
    "services.item1.title": "Software Development",
    "services.item1.desc": "Robust and scalable systems, developed with the best technologies on the market.",
    "services.item2.title": "Website Creation",
    "services.item2.desc": "Modern, responsive websites optimized for conversion and user experience.",
    "services.item3.title": "Mobile Apps",
    "services.item3.desc": "Native and hybrid apps for iOS and Android with exceptional performance.",
    "services.item4.title": "Custom Solutions",
    "services.item4.desc": "Automations, integrations, and tailor-made systems for your specific needs.",
    "services.cta": "View all services",

    // Why Us
    "why.label": "Why [NEV]²",
    "why.title": "Technical excellence combined with business vision",
    "why.description":
      "We combine cutting-edge technical expertise with a deep understanding of your business needs. Every line of code is written with impact in mind.",
    "why.feature1": "Clean and documented code",
    "why.feature2": "Scalable architecture",
    "why.feature3": "Optimized performance",
    "why.feature4": "Security first",

    // CTA
    "cta.title": "Ready to turn your idea into reality?",
    "cta.description": "Get in touch and discover how we can help your business reach the next level.",
    "cta.button": "Start Conversation",

    // Footer
    "footer.description": "Transforming ideas into high-impact digital solutions.",
    "footer.navigation": "Navigation",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",

    // About Page
    "about.header.title": "About [NEV]²",
    "about.header.desc": "Learn about our history, mission, and the values that guide every project we develop.",
    "about.story.title": "Our Story",
    "about.story.p1":
      "[NEV]² was born from a passion for technology and the desire to create solutions that truly make a difference. Founded by developers with years of experience in major tech companies, our mission is to democratize access to high-quality software.",
    "about.story.p2":
      "We believe that every business, regardless of size, deserves access to the best development practices and the most modern technologies on the market.",
    "about.mission.title": "Mission",
    "about.mission.desc": "Transform ideas into innovative digital solutions that drive our clients' growth.",
    "about.vision.title": "Vision",
    "about.vision.desc":
      "Be a reference in software development, recognized for technical excellence and positive business impact.",
    "about.values.title": "Values",
    "about.values.desc": "Quality, innovation, transparency, and commitment to results guide all our decisions.",

    // Services Page
    "servicesPage.header.title": "Our Services",
    "servicesPage.header.desc": "Complete technology solutions to take your business to the next level.",
    "servicesPage.software.title": "Software Development",
    "servicesPage.software.desc":
      "We create robust and scalable systems using the most modern technologies. From planning to delivery, every step is executed with excellence.",
    "servicesPage.software.f1": "Modern and scalable architecture",
    "servicesPage.software.f2": "Clean and documented code",
    "servicesPage.software.f3": "Automated testing",
    "servicesPage.software.f4": "Automated deploy (CI/CD)",
    "servicesPage.sites.title": "Professional Website Creation",
    "servicesPage.sites.desc":
      "Modern, responsive, SEO-optimized websites. Exclusive design that converts visitors into customers and strengthens your digital presence.",
    "servicesPage.sites.f1": "Responsive and modern design",
    "servicesPage.sites.f2": "SEO optimization",
    "servicesPage.sites.f3": "High performance",
    "servicesPage.sites.f4": "CMS integration",
    "servicesPage.mobile.title": "Mobile Apps",
    "servicesPage.mobile.desc":
      "Native and hybrid apps for iOS and Android. Exceptional user experience with cutting-edge performance.",
    "servicesPage.mobile.f1": "iOS and Android",
    "servicesPage.mobile.f2": "React Native / Flutter",
    "servicesPage.mobile.f3": "Optimized UI/UX",
    "servicesPage.mobile.f4": "Store publishing",
    "servicesPage.systems.title": "Custom Systems",
    "servicesPage.systems.desc": "Tailor-made systems for your specific needs. ERPs, CRMs, admin panels and more.",
    "servicesPage.systems.f1": "Requirements analysis",
    "servicesPage.systems.f2": "Agile development",
    "servicesPage.systems.f3": "API integrations",
    "servicesPage.systems.f4": "Continuous support",
    "servicesPage.automation.title": "Automation & Integrations",
    "servicesPage.automation.desc":
      "Automate repetitive processes and integrate systems to increase your team's productivity.",
    "servicesPage.automation.f1": "Process automation",
    "servicesPage.automation.f2": "System integration",
    "servicesPage.automation.f3": "Custom APIs",
    "servicesPage.automation.f4": "Webhooks and triggers",
    "servicesPage.enterprise.title": "Enterprise Solutions",
    "servicesPage.enterprise.desc":
      "Complete solutions for large companies. Consulting, development, and specialized support.",
    "servicesPage.enterprise.f1": "Technical consulting",
    "servicesPage.enterprise.f2": "Enterprise architecture",
    "servicesPage.enterprise.f3": "Advanced security",
    "servicesPage.enterprise.f4": "Guaranteed SLA",

    // Projects Page
    "projectsPage.header.title": "Our Projects",
    "projectsPage.header.desc": "Discover some of the projects we've developed with excellence and dedication.",
    "projectsPage.filter.all": "All",
    "projectsPage.filter.web": "Web",
    "projectsPage.filter.mobile": "Mobile",
    "projectsPage.filter.software": "Software",
    "projectsPage.status.completed": "Completed",
    "projectsPage.status.progress": "In progress",

    // Software Page
    "softwarePage.header.title": "Our Software",
    "softwarePage.header.desc": "Proprietary products developed by [NEV]² to solve real problems.",
    "softwarePage.btn": "Learn more",

    // Plans Page
    "plansPage.header.title": "Plans & Services",
    "plansPage.header.desc": "Choose the ideal plan for your business needs.",
    "plansPage.basic": "Basic",
    "plansPage.pro": "Professional",
    "plansPage.enterprise": "Enterprise",
    "plansPage.recommended": "Recommended",
    "plansPage.cta": "Get started",
    "plansPage.contact": "Contact us",

    // Team Page
    "teamPage.header.title": "Our Team",
    "teamPage.header.desc": "Meet the professionals behind [NEV]² solutions.",

    // Testimonials Page
    "testimonialsPage.header.title": "Reviews",
    "testimonialsPage.header.desc": "What our clients say about our work.",

    // Contact Page
    "contactPage.header.title": "Get in Touch",
    "contactPage.header.desc": "We're ready to help your business reach the next level.",
    "contactPage.info.title": "Let's talk?",
    "contactPage.info.desc": "Fill out the form or use one of our contact channels. We'll respond as soon as possible.",
    "contactPage.email": "Email",
    "contactPage.phone": "Phone",
    "contactPage.location": "Location",
    "contactPage.form.name": "Full name",
    "contactPage.form.email": "Email",
    "contactPage.form.company": "Company (optional)",
    "contactPage.form.message": "Message",
    "contactPage.form.submit": "Send message",
    "contactPage.form.success": "Message sent successfully! We'll get back to you soon.",
    "contactPage.form.error": "Error sending message. Please try again.",
    "contactPage.form.namePlaceholder": "Your name",
    "contactPage.form.emailPlaceholder": "your@email.com",
    "contactPage.form.companyPlaceholder": "Your company name",
    "contactPage.form.messagePlaceholder": "How can we help?",
  },
}

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem("nev-lang") || "pt"
    this.init()
  }

  init() {
    this.updateContent()
    this.updateLangButton()
  }

  setLanguage(lang) {
    this.currentLang = lang
    localStorage.setItem("nev-lang", lang)
    this.updateContent()
    this.updateLangButton()
  }

  toggle() {
    const newLang = this.currentLang === "pt" ? "en" : "pt"
    this.setLanguage(newLang)
  }

  t(key) {
    return translations[this.currentLang][key] || key
  }

  updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n")
      const translation = this.t(key)
      if (translation) {
        element.textContent = translation
      }
    })

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder")
      const translation = this.t(key)
      if (translation) {
        element.placeholder = translation
      }
    })

    document.documentElement.lang = this.currentLang === "pt" ? "pt-BR" : "en"
  }

  updateLangButton() {
    const langBtn = document.querySelector(".lang-current")
    if (langBtn) {
      langBtn.textContent = this.currentLang.toUpperCase()
    }
  }
}

// Initialize i18n
const i18n = new I18n()
