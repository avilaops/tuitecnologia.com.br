export type Plano = {
  slug: string;
  nome: string;
  chamada: string;
  /** Sem valor publicado: o orcamento e feito depois do diagnostico. */
  precoRotulo: string;
  precoNota: string;
  inclui: readonly string[];
  /** O limite que faz o cliente perceber onde este plano para. */
  limite?: string;
  destaque?: boolean;
  cta: string;
};

/**
 * Tres planos com ancoragem: o Essencial deixa claro onde ele para, o Gestão
 * resolve de verdade (e e o que queremos vender), e o Estratégico ancora o
 * valor por cima. Nenhum publica preco — o orcamento sai depois do diagnostico.
 */
export const planos: readonly Plano[] = [
  {
    slug: "essencial",
    nome: "Essencial",
    chamada: "Para quem precisa de um técnico de confiança quando algo quebra.",
    precoRotulo: "Sob consulta",
    precoNota: "Orçamento por chamado",
    inclui: [
      "Suporte técnico sob demanda",
      "Atendimento remoto em horário comercial",
      "Licenciamento de antivírus e Windows",
      "Orientação pontual de infraestrutura",
    ],
    limite:
      "Atendimento reativo: agimos quando o problema aparece, sem acompanhamento contínuo nem plano de evolução.",
    cta: "Solicitar orçamento",
  },
  {
    slug: "gestao",
    nome: "Gestão",
    chamada:
      "A TI da empresa acompanhada de perto, com automação entregue e problema resolvido antes de virar parada.",
    precoRotulo: "Sob consulta",
    precoNota: "Mensalidade definida após o diagnóstico",
    inclui: [
      "Tudo do Essencial, com prioridade no atendimento",
      "Gestão contínua do parque e dos contratos",
      "Automação de processos com n8n",
      "Monitoramento, backup verificado e resposta a incidentes",
      "Adequação à LGPD",
      "Reunião mensal com indicadores e plano do próximo mês",
    ],
    destaque: true,
    cta: "Agendar diagnóstico",
  },
  {
    slug: "estrategico",
    nome: "Estratégico",
    chamada:
      "Direção de tecnologia dedicada, para quem trata TI como parte da estratégia do negócio.",
    precoRotulo: "Sob consulta",
    precoNota: "Contrato anual, escopo dedicado",
    inclui: [
      "Tudo do Gestão, com SLA acordado em contrato",
      "CTO as a Service: direção de tecnologia dedicada",
      "Plano diretor de TI e orçamento anual",
      "Desenvolvimento de sistema sob medida incluído",
      "Integração entre ERP, e-commerce e automações",
      "Acompanhamento executivo e apoio em auditoria",
    ],
    cta: "Falar sobre o projeto",
  },
] as const;

/**
 * As tres formas de pagamento ficam sempre visiveis: o cliente escolhe a que
 * preferir, em vez de descobrir no fim que a dele nao e aceita.
 */
export const formasDePagamento = [
  { nome: "PayPal", detalhe: "Cartão internacional" },
  { nome: "Mercado Pago", detalhe: "Pix, cartão e boleto" },
  { nome: "Éfi", detalhe: "Pix e boleto bancário" },
] as const;
