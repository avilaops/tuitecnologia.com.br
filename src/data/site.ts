/**
 * Fonte unica de verdade do site.
 *
 * No site antigo cada um destes valores estava copiado em 15 arquivos HTML —
 * mudar o telefone exigia 15 edicoes, e o sitemap ja tinha divergido do menu.
 * Aqui muda em um lugar so.
 */

export const site = {
  nome: "TUI Tecnologia",
  dominio: "tuitecnologia.com.br",
  url: "https://tuitecnologia.com.br",
  descricao:
    "Consultoria e gestão de TI para empresas: estratégia, automação com IA, infraestrutura e adequação à LGPD.",
  responsavel: "Arthur Moretto",
  email: "tuitecnologia@gmail.com",
  telefone: "(17) 98815-1758",
  whatsapp: "5517988151758",
  instagram: "@tui_tecnologia",
  instagramUrl: "https://www.instagram.com/tui_tecnologia",
  gtmId: "GTM-5D7LVK8T",
} as const;

/** Monta o link do WhatsApp com a mensagem ja preenchida. */
export function whatsappUrl(mensagem?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

export const navegacao = [
  { href: "/", rotulo: "Início" },
  { href: "/servicos/", rotulo: "Serviços" },
  { href: "/sobre/", rotulo: "Sobre" },
  { href: "/kaspersky/", rotulo: "Kaspersky" },
  { href: "/contato/", rotulo: "Contato" },
] as const;
