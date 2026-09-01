import type { NextConfig } from "next";

// Site institucional: todo o conteudo e conhecido no build, nao ha rota de API
// nem sessao. `export` gera HTML estatico servido pelo Caddy no Hetzner — mais
// leve que manter um processo Node vivo so para entregar pagina pronta.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // `export` nao roda o otimizador de imagem (ele depende de servidor).
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
