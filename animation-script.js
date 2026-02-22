// Savage Fit V5.4 - Clean Interactive Restoration
// GSAP + Vanilla JS

(function() {
  'use strict';

  // ========================================
  // 1. LENIS SMOOTH SCROLL
  // ========================================
  let lenis;
  try {
    lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  } catch(e) { console.warn('Lenis not loaded'); }

  // ========================================
  // 2. GSAP SETUP
  // ========================================
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  if (lenis) lenis.on('scroll', ScrollTrigger.update);

  // ========================================
  // 3. FIX HIDDEN ELEMENTS - Reveal opacity:0
  // ========================================
  document.querySelectorAll('[style]').forEach(el => {
    const style = el.getAttribute('style');
    if (!style || !style.includes('opacity')) return;
    
    // Check if opacity is 0 (but not opacity: 1 or 0.5 etc)
    const opMatch = style.match(/opacity:\s*([\d.]+)/);
    if (!opMatch || parseFloat(opMatch[1]) !== 0) return;
    
    // Skip tiny elements (decorative dots, separators)
    if (el.offsetWidth < 5 && el.offsetHeight < 5) return;
    
    // Animate in with ScrollTrigger
    gsap.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        once: true
      }
    });
  });

  // ========================================
  // 4. NAVIGATION MENU
  // ========================================
  (function initMenu() {
    const menuBtn = document.querySelector('[data-framer-name="Menu"][data-highlight="true"]');
    if (!menuBtn) return;

    // Detect base path for GitHub Pages
    const basePath = window.location.pathname.includes('/savage-fit-website') 
      ? '/savage-fit-website/' : '/';

    // Create fullscreen overlay menu
    const overlay = document.createElement('div');
    overlay.id = 'savage-menu';
    overlay.innerHTML = `
      <style>
        #savage-menu {
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: rgba(17, 17, 17, 0.96); z-index: 99999;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 1.5rem; opacity: 0; pointer-events: none;
          transition: opacity 0.35s ease; backdrop-filter: blur(20px);
        }
        #savage-menu.open { opacity: 1; pointer-events: all; }
        #savage-menu a {
          color: white; font-size: 1.6rem; font-weight: 700; text-decoration: none;
          font-family: "Manrope", sans-serif; transition: color 0.2s;
          opacity: 0; transform: translateY(20px);
        }
        #savage-menu a:hover { color: #ff6d99; }
        #savage-menu .close-btn {
          position: absolute; top: 2rem; right: 2rem; background: none; border: none;
          color: white; font-size: 2.5rem; cursor: pointer; width: 50px; height: 50px;
          display: flex; align-items: center; justify-content: center;
        }
        #savage-menu .close-btn:hover { color: #ff6d99; }
      </style>
      <button class="close-btn">&times;</button>
      <a href="${basePath}">Home</a>
      <a href="${basePath}training/">1-1 Training</a>
      <a href="${basePath}subscription/">Subscription</a>
      <a href="${basePath}challenges/">Challenges</a>
      <a href="${basePath}spring-aesthetic/">Spring Aesthetic</a>
      <a href="${basePath}products/">Products</a>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('.close-btn');
    const links = overlay.querySelectorAll('a');

    function openMenu() {
      overlay.classList.add('open');
      links.forEach((link, i) => {
        gsap.to(link, { opacity: 1, y: 0, duration: 0.4, delay: 0.1 + i * 0.06, ease: 'power2.out' });
      });
    }

    function closeMenu() {
      overlay.classList.remove('open');
      links.forEach(link => { link.style.opacity = '0'; link.style.transform = 'translateY(20px)'; });
    }

    menuBtn.style.cursor = 'pointer';
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openMenu();
    });
    
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeMenu(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  })();

  // ========================================
  // 5. FAQ ACCORDION
  // ========================================
  (function initFAQ() {
    // Framer FAQ structure:
    // framer-ozPhw (data-framer-name="Open"/"Closed") = accordion item variant
    //   framer-dca6r5 (Item Container) = actual content
    //     Header Container = clickable header
    //     Description (framer-qbh8vt) = answer to toggle
    //   framer-qdhte4 (Item Container Placeholder) = duplicate, hide it

    // Hide all placeholder duplicates
    document.querySelectorAll('.framer-qdhte4').forEach(el => {
      el.style.display = 'none';
    });

    // Fix Framer's constrained heights — the accordion wrapper and item containers
    // have fixed heights set by Framer expecting JS to animate them
    const accordionWrapper = document.querySelector('.framer-rYRFU');
    if (accordionWrapper) accordionWrapper.style.height = 'auto';
    
    // Fix Framer FAQ layout: Item Containers are position:absolute (stacked) — need to be static
    // Also force all containers to proper height
    const faqStyle = document.createElement('style');
    faqStyle.textContent = `
      .framer-ozPhw .framer-dca6r5 {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
      }
      .framer-ozPhw {
        height: auto !important;
        min-height: auto !important;
      }
      .framer-rYRFU {
        height: auto !important;
      }
      .framer-ag6qel-container {
        height: auto !important;
      }
      /* Fix each item's container wrapper */
      [class*="-container"]:has(> .framer-ozPhw) {
        height: auto !important;
      }
    `;
    document.head.appendChild(faqStyle);

    // Find all actual Item Containers
    const itemContainers = document.querySelectorAll('.framer-dca6r5');
    if (!itemContainers.length) return;

    itemContainers.forEach(container => {
      const header = container.querySelector('[data-framer-name="Header Container"]');
      const desc = container.querySelector('[data-framer-name="Description"]');
      if (!header || !desc) return;

      // Check if parent variant is "Open" or "Closed"
      const variant = container.closest('[data-framer-name="Open"], [data-framer-name="Closed"]');
      const isOpen = variant?.getAttribute('data-framer-name') === 'Open';

      // Set initial state
      desc.style.overflow = 'hidden';
      desc.style.transition = 'max-height 0.4s ease, opacity 0.3s ease';
      
      if (!isOpen) {
        desc.style.maxHeight = '0';
        desc.style.opacity = '0';
      } else {
        desc.style.maxHeight = desc.scrollHeight + 'px';
        desc.style.opacity = '1';
      }

      // Find arrow icon container
      const arrowContainer = header.querySelector('[class*="framer-1f2659h-container"]');
      if (arrowContainer) {
        arrowContainer.style.transition = 'transform 0.3s ease';
      }

      header.style.cursor = 'pointer';
      let open = isOpen;

      header.addEventListener('click', () => {
        open = !open;
        if (open) {
          desc.style.maxHeight = desc.scrollHeight + 'px';
          desc.style.opacity = '1';
          if (arrowContainer) arrowContainer.style.transform = 'rotate(180deg)';
        } else {
          desc.style.maxHeight = '0';
          desc.style.opacity = '0';
          if (arrowContainer) arrowContainer.style.transform = 'rotate(0deg)';
        }
      });
    });
  })();

  // ========================================
  // 6. NUMBER COUNTER ANIMATION
  // ========================================
  (function initCounters() {
    // Find elements that contain stats numbers
    document.querySelectorAll('h2, h3, [class*="framer-text"]').forEach(el => {
      const text = el.textContent.trim();
      const match = text.match(/^([\d,.]+)([KkMm+]*)$/);
      if (!match) return;
      
      const target = parseFloat(match[1].replace(/,/g, ''));
      const suffix = match[2];
      if (target <= 0 || isNaN(target)) return;

      const counter = { val: 0 };
      gsap.to(counter, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => {
          let display = counter.val;
          if (target >= 100) display = Math.round(display);
          else display = Math.round(display * 10) / 10;
          el.textContent = display + suffix;
        }
      });
    });
  })();

  // ========================================
  // 7. SECTION REVEAL ANIMATIONS
  // ========================================
  (function initReveals() {
    // Animate major sections as they enter viewport
    const sections = document.querySelectorAll('[class*="framer-GgWI8"] > [class*="framer-"]');
    sections.forEach(section => {
      if (section.tagName === 'NAV' || section.tagName === 'STYLE') return;
      gsap.from(section, {
        y: 40,
        opacity: 0.6,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true }
      });
    });
  })();

  // ========================================
  // 8. HIDE FRAMER SSR NAV OPEN VARIANT
  // ========================================
  // The Framer nav renders both "closed" (pill button) and "open" (links panel) variants.
  // Without Framer JS, both show. Hide the open nav links panel (class framer-2678bb).
  (function cleanFramerSSR() {
    // Hide the open nav links panel that appears on the right side
    const style = document.createElement('style');
    style.textContent = `
      .framer-2678bb { display: none !important; }
      /* Constrain the nav backdrop to the pill button size, not the expanded "open" size */
      nav.framer-5OMLU .framer-10pf16c,
      nav.framer-5OMLU .framer-65flkt {
        width: 100% !important;
        height: 100% !important;
        max-width: 126px !important;
        max-height: 58px !important;
      }
      /* Force the nav component to not expand beyond pill size */
      nav.framer-5OMLU {
        overflow: hidden !important;
        max-width: 140px !important;
        max-height: 64px !important;
      }
    `;
    document.head.appendChild(style);
  })();

  console.log('Savage Fit V5.4 initialized');
})();
