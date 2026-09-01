import { Check } from "lucide-react";
import { servicos } from "@/data/servicos";
import { cn } from "@/lib/utils";

export function Servicos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="max-w-2xl">
        <h2 className="font-[family-name:--font-display] text-3xl font-bold tracking-tight sm:text-4xl">
          O que a TUI resolve
        </h2>
        <p className="mt-4 text-[--color-ink-muted]">
          Consultoria é o centro do trabalho. As outras frentes existem para
          executar o que o diagnóstico apontar.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicos.map((servico) => {
          const Icone = servico.icone;
          return (
            <article
              key={servico.slug}
              id={servico.slug}
              className={cn(
                "scroll-mt-24 rounded-2xl border p-7 transition-colors",
                servico.destaque
                  ? "border-[--color-brand]/40 bg-[--color-surface-2]"
                  : "border-[--color-line] bg-[--color-surface] hover:border-[--color-line-strong]",
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid size-10 place-items-center rounded-xl",
                    servico.destaque
                      ? "bg-[--color-brand] text-[#04122a]"
                      : "bg-[--color-brand]/10 text-[--color-brand-light]",
                  )}
                >
                  <Icone size={19} />
                </span>
                <h3 className="font-semibold leading-tight">{servico.titulo}</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[--color-ink-muted]">
                {servico.resumo}
              </p>

              <ul className="mt-5 space-y-2.5">
                {servico.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-[--color-brand]"
                    />
                    <span className="text-[--color-ink-muted]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
