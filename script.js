// Script para el toggle del navbar en móviles
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("change", function () {
  if (this.checked) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});

// Efecto de navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animación de elementos al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observar todos los elementos con la clase reveal-element
document.querySelectorAll('.reveal-element').forEach(el => {
  observer.observe(el);
});

// Efecto de typing para el título principal
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Inicializar efecto de typing cuando la página carga
window.addEventListener('load', function() {
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const originalText = typingElement.textContent;
    typeWriter(typingElement, originalText, 150);
  }
});

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Cerrar el menú móvil si está abierto
      if (menuToggle.checked) {
        menuToggle.checked = false;
        menu.classList.remove('active');
      }
    }
  });
});

// Efecto parallax suave en la sección home
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const homeImage = document.querySelector('.home-image img');
  
  if (homeImage && scrolled < window.innerHeight) {
    homeImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Animación de hover para las tarjetas de servicios
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Efecto de contador para números (si quieres agregar estadísticas)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  
  updateCounter();
}

// Efecto de partículas flotantes (opcional)
function createFloatingParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  particlesContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  
  document.body.appendChild(particlesContainer);
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(107, 114, 128, 0.3);
      border-radius: 50%;
      animation: float ${Math.random() * 10 + 10}s linear infinite;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;
    
    particlesContainer.appendChild(particle);
  }
}

// CSS para la animación de partículas
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Inicializar partículas (descomenta si quieres el efecto)
// createFloatingParticles();

// Efecto de cursor personalizado (opcional)
function createCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: rgba(107, 114, 128, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
  `;
  
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });
  
  // Efecto hover en elementos interactivos
  document.querySelectorAll('a, button, .service-card, .about-card, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.background = 'rgba(107, 114, 128, 0.8)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'rgba(107, 114, 128, 0.5)';
    });
  });
}

// Inicializar cursor personalizado en dispositivos no táctiles
if (!('ontouchstart' in window)) {
  // createCustomCursor(); // Descomenta si quieres el cursor personalizado
}

// Efecto de loading para la página
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Manejo del botón de WhatsApp con animación
const whatsappBtn = document.getElementById('whatsapp-btn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 150);
  });
}

// Efecto de vibración en dispositivos móviles al tocar elementos importantes
function addHapticFeedback() {
  if ('vibrate' in navigator) {
    document.querySelectorAll('.btn-primary, .whatsapp-button').forEach(el => {
      el.addEventListener('touchstart', () => {
        navigator.vibrate(50);
      });
    });
  }
}

addHapticFeedback();