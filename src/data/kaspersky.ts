export type ProdutoKaspersky = {
  slug: string;
  nome: string;
  descricao: string;
  precoDe: number;
  precoPor: number;
  renovacao: string;
  popular?: boolean;
};

/** Precos conferidos no catalogo do site anterior (produtos.html). */
export const produtosKaspersky: readonly ProdutoKaspersky[] = [
  {
    slug: "standard",
    nome: "Kaspersky Standard",
    descricao: "Proteção essencial contra vírus, ransomware e ataques online.",
    precoDe: 153.9,
    precoPor: 91.9,
    renovacao: "R$ 153,90/ano",
  },
  {
    slug: "plus",
    nome: "Kaspersky Plus",
    descricao:
      "Proteção avançada com firewall, controle parental e gerenciador de senhas.",
    precoDe: 197.9,
    precoPor: 117.9,
    renovacao: "R$ 197,90/ano",
    popular: true,
  },
  {
    slug: "premium",
    nome: "Kaspersky Premium",
    descricao:
      "Proteção máxima com VPN ilimitada e monitoramento de identidade.",
    precoDe: 219.9,
    precoPor: 130.9,
    renovacao: "R$ 219,90/ano",
  },
  {
    slug: "small-office",
    nome: "Kaspersky Small Office Security",
    descricao: "Proteção para pequenas empresas, servidores e estações.",
    precoDe: 570,
    precoPor: 513,
    renovacao: "Preço inicial para novos clientes",
  },
  {
    slug: "safe-kids",
    nome: "Kaspersky Safe Kids",
    descricao: "Controle parental e navegação segura para as crianças.",
    precoDe: 69.9,
    precoPor: 44.9,
    renovacao: "R$ 69,90/ano",
  },
  {
    slug: "vpn",
    nome: "Kaspersky VPN Secure Connection",
    descricao: "Conexão criptografada e navegação privada em qualquer rede.",
    precoDe: 119.9,
    precoPor: 79.9,
    renovacao: "R$ 119,90/ano",
  },
  {
    slug: "password-manager",
    nome: "Kaspersky Password Manager",
    descricao: "Cofre de senhas sincronizado entre todos os dispositivos.",
    precoDe: 64.9,
    precoPor: 61.9,
    renovacao: "R$ 64,90/ano",
  },
] as const;

export function formatarBRL(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
