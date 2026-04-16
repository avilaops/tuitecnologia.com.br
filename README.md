# 🛡️ TUI Tecnologia - Website Oficial

Site oficial da **Tui Tecnologia**, revenda autorizada **Kaspersky** com página institucional e marketplace completo de produtos de segurança digital.

## 📋 Sobre o Projeto

Este é um site profissional e responsivo desenvolvido para a Tui Tecnologia, apresentando:

- **Página Institucional** - Informações sobre a empresa, missão, visão e valores
- **Marketplace de Produtos** - Catálogo completo de produtos Kaspersky (Standard, Plus, Premium e Soluções Empresariais)
- **Página de Contato** - Formulário de contato e informações de atendimento
- **Design Responsivo** - Otimizado para desktop, tablet e mobile

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com variáveis CSS, Grid e Flexbox
- **JavaScript** - Interatividade e funcionalidades dinâmicas
- **Font Awesome** - Ícones profissionais

## 📁 Estrutura do Projeto

```
Tui/
│
├── index.html           # Página principal
├── produtos.html        # Marketplace de produtos
├── sobre.html          # Página institucional
├── contato.html        # Página de contato
│
├── css/
│   └── styles.css      # Estilos globais
│
└── js/
    └── main.js         # Funcionalidades JavaScript
```

## 🎨 Recursos e Funcionalidades

### Página Principal (index.html)
- Hero section com chamada para ação
- Destaque de diferenciais da empresa
- Preview de produtos em destaque
- Seção de confiança com estatísticas
- Call-to-action para conversão

### Marketplace (produtos.html)
- Filtros por categoria (Pessoal/Empresarial)
- Produtos detalhados com recursos
- Opções de preços por número de dispositivos
- Botões de solicitação de orçamento
- Badges de destaque (Mais Vendido, Premium, etc.)

**Produtos Disponíveis:**

#### Soluções Pessoais:
- **Kaspersky Standard** - Proteção essencial
- **Kaspersky Plus** - Proteção premium (Mais Popular)
- **Kaspersky Premium** - Máxima proteção

#### Soluções Empresariais:
- **Kaspersky Small Office Security**
- **Kaspersky Endpoint Security**
- **Kaspersky Security for Mail Server**
- **Kaspersky Security for Storage**

### Página Sobre (sobre.html)
- História e missão da empresa
- Missão, Visão e Valores
- Por que escolher a Tui Tecnologia
- Informações sobre parceria Kaspersky
- Compromissos com o cliente

### Página de Contato (contato.html)
- Formulário de contato funcional
- Validação de campos
- Máscara de telefone automática
- Informações de contato
- FAQ (Perguntas Frequentes)
- Integração com WhatsApp

## 🎯 Funcionalidades JavaScript

1. **Menu Mobile Responsivo**
   - Toggle de menu para dispositivos móveis
   - Fechamento automático ao clicar fora

2. **Filtros de Produtos**
   - Filtragem dinâmica por categoria
   - Animações de transição

3. **Formulário de Contato**
   - Validação de campos obrigatórios
   - Validação de e-mail
   - Máscara de telefone brasileiro
   - Mensagens de feedback

4. **Animações**
   - Fade-in ao scroll
   - Animações de hover
   - Transições suaves

5. **Scroll Suave**
   - Navegação suave para âncoras
   - Offset para header fixo

## 🎨 Paleta de Cores

```css
--primary-color: #006c67    /* Verde Tui */
--primary-dark: #004d49     /* Verde Escuro */
--secondary-color: #ff6b35  /* Laranja Destaque */
--accent-color: #ffd23f     /* Amarelo Acento */
--success-color: #25d366    /* Verde WhatsApp */
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## 🔧 Como Usar

1. **Abrir o site:**
   - Basta abrir o arquivo `index.html` em qualquer navegador moderno

2. **Navegação:**
   - Use o menu superior para navegar entre as páginas
   - No mobile, clique no ícone de menu (hambúrguer)

3. **Solicitar Orçamento:**
   - Clique em "Solicitar" em qualquer produto
   - Será redirecionado para a página de contato com o produto pré-selecionado

4. **Filtrar Produtos:**
   - Na página de produtos, use os filtros no topo
   - Escolha entre "Todos", "Pessoal" ou "Empresarial"

## 🌐 Deploy

Para fazer deploy do site, você pode usar:

- **GitHub Pages** - Hospedagem gratuita
- **Netlify** - Deploy automático
- **Vercel** - Hospedagem rápida
- **Hospedagem tradicional** - Upload via FTP

### Exemplo de deploy no GitHub Pages:

```bash
# 1. Criar repositório no GitHub
# 2. Fazer commit dos arquivos
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/tui-tecnologia.git
git push -u origin main

# 3. Configurar GitHub Pages nas configurações do repositório
```

## 📝 Personalização

### Alterar Cores:
Edite as variáveis CSS no arquivo `css/styles.css`:
```css
:root {
    --primary-color: #006c67;  /* Sua cor primária */
    --secondary-color: #ff6b35; /* Sua cor secundária */
}
```

### Alterar Informações de Contato:
Edite os arquivos HTML e atualize:
- Telefone
- E-mail
- Endereço
- Links de redes sociais

### Adicionar Produtos:
No arquivo `produtos.html`, copie e cole uma `.product-detail-card` e personalize.

## 🔒 Segurança

- Formulários incluem validação client-side
- Sanitização de inputs recomendada no backend
- HTTPS recomendado para produção
- Implementar CAPTCHA para evitar spam

## 📄 Licença

Este projeto foi desenvolvido para a **Tui Tecnologia**.

## 📞 Suporte

Para dúvidas ou suporte:
- **E-mail**: contato@tuitecnologia.com.br
- **Telefone**: (11) 0000-0000
- **WhatsApp**: [Clique aqui](https://wa.me/5511000000000)

---

**Desenvolvido com ❤️ para Tui Tecnologia**  
*Revenda Autorizada Kaspersky - Proteção Digital de Classe Mundial*
