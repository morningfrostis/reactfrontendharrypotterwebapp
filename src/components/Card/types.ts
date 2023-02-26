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
  type?: "list" | "details";
<<<<<<< HEAD
=======
  spellId?: string;
  spellsName?: string;
  description?: string;
  studentsId?:string
>>>>>>> e739a6eb800b6d4e5ddfce252855a41d11e67802
};
