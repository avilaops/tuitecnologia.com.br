import Link from "next/link";
import { cn } from "@/lib/utils";

type Variante = "primario" | "secundario" | "whatsapp";

const variantes: Record<Variante, string> = {
  primario:
    "bg-[--color-brand] text-[#04122a] hover:bg-[--color-brand-light] font-semibold",
  secundario:
    "border border-[--color-line-strong] text-[--color-ink] hover:border-[--color-brand] hover:text-[--color-brand-light]",
  whatsapp: "bg-[#25D366] text-[#04122a] hover:bg-[#1fbb59] font-semibold",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: Variante;
  className?: string;
  externo?: boolean;
};

export function Button({
  href,
  children,
  variante = "primario",
  className,
  externo = false,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm transition-colors",
    variantes[variante],
    className,
  );

  if (externo) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
