import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * Gerado a partir das rotas reais. No site antigo o sitemap.xml era escrito a
 * mao e ja tinha divergido: listava 8 URLs para 15 paginas publicadas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    { caminho: "/", prioridade: 1 },
    { caminho: "/servicos/", prioridade: 0.9 },
    { caminho: "/contato/", prioridade: 0.8 },
    { caminho: "/kaspersky/", prioridade: 0.7 },
    { caminho: "/sobre/", prioridade: 0.6 },
  ];

  return rotas.map(({ caminho, prioridade }) => ({
    url: `${site.url}${caminho}`,
    changeFrequency: "monthly" as const,
    priority: prioridade,
  }));
}
