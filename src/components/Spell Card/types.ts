import { ReactNode } from "react";

export type Props = {
  onClick: (id: string) => void;
  spellId: string;
  name?: string;
  description?: string;
};
