// ==========================================
// COMPARADOR DE PRODUTOS
// ==========================================

const productsData = {
    standard: {
        name: 'Kaspersky Standard',
        tagline: 'Proteção Essencial',
        price: 'R$ 91,90',
        oldPrice: 'R$ 153,90',
        discount: '40%',
        devices: '5 dispositivos',
        features: {
            antivirus: true,
            firewall: true,
            phishing: true,
            payment: true,
            performance: true,
            cleanup: true,
            vpn: false,
            password: false,
            parental: false,
            identity: false,
            support: false,
            backup: false
        },
        rating: '4.73/5 (159 avaliações)',
        link: 'produtos.html#standard'
    },
    plus: {
        name: 'Kaspersky Plus',
        tagline: 'Proteção Avançada',
        price: 'R$ 117,90',
        oldPrice: 'R$ 197,90',
        discount: '40%',
        devices: '5 dispositivos',
        features: {
            antivirus: true,
            firewall: true,
            phishing: true,
            payment: true,
            performance: true,
            cleanup: true,
            vpn: true,
            password: true,
            parental: true,
            identity: false,
            support: false,
            backup: true
        },
        rating: '4.67/5 (224 avaliações)',
        link: 'produtos.html#plus'
    },
    premium: {
        name: 'Kaspersky Premium',
        tagline: 'Proteção Total',
        price: 'R$ 130,90',
        oldPrice: 'R$ 219,90',
        discount: '40%',
        devices: '5 dispositivos',
        bonus: 'Voucher Uber R$ 30',
        features: {
            antivirus: true,
            firewall: true,
            phishing: true,
            payment: true,
            performance: true,
            cleanup: true,
            vpn: true,
            password: true,
            parental: true,
            identity: true,
            support: true,
            backup: true
        },
        rating: '4.75/5 (744 avaliações)',
        link: 'produtos.html#premium'
    },
    safekids: {
        name: 'Kaspersky Safe Kids',
        tagline: 'Controle Parental',
        price: 'R$ 44,90',
        oldPrice: 'R$ 69,90',
        discount: '35%',
        devices: '1 conta',
        features: {
            antivirus: false,
            firewall: false,
            phishing: false,
            payment: false,
            performance: false,
            cleanup: false,
            vpn: false,
            password: false,
            parental: true,
            identity: false,
            support: false,
            backup: false
        },
        rating: '7 Prêmios AV-TEST',
        link: 'produtos.html#complementary'
    },
    vpn: {
        name: 'Kaspersky VPN',
        tagline: 'Privacidade Total',
        price: 'R$ 79,90',
        oldPrice: 'R$ 119,90',
        discount: '33%',
        devices: '5 dispositivos',
        features: {
            antivirus: false,
            firewall: false,
            phishing: false,
            payment: false,
            performance: false,
            cleanup: false,
            vpn: true,
            password: false,
            parental: false,
            identity: false,
            support: false,
            backup: false
        },
        rating: '6000+ servidores',
        link: 'produtos.html#complementary'
    },
    password: {
        name: 'Password Manager',
        tagline: 'Gestão de Senhas',
        price: 'R$ 61,90',
        oldPrice: 'R$ 64,90',
        discount: '4%',
        devices: '1 conta',
        features: {
            antivirus: false,
            firewall: false,
            phishing: false,
            payment: false,
            performance: false,
            cleanup: false,
            vpn: false,
            password: true,
            parental: false,
            identity: false,
            support: false,
            backup: false
        },
        rating: '4.60/5 (53 avaliações)',
        link: 'produtos.html#complementary'
    },
    smalloffice: {
        name: 'Small Office Security',
        tagline: 'Para Empresas',
        price: 'R$ 513,00',
        oldPrice: 'R$ 570,00',
        discount: '10%',
        devices: '5 usuários (15 dispositivos)',
        bonus: 'Voucher até R$ 150',
        features: {
            antivirus: true,
            firewall: true,
            phishing: true,
            payment: true,
            performance: true,
            cleanup: true,
            vpn: true,
            password: true,
            parental: false,
            identity: false,
            support: true,
            backup: true
        },
        rating: '4.59/5 (17 avaliações)',
        link: 'produtos.html#business'
    }
};

const featuresLabels = {
    antivirus: 'Antivírus em Tempo Real',
    firewall: 'Firewall Avançado',
    phishing: 'Anti-Phishing',
    payment: 'Proteção Pagamentos',
    performance: 'Otimização de Desempenho',
    cleanup: 'Limpeza de Disco',
    vpn: 'VPN Ilimitada',
    password: 'Gerenciador de Senhas',
    parental: 'Controle Parental',
    identity: 'Proteção de Identidade',
    support: 'Suporte Premium',
    backup: 'Backup de Dados'
};

function updateComparison() {
    const product1 = document.getElementById('product1').value;
    const product2 = document.getElementById('product2').value;
    const product3 = document.getElementById('product3').value;
    
    const products = [product1, product2, product3].filter(p => p !== '');
    
    if (products.length === 0) {
        document.getElementById('comparisonTable').innerHTML = '<p style="text-align: center; padding: 2rem;">Selecione pelo menos um produto para comparar</p>';
        return;
    }
    
    generateComparisonTable(products);
}

function generateComparisonTable(products) {
    let html = '<table><thead><tr><th class="feature-col">Características</th>';
    
    // Cabeçalhos dos produtos
    products.forEach(productId => {
        const product = productsData[productId];
        html += `<th>
            <div>${product.name}</div>
            <div style="font-size: 0.9rem; font-weight: 400; margin-top: 0.5rem;">${product.tagline}</div>
        </th>`;
    });
    
    html += '</tr></thead><tbody>';
    
    // Linha de preço
    html += '<tr><td class="feature-name"><i class="fas fa-tag"></i> Preço/Ano</td>';
    products.forEach(productId => {
        const product = productsData[productId];
        html += `<td>
            <span class="price-old">${product.oldPrice}</span>
            <div class="price-tag">${product.price}</div>
            <span class="discount-badge">${product.discount} OFF</span>
        </td>`;
    });
    html += '</tr>';
    
    // Linha de dispositivos
    html += '<tr><td class="feature-name"><i class="fas fa-mobile-alt"></i> Dispositivos</td>';
    products.forEach(productId => {
        const product = productsData[productId];
        html += `<td><strong>${product.devices}</strong></td>`;
    });
    html += '</tr>';
    
    // Linha de avaliação
    html += '<tr><td class="feature-name"><i class="fas fa-star"></i> Avaliação</td>';
    products.forEach(productId => {
        const product = productsData[productId];
        html += `<td>${product.rating}</td>`;
    });
    html += '</tr>';
    
    // Bônus (se houver)
    const hasBonus = products.some(p => productsData[p].bonus);
    if (hasBonus) {
        html += '<tr><td class="feature-name"><i class="fas fa-gift"></i> Bônus</td>';
        products.forEach(productId => {
            const product = productsData[productId];
            html += `<td>${product.bonus || '-'}</td>`;
        });
        html += '</tr>';
    }
    
    // Categoria de recursos
    html += '<tr><td colspan="' + (products.length + 1) + '" class="category-header">RECURSOS DE SEGURANÇA</td></tr>';
    
    // Recursos de segurança
    const securityFeatures = ['antivirus', 'firewall', 'phishing', 'payment'];
    securityFeatures.forEach(feature => {
        html += `<tr><td class="feature-name">${featuresLabels[feature]}</td>`;
        products.forEach(productId => {
            const hasFeature = productsData[productId].features[feature];
            html += `<td>${hasFeature ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>`;
        });
        html += '</tr>';
    });
    
    // Categoria privacidade
    html += '<tr><td colspan="' + (products.length + 1) + '" class="category-header">RECURSOS DE PRIVACIDADE</td></tr>';
    
    const privacyFeatures = ['vpn', 'password', 'identity'];
    privacyFeatures.forEach(feature => {
        html += `<tr><td class="feature-name">${featuresLabels[feature]}</td>`;
        products.forEach(productId => {
            const hasFeature = productsData[productId].features[feature];
            html += `<td>${hasFeature ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>`;
        });
        html += '</tr>';
    });
    
    // Categoria desempenho
    html += '<tr><td colspan="' + (products.length + 1) + '" class="category-header">RECURSOS ADICIONAIS</td></tr>';
    
    const additionalFeatures = ['performance', 'cleanup', 'parental', 'backup', 'support'];
    additionalFeatures.forEach(feature => {
        html += `<tr><td class="feature-name">${featuresLabels[feature]}</td>`;
        products.forEach(productId => {
            const hasFeature = productsData[productId].features[feature];
            html += `<td>${hasFeature ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>`;
        });
        html += '</tr>';
    });
    
    // Linha de CTA
    html += '<tr class="cta-row"><td class="feature-name">Ação</td>';
    products.forEach(productId => {
        const product = productsData[productId];
        html += `<td><a href="${product.link}" class="comparison-cta">Ver Detalhes</a></td>`;
    });
    html += '</tr>';
    
    html += '</tbody></table>';
    
    document.getElementById('comparisonTable').innerHTML = html;
}

// Inicializar comparador ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    updateComparison();
});
