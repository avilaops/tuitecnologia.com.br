# 📝 Guia de Personalização - Tui Tecnologia

Este guia fornece instruções detalhadas para personalizar o site da Tui Tecnologia.

## 🎨 Personalizando Cores

### Localização: `css/styles.css` (linhas 13-24)

```css
:root {
    /* Colors */
    --primary-color: #006c67;        /* Cor principal (verde) */
    --primary-dark: #004d49;         /* Variação escura */
    --primary-light: #008c85;        /* Variação clara */
    --secondary-color: #ff6b35;      /* Cor secundária (laranja) */
    --secondary-dark: #e55a2b;       /* Laranja escuro */
    --accent-color: #ffd23f;         /* Cor de acento (amarelo) */
    --success-color: #25d366;        /* Verde WhatsApp */
}
```

**Como alterar:**
1. Abra `css/styles.css`
2. Localize a seção `:root`
3. Substitua os valores hexadecimais pelas suas cores
4. Salve o arquivo

## 📞 Atualizando Informações de Contato

### E-mail
**Localização:** Footer de todos os arquivos HTML

```html
<li><i class="fas fa-envelope"></i> contato@tuitecnologia.com.br</li>
```

**Arquivos a alterar:**
- index.html (linha ~171)
- produtos.html (linha ~368)
- sobre.html (linha ~213)
- contato.html (linha ~228)

### Telefone
**Localização:** Footer de todos os arquivos HTML

```html
<li><i class="fas fa-phone"></i> (11) 0000-0000</li>
```

**Arquivos a alterar:**
- index.html (linha ~172)
- produtos.html (linha ~369)
- sobre.html (linha ~214)
- contato.html (linha ~229)

### Endereço
**Localização:** Footer de todos os arquivos HTML

```html
<li><i class="fas fa-map-marker-alt"></i> São Paulo, SP</li>
```

### WhatsApp
**Localização:** `contato.html` (linha ~208)

```html
<a href="https://wa.me/5511000000000" ...>
```

**Formato do número:**
- `55` = Código do Brasil
- `11` = DDD
- `000000000` = Número (9 dígitos)

## 🔗 Atualizando Redes Sociais

**Localização:** Footer de todos os arquivos HTML

```html
<div class="social-links">
    <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
</div>
```

**Como alterar:**
1. Substitua `#` pela URL da sua rede social
2. Exemplo: `<a href="https://facebook.com/tuitecnologia" ...>`

## 📦 Adicionando Novos Produtos

**Localização:** `produtos.html`

### Template de Produto:

```html
<div class="product-detail-card pessoal">
    <div class="product-badge">Novo</div>
    <div class="product-header">
        <div class="product-icon-large">
            <i class="fas fa-shield-alt"></i>
        </div>
        <div>
            <h3>Nome do Produto</h3>
            <p class="product-tagline">Descrição curta do produto</p>
        </div>
    </div>
    <div class="product-features">
        <h4>Recursos Inclusos:</h4>
        <ul>
            <li><i class="fas fa-check"></i> Recurso 1</li>
            <li><i class="fas fa-check"></i> Recurso 2</li>
            <li><i class="fas fa-check"></i> Recurso 3</li>
        </ul>
    </div>
    <div class="pricing-section">
        <div class="price-option">
            <span class="devices">1 Dispositivo</span>
            <span class="price">R$ 149,90<span class="period">/ano</span></span>
            <button class="btn btn-primary" onclick="solicitarOrcamento('Produto - 1 Dispositivo')">Solicitar</button>
        </div>
    </div>
</div>
```

**Classes de categoria:**
- `pessoal` - Produtos pessoais
- `empresarial` - Produtos empresariais

**Classes de badge:**
- `product-badge` - Badge padrão
- `product-badge popular` - Badge laranja (Mais Vendido)
- `product-badge premium` - Badge dourado (Premium)
- `product-badge business` - Badge cinza escuro (Empresas)

## 🎯 Mudando Ícones

O site usa **Font Awesome 6.4.0**. Para alterar ícones:

1. Acesse: https://fontawesome.com/icons
2. Procure o ícone desejado
3. Copie a classe (ex: `fas fa-rocket`)
4. Substitua no HTML:

```html
<!-- Antes -->
<i class="fas fa-shield-alt"></i>

<!-- Depois -->
<i class="fas fa-rocket"></i>
```

**Ícones comuns usados:**
- `fa-shield-alt` - Escudo
- `fa-star` - Estrela
- `fa-crown` - Coroa
- `fa-building` - Prédio
- `fa-check` - Check
- `fa-envelope` - E-mail
- `fa-phone` - Telefone
- `fa-map-marker-alt` - Localização

## 📝 Editando Textos

### Hero Section (Página Principal)
**Localização:** `index.html` (linhas ~37-45)

```html
<h2 class="hero-title">Proteção Digital de Classe Mundial</h2>
<p class="hero-subtitle">Revenda autorizada Kaspersky...</p>
```

### Título da Empresa
**Localização:** Header de todos os arquivos HTML

```html
<div class="logo">
    <h1>TUI <span>Tecnologia</span></h1>
    <p class="logo-subtitle">Parceiro Autorizado Kaspersky</p>
</div>
```

### Missão, Visão e Valores
**Localização:** `sobre.html` (linhas ~48-76)

## 🖼️ Adicionando Imagens/Logotipo

Atualmente o site usa ícones. Para adicionar imagens:

1. Crie uma pasta `assets/images/`
2. Adicione suas imagens
3. Substitua o ícone por uma tag `<img>`:

```html
<!-- Antes (ícone) -->
<div class="hero-image">
    <i class="fas fa-shield-alt"></i>
</div>

<!-- Depois (imagem) -->
<div class="hero-image">
    <img src="assets/images/hero.png" alt="Proteção Digital">
</div>
```

### Logo da Empresa
Para adicionar logo no header:

```html
<!-- Substitua -->
<div class="logo">
    <h1>TUI <span>Tecnologia</span></h1>
    ...
</div>

<!-- Por -->
<div class="logo">
    <img src="assets/images/logo.png" alt="Tui Tecnologia" style="height: 50px;">
</div>
```

## 📊 Alterando Estatísticas

**Localização:** `index.html` (linhas ~128-140)

```html
<div class="trust-stats">
    <div class="stat">
        <h3>400M+</h3>
        <p>Usuários Protegidos</p>
    </div>
    ...
</div>
```

## 🔄 Modificando o Menu de Navegação

**Localização:** Header de todos os arquivos HTML

```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html">Início</a></li>
    <li><a href="produtos.html">Produtos</a></li>
    <li><a href="sobre.html">Sobre</a></li>
    <li><a href="contato.html">Contato</a></li>
</ul>
```

**Para adicionar um novo item:**

```html
<li><a href="nova-pagina.html">Novo Item</a></li>
```

## 💡 Dicas Importantes

### 1. Manter Consistência
- Atualize informações em **todos os arquivos HTML**
- Use as mesmas cores em todo o site
- Mantenha o padrão de espaçamento

### 2. Testar em Dispositivos
Após alterações, teste em:
- Desktop (Chrome, Firefox, Edge)
- Tablet
- Mobile

### 3. Backup
Sempre faça backup antes de grandes alterações:
```bash
# Windows
xcopy /E /I Tui Tui-backup

# Linux/Mac
cp -r Tui Tui-backup
```

### 4. Validação
Use ferramentas para validar HTML/CSS:
- https://validator.w3.org/
- https://jigsaw.w3.org/css-validator/

## 🚀 Deploy Rápido

### Netlify (Recomendado)
1. Acesse https://www.netlify.com/
2. Arraste a pasta `Tui` para o site
3. Site publicado instantaneamente!

### GitHub Pages
1. Crie repositório no GitHub
2. Upload dos arquivos
3. Ative GitHub Pages nas configurações

## 📧 Configurando Formulário de Contato

O formulário atual é apenas front-end. Para funcionar de verdade:

### Opção 1: Formspree (Gratuito)
```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
    <!-- campos do formulário -->
</form>
```

### Opção 2: EmailJS
1. Cadastre em https://www.emailjs.com/
2. Configure o serviço de e-mail
3. Adicione o código JavaScript fornecido

### Opção 3: Backend Próprio
Configure um backend em PHP, Node.js ou Python para processar o formulário.

## ❓ Precisa de Ajuda?

Se tiver dúvidas sobre personalização:
1. Consulte o README.md
2. Veja os comentários no código CSS e JavaScript
3. Entre em contato com o desenvolvedor

---

**Última atualização:** 2026
**Versão:** 1.0
