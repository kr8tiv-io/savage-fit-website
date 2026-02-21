// ========================================
// SAVAGE FIT - AWARD-WINNING INTERACTIONS
// Built by Friday @ KR8TIV AI
// ========================================

// ========================================
// CUSTOM CURSOR
// ========================================

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor following with lerp
function animateCursor() {
    // Lerp for smooth following
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .btn, .magnetic');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
    });
});

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================

const magneticElements = document.querySelectorAll('.magnetic');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================

const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================

const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================================
// PARALLAX EFFECT ON HERO
// ========================================

const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// Using IntersectionObserver for performance
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, stop observing (animation only plays once)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all reveal elements
const revealElements = document.querySelectorAll('.reveal-text, .reveal-fade, .reveal-slide, .reveal-scale');
revealElements.forEach(el => observer.observe(el));

// ========================================
// FAQ ACCORDION
// ========================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other FAQs
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current FAQ
        item.classList.toggle('active');
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId) return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = nav.offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// LEAD MAGNET FORM HANDLING
// ========================================

const leadForm = document.getElementById('leadForm');

if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(leadForm);
        const name = formData.get('name');
        const email = formData.get('email');
        
        // This would normally send to your email service provider
        // For now, just show a success message
        alert(`Thank you ${name}! Check your email (${email}) for your FREE 7-Day Savage Starter Plan. 💪`);
        
        leadForm.reset();
        
        // In production, you'd integrate with:
        // - ConvertKit
        // - Mailchimp
        // - ActiveCampaign
        // - Or your email platform of choice
    });
}

// ========================================
// STAGGER ANIMATIONS FOR LISTS
// ========================================

// Add stagger delays to elements that appear together
const addStaggerDelay = (selector, baseDelay = 0.1) => {
    document.querySelectorAll(selector).forEach((el, index) => {
        el.style.transitionDelay = `${index * baseDelay}s`;
        el.style.animationDelay = `${index * baseDelay}s`;
    });
};

addStaggerDelay('.stat-item', 0.1);
addStaggerDelay('.problem-item', 0.1);
addStaggerDelay('.benefit-card', 0.15);
addStaggerDelay('.testimonial-card', 0.1);
addStaggerDelay('.faq-item', 0.05);

// ========================================
// LAZY LOAD IMAGES (Performance)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    // Animate hero elements on page load
    setTimeout(() => {
        document.querySelector('.hero-title')?.classList.add('visible');
    }, 200);
    
    setTimeout(() => {
        document.querySelector('.hero-subtitle')?.classList.add('visible');
    }, 400);
    
    setTimeout(() => {
        document.querySelectorAll('.hero-ctas').forEach(el => el.classList.add('visible'));
    }, 600);
    
    setTimeout(() => {
        document.querySelectorAll('.trust-badges').forEach(el => el.classList.add('visible'));
    }, 800);
});

// ========================================
// PREFERS REDUCED MOTION
// Respect user's accessibility preferences
// ========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable all animations
    document.documentElement.style.setProperty('--transition-smooth', 'none');
    document.documentElement.style.setProperty('--transition-bounce', 'none');
    
    // Remove animation classes
    revealElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}

// ========================================
// CONSOLE EASTER EGG
// ========================================

console.log('%c🔥 SAVAGE FIT 🔥', 'color: #FF6D99; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with 💪 by Friday @ KR8TIV AI', 'color: #666; font-size: 14px;');
console.log('%cReady to become savage? Join us: wethesavage.com', 'color: #111; font-size: 12px;');

// ========================================
// PERFORMANCE MONITORING (Dev Mode)
// ========================================

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Log page load performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Performance:');
            console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);
            console.log(`Page Load Complete: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        }, 0);
    });
}

// ========================================
// EXPOSE API FOR EXTERNAL INTEGRATIONS
// ========================================

window.SavageFit = {
    version: '1.0.0',
    openLeadMagnet: () => {
        document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
    },
    openSociety: () => {
        document.getElementById('society')?.scrollIntoView({ behavior: 'smooth' });
    },
    openCoaching: () => {
        document.getElementById('coaching')?.scrollIntoView({ behavior: 'smooth' });
    }
};

console.log('Savage Fit website loaded. Call SavageFit.openLeadMagnet() to jump to lead form.');
