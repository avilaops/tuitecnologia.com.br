# 🚀 Como Abrir e Testar o Site - Tui Tecnologia

## 📂 Arquivos do Projeto

Você tem os seguintes arquivos:

```
Tui/
├── index.html              (Página Principal)
├── produtos.html           (Marketplace)
├── sobre.html             (Sobre a Empresa)
├── contato.html           (Página de Contato)
├── css/
│   └── styles.css         (Estilos)
├── js/
│   └── main.js            (JavaScript)
├── README.md              (Documentação)
├── CUSTOMIZACAO.md        (Guia de Personalização)
├── CHECKLIST.md           (Checklist de Lançamento)
└── INTEGRACOES.html       (Exemplos de Analytics)
```

## 🌐 OPÇÃO 1: Abrir Diretamente no Navegador

### Windows:
1. Navegue até a pasta `d:\Projetos\Tui`
2. Clique duas vezes em `index.html`
3. O site abrirá no seu navegador padrão

### Alternativa:
1. Abra seu navegador (Chrome, Firefox, Edge)
2. Pressione `Ctrl + O`
3. Navegue até `d:\Projetos\Tui\index.html`
4. Clique em "Abrir"

## 💻 OPÇÃO 2: Usar um Servidor Local (Recomendado)

### Por que usar servidor local?
- Simula ambiente real de hospedagem
- Evita problemas com CORS
- Melhor para testes de formulários
- URLs funcionam corretamente

### A) Usando Python (se instalado):

```bash
# Navegue até a pasta
cd d:\Projetos\Tui

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Abra no navegador: `http://localhost:8000`

### B) Usando Node.js (se instalado):

```bash
# Instale http-server globalmente (apenas uma vez)
npm install -g http-server

# Navegue até a pasta
cd d:\Projetos\Tui

# Inicie o servidor
http-server -p 8000
```

Abra no navegador: `http://localhost:8000`

### C) Usando PHP (se instalado):

```bash
# Navegue até a pasta
cd d:\Projetos\Tui

# Inicie o servidor
php -S localhost:8000
```

Abra no navegador: `http://localhost:8000`

### D) Usando Visual Studio Code:

1. Instale a extensão "Live Server"
2. Abra a pasta `Tui` no VS Code
3. Clique com botão direito em `index.html`
4. Selecione "Open with Live Server"

## 🧪 Testando o Site

### ✅ Checklist Rápido de Testes:

1. **Navegação**
   - [ ] Menu superior funciona
   - [ ] Menu mobile abre/fecha (redimensione o navegador)
   - [ ] Links entre páginas funcionam
   - [ ] Links do footer funcionam

2. **Página Principal (index.html)**
   - [ ] Hero section exibe corretamente
   - [ ] Cards de features aparecem
   - [ ] Produtos em destaque carregam
   - [ ] Botões respondem ao hover

3. **Marketplace (produtos.html)**
   - [ ] Filtros funcionam (clique em Todos/Pessoal/Empresarial)
   - [ ] Produtos aparecem/desaparecem
   - [ ] Botões de "Solicitar" funcionam
   - [ ] Animações ao scroll

4. **Sobre (sobre.html)**
   - [ ] Conteúdo carrega
   - [ ] Ícones aparecem
   - [ ] Layout responsivo

5. **Contato (contato.html)**
   - [ ] Formulário exibe corretamente
   - [ ] Validação funciona (tente enviar vazio)
   - [ ] Máscara de telefone funciona
   - [ ] FAQ exibe corretamente

6. **Responsividade**
   - [ ] Desktop (redimensione para 1920px)
   - [ ] Laptop (1366px)
   - [ ] Tablet (768px)
   - [ ] Mobile (375px)

### Como testar responsividade:

**Chrome/Edge:**
1. Pressione `F12`
2. Clique no ícone de dispositivos móveis (ou `Ctrl+Shift+M`)
3. Selecione diferentes tamanhos de tela

**Firefox:**
1. Pressione `F12`
2. Clique no ícone de design responsivo (ou `Ctrl+Shift+M`)
3. Teste diferentes resoluções

## 🐛 Resolução de Problemas

### Problema: Estilos não carregam
**Solução:** Verifique se o arquivo `css/styles.css` existe

### Problema: JavaScript não funciona
**Solução:** Verifique se o arquivo `js/main.js` existe

### Problema: Ícones não aparecem
**Solução:** Verifique conexão com internet (usa Font Awesome via CDN)

### Problema: Menu mobile não abre
**Solução:** 
1. Abra o Console (F12 > Console)
2. Verifique se há erros em vermelho
3. Certifique-se que está em modo mobile

### Problema: Links não funcionam
**Solução:** 
1. Use um servidor local (veja opções acima)
2. Ou use caminhos relativos nos links

## 📱 Testando em Dispositivos Reais

### Android:
1. Configure servidor local (use seu IP)
2. No celular, acesse: `http://SEU_IP:8000`
3. Para descobrir seu IP: `ipconfig` (Windows) ou `ifconfig` (Linux/Mac)

### iPhone:
1. Mesma configuração do Android
2. Certifique-se que está na mesma rede Wi-Fi

## 🚀 Próximos Passos

### 1. Personalizar o Site
Consulte `CUSTOMIZACAO.md` para:
- Alterar cores
- Mudar textos
- Adicionar logo
- Atualizar contatos

### 2. Preparar para Produção
Consulte `CHECKLIST.md` para:
- Verificar todos os itens antes do lançamento
- Configurar domínio
- Instalar certificado SSL
- Adicionar analytics

### 3. Fazer Deploy
Opções de hospedagem:

**Gratuitas:**
- Netlify (recomendado)
- Vercel
- GitHub Pages
- Render

**Pagas:**
- Hostinger
- Umbler
- HostGator
- Kinghost

## 📊 Ferramentas de Teste Úteis

### Performance:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

### Validação:
- W3C HTML Validator
- W3C CSS Validator
- Link Checker

### Acessibilidade:
- WAVE
- aXe DevTools
- Lighthouse (Chrome)

## 💡 Dicas Finais

1. **Sempre teste em múltiplos navegadores**
   - Chrome ✓
   - Firefox ✓
   - Safari ✓
   - Edge ✓

2. **Teste em dispositivos reais quando possível**
   - Emuladores são úteis, mas não substituem testes reais

3. **Use DevTools para debugar**
   - Console para erros JavaScript
   - Network para problemas de carregamento
   - Elements para inspecionar CSS

4. **Faça backup antes de editar**
   - Sempre tenha uma cópia de segurança

## 🎉 Tudo Pronto!

Se conseguiu abrir o site e todas as funcionalidades estão funcionando, 
parabéns! O site da Tui Tecnologia está pronto para ser personalizado 
e publicado.

**Próximo passo:** Leia `CUSTOMIZACAO.md` para personalizar o site 
com suas informações.

---

**Precisa de ajuda?** 
Verifique os comentários no código ou consulte a documentação!
