import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site, whatsappUrl } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[--color-line]">
      {/* Brilho de fundo puramente decorativo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[--color-brand]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[--color-line-strong] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-brand-light]">
            <ShieldCheck size={14} />
            Consultoria e gestão de TI
          </p>

          <h1 className="mt-6 font-[family-name:--font-display] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            A tecnologia da sua empresa,{" "}
            <span className="text-[--color-brand]">sob controle</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[--color-ink-muted]">
            A TUI assume a TI do seu negócio: infraestrutura que não para,
            processos automatizados e decisão de tecnologia com quem entende do
            assunto — sem depender de socorro de última hora.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contato/">
              Agendar diagnóstico
              <ArrowRight size={16} />
            </Button>
            <Button
              href={whatsappUrl(
                `Olá! Vim pelo site da ${site.nome} e quero falar sobre consultoria de TI.`,
              )}
              variante="secundario"
              externo
            >
              Falar no WhatsApp
            </Button>
          </div>

          <p className="mt-5 text-sm text-[--color-ink-muted]">
            Diagnóstico inicial sem compromisso. Você recebe o plano antes de
            fechar qualquer contrato.
          </p>
        </div>
      </div>
    </section>
  );
}
