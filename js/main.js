// Main JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle")
  const savedTheme = localStorage.getItem("nev-theme") || "dark"

  document.documentElement.setAttribute("data-theme", savedTheme)

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"
      document.documentElement.setAttribute("data-theme", newTheme)
      localStorage.setItem("nev-theme", newTheme)
    })
  }

  if (!document.querySelector('.floating-wa-btn')) {
    const waBubble = document.createElement('a')
    waBubble.className = 'floating-wa-btn'
    waBubble.href = 'https://wa.me/5561998889542?text=Olá! Gostaria de falar sobre um projeto.'
    waBubble.target = '_blank'
    waBubble.rel = 'noopener noreferrer'
    waBubble.setAttribute('aria-label', 'Falar no WhatsApp')
    waBubble.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.149-.67.149-.198.297-.768.966-.941 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.199-.297.299-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z"/>
        <path d="M12 .5A11.5 11.5 0 0 0 1.5 12c0 2.415.75 4.64 2.016 6.46L1 23l4.7-1.5A11.5 11.5 0 1 0 12 .5z"/>
      </svg>
    `
    document.body.appendChild(waBubble)
  }

  const seoToggle = document.getElementById("seo-toggle")
  const seoPanel = document.getElementById("seo-panel")
  const seoKeywords = document.getElementById("seo-keywords")

  if (seoToggle && seoPanel && seoKeywords) {
    const keywordBases = [
      "desenvolvimento de software",
      "criação de sites",
      "desenvolvimento web",
      "agência de tecnologia",
      "sistemas sob medida",
      "aplicativos mobile",
      "loja virtual",
      "landing page",
      "marketing digital",
      "automação de processos",
      "consultoria em tecnologia",
      "design de interfaces",
      "otimização de performance",
      "integração de sistemas",
      "gestão de clientes",
      "soluções para e-commerce",
      "desenvolvimento de apps",
      "sites institucionais",
      "software empresarial",
      "estratégia digital",
      "identidade visual",
      "SEO local",
      "desenvolvimento de plataformas",
      "sistemas web personalizados",
      "soluções digitais completas",
      "consultoria digital",
      "marketing de conteúdo",
      "brand strategy",
      "produto digital",
      "experiência do usuário",
      "arquitetura da informação",
      "migração de sistemas",
      "criação de sistemas",
      "desenvolvimento de portais",
      "gestão de processos digitais",
      "implantação de software",
      "desenvolvimento de dashboards",
      "erp personalizado",
      "crm personalizado",
      "painéis administrativos",
      "portal corporativo",
      "intranet empresarial",
      "sistema de agendamento",
      "sistema de reservas",
      "sistema de cadastro",
      "sistema de estoque",
      "sistema de faturamento",
      "sistema de pedidos",
      "sistema de gestão",
      "automação comercial"
    ]

    const keywordSuffixes = [
      "para pequenas empresas",
      "para empresas médias",
      "para negócios locais",
      "para e-commerce",
      "em Brasília",
      "em São Paulo",
      "em Belo Horizonte",
      "com foco em conversão",
      "com estratégia de SEO",
      "com suporte especializado",
      "com integração avançada",
      "com automação inteligente",
      "com design moderno",
      "com desenvolvimento rápido",
      "com segurança reforçada",
      "com performance otimizada",
      "com análise de dados",
      "com foco em vendas",
      "com atendimento digital",
      "com gestão simplificada",
      "com escalabilidade garantida",
      "com soluções personalizadas",
      "com infraestrutura robusta",
      "com experiência premium",
      "com tecnologia de ponta",
      "com suporte 24 horas",
      "com implantação ágil",
      "com branding forte",
      "com posicionamento digital",
      "com tráfego qualificado",
      "com presença online forte",
      "com autoridade no mercado",
      "com estratégia de conteúdo",
      "com marketing digital assertivo",
      "com campanhas otimizadas",
      "com foco em crescimento",
      "com geração de leads",
      "com alcance nacional",
      "com alcance regional",
      "com alcance local",
      "com estratégia omnichannel",
      "com otimização para buscadores",
      "com UX profissional",
      "com UI moderna",
      "com interface intuitiva",
      "com usabilidade superior",
      "com tecnologia escalável",
      "com arquitetura limpa",
      "com manutenção simples",
      "com inovação contínua",
      "com produtividade aumentada",
      "com vantagem competitiva",
      "com atendimento especializado",
      "com resultados mensuráveis",
      "com foco em ROI",
      "com estratégia de crescimento",
      "com Planejamento digital completo",
      "com acompanhamento estratégico",
      "com soluções inovadoras",
      "com potencial de expansão"
    ]

    const seoKeywordList = keywordBases.flatMap((base) =>
      keywordSuffixes.map((suffix) => `${base} ${suffix}`.trim())
    )

    seoToggle.addEventListener("click", () => {
      const isOpen = !seoPanel.hidden
      seoPanel.hidden = isOpen
      seoToggle.setAttribute("aria-expanded", String(!isOpen))

      if (!isOpen) {
        seoKeywords.innerHTML = seoKeywordList
          .map((keyword) => `<span class="seo-chip">${keyword}</span>`)
          .join("")
      }
    })
  }

  // Language Toggle
  const langToggle = document.getElementById("lang-toggle")
  const i18n = {
    // Declare the i18n variable
    toggle: () => {
      // Implementation of toggle method
    },
    t: (key) => {
      // Implementation of t method for translation
      return key
    },
  }
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      i18n.toggle()
    })
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const navLinks = document.getElementById("nav-links")

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      mobileMenuToggle.classList.toggle("active")
    })

    // Close menu on link click
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
        mobileMenuToggle.classList.remove("active")
      })
    })
  }

  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Simple AOS (Animate On Scroll) Implementation
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate")
      }
    })
  }, observerOptions)

  document.querySelectorAll("[data-aos]").forEach((element) => {
    observer.observe(element)
  })

  // Project Filter (for projects page)
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")

      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category")
        if (filter === "all" || category === filter) {
          card.style.display = "block"
          setTimeout(() => (card.style.opacity = "1"), 10)
        } else {
          card.style.opacity = "0"
          setTimeout(() => (card.style.display = "none"), 300)
        }
      })
    })
  })

  // Contact Form Validation
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const message = formData.get("message")

      const successMsg = document.querySelector(".form-success")
      const errorMsg = document.querySelector(".form-error")

      // Reset messages
      successMsg.classList.remove("show")
      errorMsg.classList.remove("show")

      // Basic validation
      if (!name || !email || !message) {
        errorMsg.textContent = i18n.t("contactPage.form.error")
        errorMsg.classList.add("show")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        errorMsg.textContent = i18n.t("contactPage.form.error")
        errorMsg.classList.add("show")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "..."
      submitBtn.disabled = true

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      successMsg.textContent = i18n.t("contactPage.form.success")
      successMsg.classList.add("show")
      contactForm.reset()

      submitBtn.textContent = originalText
      submitBtn.disabled = false

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMsg.classList.remove("show")
      }, 5000)
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})
