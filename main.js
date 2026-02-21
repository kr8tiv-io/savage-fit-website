/* SAVAGE FIT V2 — Main JavaScript */
/* GSAP + ScrollTrigger + Three.js WebGL Background */

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  const speed = 0.15;
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;
  
  if (cursor) {
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
  }
  
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effects
document.querySelectorAll('a, button, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => cursor?.classList.add('cursor--hover'));
  el.addEventListener('mouseleave', () => cursor?.classList.remove('cursor--hover'));
});

// ===== MOBILE MENU =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ===== STICKY NAV =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

// ===== GSAP ANIMATIONS =====
// Only run if GSAP is loaded
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Hero title animation - character split
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.innerHTML = text.split('').map(char => 
      char === ' ' ? ' ' : `<span style="display:inline-block;">${char}</span>`
    ).join('');
    
    gsap.from('.hero h1 span', {
      opacity: 0,
      y: 100,
      rotationX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 80%',
      }
    });
  }
  
  // Hero subtitle fade in
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
  });
  
  // Hero CTA buttons
  gsap.from('.hero-cta .btn', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    delay: 0.8,
    ease: "power3.out"
  });
  
  // Stats counter animation
  const statCounters = document.querySelectorAll('.stat-item h3');
  statCounters.forEach(counter => {
    const text = counter.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    
    if (number) {
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        onEnter: () => {
          gsap.from(counter, {
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              counter.textContent = Math.floor(this.targets()[0].textContent) + (text.includes('+') ? '+' : '');
            }
          });
        },
        once: true
      });
    }
  });
  
  // Section title reveals
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
      }
    });
  });
  
  // Card stagger animations
  gsap.utils.toArray('.card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      }
    });
  });
  
  // Testimonial cards
  gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
      }
    });
  });
  
  // Parallax image effects
  gsap.utils.toArray('.card img').forEach(img => {
    gsap.to(img, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
  
  // Pricing cards
  gsap.utils.toArray('.pricing-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.9,
      y: 40,
      duration: 0.8,
      delay: i * 0.15,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      }
    });
  });
  
  // Magnetic button effect
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });
}

// ===== THREE.JS WEBGL BACKGROUND =====
// Only run if Three.js is loaded and canvas exists
if (typeof THREE !== 'undefined') {
  const canvas = document.getElementById('webgl-bg');
  
  if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create gradient mesh with brand colors
    const geometry = new THREE.PlaneGeometry(10, 10, 32, 32);
    
    // Vertex shader - animated wave
    const vertexShader = `
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        // Animated wave distortion
        float wave = sin(pos.x * 2.0 + uTime * 0.5) * 0.3;
        wave += sin(pos.y * 1.5 + uTime * 0.3) * 0.2;
        pos.z += wave;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;
    
    // Fragment shader - gradient with brand colors
    const fragmentShader = `
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        // Brand colors in vec3 RGB (0-1 range)
        vec3 pink = vec3(1.0, 0.427, 0.6);      // #FF6D99
        vec3 blue = vec3(0.0, 0.6, 1.0);         // #0099FF
        vec3 white = vec3(1.0, 1.0, 1.0);
        vec3 lightBg = vec3(0.957, 0.965, 0.980); // #F4F6FA
        
        // Animated gradient positions
        float angle = uTime * 0.1;
        vec2 center1 = vec2(0.5 + sin(angle) * 0.3, 0.5 + cos(angle) * 0.3);
        vec2 center2 = vec2(0.5 + sin(angle + 2.0) * 0.3, 0.5 + cos(angle + 2.0) * 0.3);
        vec2 center3 = vec2(0.5 + sin(angle + 4.0) * 0.2, 0.5 + cos(angle + 4.0) * 0.2);
        
        float dist1 = distance(vUv, center1);
        float dist2 = distance(vUv, center2);
        float dist3 = distance(vUv, center3);
        
        // Mix colors based on distance
        vec3 color = mix(white, pink, smoothstep(0.8, 0.0, dist1));
        color = mix(color, blue, smoothstep(0.8, 0.0, dist2));
        color = mix(color, lightBg, smoothstep(0.6, 0.0, dist3));
        
        // Add subtle noise
        float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
        color += noise * 0.02;
        
        gl_FragColor = vec4(color, 0.8);
      }
    `;
    
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: { value: 0 }
      },
      transparent: true
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Mouse interaction
    let mouseXNorm = 0;
    let mouseYNorm = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseXNorm = (e.clientX / window.innerWidth) * 2 - 1;
      mouseYNorm = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation loop
    const clock = new THREE.Clock();
    
    function animate() {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      
      // Subtle rotation based on mouse
      mesh.rotation.x = mouseYNorm * 0.1;
      mesh.rotation.y = mouseXNorm * 0.1;
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
    
    // Mobile fallback - simpler gradient
    if (window.innerWidth < 768) {
      canvas.style.opacity = '0.5';
    }
  }
}

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
