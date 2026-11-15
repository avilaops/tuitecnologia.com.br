"use client";

import { useState } from "react";

const horas = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });

export function SimuladorDePedidos({
  pedidosPorMes = 300,
  minutosPorPedido = 4,
}: {
  pedidosPorMes?: number;
  minutosPorPedido?: number;
}) {
  const [pedidos, setPedidos] = useState(pedidosPorMes);
  const [minutos, setMinutos] = useState(minutosPorPedido);
  const manual = (pedidos * minutos) / 60;
  const automatizado = manual * 0.25;
  const cenarios = [
    { nome: "Processo manual", valor: manual, cor: "bg-ink-muted" },
    { nome: "Com automação", valor: automatizado, cor: "bg-brand" },
  ];

  return (
    <section className="doc-panel space-y-5" aria-label="Simulador de tempo">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          Pedidos por mês <span>{pedidos}</span>
          <input className="accent-brand" type="range" min="0" max="2000" step="10"
            value={pedidos} onChange={(event) => setPedidos(event.currentTarget.valueAsNumber)} />
        </label>
        <label className="grid gap-2">
          Minutos por pedido <span>{minutos}</span>
          <input className="accent-brand" type="range" min="1" max="30"
            value={minutos} onChange={(event) => setMinutos(event.currentTarget.valueAsNumber)} />
        </label>
      </div>
      <dl className="space-y-3" aria-label="Horas mensais por cenário">
        {cenarios.map(({ nome, valor, cor }) => (
          <div key={nome}>
            <div className="flex justify-between gap-4">
              <dt>{nome}</dt><dd>{horas.format(valor)} h/mês</dd>
            </div>
            <div aria-hidden="true" className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
              <div className={`h-full rounded-full transition-[width] ${cor}`}
                style={{ width: `${manual ? (valor / manual) * 100 : 0}%` }} />
            </div>
          </div>
        ))}
      </dl>
      <p className="text-sm text-ink-muted">
        Cenário ilustrativo com redução de 75% no tempo por pedido.
      </p>
    </section>
  );
}
