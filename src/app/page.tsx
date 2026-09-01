import { Hero } from "@/components/Hero";
import { Servicos } from "@/components/Servicos";
import { Planos } from "@/components/Planos";
import { CtaFinal } from "@/components/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicos />
      <Planos />
      <CtaFinal />
    </>
  );
}
