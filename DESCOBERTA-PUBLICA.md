# Descoberta pública • origem HTML existente

A origem comercial atual é este repositório e o HTML estático da raiz, copiado para `_site` por `.github/workflows/pages.yml`. A árvore `src/` Next não é o site publicado e permanece fora desta alteração. O CNAME, mecanismo GitHub Pages, ações e condição que impede deploy em pull requests são preservados, assim como DNS e Jekyll.

O `index.html` declara Organization/WebSite com o nome já exibido `TUI Tecnologia`, URL canônica e `og-default.png`. A imagem respondeu 200 image/png e coincidiu por SHA-256 com a fonte. A marca do cabeçalho é tipográfica; nenhum arquivo de logo publicado foi confirmado, portanto `Organization.logo` não foi inventado. Não se acrescentam endereços, preços, avaliações, contatos ou serviços ao grafo.

Depois da geração textual existente, o CI usa o mesmo Core revisado `d5067bbbe3522f459367af3b58b4298324801f82`:

```sh
node .publicacao-texto/bin/publicar-descoberta.mjs --diretorio _site --origem https://tuitecnologia.com.br --excluir-prefixo /carrinho.html --excluir-prefixo /comparador.html --excluir-prefixo /obrigado.html --excluir-prefixo /INTEGRACOES.html
```

Carrinho, comparação personalizada, confirmação e instruções operacionais não entram no catálogo nem recebem injeção. Noindex e outras restrições do Core também continuam valendo. Os prefixos são URLs publicadas com `.html`; não há criação de aliases nem mudança de rotas.

O gerador central emite `/.well-known/ard.json`, catálogos de compatibilidade, link ARD e bootstrap WebMCP leve para páginas públicas indexáveis. As ferramentas leem o DOM e links públicos, sem valores de formulários, mensagens externas ou transações. Não há biblioteca de cliente duplicada. Os arquivos gerados entram no mesmo `_site` enviado pelo upload Pages existente; o publicador não altera robots nem DNS.

O upload inclui arquivos ocultos para preservar `.well-known`. `_site` contém somente os arquivos públicos copiados e gerados; o checkout do publicador permanece fora dele. Não se altera o mecanismo Pages ou Jekyll.

A validação executável pertence ao CI: copiar o site, instalar o publicador com scripts npm desativados, gerar o catálogo e conferir recursos/MIMEs e exclusões no artefato. Não houve build ou teste local do projeto. Depois do deploy aprovado, conferir o JSON-LD da home, catálogo e ferramentas com e sem API no domínio real. Para rollback, restaurar juntos workflow e marcação anteriores e republicar o artefato pelo mecanismo Pages existente.
