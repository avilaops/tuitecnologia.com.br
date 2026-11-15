import { cp, writeFile } from "node:fs/promises";

// Mantém as URLs públicas e os recursos usados pelo site anterior.
const arquivosPublicos = [
  "BingSiteAuth.xml",
  "INTEGRACOES.html",
  "black-friday.html",
  "blog.html",
  "carrinho.html",
  "comparador.html",
  "contato.html",
  "css",
  "empresas.html",
  "js",
  "llms.txt",
  "manifest.json",
  "obrigado.html",
  "og-default.png",
  "produtos.html",
  "promocao-40-off.html",
  "servicos.html",
  "sobre.html",
  "tuitecnologia-indexnow-key-2026.txt",
  "voucher-uber.html",
];

await Promise.all(arquivosPublicos.map((arquivo) =>
  cp(arquivo, `out/${arquivo}`, { recursive: true }),
));

await writeFile("out/_headers", [
  "/INTEGRACOES.html",
  "  X-Robots-Tag: noindex",
  "/comparador.html",
  "  X-Robots-Tag: noindex",
  "",
].join("\n"));
