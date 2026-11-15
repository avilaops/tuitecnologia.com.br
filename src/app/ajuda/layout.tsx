import Link from "next/link";

export default function AjudaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[13rem_minmax(0,1fr)]">
      <nav aria-label="Guias de ajuda" className="flex flex-col gap-3 text-sm">
        <Link href="/ajuda/" className="font-semibold text-ink">Central de ajuda</Link>
        <Link href="/ajuda/automatizar-pedidos/" className="text-brand-light">Automação de pedidos</Link>
      </nav>
      <article className="doc-content min-w-0">{children}</article>
    </div>
  );
}
