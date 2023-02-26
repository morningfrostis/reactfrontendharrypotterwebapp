import { ReactNode } from "react";

export type Props = {
  onClick?: (id: string) => void;
  type?: "list" | "edit";
  spellId?: string;
  name?: string;
  description?: string;
};
