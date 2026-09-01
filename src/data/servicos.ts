import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BriefcaseBusiness,
  ChartLine,
  Code2,
  Globe,
  Server,
} from "lucide-react";

export type Servico = {
  slug: string;
  titulo: string;
  resumo: string;
  itens: readonly string[];
  icone: LucideIcon;
  /** Consultoria e o carro-chefe: aparece primeiro e com destaque. */
  destaque?: boolean;
};

/**
 * Os seis servicos vieram do site antigo. A ordem mudou de proposito:
 * consultoria e gestao de TI passou a ser o primeiro card, porque e o negocio
 * principal — antes ela era a quinta de seis, atras de desenvolvimento web.
 */
export const servicos: readonly Servico[] = [
  {
    slug: "consultoria-gestao-ti",
    titulo: "Consultoria & Gestão de TI",
    resumo:
      "Estratégia e gestão de tecnologia para empresas que querem crescer sem que a TI vire um custo fora de controle.",
    itens: [
      "Diagnóstico e plano diretor de TI",
      "Redução de custo com licenças e contratos",
      "Adequação e orientação em LGPD",
      "Gestão de fornecedores e do parque de máquinas",
    ],
    icone: BriefcaseBusiness,
    destaque: true,
  },
  {
    slug: "ia-automacao",
    titulo: "IA & Automação",
    resumo:
      "Processos manuais viram fluxo automático. O que hoje ocupa uma pessoa inteira passa a rodar sozinho.",
    itens: [
      "Automação de fluxos com n8n",
      "Integração entre os sistemas que a empresa já usa",
      "Atendimento assistido por IA",
      "E-mail transacional e notificações",
    ],
    icone: Bot,
  },
  {
    slug: "infraestrutura-suporte",
    titulo: "Infraestrutura & Suporte",
    resumo:
      "Servidor, backup, rede e suporte técnico — a base que precisa funcionar todo dia sem alguém pensar nela.",
    itens: [
      "Suporte técnico especializado",
      "Servidores, backup e nuvem",
      "Licenciamento de antivírus e Windows",
      "Monitoramento e resposta a incidentes",
    ],
    icone: Server,
  },
  {
    slug: "desenvolvimento-software",
    titulo: "Desenvolvimento de Software",
    resumo:
      "Sistema sob medida quando a planilha e o software de prateleira já não dão conta do processo.",
    itens: [
      "Sistemas e painéis personalizados",
      "Integração com APIs e ERPs",
      "Relatórios e indicadores de gestão",
      "Manutenção e evolução contínua",
    ],
    icone: Code2,
  },
  {
    slug: "desenvolvimento-web",
    titulo: "Desenvolvimento Web",
    resumo:
      "Site profissional, rápido e medido — feito para gerar contato, não só para existir.",
    itens: [
      "Sites responsivos e otimizados",
      "SEO e rastreamento de conversão",
      "Hospedagem e e-mail corporativo",
      "Manutenção e evolução do conteúdo",
    ],
    icone: Globe,
  },
  {
    slug: "marketing-digital",
    titulo: "Marketing Digital",
    resumo:
      "Tráfego e presença digital com meta clara: trazer o cliente certo, com custo que fecha a conta.",
    itens: [
      "Gestão de tráfego pago",
      "SEO e otimização para buscadores",
      "Analytics e leitura de campanha",
      "Relatório mensal de resultado",
    ],
    icone: ChartLine,
  },
] as const;
