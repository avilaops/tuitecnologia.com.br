"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navegacao, site, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[--color-line] bg-[--color-canvas]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-[family-name:--font-display] text-xl font-bold tracking-tight">
            TUI <span className="text-[--color-brand]">Tecnologia</span>
          </span>
          <span className="mt-0.5 text-[11px] uppercase tracking-widest text-[--color-ink-muted]">
            Consultoria e Gestão de TI
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navegacao.map((item) => {
            const ativo =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors",
                    ativo
                      ? "text-[--color-brand-light]"
                      : "text-[--color-ink-muted] hover:text-[--color-ink]",
                  )}
                >
                  {item.rotulo}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={whatsappUrl(
                `Olá! Vim pelo site da ${site.nome} e quero falar sobre consultoria de TI.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[--color-brand] px-4 py-2 text-sm font-semibold text-[#04122a] transition-colors hover:bg-[--color-brand-light]"
            >
              Falar com especialista
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="md:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {aberto && (
        <ul className="border-t border-[--color-line] px-6 py-4 md:hidden">
          {navegacao.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setAberto(false)}
                className="block py-2.5 text-sm text-[--color-ink-muted] hover:text-[--color-ink]"
              >
                {item.rotulo}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
