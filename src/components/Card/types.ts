import { ReactNode } from "react";

export type Props = {
  // type?: 'list' | 'details'
  onClick?: (id: string) => void;
  // children?: ReactNode
  name?: string;
  house?: string;
  image: string;
  id?: string;
  species?: string;
  wizard?: string;
  ancestry?: string;
  wand?: string;
  patronus?: string;
  actor?: string;
  type?: "listcharacters" | "liststudents" | "liststaff" | "details";
  spellId?: string;
  spellsName?: string;
  description?: string;
  studentsId?: string;
};
