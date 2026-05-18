// ==========================================
// TUI TECNOLOGIA - MAIN JAVASCRIPT
// Revenda Autorizada Kaspersky
// ==========================================

// ==========================================
// DARK MODE SYSTEM
// ==========================================
// Load saved theme or detect system preference
function initTheme() {
    const savedTheme = localStorage.getItem('tuiTheme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tuiTheme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Initialize theme immediately
initTheme();

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Setup theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // ==========================================
    // MOBILE MENU TOGGLE
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a menu item
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ==========================================
    // PRODUCT FILTERS (MARKETPLACE PAGE)
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-detail-card');
    
    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Show/hide products based on filter
                productCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        // Add fade-in animation
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        if (card.classList.contains(filterValue)) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeIn 0.5s ease';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // ==========================================
    // CONTACT FORM HANDLING
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form (basic validation)
            if (!data.nome || !data.email || !data.telefone || !data.assunto || !data.mensagem) {
                showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showMessage('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Check if Formspree is configured (form has action attribute)
            const formAction = contactForm.getAttribute('action');
            
            if (formAction && formAction.includes('formspree.io')) {
                // Use Formspree submission (native form submit)
                showMessage('Enviando sua mensagem...', 'info');
                contactForm.submit();
            } else {
                // Use WhatsApp fallback
                enviarPorWhatsApp(data);
            }
        });
    }
    
    function enviarPorWhatsApp(data) {
        // Número do WhatsApp da Tui Tecnologia (substituir pelo número real)
        const whatsappNumber = '5517988151758'; // Formato: 55 + DDD + Número
        
        // Montar mensagem
        let mensagem = `*Nova mensagem do site Tui Tecnologia*\n\n`;
        mensagem += `👤 *Nome:* ${data.nome}\n`;
        mensagem += `📧 *Email:* ${data.email}\n`;
        mensagem += `📱 *Telefone:* ${data.telefone}\n`;
        
        if (data.empresa) {
            mensagem += `🏢 *Empresa:* ${data.empresa}\n`;
        }
        
        mensagem += `📋 *Assunto:* ${data.assunto}\n`;
        
        if (data.produto) {
            mensagem += `🛡️ *Produto:* ${data.produto}\n`;
        }
        
        mensagem += `\n💬 *Mensagem:*\n${data.mensagem}`;
        
        // Codificar mensagem para URL
        const mensagemCodificada = encodeURIComponent(mensagem);
        
        // Criar link do WhatsApp
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagemCodificada}`;
        
        // Mostrar mensagem de redirecionamento
        showMessage('Redirecionando para WhatsApp...', 'success');
        
        // Aguardar 1 segundo e abrir WhatsApp
        setTimeout(() => {
            window.open(whatsappLink, '_blank');
            
            // Resetar formulário
            contactForm.reset();
            
            // Mostrar mensagem final
            showMessage('Você será redirecionado para o WhatsApp para concluir o envio.', 'info');
            
            // Ocultar mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    }
    
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }
    
    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            event.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // SCROLL TO TOP ON PAGE LOAD
    // ==========================================
    window.scrollTo(0, 0);
    
    // ==========================================
    // ADD FADE-IN ANIMATION ON SCROLL
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .product-detail-card, .reason-card, .mvv-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ==========================================
    // PHONE NUMBER MASK
    // ==========================================
    const phoneInput = document.getElementById('telefone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(event) {
            let value = event.target.value.replace(/\D/g, '');
            
            if (value.length <= 11) {
                if (value.length <= 10) {
                    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
                } else {
                    value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
                }
                event.target.value = value;
            } else {
                event.target.value = value.substring(0, 11).replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            }
        });
    }
    
    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
});

// ==========================================
// GLOBAL FUNCTIONS
// ==========================================

/**
 * Function to handle product quote requests
 * @param {string} productName - Name of the product
 */
function solicitarOrcamento(productName) {
    // Store product name in sessionStorage
    sessionStorage.setItem('produtoInteresse', productName);
    
    // Redirect to contact page
    window.location.href = 'contato.html';
    
    // After redirect, pre-fill the form (handled on contact page)
    window.addEventListener('load', function() {
        const produtoSelect = document.getElementById('produto');
        const assuntoSelect = document.getElementById('assunto');
        const mensagemTextarea = document.getElementById('mensagem');
        const produtoInteresse = sessionStorage.getItem('produtoInteresse');
        
        if (produtoInteresse && produtoSelect && assuntoSelect && mensagemTextarea) {
            // Set assunto to orçamento
            assuntoSelect.value = 'orcamento';
            
            // Pre-fill message
            mensagemTextarea.value = `Gostaria de solicitar um orçamento para: ${produtoInteresse}\n\nPor favor, me envie mais informações sobre este produto.`;
            
            // Clear sessionStorage
            sessionStorage.removeItem('produtoInteresse');
        }
    });
}

/**
 * Add CSS animation keyframes dynamically
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// DEVICE CALCULATOR
// ==========================================
let deviceCounts = {
    computers: 1,
    smartphones: 2,
    tablets: 0
};

function incrementDevice(type) {
    if (deviceCounts[type] < 10) {
        deviceCounts[type]++;
        updateDeviceDisplay();
    }
}

function decrementDevice(type) {
    if (deviceCounts[type] > 0) {
        deviceCounts[type]--;
        updateDeviceDisplay();
    }
}

function updateDeviceDisplay() {
    // Update counters
    document.getElementById('computers-count').textContent = deviceCounts.computers;
    document.getElementById('smartphones-count').textContent = deviceCounts.smartphones;
    document.getElementById('tablets-count').textContent = deviceCounts.tablets;
    
    // Calculate total
    const total = deviceCounts.computers + deviceCounts.smartphones + deviceCounts.tablets;
    document.getElementById('total-devices').textContent = total;
    
    // Update recommendation
    updateRecommendation(total);
}

function updateRecommendation(total) {
    const productElement = document.getElementById('recommended-product');
    const reasonElement = document.getElementById('recommended-reason');
    const priceElement = document.getElementById('recommended-price-value');
    
    if (!productElement) return; // Element doesn't exist on this page
    
    if (total === 0) {
        productElement.textContent = 'Adicione dispositivos';
        reasonElement.textContent = 'Use os controles acima para contar seus dispositivos';
        priceElement.textContent = '-';
    } else if (total === 1) {
        productElement.textContent = 'Kaspersky Standard';
        reasonElement.textContent = 'Proteção essencial perfeita para 1 dispositivo com todos os recursos básicos';
        priceElement.textContent = 'R$ 91,90/ano';
    } else if (total <= 3) {
        productElement.textContent = 'Kaspersky Plus';
        reasonElement.textContent = 'Proteja até 5 dispositivos com VPN ilimitada e gerenciador de senhas';
        priceElement.textContent = 'R$ 117,90/ano';
    } else if (total <= 5) {
        productElement.textContent = 'Kaspersky Premium';
        reasonElement.textContent = 'Proteção total para até 5 dispositivos + Voucher Uber R$ 30 GRÁTIS!';
        priceElement.textContent = 'R$ 130,90/ano';
    } else {
        productElement.textContent = 'Small Office Security';
        reasonElement.textContent = 'Ideal para famílias grandes ou pequenas empresas - protege até 15 dispositivos';
        priceElement.textContent = 'R$ 513,00/ano';
    }
}

function scrollToProduct() {
    const total = deviceCounts.computers + deviceCounts.smartphones + deviceCounts.tablets;
    let targetId = 'standard';
    
    if (total <= 3) {
        targetId = 'plus';
    } else if (total <= 5) {
        targetId = 'premium';
    } else {
        targetId = 'business';
    }
    
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize calculator on page load
if (document.getElementById('total-devices')) {
    updateDeviceDisplay();
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Element is visible in viewport
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run on load
window.addEventListener('load', revealOnScroll);

// Run after DOMContentLoaded
document.addEventListener('DOMContentLoaded', revealOnScroll);

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    
                    // Remove data-src after loading
                    img.addEventListener('load', () => {
                        img.removeAttribute('data-src');
                    });
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px' // Start loading 50px before entering viewport
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);
