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

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Fechar todos os itens
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Abrir o item clicado se não estava ativo
        if (!isActive) {
            item.classList.add('active');
        }
    });
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
const animateElements = document.querySelectorAll('.stat-card, .benefit-card, .diferencial-card, .servico-card, .depoimento-card, .faq-item');
animateElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// ===== VIDEO PLACEHOLDER =====
const videoPlaceholder = document.querySelector('.video-placeholder');

if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // Aqui você pode adicionar a lógica para abrir o vídeo real
        // Por exemplo, substituir o placeholder por um iframe com o vídeo
        console.log('Vídeo clicado - adicione aqui o código para reproduzir o vídeo');
        
        // Exemplo de como poderia funcionar:
        // const videoUrl = 'URL_DO_VIDEO';
        // videoPlaceholder.innerHTML = `
        //     <iframe 
        //         width="100%" 
        //         height="100%" 
        //         src="${videoUrl}" 
        //         frameborder="0" 
        //         allow="autoplay; encrypted-media" 
        //         allowfullscreen
        //     ></iframe>
        // `;
    });
}

// ===== FORMULÁRIO DE CONTATO (se houver) =====
const contactForms = document.querySelectorAll('form');

contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica de envio do formulário
        // Por exemplo, enviar via AJAX/Fetch para um backend
        
        const formData = new FormData(form);
        console.log('Formulário enviado:', Object.fromEntries(formData));
        
        // Exemplo de feedback visual
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
});

// ===== LAZY LOADING DE IMAGENS =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== CONTADOR ANIMADO (para estatísticas, se houver) =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const counterElements = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.counter);
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counterElements.forEach(el => counterObserver.observe(el));

// ===== VALIDAÇÃO DE FORMULÁRIO =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Adicionar validação em tempo real aos campos de formulário
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.classList.add('error');
            showError(input, 'Por favor, insira um email válido');
        } else {
            input.classList.remove('error');
            removeError(input);
        }
    });
});

const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validatePhone(input.value)) {
            input.classList.add('error');
            showError(input, 'Por favor, insira um telefone válido');
        } else {
            input.classList.remove('error');
            removeError(input);
        }
    });
});

function showError(input, message) {
    removeError(input);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    input.parentElement.appendChild(errorDiv);
}

function removeError(input) {
    const errorMsg = input.parentElement.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

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
    background: var(--primary-color, #2563eb);
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

// ===== PREVENÇÃO DE SCROLL HORIZONTAL =====
function preventHorizontalScroll() {
    const body = document.body;
    const html = document.documentElement;
    
    if (body.scrollWidth > window.innerWidth || html.scrollWidth > window.innerWidth) {
        console.warn('Scroll horizontal detectado - verifique os elementos da página');
    }
}

window.addEventListener('load', preventHorizontalScroll);
window.addEventListener('resize', preventHorizontalScroll);

// ===== PERFORMANCE: DEBOUNCE PARA EVENTOS DE SCROLL E RESIZE =====
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
    preventHorizontalScroll();
}, 250);

window.addEventListener('scroll', debouncedScroll);
window.addEventListener('resize', debouncedResize);

// ===== ANALYTICS (Google Analytics, se configurado) =====
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
console.log('%c🏥 Yuna - Landing Pages', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com ❤️', 'color: #10b981; font-size: 14px;');

