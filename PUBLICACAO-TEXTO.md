# Publicação de texto • GitHub Pages

O workflow converte somente o HTML estático já copiado para _site. src/ Next.js não passa a ser publicado. O pacote motor-web é fixado por commit e roda antes do upload do artefato. publicacao-texto.json registra rotas e exclusões; llms.txt e links alternativos anunciam as representações.

404, carrinho e obrigado ficam fora pelo noindex existente. INTEGRACOES é material operacional; comparador depende da seleção do visitante. O _headers preparado no workflow os exclui da exportação textual, preservando o HTML original. Arquivos de ambiente ou tokens não são lidos nem copiados pelo novo passo.

GitHub Pages não interpreta _headers. No domínio comercial com proxy Cloudflare, regras de resposta específicas para .md/.mdx fornecem MIME e X-Robots-Tag noindex, follow. Esses cabeçalhos precisam ser conferidos em produção. O hostname técnico github.io não recebe essas regras. O sitemap continua destinado ao HTML.

Nenhum DNS, provedor, layout ou rastreador alterado. Rollback pelo artefato/commit anterior no workflow existente; as regras textuais não correspondem aos assets ou páginas HTML.
