# ⚡ Início Rápido - Tui Tecnologia

Bem-vindo ao projeto do site da Tui Tecnologia! Este guia vai te ajudar a começar em 5 minutos.

## 📁 Estrutura do Projeto

```
Tui/
├── 📄 Páginas HTML (4)
│   ├── index.html          - Página Principal
│   ├── produtos.html       - Marketplace de Produtos
│   ├── sobre.html          - Sobre a Empresa
│   ├── contato.html        - Formulário de Contato
│   ├── obrigado.html       - Confirmação de Envio
│   └── 404.html            - Página de Erro
│
├── 🎨 Estilos e Scripts
│   ├── css/
│   │   └── styles.css      - 900+ linhas de CSS
│   └── js/
│       └── main.js         - JavaScript funcional
│
├── ⚙️ Configuração
│   ├── robots.txt          - SEO
│   ├── sitemap.xml         - Mapa do site
│   ├── manifest.json       - PWA config
│   └── .gitignore          - Git config
│
└── 📚 Documentação (6 guias)
    ├── README.md           - Visão geral
    ├── CUSTOMIZACAO.md     - Como personalizar
    ├── CHECKLIST.md        - Lista pré-lançamento
    ├── INTEGRACOES.html    - Analytics & Tools
    ├── COMO-USAR.md        - Como testar
    ├── GUIA-IMAGENS.md     - Otimização de imagens
    └── DEPLOY.md           - Publicar o site
```

**Total:** 19 arquivos | ~171 KB

---

## 🚀 3 Passos para Ver o Site

### 1️⃣ Abrir no Navegador

**Windows:**
```
1. Vá para: d:\Projetos\Tui
2. Clique 2x em: index.html
```

**Ou pressione:**
```
Ctrl + O no navegador
→ Selecione index.html
```

### 2️⃣ Navegar pelo Site

- 🏠 **Home** - Hero + Features + Produtos
- 🛒 **Produtos** - 8 produtos Kaspersky completos
- ℹ️ **Sobre** - Institucional
- 📧 **Contato** - Formulário funcional

### 3️⃣ Testar Responsividade

```
F12 → Ícone de celular (Ctrl+Shift+M)
→ Testar diferentes tamanhos
```

---

## ✏️ Personalizar em 3 Minutos

### 1. Alterar Informações de Contato

Edite em **TODOS os arquivos HTML** (no footer):

```html
<!-- Busque por: -->
<li><i class="fas fa-envelope"></i> contato@tuitecnologia.com.br</li>
<li><i class="fas fa-phone"></i> (11) 0000-0000</li>

<!-- Substitua por suas informações -->
```

**Arquivos:** index.html, produtos.html, sobre.html, contato.html, obrigado.html, 404.html

### 2. Mudar Cores

Edite `css/styles.css` (linhas 13-24):

```css
--primary-color: #006c67;      /* Verde → Sua cor */
--secondary-color: #ff6b35;    /* Laranja → Sua cor */
```

### 3. Adicionar Logo

Substitua em todos os headers:

```html
<!-- De: -->
<h1>TUI <span>Tecnologia</span></h1>

<!-- Para: -->
<img src="assets/images/logo.png" alt="Tui Tecnologia">
```

**Guia completo:** Veja `CUSTOMIZACAO.md`

---

## 🎯 Próximos Passos

### Antes de Publicar:

1. ✅ Ler `CHECKLIST.md` - Lista completa
2. 📧 Atualizar e-mails e telefones
3. 🎨 Adicionar logo e imagens
4. 🧪 Testar em mobile e desktop
5. 🔍 Validar HTML/CSS

### Para Publicar:

1. 📖 Ler `DEPLOY.md`
2. 🌐 Escolher hospedagem (Netlify = grátis!)
3. 🚀 Fazer deploy
4. 📊 Configurar Analytics

---

## 📚 Guias Disponíveis

| Arquivo | Descrição | Quando Usar |
|---------|-----------|-------------|
| **README.md** | Visão geral do projeto | Primeiro contato |
| **COMO-USAR.md** | Como abrir e testar | Agora mesmo! |
| **CUSTOMIZACAO.md** | Personalizar tudo | Antes de publicar |
| **GUIA-IMAGENS.md** | Otimizar imagens | Ao adicionar fotos |
| **INTEGRACOES.html** | Analytics, SEO | Após publicar |
| **CHECKLIST.md** | Verificar tudo | Antes do lançamento |
| **DEPLOY.md** | Hospedar o site | Quando publicar |

---

## 🎨 Recursos do Site

### ✨ Funcionalidades:

- ✅ 100% Responsivo (mobile-first)
- ✅ Menu hamburger para mobile
- ✅ Filtros de produtos funcionais
- ✅ Formulário com validação
- ✅ Máscara de telefone automática
- ✅ Animações suaves
- ✅ Scroll suave para âncoras
- ✅ SEO otimizado
- ✅ Acessível (ARIA labels)

### 📦 Produtos Incluídos:

**Pessoais:**
1. Kaspersky Standard
2. Kaspersky Plus (⭐ Mais Popular)
3. Kaspersky Premium

**Empresariais:**
4. Small Office Security
5. Endpoint Security
6. Security for Mail Server
7. Security for Storage

Cada produto com:
- Descrição completa
- Lista de recursos
- Preços por dispositivo
- Botão de cotação

---

## 🛠️ Tecnologias

- **HTML5** - Semântico e acessível
- **CSS3** - Variáveis, Grid, Flexbox, Animações
- **JavaScript** - Vanilla JS (sem frameworks)
- **Font Awesome 6.4** - Ícones (via CDN)

**Sem dependências!** Funciona offline (exceto ícones).

---

## 💡 Dicas Rápidas

### Editar Textos:
Use busca (Ctrl+F) nos arquivos HTML para encontrar e substituir textos rapidamente.

### Adicionar Produto:
Copie um `.product-detail-card` em `produtos.html` e personalize.

### Mudar Ícone:
Acesse https://fontawesome.com/icons, escolha o ícone, copie a classe.

### Testar Formulário:
Configure Formspree ou Netlify Forms (ver `INTEGRACOES.html`).

---

## ❓ FAQ Rápido

**P: Como adiciono meu logo?**
R: Veja seção "Adicionar Logo" em `CUSTOMIZACAO.md`

**P: O formulário funciona?**
R: Apenas validação. Configure backend (ver `INTEGRACOES.html`)

**P: Como publico gratuitamente?**
R: Use Netlify! Veja `DEPLOY.md` para tutorial completo

**P: Preciso de servidor?**
R: Não! É site estático. Qualquer hospedagem serve.

**P: Posso adicionar mais páginas?**
R: Sim! Copie estrutura de uma página existente.

**P: Como otimizo imagens?**
R: Use TinyPNG. Veja `GUIA-IMAGENS.md`

---

## 🎯 Objetivos por Dia

### Dia 1 - Explorar
- ✅ Abrir o site localmente
- ✅ Navegar por todas as páginas
- ✅ Testar em mobile e desktop
- ✅ Ler README.md

### Dia 2 - Personalizar
- ⬜ Atualizar informações de contato
- ⬜ Mudar cores (se desejar)
- ⬜ Adicionar logo
- ⬜ Revisar textos

### Dia 3 - Otimizar
- ⬜ Adicionar imagens
- ⬜ Otimizar imagens
- ⬜ Testar performance
- ⬜ Validar HTML/CSS

### Dia 4 - Publicar
- ⬜ Seguir CHECKLIST.md
- ⬜ Escolher hospedagem
- ⬜ Fazer deploy
- ⬜ Configurar domínio (opcional)

### Dia 5 - Promover
- ⬜ Instalar Analytics
- ⬜ Cadastrar no Google
- ⬜ Divulgar nas redes
- ⬜ Coletar feedback

---

## 🆘 Precisa de Ajuda?

### Recursos:
- 📖 Leia a documentação completa (7 arquivos .md)
- 💬 Comentários no código explicam tudo
- 🔍 Use Ctrl+F para buscar no código

### Comunidades:
- Stack Overflow (perguntas técnicas)
- GitHub Discussions (se estiver no GitHub)
- DevMedia / Tableless (português)

---

## ✅ Checklist Inicial

Antes de começar a personalizar:

- [ ] Li este arquivo (INICIO-RAPIDO.md)
- [ ] Abri o site no navegador
- [ ] Testei todas as páginas
- [ ] Testei em mobile (F12)
- [ ] Tenho as informações para atualizar (e-mail, telefone, etc.)
- [ ] Tenho logo da empresa (ou vou criar)
- [ ] Li o CHECKLIST.md
- [ ] Escolhi onde vou hospedar

---

## 🎉 Está Pronto!

O site está 100% funcional e pronto para ser personalizado!

**Seu próximo passo:** Leia `CUSTOMIZACAO.md` para começar a editar.

**Boa sorte com o projeto! 🚀**

---

**Projeto:** Tui Tecnologia Website  
**Criado em:** 15/04/2026  
**Arquivos:** 19 | **Tamanho:** ~171 KB  
**Status:** ✅ Pronto para Produção
