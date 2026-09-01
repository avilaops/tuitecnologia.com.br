import type { Metadata } from "next";
import { CtaFinal } from "@/components/CtaFinal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: `A ${site.nome} cuida da tecnologia de empresas que precisam de TI confiável, sem manter um time interno.`,
  alternates: { canonical: "https://tuitecnologia.com.br/sobre/" },
};

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-[--color-line]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="font-[family-name:--font-display] text-4xl font-bold tracking-tight sm:text-5xl">
            Sobre a TUI
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="space-y-6 text-lg leading-relaxed text-[--color-ink-muted]">
          <p>
            A {site.nome} nasceu para resolver um problema comum na pequena e
            média empresa: tecnologia é essencial para operar, mas raramente
            existe alguém dedicado a cuidar dela. O resultado costuma ser o
            mesmo — sistemas que ninguém entende, backup que ninguém testou e
            socorro contratado às pressas quando algo para.
          </p>
          <p>
            Nosso trabalho é assumir essa responsabilidade. Entramos com
            diagnóstico, organizamos o que existe, automatizamos o que é
            repetitivo e acompanhamos a operação de perto — para que a decisão
            de tecnologia deixe de ser reação e passe a ser plano.
          </p>
          <p>
            Atuamos em toda a cadeia: consultoria e gestão, automação com IA,
            infraestrutura e suporte, desenvolvimento de software e web, e
            marketing digital. Também somos revenda autorizada Kaspersky, o que
            nos permite licenciar a proteção do parque junto com o restante do
            contrato.
          </p>
        </div>

        <dl className="mt-14 grid gap-8 border-t border-[--color-line] pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-3xl font-bold text-[--color-brand]">6</dt>
            <dd className="mt-1 text-sm text-[--color-ink-muted]">
              frentes de atuação
            </dd>
          </div>
          <div>
            <dt className="text-3xl font-bold text-[--color-brand]">
              Autorizada
            </dt>
            <dd className="mt-1 text-sm text-[--color-ink-muted]">
              revenda oficial Kaspersky
            </dd>
          </div>
          <div>
            <dt className="text-3xl font-bold text-[--color-brand]">
              {site.responsavel.split(" ")[0]}
            </dt>
            <dd className="mt-1 text-sm text-[--color-ink-muted]">
              atendimento direto com o responsável
            </dd>
          </div>
        </dl>
      </section>

      <CtaFinal />
    </>
  );
}
