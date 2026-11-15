import type { MDXComponents } from "mdx/types";
import { SimuladorDePedidos } from "@/components/mdx/SimuladorDePedidos";
import { FluxoDePedidos } from "@/components/mdx/FluxoDePedidos";

const components = { SimuladorDePedidos, FluxoDePedidos } satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
