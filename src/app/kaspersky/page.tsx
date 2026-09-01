import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatarBRL, produtosKaspersky } from "@/data/kaspersky";
import { formasDePagamento } from "@/data/planos";
import { site, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Licenças Kaspersky",
  description:
    "Revenda autorizada Kaspersky: licenças originais com atendimento consultivo e suporte de quem cuida da sua TI.",
  alternates: { canonical: "https://tuitecnologia.com.br/kaspersky/" },
};

export default function KasperskyPage() {
  return (
    <>
      <section className="border-b border-[--color-line]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-[--color-line-strong] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[--color-brand-light]">
            <BadgeCheck size={14} />
            Revenda autorizada
          </p>
          <h1 className="mt-6 font-[family-name:--font-display] text-4xl font-bold tracking-tight sm:text-5xl">
            Licenças Kaspersky
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[--color-ink-muted]">
            Licenças originais, com nota fiscal e instalação orientada. Para
            clientes de consultoria, o licenciamento entra junto do contrato de
            gestão.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {produtosKaspersky.map((produto) => (
            <article
              key={produto.slug}
              className={cn(
                "flex flex-col rounded-2xl border p-7",
                produto.popular
                  ? "border-[--color-brand] bg-[--color-surface-2]"
                  : "border-[--color-line] bg-[--color-surface]",
              )}
            >
              {produto.popular && (
                <span className="mb-3 w-fit rounded-full bg-[--color-brand] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#04122a]">
                  Mais vendido
                </span>
              )}
              <h2 className="font-semibold leading-tight">{produto.nome}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[--color-ink-muted]">
                {produto.descricao}
              </p>

              <div className="mt-6">
                <p className="text-xs text-[--color-ink-muted] line-through">
                  {formatarBRL(produto.precoDe)}
                </p>
                <p className="text-2xl font-bold tracking-tight">
                  {formatarBRL(produto.precoPor)}
                  <span className="ml-1 text-sm font-normal text-[--color-ink-muted]">
                    /ano
                  </span>
                </p>
                <p className="mt-1 text-xs text-[--color-ink-muted]">
                  Renovação: {produto.renovacao}
                </p>
              </div>

              <Button
                href={whatsappUrl(
                  `Olá! Vim pelo site da ${site.nome} e quero comprar o ${produto.nome}.`,
                )}
                variante={produto.popular ? "primario" : "secundario"}
                className="mt-6 w-full"
                externo
              >
                Comprar pelo WhatsApp
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
      </section>
    </>
  );
}
