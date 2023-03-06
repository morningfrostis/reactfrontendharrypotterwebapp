import { ReactNode } from "react";

export type Props = {
  onClick?: (id: string) => void;
  onClick2?: (id: string) => void;
  name?: string;
  email?: string;
  house?: string;
  image?: string;
  id?: string;
  species?: string;
  wizard?: string;
  ancestry?: string;
  wand?: string;
  patronus?: string;
  actor?: string;
  type?: "characters" | "students" | "staff" | "edit";
  spellId?: string;
  spellsName?: string;
  description?: string;
  studentsId?: string;
};
