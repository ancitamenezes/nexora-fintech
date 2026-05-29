// ==========================================================================
// NEXORA FINANCE — INTERACTIONS & ANIMATIONS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. STICKY PREMIUM NAVBAR (SMART HIDE & FROSTED GLASS) --- */
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Frosted glass effect
        if (currentScrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Smart hide/show
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.classList.add('hidden'); // Scrolling down
        } else {
            navbar.classList.remove('hidden'); // Scrolling up
        }
        
        lastScrollY = currentScrollY;
    });


    /* --- 2. SCROLL-TRIGGERED STAGGER ANIMATIONS --- */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const staggerObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the container itself is a stagger child
                if (entry.target.classList.contains('stagger-child')) {
                    entry.target.classList.add('visible');
                    // Check if it contains nested stagger children (e.g. hero content)
                    const children = entry.target.querySelectorAll('.stagger-child');
                    if (children.length > 0) {
                        children.forEach((child, i) => {
                            child.style.transitionDelay = `${i * 80}ms`;
                            child.classList.add('visible');
                        });
                    }
                }
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stagger-child').forEach(el => {
        staggerObserver.observe(el);
    });

    // Special observer for showcase window to trigger chart animation
    const showcaseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    
    const showcaseWindow = document.getElementById('showcase-window');
    if (showcaseWindow) showcaseObserver.observe(showcaseWindow);


    /* --- 3. COUNT UP ANIMATION --- */
    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };
    
    const formatCurrencyB = (val) => {
        return '$' + (val / 1000000000).toFixed(1) + 'B+';
    };

    const countUp = (element, target, duration = 1500, format = 'number') => {
        const start = performance.now();
        const update = (time) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            const currentVal = eased * target;
            
            if (format === 'currency') {
                element.textContent = formatCurrency(Math.floor(currentVal));
            } else if (format === 'currency-b') {
                element.textContent = formatCurrencyB(currentVal);
            } else if (format === 'percent') {
                element.textContent = currentVal.toFixed(2) + '%';
            } else if (format === 'number-k') {
                element.textContent = Math.floor(currentVal).toLocaleString() + '+';
            } else if (format === 'number-plus') {
                element.textContent = Math.floor(currentVal) + '+';
            } else {
                element.textContent = Math.floor(currentVal).toLocaleString();
            }
            
            if (progress < 1) requestAnimationFrame(update);
            else {
                // Ensure exact final value text format on complete
                if (format === 'currency') element.textContent = formatCurrency(target);
                if (format === 'percent') element.textContent = target + '%';
                if (format === 'number-k' || format === 'number-plus') element.textContent += '+'; // already handled above but safe
            }
        };
        requestAnimationFrame(update);
    };

    const countObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute('data-target'));
                const format = el.getAttribute('data-format');
                countUp(el, target, 2000, format);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.count-up').forEach(el => countObserver.observe(el));
    
    // Trigger hero revenue separately since it's above fold
    const heroRev = document.getElementById('hero-revenue');
    if (heroRev) {
        setTimeout(() => { countUp(heroRev, 2847392, 1500, 'currency'); }, 500);
    }


    /* --- 4. MAGNETIC BUTTONS --- */
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.03)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0) scale(1)';
            btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        btn.addEventListener('mouseenter', () => {
            btn.style.transition = 'none';
        });
    });


    /* --- 5. 3D DASHBOARD TILT (HERO) --- */
    const heroDashboard = document.getElementById('hero-dashboard');
    if (heroDashboard && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.addEventListener('mousemove', (e) => {
            const { innerWidth: w, innerHeight: h } = window;
            const x = (e.clientX / w - 0.5) * 16; // -8 to +8 degrees
            const y = (e.clientY / h - 0.5) * -10; // -5 to +5 degrees
            
            // Suspend the CSS animation float when interacting
            heroDashboard.style.animation = 'none';
            heroDashboard.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${y}deg)`;
        });
        
        document.addEventListener('mouseleave', () => {
            heroDashboard.style.animation = 'dash-float 6s ease-in-out infinite';
            heroDashboard.style.transform = '';
        });
    }


    /* --- 6. AI TYPEWRITER EFFECT --- */
    const aiText = "Revenue is tracking 23% above last quarter. Consider reinvesting surplus...";
    const typewriterEl = document.getElementById('typewriter-text');
    let aiIndex = 0;
    
    if (typewriterEl) {
        setTimeout(() => {
            const type = () => {
                if (aiIndex < aiText.length) {
                    typewriterEl.textContent += aiText.charAt(aiIndex);
                    aiIndex++;
                    setTimeout(type, 30);
                }
            };
            type();
        }, 1500);
    }


    /* --- 7. TABS FOR DASHBOARD SHOWCASE --- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // For a real app, this would switch content. Here it's just visual.
        });
    });


    /* --- 8. TESTIMONIAL CAROUSEL --- */
    const track = document.getElementById('testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dots .dot');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    if (track && cards.length > 0) {
        let currentIndex = 0;
        let autoplayInterval;

        const updateCarousel = () => {
            cards.forEach((card, index) => {
                card.classList.remove('featured');
                if (index === currentIndex) {
                    card.classList.add('featured');
                }
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            
            // Center the active card
            // Simplified centering logic based on card index for a 3-card layout
            let translateX = 0;
            if (currentIndex === 0) translateX = 370;
            if (currentIndex === 1) translateX = 0;
            if (currentIndex === 2) translateX = -370;
            
            if (window.innerWidth <= 768) {
                translateX = -currentIndex * 370; // Basic mobile sliding
            }
            
            track.style.transform = `translateX(${translateX}px)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateCarousel();
        };

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
                resetAutoplay();
            });
        });

        const startAutoplay = () => {
            autoplayInterval = setInterval(nextSlide, 4000);
        };
        const resetAutoplay = () => {
            clearInterval(autoplayInterval);
            startAutoplay();
        };

        // Initialize Center card (index 1 is middle)
        currentIndex = 1;
        updateCarousel();
        startAutoplay();
        
        // Pause on hover
        track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        track.addEventListener('mouseleave', startAutoplay);
    }


    /* --- 9. PRICING TOGGLE --- */
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyAmounts = document.querySelectorAll('.amount.monthly');
    const annualAmounts = document.querySelectorAll('.amount.annual');

    if (billingToggle) {
        billingToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                // Show annual
                monthlyAmounts.forEach(el => el.classList.add('hidden'));
                annualAmounts.forEach(el => el.classList.remove('hidden'));
            } else {
                // Show monthly
                monthlyAmounts.forEach(el => el.classList.remove('hidden'));
                annualAmounts.forEach(el => el.classList.add('hidden'));
            }
        });
    }

});
