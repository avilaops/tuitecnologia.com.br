import type { Metadata } from "next";
import { Servicos } from "@/components/Servicos";
import { Planos } from "@/components/Planos";
import { CtaFinal } from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Consultoria e gestão de TI, automação com IA, infraestrutura, software sob medida, desenvolvimento web e marketing digital.",
  alternates: { canonical: "https://tuitecnologia.com.br/servicos/" },
};

export default function ServicosPage() {
  return (
    <>
      <section className="border-b border-[--color-line]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="font-[family-name:--font-display] text-4xl font-bold tracking-tight sm:text-5xl">
            Serviços
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[--color-ink-muted]">
            Da decisão estratégica à execução técnica — com uma equipe só,
            respondendo por tudo.
          </p>
        </div>
      </section>
      <Servicos />
      <Planos />
      <CtaFinal />
    </>
  );
}
