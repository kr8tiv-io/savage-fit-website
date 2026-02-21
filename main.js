// SAVAGE FIT V3 - GSAP ANIMATIONS

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initFAQ();
    initSmoothScroll();
});

function initAnimations() {
    // Hero headline reveal (character by character)
    const heroWords = document.querySelectorAll('.hero-headline .word');
    heroWords.forEach((word, index) => {
        gsap.from(word, {
            opacity: 0,
            y: 100,
            rotateX: -90,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)"
        });
    });

    // Hero content fade in
    gsap.from('.hero-tagline', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from('.hero-text', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out"
    });

    gsap.from('.hero-right .cta-btn', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: "power3.out"
    });

    // Parallax effect on hero image
    gsap.to('.hero-bg img', {
        y: -200,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Team cards stagger
    gsap.from('.team-card', {
        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Feature cards reveal
    gsap.from('.feature-card', {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.feature-cards',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });

    // Lifestyle break parallax
    gsap.to('.lifestyle-break img', {
        y: -100,
        ease: "none",
        scrollTrigger: {
            trigger: '.lifestyle-break',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Lifestyle overlay text reveal
    gsap.from('.lifestyle-overlay h2', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.lifestyle-break',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });

    // Bento cards stagger
    gsap.from('.bento-card', {
        opacity: 0,
        y: 80,
        stagger: {
            amount: 0.6,
            from: "start"
        },
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // FAQ items reveal
    gsap.from('.faq-item', {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });

    // Testimonial cards scroll
    const testimonialsScroll = document.querySelector('.testimonials-scroll');
    if (testimonialsScroll) {
        gsap.from('.testimonial-card', {
            opacity: 0,
            x: 100,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.testimonials-scroll',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Newsletter section reveal
    gsap.from('.newsletter-content h2', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.newsletter',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.from('.newsletter-form', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.newsletter',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Section headers decorative text parallax
    gsap.utils.toArray('.decorative-text').forEach(text => {
        gsap.to(text, {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: text,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    // Hover effects for buttons
    document.querySelectorAll('.cta-btn, .cta-btn-pink').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn.querySelector('.cta-arrow'), {
                x: 5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn.querySelector('.cta-arrow'), {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    gsap.to(otherItem.querySelector('.faq-answer'), {
                        height: 0,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                gsap.to(answer, {
                    height: 0,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            } else {
                item.classList.add('active');
                gsap.fromTo(answer, 
                    { height: 0 },
                    { 
                        height: "auto",
                        duration: 0.4,
                        ease: "power2.out"
                    }
                );
            }
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 100
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
}

// Auto-scroll testimonials
function autoScrollTestimonials() {
    const container = document.querySelector('.testimonials-scroll');
    if (!container) return;
    
    let scrollAmount = 0;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    setInterval(() => {
        scrollAmount += 1;
        if (scrollAmount > maxScroll) {
            scrollAmount = 0;
        }
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 30);
}

// Newsletter form handling
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing!');
    e.target.reset();
});

// Mobile menu (placeholder for future implementation)
document.querySelector('.menu-btn')?.addEventListener('click', () => {
    alert('Mobile menu coming soon!');
});
