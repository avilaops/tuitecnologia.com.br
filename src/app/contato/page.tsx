import type { Metadata } from "next";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a ${site.nome} para agendar um diagnóstico de TI sem compromisso.`,
  alternates: { canonical: "https://tuitecnologia.com.br/contato/" },
};

const mensagemPadrao = `Olá! Vim pelo site da ${site.nome} e quero agendar um diagnóstico de TI.`;

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="font-[family-name:--font-display] text-4xl font-bold tracking-tight sm:text-5xl">
        Falar com a TUI
      </h1>
      <p className="mt-4 text-lg text-[--color-ink-muted]">
        O diagnóstico inicial não tem custo. Escolha o canal que preferir — quem
        responde é {site.responsavel}, direto.
      </p>

      <div className="mt-12 space-y-4">
        <a
          href={whatsappUrl(mensagemPadrao)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-[--color-brand]/40 bg-[--color-surface-2] p-6 transition-colors hover:border-[--color-brand]"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-[#04122a]">
            <MessageCircle size={20} />
          </span>
          <span>
            <strong className="block font-semibold">WhatsApp</strong>
            <span className="text-sm text-[--color-ink-muted]">
              {site.telefone} — resposta em horário comercial
            </span>
          </span>
        </a>

        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Diagnóstico de TI")}`}
          className="flex items-center gap-4 rounded-2xl border border-[--color-line] bg-[--color-surface] p-6 transition-colors hover:border-[--color-line-strong]"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[--color-brand]/10 text-[--color-brand-light]">
            <Mail size={20} />
          </span>
          <span>
            <strong className="block font-semibold">E-mail</strong>
            <span className="text-sm text-[--color-ink-muted]">
              {site.email}
            </span>
          </span>
        </a>

        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-[--color-line] bg-[--color-surface] p-6 transition-colors hover:border-[--color-line-strong]"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[--color-brand]/10 text-[--color-brand-light]">
            <Instagram size={20} />
          </span>
          <span>
            <strong className="block font-semibold">Instagram</strong>
            <span className="text-sm text-[--color-ink-muted]">
              {site.instagram}
            </span>
          </span>
        </a>
      </div>

      <div className="mt-12 rounded-2xl border border-[--color-line] bg-[--color-surface] p-7">
        <h2 className="font-semibold">O que acontece depois do contato</h2>
        <ol className="mt-4 space-y-3 text-sm text-[--color-ink-muted]">
          <li>
            <strong className="text-[--color-ink]">1.</strong> Conversa inicial
            para entender a operação e o que está doendo hoje.
          </li>
          <li>
            <strong className="text-[--color-ink]">2.</strong> Diagnóstico do
            parque, dos sistemas e dos riscos — sem custo.
          </li>
          <li>
            <strong className="text-[--color-ink]">3.</strong> Proposta com
            escopo, plano recomendado e valor fechado.
          </li>
        </ol>
        <Button
          href={whatsappUrl(mensagemPadrao)}
          variante="whatsapp"
          className="mt-7"
          externo
        >
          Começar pelo WhatsApp
        </Button>
      </div>
    </section>
  );
}
