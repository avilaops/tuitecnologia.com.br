import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formasDePagamento, planos } from "@/data/planos";
import { cn } from "@/lib/utils";

export function Planos() {
  return (
    <section
      id="planos"
      className="scroll-mt-20 border-y border-[--color-line] bg-[--color-surface]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:--font-display] text-3xl font-bold tracking-tight sm:text-4xl">
            Planos de atendimento
          </h2>
          <p className="mt-4 text-[--color-ink-muted]">
            Três formatos de trabalho. O orçamento sai depois do diagnóstico —
            cada empresa tem um parque, um risco e uma urgência diferentes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {planos.map((plano) => (
            <article
              key={plano.slug}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                plano.destaque
                  ? "border-[--color-brand] bg-[--color-surface-2] shadow-2xl shadow-black/40"
                  : "border-[--color-line] bg-[--color-canvas]",
              )}
            >
              {plano.destaque && (
                <span className="absolute -top-3 left-8 rounded-full bg-[--color-brand] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#04122a]">
                  Mais contratado
                </span>
              )}

              <h3 className="font-[family-name:--font-display] text-xl font-bold">
                {plano.nome}
              </h3>
              <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-[--color-ink-muted]">
                {plano.chamada}
              </p>

              <div className="mt-6 border-y border-[--color-line] py-5">
                <p className="text-2xl font-bold tracking-tight">
                  {plano.precoRotulo}
                </p>
                <p className="mt-1 text-xs text-[--color-ink-muted]">
                  {plano.precoNota}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plano.inclui.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={cn(
                        "mt-0.5 shrink-0",
                        plano.destaque
                          ? "text-[--color-brand]"
                          : "text-[--color-ink-muted]",
                      )}
                    />
                    <span className="text-[--color-ink-muted]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Deixa explicito onde o plano para, em vez de o cliente
                  descobrir depois de contratar. */}
              {plano.limite && (
                <p className="mt-6 flex items-start gap-2 rounded-lg border border-[--color-line] bg-[--color-surface] p-3 text-xs leading-relaxed text-[--color-ink-muted]">
                  <Info size={14} className="mt-0.5 shrink-0" />
                  {plano.limite}
                </p>
              )}

              <Button
                href="/contato/"
                variante={plano.destaque ? "primario" : "secundario"}
                className="mt-7 w-full"
              >
                {plano.cta}
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[--color-ink-muted]">
          <span>Formas de pagamento:</span>
          {formasDePagamento.map((forma, i) => (
            <span key={forma.nome} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true">·</span>}
              <span>
                <strong className="font-semibold text-[--color-ink]">
                  {forma.nome}
                </strong>{" "}
                <span className="text-xs">({forma.detalhe})</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
