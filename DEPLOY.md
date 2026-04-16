# 🚀 Deploy e Hospedagem - Tui Tecnologia

Guia completo para publicar seu site na internet.

## 🌟 Opções de Hospedagem

### ⚡ GRATUITAS (Recomendadas para Começar)

#### 1. Netlify (⭐ MELHOR OPÇÃO)

**Vantagens:**
- Deploy automático via Git
- HTTPS gratuito
- CDN global
- Formulários funcionam
- Domínio próprio gratuito (.netlify.app)

**Como fazer:**

1. Acesse https://www.netlify.com/
2. Crie uma conta (pode usar GitHub)
3. Clique em "Add new site" > "Deploy manually"
4. Arraste a pasta `Tui` inteira
5. Site publicado instantaneamente!

**Via GitHub (Recomendado):**
```bash
# 1. Criar repositório no GitHub
# 2. No terminal:
cd d:\Projetos\Tui
git init
git add .
git commit -m "Site Tui Tecnologia"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/tui-tecnologia.git
git push -u origin main

# 3. No Netlify:
# - Import from Git
# - Conectar com GitHub
# - Escolher repositório
# - Deploy!
```

**Configurações importantes no Netlify:**
- Build command: (deixar vazio)
- Publish directory: (deixar vazio ou /)
- Configurar domínio personalizado (se tiver)

---

#### 2. Vercel

**Vantagens:**
- Ultra rápido
- Deploy automático
- Analytics gratuito
- Edge Network

**Como fazer:**

1. Acesse https://vercel.com/
2. Faça login com GitHub
3. Clique em "New Project"
4. Importe repositório do GitHub
5. Deploy automático!

---

#### 3. GitHub Pages

**Vantagens:**
- 100% gratuito
- Integrado com GitHub
- Versionamento incluso

**Como fazer:**

```bash
# 1. Criar repositório
cd d:\Projetos\Tui
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/tui-tecnologia.git
git push -u origin main

# 2. No GitHub:
# - Settings > Pages
# - Source: main branch
# - Save
```

Seu site estará em: `https://SEU_USUARIO.github.io/tui-tecnologia/`

---

#### 4. Render

**Vantagens:**
- Fácil de usar
- HTTPS automático
- Bom uptime

**Como fazer:**

1. Acesse https://render.com/
2. Sign up
3. New > Static Site
4. Conecte com GitHub
5. Deploy!

---

### 💰 PAGAS (Hospedagem Profissional)

#### 1. Hostinger (Mais Barata)

**Preço:** ~R$ 8/mês
- Domínio grátis no 1º ano
- SSL grátis
- E-mail profissional
- Suporte 24/7

**Site:** https://www.hostinger.com.br/

---

#### 2. Umbler

**Preço:** ~R$ 19/mês
- Hospedagem brasileira
- Suporte em português
- Deploy via Git

**Site:** https://www.umbler.com/

---

#### 3. HostGator

**Preço:** ~R$ 13/mês
- Conhecida e confiável
- cPanel fácil
- Construtor de sites incluso

**Site:** https://www.hostgator.com.br/

---

## 📝 Passo a Passo: Deploy Completo

### MÉTODO 1: Netlify (Arrasta e Solta)

1. **Preparar arquivos:**
   ```
   ✓ Verificar se todos os links estão funcionando
   ✓ Testar formulário
   ✓ Validar HTML/CSS
   ```

2. **Fazer upload:**
   - Acesse netlify.com
   - Arraste pasta `Tui`
   - Aguarde build
   - Site no ar!

3. **Configurar domínio (opcional):**
   - Domain settings
   - Add custom domain
   - Seguir instruções DNS

---

### MÉTODO 2: Hospedagem Tradicional (cPanel)

1. **Comprar hospedagem**
2. **Acessar cPanel**
3. **File Manager**
4. **Upload de arquivos:**
   - Fazer upload de todos os arquivos
   - Colocar na pasta `public_html`
5. **Verificar permissões (755 para pastas, 644 para arquivos)**
6. **Acessar domínio**

---

### MÉTODO 3: Via FTP

**Software recomendado:** FileZilla

1. **Instalar FileZilla:** https://filezilla-project.org/
2. **Conectar ao servidor:**
   - Host: ftp.seusite.com
   - Usuário: (fornecido pela hospedagem)
   - Senha: (fornecida pela hospedagem)
   - Porta: 21
3. **Upload:**
   - Selecionar todos os arquivos locais
   - Arrastar para pasta remota
   - Aguardar upload

---

## 🌐 Configurando Domínio Próprio

### Registradores de Domínio no Brasil:

1. **Registro.br** (domínios .br)
   - Mais barato para .br
   - R$ 40/ano
   - Site: https://registro.br/

2. **GoDaddy** (domínios internacionais)
   - .com, .net, .org
   - ~R$ 60/ano

3. **Hostinger** (domínio + hospedagem)
   - Pacote completo
   - Domínio grátis 1º ano

### Configurar DNS:

**Se usar Netlify/Vercel:**
```
A Record: @ → IP fornecido
CNAME: www → seu-site.netlify.app
```

**Se usar hospedagem tradicional:**
```
A Record: @ → IP do servidor
CNAME: www → seusite.com
```

---

## 📧 E-mail Profissional

### Opções:

1. **Google Workspace** (Pago - R$ 32/mês)
   - Gmail profissional
   - Drive ilimitado
   - Muito confiável

2. **Titan Email** (Hostinger - R$ 5/mês)
   - Barato
   - Interface simples

3. **Zoho Mail** (Grátis até 5 usuários)
   - Boa opção gratuita
   - 5GB por usuário

4. **Hospedagem inclui:**
   - Maioria das hospedagens oferece e-mail
   - Configurar via cPanel

**Configuração típica:**
```
E-mail: contato@tuitecnologia.com.br
SMTP: mail.tuitecnologia.com.br
IMAP: mail.tuitecnologia.com.br
```

---

## ✅ Checklist Pré-Deploy

Antes de publicar:

- [ ] Todos os links testados
- [ ] Informações de contato corretas
- [ ] Imagens otimizadas
- [ ] Formulário funcionando
- [ ] Site responsivo testado
- [ ] Sem erros no console (F12)
- [ ] Favicon adicionado
- [ ] robots.txt configurado
- [ ] sitemap.xml adicionado
- [ ] Analytics instalado
- [ ] Backup local criado

---

## 🔧 Configurações Pós-Deploy

### 1. Google Search Console
```
1. Acesse: https://search.google.com/search-console
2. Add property
3. Verificar domínio (meta tag ou DNS)
4. Enviar sitemap.xml
```

### 2. Google Analytics
```
1. Acesse: https://analytics.google.com/
2. Criar propriedade
3. Copiar código de rastreamento
4. Adicionar no <head> de todas as páginas
```

### 3. SSL (HTTPS)
- **Netlify/Vercel:** Automático ✓
- **Hospedagem paga:** Let's Encrypt via cPanel

### 4. Configurar E-mail de Formulário
- Se usar Netlify: Configurar notifications
- Se usar hospedagem: Configurar SMTP
- Alternativa: Usar Formspree (gratuito)

---

## 📊 Monitoramento

### Ferramentas Essenciais:

1. **Google Analytics** - Tráfego
2. **Google Search Console** - SEO
3. **Hotjar** - Comportamento do usuário
4. **UptimeRobot** - Monitorar se site está online

---

## 🚨 Solução de Problemas

### Site não carrega:
- Verificar se DNS propagou (até 48h)
- Limpar cache do navegador
- Verificar se arquivos foram enviados corretamente

### Imagens não aparecem:
- Verificar caminhos (sensível a maiúsculas/minúsculas)
- Verificar se arquivos foram enviados
- Checar permissões

### Formulário não envia:
- Configurar backend
- Usar Formspree/Netlify Forms
- Verificar console para erros

---

## 💡 Dicas Importantes

1. **Sempre faça backup antes de modificar**
2. **Use Git para versionamento**
3. **Teste em ambiente de staging primeiro**
4. **Monitore performance com PageSpeed**
5. **Configure redirecionamentos (www → não-www)**
6. **Ative compressão GZIP no servidor**
7. **Configure cache do navegador**

---

## 🎯 Próximos Passos Após Deploy

1. **SEO:**
   - Enviar sitemap ao Google
   - Cadastrar no Bing Webmaster
   - Otimizar meta descriptions

2. **Marketing:**
   - Criar Google My Business
   - Adicionar nas redes sociais
   - Email marketing

3. **Manutenção:**
   - Atualizar preços regularmente
   - Adicionar novos produtos
   - Publicar conteúdo (blog)

---

**Precisa de ajuda?** 
A maioria das hospedagens oferece suporte 24/7!

**Boa sorte com o lançamento! 🚀**
