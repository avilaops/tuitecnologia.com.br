import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Site institucional: todo o conteudo e conhecido no build, nao ha rota de API
// nem sessao. Cloudflare Pages publica o HTML estático da pasta out/.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // `export` nao roda o otimizador de imagem (ele depende de servidor).
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default createMDX({})(nextConfig);
