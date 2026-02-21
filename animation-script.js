// Savage Fit V5.1 - Complete Interactive Restoration
// GSAP + Vanilla JS - Zero Framer Dependencies

(function() {
  'use strict';

  // ========================================
  // 1. LENIS SMOOTH SCROLL
  // ========================================
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ========================================
  // 2. GSAP SCROLLTRIGGER SETUP
  // ========================================
  gsap.registerPlugin(ScrollTrigger);

  // Update ScrollTrigger on Lenis scroll
  lenis.on('scroll', ScrollTrigger.update);

  // ========================================
  // 3. ANIMATE HIDDEN ELEMENTS (opacity:0)
  // ========================================
  function animateHiddenElements() {
    // Find ALL elements with inline opacity:0
    const hiddenElements = document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]');
    
    hiddenElements.forEach(el => {
      const style = el.getAttribute('style');
      if (!style || !style.includes('opacity')) return;

      // Parse transform to determine animation direction
      let fromProps = { opacity: 0 };
      let toProps = { opacity: 1, duration: 0.8, ease: "power2.out" };

      if (style.includes('translateX(-')) {
        fromProps.x = -80;
        toProps.x = 0;
      } else if (style.includes('translateX(')) {
        fromProps.x = 80;
        toProps.x = 0;
      }

      if (style.includes('translateY(-')) {
        fromProps.y = -80;
        toProps.y = 0;
      } else if (style.includes('translateY(')) {
        fromProps.y = 80;
        toProps.y = 0;
      }

      gsap.fromTo(el, fromProps, {
        ...toProps,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }

  // ========================================
  // 4. NAVIGATION MOBILE MENU
  // ========================================
  function initMobileMenu() {
    // Find MENU button (search for text "MENU" in the nav)
    const nav = document.querySelector('nav, header');
    if (!nav) return;

    const menuButtons = Array.from(nav.querySelectorAll('a, button, div[data-highlight]')).filter(el => 
      el.textContent.trim().toUpperCase() === 'MENU'
    );

    const menuBtn = menuButtons[0];
    if (!menuBtn) return;

    // Create overlay menu
    const overlay = document.createElement('div');
    overlay.id = 'mobile-menu-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100vh;
      background: rgba(17, 17, 17, 0.98);
      z-index: 9999;
      transition: right 0.4s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: none;
      border: none;
      color: white;
      font-size: 3rem;
      cursor: pointer;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const links = [
      { text: 'Training', href: '#programs' },
      { text: 'Subscription', href: '#prices' },
      { text: 'Challenges', href: '#prices' },
      { text: 'Products', href: '#products' },
      { text: 'Blog', href: '#blog' },
      { text: 'Contact', href: '#contact-anchor' }
    ];

    links.forEach(link => {
      const a = document.createElement('a');
      a.textContent = link.text;
      a.href = link.href;
      a.style.cssText = `
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        font-family: "Manrope", sans-serif;
      `;
      a.onclick = (e) => {
        e.preventDefault();
        overlay.style.right = '-100%';
        const target = document.querySelector(link.href);
        if (target) lenis.scrollTo(target);
      };
      overlay.appendChild(a);
    });

    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.style.right = '0';
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.right = '-100%';
    });
  }

  // ========================================
  // 5. FAQ ACCORDION
  // ========================================
  function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.framer-ozPhw');
    
    faqItems.forEach((item, index) => {
      const header = item.querySelector('.framer-1orewmd');
      const description = item.querySelector('.framer-qbh8vt');
      const arrow = item.querySelector('.framer-1f2659h-container');
      
      if (!header || !description) return;

      // Close all except first
      if (index !== 0) {
        description.style.height = '0';
        description.style.overflow = 'hidden';
        description.style.opacity = '0';
        if (arrow) arrow.style.transform = 'none';
      } else {
        description.style.height = 'auto';
        description.style.overflow = 'visible';
        description.style.opacity = '1';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
      }

      header.style.cursor = 'pointer';
      
      header.addEventListener('click', () => {
        const isOpen = description.style.height !== '0px' && description.style.height !== '0';
        
        // Close all
        faqItems.forEach((otherItem) => {
          const otherDesc = otherItem.querySelector('.framer-qbh8vt');
          const otherArrow = otherItem.querySelector('.framer-1f2659h-container');
          if (otherDesc) {
            otherDesc.style.height = '0';
            otherDesc.style.overflow = 'hidden';
            otherDesc.style.opacity = '0';
          }
          if (otherArrow) otherArrow.style.transform = 'none';
        });

        // Toggle current
        if (!isOpen) {
          description.style.height = 'auto';
          description.style.overflow = 'visible';
          description.style.opacity = '1';
          if (arrow) arrow.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  // ========================================
  // 6. BEFORE/AFTER CAROUSEL
  // ========================================
  function initCarousel() {
    const carouselContainer = document.querySelector('.framer-12nmrnn-container');
    if (!carouselContainer) return;

    const images = [
      'assets/yvMdV6P1vYmaUr4sC6wAFjnCTMk.png',
      'assets/Pm2qKYbG0YTcPJgEuv4UuiWLM.png',
      'assets/qdUuLPjffld3GIvEpGkBBO2ZOQ.png'
    ];

    const imgElement = carouselContainer.querySelector('img[src*="yvMdV6P1v"]');
    if (!imgElement) return;

    const leftBtn = carouselContainer.querySelector('button:nth-of-type(1)');
    const rightBtn = carouselContainer.querySelector('button:nth-of-type(2)');
    const dots = carouselContainer.querySelectorAll('[style*="cursor:pointer"]');

    let currentIndex = 0;

    function updateCarousel(index) {
      currentIndex = index;
      imgElement.src = images[index];
      
      // Update dots
      dots.forEach((dot, i) => {
        const innerDiv = dot.querySelector('div');
        if (innerDiv) {
          if (i === index) {
            innerDiv.style.width = '56px';
            innerDiv.style.backgroundColor = 'white';
          } else {
            innerDiv.style.width = '8px';
            innerDiv.style.backgroundColor = 'rgba(255,255,255,0.5)';
          }
        }
      });
    }

    if (leftBtn) leftBtn.addEventListener('click', () => {
      updateCarousel((currentIndex - 1 + images.length) % images.length);
    });

    if (rightBtn) rightBtn.addEventListener('click', () => {
      updateCarousel((currentIndex + 1) % images.length);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateCarousel(i));
    });

    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    carouselContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        updateCarousel((currentIndex + 1) % images.length);
      } else if (touchEndX - touchStartX > 50) {
        updateCarousel((currentIndex - 1 + images.length) % images.length);
      }
    });
  }

  // ========================================
  // 7. TEAM CARD FLIPS
  // ========================================
  function initTeamCardFlips() {
    const cards = document.querySelectorAll('[name*="Card"]');
    
    cards.forEach(card => {
      const frontFace = card.querySelector('.framer-fj1sf');
      const backFace = card.querySelector('.framer-ecuf62');
      const moreBtn = card.querySelector('.framer-tnb8h');
      const closeBtn = card.querySelector('.framer-nco7lt');

      if (!frontFace || !backFace || !moreBtn || !closeBtn) return;

      // Setup 3D flip
      card.style.perspective = '1200px';
      card.style.transformStyle = 'preserve-3d';
      
      frontFace.style.transition = 'transform 0.6s ease';
      backFace.style.transition = 'transform 0.6s ease';
      backFace.style.transform = 'rotateY(180deg)';
      backFace.style.position = 'absolute';
      backFace.style.top = '0';
      backFace.style.left = '0';
      backFace.style.width = '100%';
      backFace.style.height = '100%';
      backFace.style.backfaceVisibility = 'hidden';
      frontFace.style.backfaceVisibility = 'hidden';

      let isFlipped = false;

      moreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isFlipped) {
          frontFace.style.transform = 'rotateY(-180deg)';
          backFace.style.transform = 'rotateY(0deg)';
          isFlipped = true;
        }
      });

      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isFlipped) {
          frontFace.style.transform = 'rotateY(0deg)';
          backFace.style.transform = 'rotateY(180deg)';
          isFlipped = false;
        }
      });
    });
  }

  // ========================================
  // 8. TESTIMONIALS MARQUEE
  // ========================================
  function initTestimonialsMarquee() {
    const marqueeContainer = document.querySelector('.framer-xp3cj-container section');
    if (!marqueeContainer) return;

    const ul = marqueeContainer.querySelector('ul');
    if (!ul) return;

    let scrollPosition = 0;
    let isPaused = false;
    const scrollSpeed = 1;

    function animate() {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        ul.style.transform = `translateX(-${scrollPosition}px)`;

        // Reset when halfway through (infinite loop)
        const halfWidth = ul.scrollWidth / 2;
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0;
        }
      }
      requestAnimationFrame(animate);
    }

    animate();

    // Pause on hover
    marqueeContainer.addEventListener('mouseenter', () => { isPaused = true; });
    marqueeContainer.addEventListener('mouseleave', () => { isPaused = false; });
  }

  // ========================================
  // 9. NUMBER COUNTER ANIMATION
  // ========================================
  function initNumberCounters() {
    const counterContainers = [
      { selector: '.framer-o1fkqq', target: 10 },
      { selector: '.framer-ew8f3o', target: 1000 },
      { selector: '.framer-15zkddz', target: 0 }
    ];

    counterContainers.forEach(({ selector, target }) => {
      const container = document.querySelector(selector);
      if (!container) return;

      const textElement = container.querySelector('p[style*="color"]');
      if (!textElement) return;

      const suffix = textElement.textContent.includes('+') ? '+' : 
                     textElement.textContent.includes('K') ? 'K' : 
                     textElement.textContent.includes('M+') ? 'M+' : '';

      gsap.fromTo(container, 
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            onEnter: () => {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                  let displayVal = Math.round(obj.val);
                  if (suffix === 'K') {
                    textElement.textContent = (displayVal / 1000).toFixed(1) + 'K';
                  } else {
                    textElement.textContent = displayVal + suffix;
                  }
                }
              });
            }
          }
        }
      );
    });
  }

  // ========================================
  // INITIALIZE ALL
  // ========================================
  function init() {
    animateHiddenElements();
    initMobileMenu();
    initFAQAccordion();
    initCarousel();
    initTeamCardFlips();
    initTestimonialsMarquee();
    initNumberCounters();

    console.log('✅ Savage Fit V5.1 - All animations loaded');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
