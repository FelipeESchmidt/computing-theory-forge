import { TheoreticalMachines } from "./TheoreticalMachines";

export interface Product {
  id: number;
  name: string;
  description: string;
  path: string;
  cardsRender: (product: Product) => JSX.Element;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Theoretical Machine",
    description:
      "A machine that simulates the behavior of a deterministic finite automaton.",
    path: "/theoretical-machine",
    cardsRender: (product: Product) => <TheoreticalMachines product={product} />,
  },
];
