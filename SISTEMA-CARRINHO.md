# 🛒 Sistema de Carrinho de Compras - Tui Tecnologia

## Visão Geral

O site da Tui Tecnologia agora possui um **sistema completo de carrinho de compras** que permite aos clientes adicionar múltiplos produtos, visualizar um resumo do pedido e finalizar a compra via WhatsApp.

## Funcionalidades Implementadas

### ✅ 1. Ícone do Carrinho no Header
- Presente em **todas as páginas** do site
- Badge com contador de produtos (atualiza automaticamente)
- Clique no ícone redireciona para a página do carrinho

### ✅ 2. Página do Carrinho (`carrinho.html`)
- Listagem de todos os produtos adicionados
- Exibição de informações detalhadas:
  - Nome e descrição do produto
  - Preço promocional vs. preço antigo
  - Desconto aplicado
- Botão "Remover" para cada item
- Resumo do pedido com valores totais
- Botões de ação:
  - **Finalizar Pedido** (envia via WhatsApp)
  - **Continuar Comprando** (volta para produtos)

### ✅ 3. Sistema de Adição ao Carrinho
- Todos os produtos da página `produtos.html` possuem botão **"Adicionar ao Carrinho"**
- Validação automática de duplicidade (não permite adicionar o mesmo produto 2x)
- Notificações visuais ao adicionar/remover produtos

### ✅ 4. Armazenamento Local (localStorage)
- Carrinho persiste entre sessões do navegador
- Dados salvos automaticamente a cada alteração
- Carregamento automático ao abrir o site

### ✅ 5. Checkout via WhatsApp
- Geração automática de mensagem formatada com todos os produtos
- Cálculo de subtotal, desconto e total
- Redirecionamento direto para o WhatsApp da empresa

## Arquivos Criados/Modificados

### Novos Arquivos
1. **`carrinho.html`** - Página completa do carrinho (HTML + CSS inline)
2. **`js/cart.js`** - Toda a lógica do carrinho (350+ linhas)

### Arquivos Modificados
1. **`css/styles.css`** - Adicionado estilos para `.cart-icon` e `.cart-count`
2. **`produtos.html`** - Botões "Comprar Agora" substituídos por "Adicionar ao Carrinho"
3. **`index.html`** - Adicionado ícone do carrinho no header + script cart.js
4. **`sobre.html`** - Adicionado ícone do carrinho no header + script cart.js
5. **`contato.html`** - Adicionado ícone do carrinho no header + script cart.js
6. **`comparador.html`** - Adicionado ícone do carrinho no header + script cart.js
7. **`obrigado.html`** - Adicionado ícone do carrinho no header + script cart.js
8. **`404.html`** - Adicionado ícone do carrinho no header + script cart.js

## Como Funciona

### Fluxo do Usuário

1. **Navegação em Produtos**
   - Cliente acessa `produtos.html`
   - Visualiza os 7 produtos disponíveis
   - Clica em **"Adicionar ao Carrinho"** nos produtos desejados

2. **Visualização do Carrinho**
   - Badge no header mostra quantidade de itens
   - Clica no ícone do carrinho 🛒
   - Vê listagem completa com resumo financeiro

3. **Finalização da Compra**
   - Revisa produtos no carrinho
   - Clica em **"Finalizar Pedido"**
   - É redirecionado para WhatsApp com mensagem pré-formatada
   - Conversa com vendedor para fechar a compra

### Exemplo de Mensagem WhatsApp

```
*Pedido Tui Tecnologia*

*Produtos:*
1. Kaspersky Plus
   5 dispositivos - Proteção avançada
   R$ 117,90

2. Kaspersky Safe Kids
   1 conta - Controle parental completo
   R$ 44,90

*Subtotal:* R$ 267,80
*Desconto:* -R$ 105,00
*Total:* R$ 162,80

Gostaria de finalizar este pedido!
```

## Estrutura Técnica

### `cart.js` - Funções Principais

| Função | Descrição |
|--------|-----------|
| `loadCart()` | Carrega carrinho do localStorage na inicialização |
| `saveCart()` | Salva carrinho no localStorage e atualiza badge |
| `addToCart(productId)` | Adiciona produto ao carrinho (valida duplicidade) |
| `removeFromCart(productId)` | Remove produto do carrinho |
| `calculateTotals()` | Calcula subtotal, desconto e total |
| `renderCart()` | Renderiza página do carrinho dinamicamente |
| `checkout()` | Gera mensagem e redireciona para WhatsApp |
| `updateCartBadge()` | Atualiza contador no ícone do header |
| `showNotification(message, type)` | Exibe notificações visuais ao usuário |

### Catálogo de Produtos (`productCatalog`)

Todos os 7 produtos estão mapeados no objeto:

```javascript
{
    'standard': { name: 'Kaspersky Standard', price: 91.90, ... },
    'plus': { name: 'Kaspersky Plus', price: 117.90, ... },
    'premium': { name: 'Kaspersky Premium', price: 130.90, ... },
    'safekids': { name: 'Kaspersky Safe Kids', price: 44.90, ... },
    'vpn': { name: 'Kaspersky VPN', price: 79.90, ... },
    'password': { name: 'Password Manager', price: 61.90, ... },
    'smalloffice': { name: 'Small Office Security', price: 513.00, ... }
}
```

## Configuração Necessária

### ⚠️ IMPORTANTE: Atualizar Número do WhatsApp

Abra o arquivo `js/cart.js` e localize a **linha 203**:

```javascript
const whatsappNumber = '5511000000000'; // Update with real number
```

**Substitua** pelo número real da Tui Tecnologia no formato:
- `55` (código do Brasil)
- `11` (DDD)
- `9 dígitos` (número completo)

**Exemplo:**
```javascript
const whatsappNumber = '5511987654321'; // WhatsApp da Tui Tecnologia
```

## Recursos Visuais

### Notificações
- ✅ **Sucesso** (verde): Produto adicionado
- ℹ️ **Info** (azul): Produto removido
- ❌ **Erro** (vermelho): Produto já está no carrinho

### Animações
- Slide-in das notificações (da direita)
- Fade-in suave dos produtos no carrinho
- Transições nos botões e badges

### Responsividade
- Layout 2 colunas em desktop (itens + resumo)
- Layout 1 coluna em mobile/tablet
- Ícone do carrinho sempre visível no header

## Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ localStorage suportado em 100% dos navegadores atuais
- ✅ Mobile-friendly (iOS, Android)

## Próximas Melhorias Possíveis

1. ⭐ Cupons de desconto
2. ⭐ Quantidade de produtos (atualmente 1 unidade por produto)
3. ⭐ Carrinho abandonado (email de lembrete)
4. ⭐ Integração com gateway de pagamento
5. ⭐ Favoritos/Wishlist

## Segurança

- ✅ Dados armazenados apenas localmente (localStorage)
- ✅ Nenhuma informação sensível no carrinho
- ✅ Validação de produtos pelo ID
- ✅ Prevenção de duplicidade

---

**Desenvolvido para Tui Tecnologia** - Revenda Autorizada Kaspersky 🛡️
