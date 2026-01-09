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
