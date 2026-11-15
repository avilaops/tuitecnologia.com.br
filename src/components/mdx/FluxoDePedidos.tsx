"use client";

import { useEffect, useId, useState } from "react";

const fluxo = `flowchart TD
  pedido["Pedido recebido"] entrada@--> validacao["Validação dos dados"]
  validacao -->|Dados completos| registro["Registro no sistema"]
  validacao -->|Dados incompletos| revisao["Revisão manual"]
  registro --> confirmacao["Confirmação enviada"]
  classDef movimento animate:true,animation:slow
  class entrada movimento`;

export function FluxoDePedidos() {
  const id = useId().replace(/[^a-zA-Z0-9-]/g, "-");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let ativo = true;
    async function renderizar() {
      const { default: mermaid } = await import("mermaid");
      if (!ativo) return;
      mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "dark" });
      const resultado = await mermaid.render(`pedidos-${id}`, fluxo);
      if (ativo) setSvg(resultado.svg);
    }
    void renderizar().catch(() => {
      // A descrição textual continua disponível se o diagrama falhar.
    });
    return () => { ativo = false; };
  }, [id]);

  return (
    <figure className="doc-panel">
      {svg && <div aria-hidden="true" className="overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: svg }} />}
      <figcaption className="text-sm text-ink-muted">
        Após o recebimento, pedidos com dados completos são registrados e confirmados.
        Pedidos com dados incompletos seguem para revisão manual.
      </figcaption>
    </figure>
  );
}
