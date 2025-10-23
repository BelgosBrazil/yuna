// ===== LANDING PAGE MÉDICOS - JAVASCRIPT =====

// ===== MENU MOBILE =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// ===== HEADER SCROLL =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        header.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
    }

    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
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

// ===== SCROLL CTA =====
const scrollCta = document.querySelector('.scroll-cta');
if (scrollCta) {
    scrollCta.addEventListener('click', () => {
        const nextSection = document.querySelector('#sobre');
        if (nextSection) {
            const headerOffset = 80;
            const elementPosition = nextSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// ===== ANIMAÇÃO ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Adicionar classe para animação em elementos específicos
const animateElements = document.querySelectorAll('.stat-card, .benefit-card');
animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// ===== VIDEO PLACEHOLDER =====
const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        console.log('Vídeo clicado - adicione aqui o código para reproduzir o vídeo');
    });
}

// ===== CARROSSEL MODERNO DE IMAGENS =====
const carouselTrack = document.querySelector('.carousel-track');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentSlide = 0;
let slidesToShow = 3; // Mostra 3 imagens por vez
let autoplayInterval;

// Detectar largura da tela para responsividade
function updateSlidesToShow() {
    if (window.innerWidth <= 768) {
        slidesToShow = 1;
    } else if (window.innerWidth <= 1024) {
        slidesToShow = 2;
    } else {
        slidesToShow = 3;
    }
}

// Calcular o número máximo de slides
function getMaxSlides() {
    return Math.max(0, carouselImages.length - slidesToShow);
}

// Atualizar posição do carrossel
function updateCarousel() {
    const slideWidth = carouselImages[0].offsetWidth;
    const gap = 24; // 1.5rem = 24px
    const offset = currentSlide * (slideWidth + gap);
    
    carouselTrack.style.transform = `translateX(-${offset}px)`;
    
    // Atualizar estado dos botões
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide >= getMaxSlides();
}

// Navegar para o próximo slide
function nextSlide() {
    if (currentSlide < getMaxSlides()) {
        currentSlide++;
        updateCarousel();
    }
}

// Navegar para o slide anterior
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}

// Event listeners para os botões
if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

// Autoplay
function startCarouselAutoplay() {
    autoplayInterval = setInterval(() => {
        if (currentSlide >= getMaxSlides()) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateCarousel();
    }, 3000);
}

function stopCarouselAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar autoplay quando a seção estiver visível
const estruturaSection = document.querySelector('.estrutura-section');
if (estruturaSection && carouselTrack) {
    updateSlidesToShow();
    updateCarousel();
    
    const estruturaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCarouselAutoplay();
            } else {
                stopCarouselAutoplay();
            }
        });
    }, { threshold: 0.3 });
    
    estruturaObserver.observe(estruturaSection);
}

// Atualizar ao redimensionar a janela
window.addEventListener('resize', debounce(() => {
    updateSlidesToShow();
    currentSlide = Math.min(currentSlide, getMaxSlides());
    updateCarousel();
}, 250));

// ===== BOTÃO VOLTAR AO TOPO =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #002855;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// ===== DEBOUNCE PARA EVENTOS DE SCROLL E RESIZE =====
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce a eventos pesados
const debouncedScroll = debounce(() => {
    // Código de scroll otimizado
}, 10);

const debouncedResize = debounce(() => {
    // Código de resize otimizado
}, 250);

window.addEventListener('scroll', debouncedScroll);
window.addEventListener('resize', debouncedResize);

// ===== ANALYTICS =====
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Rastrear cliques em CTAs
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = btn.textContent.trim();
        trackEvent('CTA', 'click', buttonText);
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🏥 Yuna - Landing Page para Médicos', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com ❤️', 'color: #10b981; font-size: 14px;');

