# 📧 Como Configurar o Backend do Formulário

O formulário de contato está configurado com **dois modos de funcionamento**:

---

## 🚀 Modo Atual: WhatsApp Direct (Ativo)

**Status:** ✅ **Funcionando agora**

O formulário redireciona automaticamente para o WhatsApp com a mensagem preenchida.

### Como funciona:
1. Cliente preenche o formulário
2. Clica em "Enviar Mensagem"
3. É redirecionado para WhatsApp
4. Mensagem já vem formatada e pronta

### ⚙️ Configuração Necessária:

Edite o arquivo `js/main.js` na linha 135:

```javascript
const whatsappNumber = '5511000000000'; // ← TROCAR AQUI
```

**Formato do número:**
- `55` = Código do Brasil
- `11` = DDD (ex: 11 para São Paulo)
- `000000000` = Número com 9 dígitos

**Exemplo:**
- Número: (11) 99999-8888
- Código: `5511999998888`

---

## 📮 Modo Alternativo: Formspree (Opcional)

**Status:** ⬜ **Pronto para ativar**

Formspree envia mensagens direto para seu email.

### Vantagens:
- ✅ Mensagens chegam direto no email
- ✅ Histórico organizado
- ✅ Mais profissional
- ✅ Grátis até 50 mensagens/mês

### Como Ativar:

#### Passo 1: Criar Conta no Formspree
1. Acesse: https://formspree.io/
2. Clique em "Get Started"
3. Crie conta gratuita
4. Verifique seu email

#### Passo 2: Criar um Form
1. No dashboard, clique em "+ New Form"
2. Nome do form: "Contato Tui Tecnologia"
3. Email de destino: seu@email.com
4. Copie o **Form ID** (algo como `xabc1234`)

#### Passo 3: Atualizar o Site
Edite o arquivo `contato.html` na linha 52:

**Antes:**
```html
<!-- <form id="contactForm" class="contact-form" action="https://formspree.io/f/SEU_FORM_ID" method="POST"> -->
<form id="contactForm" class="contact-form">
```

**Depois:**
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/xabc1234" method="POST">
<!-- <form id="contactForm" class="contact-form"> -->
```

Substitua `xabc1234` pelo seu Form ID real.

#### Passo 4: Configurar Formspree (Opcional)
No dashboard do Formspree:
- ✅ Habilitar confirmação por email
- ✅ Configurar mensagem de sucesso
- ✅ Adicionar redirecionamento pós-envio
- ✅ Configurar notificações

---

## 🎯 Comparação

| Recurso | WhatsApp Direct | Formspree |
|---------|----------------|-----------|
| **Custo** | Grátis | Grátis (até 50/mês) |
| **Configuração** | 1 min | 5 min |
| **Recebimento** | WhatsApp | Email |
| **Histórico** | Chat WhatsApp | Dashboard |
| **Profissional** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Velocidade** | Instantâneo | Instantâneo |
| **Spam Filter** | Não | Sim |

---

## 💡 Recomendação

### Para Começar Rápido:
✅ **Use WhatsApp Direct**
- Só precisa trocar o número
- Funciona imediatamente
- Você recebe no WhatsApp

### Para Profissionalismo:
✅ **Migre para Formspree**
- Crie conta (5 min)
- Configure o form
- Receba no email
- Mantenha histórico organizado

### Solução Híbrida (Melhor):
✅ **Use os Dois!**
1. Configure Formspree para email
2. Mantenha WhatsApp como backup
3. Cliente escolhe como prefere contatar

---

## 🔧 Teste do Formulário

### Checklist de Testes:
- [ ] Abra `contato.html` no navegador
- [ ] Preencha o formulário completo
- [ ] Clique em "Enviar Mensagem"
- [ ] Verifique se abre WhatsApp (modo atual)
- [ ] Confira se a mensagem está formatada
- [ ] Teste com campos vazios (deve dar erro)
- [ ] Teste com email inválido (deve dar erro)

---

## 🐛 Solução de Problemas

### WhatsApp não abre:
- ✅ Verificou o número no `main.js`?
- ✅ Número está no formato correto (5511999998888)?
- ✅ WhatsApp instalado no celular/PC?

### Formspree não funciona:
- ✅ Form ID está correto?
- ✅ Descomentou a linha action?
- ✅ Email verificado no Formspree?
- ✅ Não excedeu 50 envios/mês?

### Formulário não valida:
- ✅ JavaScript está carregando?
- ✅ Console do navegador mostra erros?
- ✅ Arquivo `main.js` foi atualizado?

---

## 📊 Monitoramento

### WhatsApp Direct:
- Mensagens chegam no chat
- Organize com etiquetas/pastas
- Use WhatsApp Business para melhor gestão

### Formspree:
- Dashboard: https://formspree.io/forms
- Visualize todas as mensagens
- Exportar CSV
- Integração com Zapier, Google Sheets, etc.

---

## 🚀 Próximos Passos

Após configurar o formulário:

1. **Teste completo** em diferentes dispositivos
2. **Configure autoresposta** (email de confirmação)
3. **Adicione Google Analytics** para tracking
4. **Considere ReCAPTCHA** para evitar spam
5. **Crie template de resposta** padrão

---

**Última Atualização:** 15/04/2026  
**Status:** ✅ WhatsApp Ativo | ⬜ Formspree Pendente  
**Dificuldade:** ⭐ Fácil (1 a 5 min)
