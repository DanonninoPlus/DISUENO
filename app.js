// app.js - Versión optimizada para móvil
(function() {
  'use strict';

  // --- Smooth scroll con corrección para header fijo ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        // Calcular offset del header (80px)
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Resaltar enlace activo (optimizado con debounce) ---
  const sections = document.querySelectorAll('section[id]');
  
  // Solo seleccionar enlaces que realmente existen en la navegación visible
  const navLinks = document.querySelectorAll('.hidden.md\\:flex a, .md\\:hidden a');
  
  if (sections.length && navLinks.length) {
    // Función con debounce para mejorar rendimiento
    let scrollTimeout;
    
    function updateActiveLink() {
      let current = '';
      const scrollPosition = window.scrollY + 120; // Ajuste para header
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-on-surface-variant');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.remove('text-on-surface-variant');
          link.classList.add('text-primary');
        }
      });
    }
    
    window.addEventListener('scroll', function() {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = requestAnimationFrame(updateActiveLink);
    });
    
    // Ejecutar una vez al cargar
    updateActiveLink();
  }

  // --- Menú móvil (si lo agregas en el futuro) ---
  const menuToggle = document.querySelector('.md\\:hidden .material-symbols-outlined');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      // Aquí puedes agregar la funcionalidad del menú móvil
      console.log('Menú móvil clickeado');
    });
  }

  // --- Detectar si es dispositivo móvil y optimizar ---
  function isMobile() {
    return window.innerWidth < 768;
  }

  // Desactivar efectos pesados en móvil
  if (isMobile()) {
    // Reducir la calidad de los blur effects (ya se maneja con CSS)
    document.documentElement.classList.add('is-mobile');
  }

  // --- Reaccionar a cambios de tamaño ---
  let resizeTimeout;
  window.addEventListener('resize', function() {
    if (resizeTimeout) {
      cancelAnimationFrame(resizeTimeout);
    }
    resizeTimeout = requestAnimationFrame(function() {
      if (isMobile()) {
        document.documentElement.classList.add('is-mobile');
      } else {
        document.documentElement.classList.remove('is-mobile');
      }
    });
  });

  console.log('✅ DISUEÑO - Portafolio cargado correctamente');
})();
