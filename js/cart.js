// ==========================================
// SHOPPING CART SYSTEM
// ==========================================

// Cart data structure
let cart = [];

// Product catalog
const productCatalog = {
    'standard': {
        id: 'standard',
        name: 'Kaspersky Standard',
        description: '5 dispositivos - Proteção essencial',
        price: 91.90,
        oldPrice: 153.90,
        discount: 40,
        icon: 'fa-shield-alt'
    },
    'plus': {
        id: 'plus',
        name: 'Kaspersky Plus',
        description: '5 dispositivos - Proteção avançada',
        price: 117.90,
        oldPrice: 197.90,
        discount: 40,
        icon: 'fa-star'
    },
    'premium': {
        id: 'premium',
        name: 'Kaspersky Premium',
        description: '5 dispositivos - Proteção total + Voucher Uber R$ 30',
        price: 130.90,
        oldPrice: 219.90,
        discount: 40,
        icon: 'fa-crown'
    },
    'safekids': {
        id: 'safekids',
        name: 'Kaspersky Safe Kids',
        description: '1 conta - Controle parental completo',
        price: 44.90,
        oldPrice: 69.90,
        discount: 35,
        icon: 'fa-child'
    },
    'vpn': {
        id: 'vpn',
        name: 'Kaspersky VPN',
        description: '5 dispositivos - VPN ilimitada',
        price: 79.90,
        oldPrice: 119.90,
        discount: 33,
        icon: 'fa-user-shield'
    },
    'password': {
        id: 'password',
        name: 'Password Manager',
        description: '1 conta - Gerenciamento de senhas',
        price: 61.90,
        oldPrice: 64.90,
        discount: 4,
        icon: 'fa-key'
    },
    'smalloffice': {
        id: 'smalloffice',
        name: 'Small Office Security',
        description: '5 usuários (15 dispositivos) + Voucher até R$ 150',
        price: 513.00,
        oldPrice: 570.00,
        discount: 10,
        icon: 'fa-building'
    }
};

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('tuiCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartBadge();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('tuiCart', JSON.stringify(cart));
    updateCartBadge();
}

// Add item to cart
function addToCart(productId) {
    const product = productCatalog[productId];
    if (!product) return;
    
    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        alert('Este produto já está no carrinho!');
        return;
    }
    
    cart.push(product);
    saveCart();
    
    // Show success message
    showNotification(`${product.name} adicionado ao carrinho!`, 'success');
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    showNotification('Produto removido do carrinho', 'info');
}

// Calculate cart totals
function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const oldSubtotal = cart.reduce((sum, item) => sum + item.oldPrice, 0);
    const savings = oldSubtotal - subtotal;
    
    return { subtotal, oldSubtotal, savings };
}

// Render cart page
function renderCart() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-items" style="grid-column: 1 / -1;">
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h2>Seu carrinho está vazio</h2>
                    <p>Adicione produtos incríveis para proteger seus dispositivos!</p>
                    <a href="produtos.html" class="btn btn-primary btn-large">Ver Produtos</a>
                </div>
            </div>
        `;
        return;
    }
    
    // Render cart items
    let itemsHTML = '<div class="cart-items"><h2>Itens do Carrinho</h2>';
    
    cart.forEach(item => {
        itemsHTML += `
            <div class="cart-item">
                <div class="item-icon">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p><span class="discount-badge">${item.discount}% OFF</span> Economize R$ ${(item.oldPrice - item.price).toFixed(2)}</p>
                </div>
                <div class="item-actions">
                    <div class="item-price">R$ ${item.price.toFixed(2)}</div>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i> Remover
                    </button>
                </div>
            </div>
        `;
    });
    
    itemsHTML += '</div>';
    
    // Render summary
    const totals = calculateTotals();
    const summaryHTML = `
        <div class="cart-summary">
            <h3 class="summary-title">Resumo do Pedido</h3>
            <div class="summary-row">
                <span>Subtotal (${cart.length} ${cart.length === 1 ? 'item' : 'itens'})</span>
                <span>R$ ${totals.oldSubtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span><i class="fas fa-tag"></i> Desconto</span>
                <span style="color: #27ae60;">-R$ ${totals.savings.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span><strong>Total</strong></span>
                <span style="color: var(--primary-color);">R$ ${totals.subtotal.toFixed(2)}</span>
            </div>
            <button class="btn btn-primary checkout-btn" onclick="checkout()">
                <i class="fas fa-check-circle"></i> Finalizar Pedido
            </button>
            <a href="produtos.html" class="btn continue-shopping">
                <i class="fas fa-arrow-left"></i> Continuar Comprando
            </a>
            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
                <p style="font-size: 0.9rem; color: var(--text-light); text-align: center;">
                    <i class="fas fa-shield-check"></i> Compra 100% segura<br>
                    <i class="fas fa-sync-alt"></i> Garantia de 30 dias
                </p>
            </div>
        </div>
    `;
    
    cartContent.innerHTML = itemsHTML + summaryHTML;
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    // Create order summary
    let orderSummary = '*Pedido Tui Tecnologia*\n\n';
    orderSummary += '*Produtos:*\n';
    
    cart.forEach((item, index) => {
        orderSummary += `${index + 1}. ${item.name}\n`;
        orderSummary += `   ${item.description}\n`;
        orderSummary += `   R$ ${item.price.toFixed(2)}\n\n`;
    });
    
    const totals = calculateTotals();
    orderSummary += `*Subtotal:* R$ ${totals.oldSubtotal.toFixed(2)}\n`;
    orderSummary += `*Desconto:* -R$ ${totals.savings.toFixed(2)}\n`;
    orderSummary += `*Total:* R$ ${totals.subtotal.toFixed(2)}\n\n`;
    orderSummary += 'Gostaria de finalizar este pedido!';
    
    // WhatsApp number
    const whatsappNumber = '5517988151758'; // WhatsApp da Tui Tecnologia
    const message = encodeURIComponent(orderSummary);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Show confirmation
    showNotification('Redirecionando para WhatsApp...', 'success');
}

// Update cart badge
function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        badge.textContent = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Initialize cart on page load
loadCart();

// Render cart if on cart page
if (document.getElementById('cartContent')) {
    renderCart();
}
