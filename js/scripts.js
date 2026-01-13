/*!
 * Blue Horizon Portfolio - Scripts
 * OST Consultancy BV
 */

(function() {
    'use strict';

    // ============================================
    // DOM Ready
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        initTypedJS();
        initNavbarScroll();
        initScrollSpy();
        initSmoothScroll();
        initScrollAnimations();
        initCertificationsToggle();
    });

    // ============================================
    // Typed.js - Hero Section Typing Effect
    // ============================================
    function initTypedJS() {
        const typedElement = document.getElementById('typed-output');
        
        if (typedElement && typeof Typed !== 'undefined') {
            new Typed('#typed-output', {
                strings: [
                    'JVM Expert',
                    'Cloud Architect',
                    'Scala Specialist',
                    'Kubernetes Certified',
                    'Solution Architect',
                    'Microservices Expert',
                    'Rust Enthusiast'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                startDelay: 1000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    function initNavbarScroll() {
        const navbar = document.getElementById('mainNav');
        
        if (!navbar) return;

        function updateNavbar() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Initial check
        updateNavbar();

        // Listen for scroll
        window.addEventListener('scroll', updateNavbar, { passive: true });
    }

    // ============================================
    // Scroll Spy - Active Navigation Link
    // ============================================
    function initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        if (sections.length === 0 || navLinks.length === 0) return;

        function updateActiveLink() {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        // Initial check
        updateActiveLink();

        // Listen for scroll
        window.addEventListener('scroll', updateActiveLink, { passive: true });
    }

    // ============================================
    // Smooth Scroll for Navigation Links
    // ============================================
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#" or empty
                if (href === '#' || href === '') return;

                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();

                    const navbar = document.getElementById('mainNav');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) {
                            bsCollapse.hide();
                        }
                    }

                    // Update URL hash without jumping
                    history.pushState(null, null, href);
                }
            });
        });
    }

    // ============================================
    // Scroll Animations (Intersection Observer)
    // ============================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-aos]');

        if (animatedElements.length === 0) return;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // If reduced motion is preferred, show all elements immediately
            animatedElements.forEach(function(el) {
                el.classList.add('aos-animate');
            });
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Add delay if specified
                    const delay = entry.target.getAttribute('data-aos-delay');
                    if (delay) {
                        setTimeout(function() {
                            entry.target.classList.add('aos-animate');
                        }, parseInt(delay));
                    } else {
                        entry.target.classList.add('aos-animate');
                    }
                    
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // ============================================
    // Certifications Toggle (View All)
    // ============================================
    function initCertificationsToggle() {
        const toggleBtn = document.getElementById('viewAllCerts');
        const allCerts = document.getElementById('allCertifications');

        if (!toggleBtn || !allCerts) return;

        toggleBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Collapse
                allCerts.hidden = true;
                this.setAttribute('aria-expanded', 'false');
                this.querySelector('span').textContent = 'View All Certifications';
            } else {
                // Expand
                allCerts.hidden = false;
                this.setAttribute('aria-expanded', 'true');
                this.querySelector('span').textContent = 'Show Less';
                
                // Animate the newly visible items
                const newItems = allCerts.querySelectorAll('.cert-item');
                newItems.forEach(function(item, index) {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    
                    setTimeout(function() {
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }
        });
    }

    // ============================================
    // Skill Bar Animation on Scroll
    // ============================================
    function initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');

        if (skillBars.length === 0) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0';
                    
                    setTimeout(function() {
                        bar.style.width = width;
                    }, 100);
                    
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(function(bar) {
            observer.observe(bar);
        });
    }

    // Initialize skill bars after DOM is ready
    document.addEventListener('DOMContentLoaded', initSkillBars);

})();
