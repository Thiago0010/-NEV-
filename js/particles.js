// Particle Network Background
class ParticleNetwork {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.particles = []
    this.mouse = { x: null, y: null, radius: 150 }
    this.particleCount = this.getParticleCount()
    this.connectionDistance = 120
    this.particleSpeed = 0.3

    this.init()
    this.animate()
    this.addEventListeners()
  }

  getParticleCount() {
    const width = window.innerWidth
    if (width < 768) return 40
    if (width < 1024) return 60
    return 80
  }

  init() {
    this.resize()
    this.createParticles()
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    this.particles = []
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.particleSpeed,
        vy: (Math.random() - 0.5) * this.particleSpeed,
        radius: Math.random() * 2 + 1,
      })
    }
  }

  addEventListeners() {
    window.addEventListener("resize", () => {
      this.resize()
      this.particleCount = this.getParticleCount()
      this.createParticles()
    })

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
    })

    window.addEventListener("mouseout", () => {
      this.mouse.x = null
      this.mouse.y = null
    })
  }

  drawParticle(particle) {
    const isDark = document.documentElement.getAttribute("data-theme") !== "light"
    const color = isDark ? "rgba(59, 130, 246, 0.6)" : "rgba(59, 130, 246, 0.5)"

    this.ctx.beginPath()
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    this.ctx.fillStyle = color
    this.ctx.fill()
  }

  drawConnections() {
    const isDark = document.documentElement.getAttribute("data-theme") !== "light"

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x
        const dy = this.particles[i].y - this.particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < this.connectionDistance) {
          const opacity = (1 - distance / this.connectionDistance) * (isDark ? 0.15 : 0.1)
          this.ctx.beginPath()
          this.ctx.strokeStyle = isDark ? `rgba(59, 130, 246, ${opacity})` : `rgba(59, 130, 246, ${opacity})`
          this.ctx.lineWidth = 1
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y)
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y)
          this.ctx.stroke()
        }
      }
    }
  }

  updateParticles() {
    this.particles.forEach((particle) => {
      // Mouse interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - particle.x
        const dy = this.mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < this.mouse.radius) {
          const force = (this.mouse.radius - distance) / this.mouse.radius
          const angle = Math.atan2(dy, dx)
          particle.vx -= Math.cos(angle) * force * 0.02
          particle.vy -= Math.sin(angle) * force * 0.02
        }
      }

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Boundary check
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1

      // Keep within bounds
      particle.x = Math.max(0, Math.min(this.canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(this.canvas.height, particle.y))

      // Damping
      particle.vx *= 0.999
      particle.vy *= 0.999

      // Minimum speed
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
      if (speed < 0.1) {
        particle.vx += (Math.random() - 0.5) * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1
      }
    })
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.drawConnections()
    this.particles.forEach((particle) => this.drawParticle(particle))
    this.updateParticles()

    requestAnimationFrame(() => this.animate())
  }
}

// Initialize particle network
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particle-canvas")
  if (canvas) {
    new ParticleNetwork(canvas)
  }
})
