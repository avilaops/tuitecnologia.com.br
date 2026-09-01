import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";
import { servicos } from "@/data/servicos";

export function Footer() {
  const ano = 2026;

  return (
    <footer className="border-t border-[--color-line] bg-[--color-surface]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:--font-display] text-lg font-bold">
            TUI <span className="text-[--color-brand]">Tecnologia</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[--color-ink-muted]">
            Consultoria e gestão de TI para empresas. Cuidamos da tecnologia
            para que a sua equipe cuide do negócio.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[--color-ink]">
            Serviços
          </h2>
          <ul className="mt-4 space-y-2.5">
            {servicos.map((servico) => (
              <li key={servico.slug}>
                <Link
                  href={`/servicos/#${servico.slug}`}
                  className="text-sm text-[--color-ink-muted] transition-colors hover:text-[--color-brand-light]"
                >
                  {servico.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[--color-ink]">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/sobre/"
                className="text-sm text-[--color-ink-muted] transition-colors hover:text-[--color-brand-light]"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/kaspersky/"
                className="text-sm text-[--color-ink-muted] transition-colors hover:text-[--color-brand-light]"
              >
                Licenças Kaspersky
              </Link>
            </li>
            <li>
              <Link
                href="/contato/"
                className="text-sm text-[--color-ink-muted] transition-colors hover:text-[--color-brand-light]"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[--color-ink]">
            Contato
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-[--color-ink-muted]">
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-[--color-brand]" />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-[--color-brand-light]"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="shrink-0 text-[--color-brand]" />
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[--color-brand-light]"
              >
                {site.telefone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={15} className="shrink-0 text-[--color-brand]" />
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[--color-brand-light]"
              >
                {site.instagram}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="shrink-0 text-[--color-brand]" />
              Atendimento online e presencial
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[--color-line] px-6 py-6">
        <p className="mx-auto max-w-6xl text-center text-xs text-[--color-ink-muted]">
          © {ano} {site.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
