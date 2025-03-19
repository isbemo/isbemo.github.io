document.addEventListener("DOMContentLoaded", () => {
  // Slider functionality for hero section
  const dots = document.querySelectorAll(".dot")
  const heroContent = document.querySelector(".hero-content")
  const heroImage = document.querySelector(".hero-image img")

  // Content for different slides
  const slides = [
    {
      title: "Viaje al centro del conocimiento",
      description: "Participa en foros, seminarios y muchos más eventos con UNIR.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Formación online de calidad",
      description: "Estudia a tu ritmo con los mejores profesionales del sector.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Metodología innovadora",
      description: "Clases en directo y recursos multimedia para un aprendizaje efectivo.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Titulaciones oficiales",
      description: "Grados y másteres reconocidos en el Espacio Europeo de Educación Superior.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Atención personalizada",
      description: "Tutores y profesores disponibles para guiarte durante toda tu formación.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Empleabilidad garantizada",
      description: "Bolsa de empleo y convenios con las mejores empresas del sector.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    },
  ]

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Update active dot
      document.querySelector(".dot.active").classList.remove("active")
      dot.classList.add("active")

      // Update content and image
      const slide = slides[index]
      const h1 = heroContent.querySelector("h1")
      const p = heroContent.querySelector("p")

      // Animate content change
      heroContent.style.opacity = 0
      setTimeout(() => {
        h1.textContent = slide.title
        p.textContent = slide.description
        heroContent.style.opacity = 1
      }, 300)

      // Change image with fade effect
      heroImage.style.opacity = 0
      setTimeout(() => {
        heroImage.src = slide.image
        heroImage.style.opacity = 1
      }, 300)
    })
  })

  // Auto-rotate slides every 5 seconds
  let currentSlide = 1 // Start with the second slide (index 1) since the first is shown by default

  function rotateSlides() {
    if (currentSlide >= dots.length) {
      currentSlide = 0
    }
    dots[currentSlide].click()
    currentSlide++
  }

  // Start the auto-rotation
  const slideInterval = setInterval(rotateSlides, 5000)

  // Stop rotation when user interacts with dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval)
      // Restart interval after user interaction
      setTimeout(() => {
        currentSlide = Array.from(dots).findIndex((d) => d.classList.contains("active")) + 1
        if (currentSlide >= dots.length) {
          currentSlide = 0
        }
        setInterval(rotateSlides, 5000)
      }, 10000) // Wait 10 seconds before restarting auto-rotation
    })
  })

  // Mobile menu toggle
  const createMobileMenu = () => {
    const nav = document.querySelector(".main-nav")
    const container = nav.querySelector(".container")

    // Create toggle button
    const toggleButton = document.createElement("button")
    toggleButton.classList.add("menu-toggle")
    toggleButton.innerHTML = '<i class="fas fa-bars"></i>'

    // Insert before the nav links
    container.insertBefore(toggleButton, container.firstChild)

    // Add toggle functionality
    toggleButton.addEventListener("click", () => {
      nav.classList.toggle("menu-open")
    })
  }

  // Only create mobile menu if screen is small
  if (window.innerWidth < 768) {
    createMobileMenu()
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768 && !document.querySelector(".menu-toggle")) {
      createMobileMenu()
    }
  })

  // Program cards hover effect
  const programCards = document.querySelectorAll(".program-card")

  programCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const overlay = card.querySelector(".card-overlay")
      overlay.style.background = "rgba(0, 153, 204, 0.8)"
    })

    card.addEventListener("mouseleave", () => {
      const overlay = card.querySelector(".card-overlay")
      overlay.style.background = "rgba(0, 0, 0, 0.7)"
    })
  })
})

