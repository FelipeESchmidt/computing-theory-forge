import { languages, LanguageType } from "@assets/languages";

import { TheoreticalMachines } from "./TheoreticalMachines";

export interface Product {
  id: number;
  name: string;
  description: string;
  path: string;
  cardsRender: (product: Product) => JSX.Element;
}

export const getProducts = (texts: LanguageType = languages.BR): Product[] => [
  {
    id: 1,
    name: texts.theoreticalMachine.title,
    description: texts.theoreticalMachine.description,
    path: "/theoretical-machine",
    cardsRender: (product: Product) => <TheoreticalMachines product={product} />,
  },
];
