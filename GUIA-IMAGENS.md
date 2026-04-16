# 📸 Guia de Imagens - Tui Tecnologia

## 🎨 Imagens Necessárias para o Site

### Prioridade ALTA (Essenciais)

#### 1. Logo da Empresa
- **Arquivo:** `assets/images/logo.png`
- **Tamanho:** 200x60px (aproximadamente)
- **Formato:** PNG com fundo transparente
- **Uso:** Header de todas as páginas

#### 2. Favicon
- **Arquivos necessários:**
  - `favicon.ico` (16x16, 32x32, 48x48)
  - `assets/images/favicon-16x16.png`
  - `assets/images/favicon-32x32.png`
  - `assets/images/apple-touch-icon.png` (180x180)
- **Ferramenta:** https://realfavicongenerator.net/

#### 3. Imagem Hero (Página Principal)
- **Arquivo:** `assets/images/hero-bg.jpg`
- **Tamanho:** 1920x1080px
- **Formato:** JPG otimizado
- **Descrição:** Imagem relacionada a segurança digital/tecnologia

#### 4. Open Graph Image (Compartilhamento Social)
- **Arquivo:** `assets/images/og-image.jpg`
- **Tamanho:** 1200x630px
- **Formato:** JPG
- **Uso:** Preview ao compartilhar no Facebook/LinkedIn

### Prioridade MÉDIA (Recomendadas)

#### 5. Ícones PWA
Criar ícones para Progressive Web App:
- `assets/images/icon-72x72.png`
- `assets/images/icon-96x96.png`
- `assets/images/icon-128x128.png`
- `assets/images/icon-144x144.png`
- `assets/images/icon-152x152.png`
- `assets/images/icon-192x192.png`
- `assets/images/icon-384x384.png`
- `assets/images/icon-512x512.png`

**Ferramenta:** https://www.pwabuilder.com/imageGenerator

#### 6. Produtos Kaspersky
Imagens dos produtos (opcional - atualmente usa ícones):
- `assets/images/products/kaspersky-standard.png`
- `assets/images/products/kaspersky-plus.png`
- `assets/images/products/kaspersky-premium.png`
- **Tamanho:** 400x400px
- **Formato:** PNG

#### 7. Sobre a Empresa
- `assets/images/about/team.jpg` - Equipe
- `assets/images/about/office.jpg` - Escritório
- `assets/images/about/kaspersky-partner.png` - Certificado
- **Tamanho:** 800x600px

### Prioridade BAIXA (Opcionais)

#### 8. Blog/Artigos (se criar)
- Imagens destacadas para artigos
- **Tamanho:** 1200x675px
- **Formato:** JPG otimizado

#### 9. Depoimentos
- Fotos de clientes (com permissão)
- **Tamanho:** 200x200px (circular)
- **Formato:** PNG ou JPG

## 🛠️ Ferramentas de Otimização

### Compressão de Imagens
1. **TinyPNG** - https://tinypng.com/
   - Melhor para PNG
   - Compressão sem perda visível de qualidade

2. **Squoosh** - https://squoosh.app/
   - Google tool
   - Compara antes/depois
   - Múltiplos formatos

3. **ImageOptim** (Mac) - https://imageoptim.com/
   - App nativo
   - Arrasta e solta

4. **RIOT** (Windows) - https://riot-optimizer.com/
   - Otimizador gratuito
   - Interface simples

### Conversão de Formatos

#### Para ícones SVG:
- **SVGOMG** - https://jakearchibald.github.io/svgomg/
- Reduz tamanho de SVG

#### Para WebP (formato moderno):
```html
<!-- Uso com fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Descrição">
</picture>
```

## 📐 Tamanhos Recomendados por Uso

| Uso | Dimensão | Formato |
|-----|----------|---------|
| Logo Header | 200x60px | PNG |
| Hero Background | 1920x1080px | JPG |
| Produto Card | 400x400px | PNG/JPG |
| Blog Destaque | 1200x675px | JPG |
| Thumbnail | 300x200px | JPG |
| Avatar | 200x200px | JPG/PNG |
| Favicon | 32x32px | ICO/PNG |
| Apple Touch Icon | 180x180px | PNG |
| Open Graph | 1200x630px | JPG |

## 🎯 Boas Práticas

### 1. Nomenclatura
```
✅ CORRETO:
- logo-tui-tecnologia.png
- hero-seguranca-digital.jpg
- produto-kaspersky-plus.png

❌ EVITAR:
- IMG_1234.jpg
- photo.png
- Imagem Final v2 DEFINITIVO.jpg
```

### 2. Alt Text (Acessibilidade)
```html
<!-- BOM -->
<img src="logo.png" alt="Tui Tecnologia - Revenda Kaspersky">

<!-- RUIM -->
<img src="logo.png" alt="logo">
<img src="logo.png" alt="">
```

### 3. Lazy Loading
```html
<!-- Adicionar loading="lazy" para imagens abaixo da dobra -->
<img src="produto.jpg" alt="Produto" loading="lazy">
```

### 4. Dimensões Responsivas
```html
<!-- Usar srcset para diferentes tamanhos -->
<img 
  src="image-800w.jpg"
  srcset="image-400w.jpg 400w,
          image-800w.jpg 800w,
          image-1200w.jpg 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 900px) 800px,
         1200px"
  alt="Descrição">
```

## 📊 Checklist de Otimização

Antes de adicionar imagens ao site:

- [ ] Redimensionar para tamanho correto
- [ ] Comprimir (TinyPNG/Squoosh)
- [ ] Renomear com nome descritivo
- [ ] Adicionar alt text apropriado
- [ ] Testar em dispositivos móveis
- [ ] Verificar tamanho do arquivo (< 200KB idealmente)
- [ ] Considerar formato WebP para imagens grandes
- [ ] Adicionar loading="lazy" se abaixo da dobra

## 🚀 Próximos Passos

### 1. Criar Pasta Assets
```bash
mkdir -p assets/images/products
mkdir -p assets/images/about
mkdir -p assets/images/icons
```

### 2. Adicionar Imagens ao Site

Depois de otimizar as imagens, substituir os ícones por imagens reais:

**Exemplo - Logo no Header:**
```html
<!-- Atual (texto) -->
<div class="logo">
    <h1>TUI <span>Tecnologia</span></h1>
</div>

<!-- Modificado (com imagem) -->
<div class="logo">
    <img src="assets/images/logo.png" alt="Tui Tecnologia">
</div>
```

### 3. Otimizar CSS para Imagens
```css
/* Garantir que imagens sejam responsivas */
img {
    max-width: 100%;
    height: auto;
}

/* Logo */
.logo img {
    height: 50px;
    width: auto;
}
```

## 💡 Recursos Gratuitos de Imagens

Se precisar de imagens stock:

1. **Unsplash** - https://unsplash.com/
   - Fotos de alta qualidade
   - Uso comercial permitido

2. **Pexels** - https://www.pexels.com/
   - Vídeos e fotos
   - Gratuito para uso comercial

3. **Pixabay** - https://pixabay.com/
   - Imagens e vetores
   - Sem atribuição necessária

**Palavras-chave úteis:**
- "cyber security"
- "technology"
- "antivirus"
- "data protection"
- "business security"

## 🎨 Criação de Logo

Se ainda não tem logo, pode usar:

1. **Canva** - https://www.canva.com/
   - Templates prontos
   - Editor online

2. **Looka** - https://looka.com/
   - IA para criar logos
   - Pago, mas oferece teste

3. **Freelancer**
   - Fiverr
   - 99designs
   - Workana

## 📝 Nota Final

**IMPORTANTE:** Todos os caminhos de imagem no site usam a pasta `assets/images/`. 
Certifique-se de criar essa estrutura de pastas e colocar as imagens nos locais corretos.

---

**Criado em:** 15/04/2026
**Projeto:** Tui Tecnologia Website
