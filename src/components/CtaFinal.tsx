import { Button } from "@/components/ui/Button";
import { site, whatsappUrl } from "@/data/site";

export function CtaFinal() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="rounded-3xl border border-[--color-line-strong] bg-[--color-surface-2] px-8 py-14 text-center sm:px-14">
        <h2 className="font-[family-name:--font-display] text-3xl font-bold tracking-tight sm:text-4xl">
          Vamos olhar a TI da sua empresa juntos?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[--color-ink-muted]">
          O diagnóstico inicial não tem custo. Você sai dele com o mapa do que
          está funcionando, do que é risco e do que dá para automatizar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contato/">Agendar diagnóstico</Button>
          <Button
            href={whatsappUrl(
              `Olá! Vim pelo site da ${site.nome} e quero agendar um diagnóstico de TI.`,
            )}
            variante="whatsapp"
            externo
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
